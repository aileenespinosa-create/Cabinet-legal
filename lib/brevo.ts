// Small helpers shared by the routes that talk to Brevo.

const API = "https://api.brevo.com/v3";

export function brevoHeaders(apiKey: string) {
  return { "api-key": apiKey, "content-type": "application/json", accept: "application/json" };
}

export type BrevoEmail = {
  sender: { name: string; email: string };
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
  attachment?: { name: string; content: string }[];
  tags?: string[];
};

export async function sendBrevoEmail(apiKey: string, email: BrevoEmail) {
  const res = await fetch(`${API}/smtp/email`, {
    method: "POST",
    headers: brevoHeaders(apiKey),
    body: JSON.stringify(email),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Brevo send failed", res.status, email.subject, detail);
  }
  return res.ok;
}

// Creates or updates a contact and adds it to the given lists. Used to keep a
// durable record of every application, independent of email delivery.
export async function upsertBrevoContact(
  apiKey: string,
  email: string,
  attributes: Record<string, string>,
  listIds: number[],
) {
  const res = await fetch(`${API}/contacts`, {
    method: "POST",
    headers: brevoHeaders(apiKey),
    body: JSON.stringify({ email, attributes, listIds, updateEnabled: true }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    console.error("Brevo contact upsert failed", res.status, detail);
  }
  return res.ok;
}

// Addresses that receive alerts when an email fails. Kept on two different
// providers so one outage cannot hide the alert.
export function alertRecipients() {
  const raw = process.env.ALERT_EMAILS || "ebeato@cabinetlegal.com.do,ellisbeato@gmail.com";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((email) => ({ email }));
}

// Sends an alert. Tries a sender on a different domain first, so a problem with
// the firm's own domain does not also block the alert, then falls back.
export async function sendAlert(apiKey: string, subject: string, htmlContent: string) {
  const senders = [
    process.env.ALERT_SENDER_EMAIL || "ellisbeato@gmail.com",
    process.env.BREVO_SENDER_EMAIL || "info@cabinetlegal.com.do",
  ];
  for (const email of senders) {
    const ok = await sendBrevoEmail(apiKey, {
      sender: { name: "Alertas Cabinet Legal", email },
      to: alertRecipients(),
      subject,
      htmlContent,
      tags: ["alerta"],
    });
    if (ok) return true;
  }
  return false;
}

export const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
