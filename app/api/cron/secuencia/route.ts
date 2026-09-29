// Daily job (see vercel.json) that sends the follow-up series to people who
// confirmed their guide download. Progress lives on the Brevo contact
// (SECUENCIA_INICIO, SECUENCIA_PASO), so the job is idempotent: running it
// twice on the same day never sends the same email twice.
//
// ?prueba=1&lang=es sends the three emails immediately to the alert
// recipients only, so the partners can review them in their own inbox.

import { alertRecipients, brevoHeaders, sendBrevoEmail } from "@/lib/brevo";
import { GUIDE_LANGS, type GuideLang } from "@/lib/guide";
import { LIST_CONSULTAS, sello } from "@/lib/registro";
import { COPY, SEQ_DAYS, SEQ_DONE, renderEmail } from "@/lib/secuencia";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const API = "https://api.brevo.com/v3";
const DAY = 24 * 60 * 60 * 1000;

type Contact = {
  email: string;
  emailBlacklisted?: boolean;
  listIds?: number[];
  attributes?: Record<string, unknown>;
};

function today() {
  // Calendar date in Santo Domingo, YYYY-MM-DD.
  return sello().slice(0, 10);
}

function sender() {
  return {
    sender: { name: "Ellis Beato · Cabinet Legal", email: process.env.BREVO_SENDER_EMAIL || "info@cabinetlegal.com.do" },
    replyTo: { email: "info@cabinetlegal.com.do", name: "Cabinet Legal" },
  };
}

async function ensureAttributes(apiKey: string) {
  for (const name of ["SECUENCIA_INICIO", "SECUENCIA_PASO"]) {
    const res = await fetch(`${API}/contacts/attributes/normal/${name}`, {
      method: "POST",
      headers: brevoHeaders(apiKey),
      body: JSON.stringify({ type: "text" }),
    });
    // 400 means it already exists, which is the normal case.
    if (!res.ok && res.status !== 400) {
      console.error("Secuencia: could not create attribute", name, res.status, await res.text().catch(() => ""));
    }
  }
}

async function listContacts(apiKey: string, listId: number): Promise<Contact[]> {
  const out: Contact[] = [];
  for (let offset = 0; offset < 10000; offset += 500) {
    const res = await fetch(`${API}/contacts/lists/${listId}/contacts?limit=500&offset=${offset}`, {
      headers: brevoHeaders(apiKey),
    });
    if (!res.ok) {
      console.error("Secuencia: list read failed", listId, res.status);
      break;
    }
    const data = (await res.json().catch(() => ({}))) as { contacts?: Contact[] };
    const page = data.contacts ?? [];
    out.push(...page);
    if (page.length < 500) break;
  }
  return out;
}

async function update(apiKey: string, email: string, attributes: Record<string, string>) {
  const res = await fetch(`${API}/contacts/${encodeURIComponent(email)}`, {
    method: "PUT",
    headers: brevoHeaders(apiKey),
    body: JSON.stringify({ attributes }),
  });
  if (!res.ok) console.error("Secuencia: update failed", email, res.status, await res.text().catch(() => ""));
  return res.ok;
}

function historial(prev: unknown, line: string) {
  const p = String(prev ?? "");
  return (p ? `${line}\n${p}` : line).slice(0, 3800);
}

export async function GET(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) return Response.json({ ok: false, error: "unconfigured" }, { status: 503 });

  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
    // Without the secret only the harmless review mode is allowed.
    const url = new URL(request.url);
    if (!url.searchParams.get("prueba")) return Response.json({ ok: false }, { status: 401 });
  }

  const url = new URL(request.url);

  // Review mode: the three emails of one language, to the partners only.
  if (url.searchParams.get("prueba")) {
    const lang = (GUIDE_LANGS as string[]).includes(url.searchParams.get("lang") ?? "")
      ? (url.searchParams.get("lang") as GuideLang)
      : "es";
    const to = alertRecipients();
    let sent = 0;
    for (let i = 0; i < COPY[lang].emails.length; i++) {
      const r = renderEmail(lang, i, "Ellis", to[0].email);
      const ok = await sendBrevoEmail(apiKey, {
        ...sender(),
        to,
        subject: `[Prueba ${i + 1}/3] ${r.subject}`,
        htmlContent: r.html,
        tags: ["secuencia-prueba"],
      });
      if (ok) sent++;
    }
    return Response.json({ ok: true, prueba: true, lang, sent });
  }

  await ensureAttributes(apiKey);

  const hoy = today();
  const seen = new Set<string>();
  const report = { started: 0, sent: 0, skipped: 0, errors: 0 };

  for (const lang of GUIDE_LANGS) {
    const listId = Number(process.env[`BREVO_LIST_ID_${lang.toUpperCase()}`]);
    if (!listId) continue;
    const contacts = await listContacts(apiKey, listId);

    for (const c of contacts) {
      const email = c.email?.toLowerCase();
      if (!email || seen.has(email)) continue;
      seen.add(email);

      const a = c.attributes ?? {};
      const paso = Number(a.SECUENCIA_PASO ?? 0) || 0;
      if (c.emailBlacklisted || paso >= SEQ_DAYS.length) {
        report.skipped++;
        continue;
      }
      // Someone who already booked a consultation needs no more nudging.
      if ((c.listIds ?? []).includes(LIST_CONSULTAS)) {
        await update(apiKey, email, { SECUENCIA_PASO: String(SEQ_DONE) });
        report.skipped++;
        continue;
      }

      const inicio = String(a.SECUENCIA_INICIO ?? "");
      if (!/^\d{4}-\d{2}-\d{2}$/.test(inicio)) {
        await update(apiKey, email, { SECUENCIA_INICIO: hoy, SECUENCIA_PASO: "0" });
        report.started++;
        continue;
      }

      const days = Math.floor((Date.parse(hoy) - Date.parse(inicio)) / DAY);
      if (days < SEQ_DAYS[paso]) continue;

      const name = String(a.FIRSTNAME ?? "").trim().split(/\s+/)[0] ?? "";
      const r = renderEmail(lang, paso, name, email);
      const ok = await sendBrevoEmail(apiKey, {
        ...sender(),
        to: [{ email, name: name || undefined }],
        subject: r.subject,
        htmlContent: r.html,
        tags: ["secuencia", `secuencia-${paso + 1}`],
      });
      if (!ok) {
        report.errors++;
        continue;
      }
      await update(apiKey, email, {
        SECUENCIA_PASO: String(paso + 1),
        HISTORIAL: historial(a.HISTORIAL, `[${sello()}] Secuencia: correo ${paso + 1} de 3 enviado (${lang.toUpperCase()})`),
      });
      report.sent++;
    }
  }

  return Response.json({ ok: true, fecha: hoy, ...report });
}
