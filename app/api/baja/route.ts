// Unsubscribe link at the foot of every follow-up email. It stops the series
// (SECUENCIA_PASO = 99) and records the request in the contact's history. The
// contact stays in Brevo so the firm keeps its record of the guide request.

import { brevoHeaders, esc } from "@/lib/brevo";
import { sello } from "@/lib/registro";
import { SEQ_DONE, verifyUnsubscribe } from "@/lib/secuencia";

const MSG = {
  es: { title: "Baja confirmada", text: "No recibirá más correos de esta serie. Si desea escribirnos, puede hacerlo a info@cabinetlegal.com.do.", back: "Volver a cabinetlegal.com.do" },
  en: { title: "You have been unsubscribed", text: "You will not receive further emails from this series. You can still reach us at info@cabinetlegal.com.do.", back: "Back to cabinetlegal.com.do" },
  fr: { title: "Désinscription confirmée", text: "Vous ne recevrez plus de courriels de cette série. Vous pouvez toujours nous écrire à info@cabinetlegal.com.do.", back: "Retour à cabinetlegal.com.do" },
};

function page(lang: keyof typeof MSG, ok: boolean) {
  const m = MSG[lang];
  const title = ok ? m.title : "Enlace no válido / Invalid link";
  const text = ok ? m.text : "El enlace no es válido. Escríbanos a info@cabinetlegal.com.do.";
  return new Response(
    `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${esc(title)} | Cabinet Legal</title></head>
<body style="margin:0;background:#f4f1ea;font-family:Georgia,serif;color:#1f2a36;">
<main style="max-width:520px;margin:12vh auto;padding:32px 24px;background:#fff;border-radius:12px;">
<h1 style="margin:0 0 12px;font-size:26px;color:#0f2740;">${esc(title)}</h1>
<p style="font-size:16px;line-height:1.6;">${esc(text)}</p>
<p><a href="https://cabinetlegal.com.do/" style="color:#8a6d3b;">${esc(m.back)}</a></p>
</main></body></html>`,
    { status: ok ? 200 : 400, headers: { "content-type": "text/html; charset=utf-8" } },
  );
}

export async function GET(request: Request) {
  const token = new URL(request.url).searchParams.get("t");
  const data = verifyUnsubscribe(token);
  if (!data) return page("es", false);

  const apiKey = process.env.BREVO_API_KEY;
  if (apiKey) {
    const API = "https://api.brevo.com/v3";
    const email = encodeURIComponent(data.email);
    const cur = await fetch(`${API}/contacts/${email}`, { headers: brevoHeaders(apiKey) });
    const prev = cur.ok ? String(((await cur.json().catch(() => ({}))) as { attributes?: Record<string, unknown> }).attributes?.HISTORIAL ?? "") : "";
    const line = `[${sello()}] Secuencia: se dio de baja desde el enlace del correo`;
    const res = await fetch(`${API}/contacts/${email}`, {
      method: "PUT",
      headers: brevoHeaders(apiKey),
      body: JSON.stringify({
        attributes: { SECUENCIA_PASO: String(SEQ_DONE), HISTORIAL: (prev ? `${line}\n${prev}` : line).slice(0, 3800) },
      }),
    });
    if (!res.ok) console.error("Baja: update failed", res.status, await res.text().catch(() => ""));
  }
  return page(data.lang, true);
}
