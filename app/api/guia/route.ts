import { createGuideToken, isGuideLang, type GuideLang } from "@/lib/guide";

const SITE_URL = "https://cabinetlegal.com.do";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Brevo sends its own confirmation email (double opt-in). The guide is only
// released after the visitor clicks the link in that email, so invented or
// mistyped addresses never reach the download page.
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  // Honeypot field: real visitors never fill it in.
  if (typeof body.company === "string" && body.company.trim() !== "") {
    return Response.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 80);
  const email = String(body.email ?? "").trim().toLowerCase().slice(0, 160);
  const country = String(body.country ?? "").trim().slice(0, 80);
  const interest = String(body.interest ?? "").trim().slice(0, 80);
  const lang: GuideLang = isGuideLang(body.lang) ? body.lang : "es";
  const consent = body.consent === true;

  if (!name || !EMAIL_RE.test(email) || !consent) {
    return Response.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env[`BREVO_LIST_ID_${lang.toUpperCase()}`] ?? process.env.BREVO_LIST_ID);
  const templateId = Number(
    process.env[`BREVO_DOI_TEMPLATE_${lang.toUpperCase()}`] ?? process.env.BREVO_DOI_TEMPLATE
  );

  if (!apiKey || !listId || !templateId || !process.env.GUIA_SECRET) {
    console.error("Guide form: Brevo or GUIA_SECRET not configured");
    return Response.json({ ok: false, error: "unavailable" }, { status: 503 });
  }

  const token = createGuideToken(email, lang);
  const downloadPath = lang === "es" ? "/guia-inversion/descarga" : `/${lang}/guia-inversion/descarga`;

  const res = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      email,
      includeListIds: [listId],
      templateId,
      redirectionUrl: `${SITE_URL}${downloadPath}?t=${encodeURIComponent(token)}`,
      attributes: {
        FIRSTNAME: name,
        PAIS: country,
        INTERES: interest,
        IDIOMA: lang.toUpperCase(),
      },
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Brevo double opt-in failed", res.status, detail);
    return Response.json({ ok: false, error: "provider" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
