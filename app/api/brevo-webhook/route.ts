// Brevo calls this URL whenever a transactional email fails after it was
// accepted (rejected sender, blocked, bounced...). That is exactly the kind of
// failure the site cannot see on its own, so here we turn it into an alert.
//
// The webhook body is only a hint: the event is confirmed against Brevo's API
// with our own key before anything is sent, so a forged request cannot trigger
// fake alerts.

import { brevoHeaders, esc, sendAlert } from "@/lib/brevo";
import { registrar } from "@/lib/registro";

const FAILURE = new Set([
  "error",
  "blocked",
  "hardbounce",
  "hardbounces",
  "softbounce",
  "softbounces",
  "invalid",
  "invalidemail",
  "spam",
]);
// Failures that point to a problem on our side and always deserve an alert,
// whatever the email was.
const ALWAYS = new Set(["error", "blocked"]);

const norm = (v: unknown) => String(v ?? "").toLowerCase().replace(/[^a-z]/g, "");

type BrevoEvent = {
  email?: string;
  date?: string;
  subject?: string;
  messageId?: string;
  event?: string;
  reason?: string;
  tag?: string;
  tags?: string[];
  from?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return Response.json({ ok: false }, { status: 503 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: true });
  }
  const events = Array.isArray(body) ? body : [body];

  for (const hint of events as Record<string, unknown>[]) {
    const messageId = String(hint["message-id"] ?? hint.messageId ?? "").trim();
    if (!messageId || !FAILURE.has(norm(hint.event))) continue;

    // Confirm with Brevo that the message is really ours before alerting.
    // First the event log; if it does not list the failure (some rejections
    // never reach it), fall back to the message record itself.
    let e: BrevoEvent | undefined;
    const evRes = await fetch(
      `https://api.brevo.com/v3/smtp/statistics/events?days=30&limit=50&messageId=${encodeURIComponent(messageId)}`,
      { headers: brevoHeaders(apiKey) },
    );
    if (evRes.ok) {
      const data = (await evRes.json().catch(() => ({}))) as { events?: BrevoEvent[] };
      e = (data.events ?? []).find((x) => FAILURE.has(norm(x.event)));
    } else {
      console.error("Brevo webhook: events lookup failed", evRes.status);
    }
    if (!e) {
      const mRes = await fetch(
        `https://api.brevo.com/v3/smtp/emails?limit=5&messageId=${encodeURIComponent(messageId)}`,
        { headers: brevoHeaders(apiKey) },
      );
      const mData = mRes.ok
        ? ((await mRes.json().catch(() => ({}))) as {
            transactionalEmails?: { email?: string; subject?: string; date?: string; from?: string; tags?: string[] }[];
          })
        : {};
      const m = mData.transactionalEmails?.[0];
      if (!m) {
        console.warn("Brevo webhook: message not found in account, ignored", messageId);
        continue;
      }
      e = {
        email: m.email,
        subject: m.subject,
        date: m.date,
        from: m.from,
        tags: m.tags,
        event: String(hint.event ?? ""),
        reason: String(hint.reason ?? ""),
      };
    }

    const tags = [e.tag, ...(e.tags ?? [])].filter(Boolean).map((t) => norm(t));
    if (tags.includes("alerta")) continue; // never alert about an alert

    // Audit trail: a guide confirmation that never arrived is noted on the
    // person's record (usually a mistyped address).
    if (tags.includes("optin") && e.email) {
      await registrar(apiKey, {
        email: e.email,
        nombre: "",
        origen: "Guía",
        detalle: `el correo de confirmación no se entregó (${e.event}${e.reason ? `: ${e.reason}` : ""})`,
      });
    }

    const ours = /@cabinetlegal\.com\.do$/i.test(e.email ?? "");
    const important = ALWAYS.has(norm(e.event)) || ours || tags.includes("careers") || tags.includes("consulta");
    if (!important) continue;

    console.log("Brevo webhook: alerting", e.event, e.subject);
    const isCareers = tags.includes("careers") || /^candidatura/i.test(e.subject ?? "");
    const rows: [string, string][] = [
      ["Evento", e.event ?? ""],
      ["Motivo", e.reason ?? ""],
      ["Asunto", e.subject ?? ""],
      ["Destinatario", e.email ?? ""],
      ["Remitente", e.from ?? ""],
      ["Fecha", e.date ?? ""],
      ["Message-ID", messageId],
    ];
    const html = `<p>Brevo informa que un correo del sitio <b>no se entregó</b>.</p>
<table cellpadding="6" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
${rows.filter(([, v]) => v).map(([k, v]) => `<tr><td style="color:#5f6b76">${k}</td><td><b>${esc(v)}</b></td></tr>`).join("")}
</table>
${
  isCareers
    ? `<p style="font-family:Arial,sans-serif;font-size:14px">Es una candidatura. Los datos del candidato están guardados en Brevo, Contactos, lista <b>Candidatos</b>. Pídale el CV de nuevo.</p>`
    : ""
}
<p style="font-family:Arial,sans-serif;font-size:12px;color:#8a939b">Detalle completo: Brevo, Transactional, Logs.</p>`;

    await sendAlert(apiKey, `ALERTA: correo no entregado (${e.subject ?? e.event})`.slice(0, 180), html);
  }

  // Always 200 so Brevo does not retry endlessly.
  return Response.json({ ok: true });
}
