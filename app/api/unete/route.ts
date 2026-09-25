// Receives job applications from the Careers page. Every application is first
// saved as a Brevo contact (list "Candidatos") so the candidate's details are
// never lost, then forwarded with the CV attached to the recruiting inbox. If
// the email cannot be sent, an alert goes out to the firm right away.

import { esc, sendAlert, sendBrevoEmail } from "@/lib/brevo";
import { LIST_CANDIDATOS, registrar } from "@/lib/registro";

const MAX_BYTES = 4 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  if (String(form.get("company") ?? "").trim() !== "") {
    return Response.json({ ok: true });
  }

  const field = (k: string, max = 200) => String(form.get(k) ?? "").trim().slice(0, max);
  const name = field("name", 120);
  const email = field("email", 160).toLowerCase();
  const phone = field("phone", 40);
  const profile = field("profile", 80);
  const area = field("area", 120);
  const linkedin = field("linkedin", 200);
  const message = field("message", 1200);
  const lang = field("lang", 2);
  const consent = form.get("consent") === "on";
  const cv = form.get("cv");

  if (!name || !EMAIL_RE.test(email) || !consent || !(cv instanceof File)) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  if (cv.size === 0 || cv.size > MAX_BYTES || cv.type !== "application/pdf") {
    return Response.json({ ok: false, error: "file" }, { status: 400 });
  }
  const bytes = Buffer.from(await cv.arrayBuffer());
  if (bytes.subarray(0, 5).toString("latin1") !== "%PDF-") {
    return Response.json({ ok: false, error: "file" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const to = process.env.CAREERS_EMAIL || "info@cabinetlegal.com.do";
  const sender = process.env.BREVO_SENDER_EMAIL || "info@cabinetlegal.com.do";
  if (!apiKey) {
    console.error("Careers form: BREVO_API_KEY not configured");
    return Response.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  const safeName = name.replace(/[^\p{L}\p{N} ._-]/gu, "").slice(0, 60) || "candidato";
  const rows: [string, string][] = [
    ["Nombre", name],
    ["Correo", email],
    ["Teléfono", phone],
    ["Perfil", profile],
    ["Área de interés", area],
    ["LinkedIn", linkedin],
    ["Idioma del sitio", lang.toUpperCase()],
  ];
  const html = `<h2>Nueva candidatura: ${esc(name)}</h2>
<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
${rows.filter(([, v]) => v).map(([k, v]) => `<tr><td style="color:#5f6b76">${k}</td><td><b>${esc(v)}</b></td></tr>`).join("")}
</table>
${message ? `<p style="font-family:Arial,sans-serif;font-size:14px"><b>Mensaje:</b><br>${esc(message).replace(/\n/g, "<br>")}</p>` : ""}
<p style="font-family:Arial,sans-serif;font-size:12px;color:#8a939b">El candidato autorizó el tratamiento de sus datos para este proceso de selección.</p>`;

  // 1. Durable record first: the candidate's details survive even if the email fails.
  const summary = [
    `Perfil: ${profile || "-"}`,
    `Área: ${area || "-"}`,
    `Teléfono: ${phone || "-"}`,
    `LinkedIn: ${linkedin || "-"}`,
    message ? `Mensaje: ${message}` : "",
  ]
    .filter(Boolean)
    .join(" | ")
    .slice(0, 1800);
  const saved = await registrar(apiKey, {
    email,
    nombre: name,
    origen: "Carreras",
    detalle: `candidatura recibida (${profile || "perfil no indicado"}${area ? `, ${area}` : ""}), CV adjunto`,
    telefono: phone,
    idioma: lang,
    extra: { CANDIDATURA: summary },
    listIds: [LIST_CANDIDATOS],
  });

  // 2. Forward the application with the CV to the recruiting inbox.
  const subject = `Candidatura: ${name} (${profile || "perfil no indicado"})`;
  const sent = await sendBrevoEmail(apiKey, {
    sender: { name: "Cabinet Legal · Carreras", email: sender },
    to: [{ email: to }],
    replyTo: { email, name },
    subject,
    htmlContent: html,
    attachment: [{ name: `CV-${safeName}.pdf`, content: bytes.toString("base64") }],
    tags: ["careers"],
  });

  // 3. If the email did not go out, alert the firm with the candidate's details.
  if (!sent) {
    await registrar(apiKey, { email, nombre: name, origen: "Carreras", detalle: "ERROR: el correo de la candidatura no se pudo enviar a la firma" });
    await sendAlert(
      apiKey,
      `ALERTA: no se pudo enviar la candidatura de ${name}`,
      `<p>El formulario de Carreras recibió una candidatura, pero el correo a ${esc(to)} no se pudo enviar.</p>
${html}
<p>${saved ? "Los datos quedaron guardados en Brevo, Contactos, listas Registro general y Candidatos." : "Tampoco se pudo guardar en Brevo: estos son los únicos datos disponibles."} El CV no se conserva: solicítelo de nuevo al candidato.</p>`,
    );
  }

  if (!sent && !saved) {
    return Response.json({ ok: false, error: "provider" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
