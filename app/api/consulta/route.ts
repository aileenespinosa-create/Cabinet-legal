// Receives consultation requests from /consulta (ES, EN, FR). Every request is
// first recorded in the central register (Brevo lists "Registro general" and
// "Consultas") and then emailed to the firm. If the email fails, the firm is
// alerted right away and the request is still on file.

import { after } from "next/server";
import { esc, sendAlert, sendBrevoEmail } from "@/lib/brevo";
import { LIST_CONSULTAS, registrar } from "@/lib/registro";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot: bots fill every field.
  if (String(form.get("empresa_web") ?? "").trim() !== "") {
    return Response.json({ ok: true });
  }

  const field = (k: string, max = 200) => String(form.get(k) ?? "").trim().slice(0, max);
  const name = field("nombre", 120);
  const email = field("email", 160).toLowerCase();
  const phone = field("telefono", 40);
  const country = field("pais", 80);
  const areaRaw = field("area", 120);
  const area = /^(Seleccione|Select|Sélectionnez)/i.test(areaRaw) ? "" : areaRaw;
  const message = field("mensaje", 3000);
  const lang = (field("idioma", 2) || "ES").toUpperCase();

  if (!name || !EMAIL_RE.test(email) || !message) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("Consultation form: BREVO_API_KEY not configured");
    return Response.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  // 1. Record first.
  const resumen = message.replace(/\s+/g, " ").slice(0, 160);
  const saved = await registrar(apiKey, {
    email,
    nombre: name,
    origen: "Consulta",
    detalle: `solicitó consulta (${area || "área no indicada"}): "${resumen}${message.length > 160 ? "…" : ""}"`,
    telefono: phone,
    idioma: lang,
    extra: country ? { PAIS: country } : undefined,
    listIds: [LIST_CONSULTAS],
  });

  // 2. Email the firm.
  const to = process.env.CONSULTAS_EMAIL || process.env.CAREERS_EMAIL || "info@cabinetlegal.com.do";
  const sender = process.env.BREVO_SENDER_EMAIL || "info@cabinetlegal.com.do";
  const rows: [string, string][] = [
    ["Nombre", name],
    ["Correo", email],
    ["Teléfono", phone],
    ["País", country],
    ["Área", area],
    ["Idioma del sitio", lang],
  ];
  const html = `<h2 style="font-family:Arial,sans-serif">Nueva consulta: ${esc(name)}</h2>
<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
${rows.filter(([, v]) => v).map(([k, v]) => `<tr><td style="color:#5f6b76">${k}</td><td><b>${esc(v)}</b></td></tr>`).join("")}
</table>
<p style="font-family:Arial,sans-serif;font-size:14px"><b>Mensaje:</b><br>${esc(message).replace(/\n/g, "<br>")}</p>
<p style="font-family:Arial,sans-serif;font-size:12px;color:#8a939b">Responda directamente a este correo para escribirle al cliente. Registro: Brevo, Contactos, lista Consultas.</p>`;

  const subject = `Consulta: ${name}${area ? ` (${area})` : ""}`;
  const sent = await sendBrevoEmail(apiKey, {
    sender: { name: "Cabinet Legal · Consultas", email: sender },
    to: [{ email: to }],
    replyTo: { email, name },
    subject,
    htmlContent: html,
    tags: ["consulta"],
  });

  if (!sent) {
    after(async () => {
      await registrar(apiKey, { email, nombre: name, origen: "Consulta", detalle: "ERROR: el correo de la consulta no se pudo enviar a la firma" });
      await sendAlert(
        apiKey,
        `ALERTA: no se pudo enviar la consulta de ${name}`,
        `<p>Llegó una consulta por la web, pero el correo a ${esc(to)} no se pudo enviar.</p>${html}
<p>${saved ? "Quedó guardada en Brevo, lista Consultas." : "Tampoco se pudo guardar en Brevo: estos son los únicos datos disponibles."}</p>`,
      );
    });
  }

  if (!sent && !saved) {
    return Response.json({ ok: false, error: "provider" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
