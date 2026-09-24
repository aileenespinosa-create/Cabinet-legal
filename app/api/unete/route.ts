// Receives job applications from the "Únete" page and forwards them, with the
// CV attached, to the firm's recruiting inbox through Brevo's email API.

const MAX_BYTES = 4 * 1024 * 1024;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

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

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify({
      sender: { name: "Cabinet Legal · Únete", email: sender },
      to: [{ email: to }],
      replyTo: { email, name },
      subject: `Candidatura: ${name} (${profile || "perfil no indicado"})`,
      htmlContent: html,
      attachment: [{ name: `CV-${safeName}.pdf`, content: bytes.toString("base64") }],
    }),
  });

  if (!res.ok) {
    console.error("Brevo careers email failed", res.status, await res.text().catch(() => ""));
    return Response.json({ ok: false, error: "provider" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
