// Central register of every person who contacts the firm through the website
// (consultations, guide requests, job applications). Brevo is the database:
// each person is one contact in the list "Registro general", and every
// interaction is added to the top of the HISTORIAL attribute with date, time,
// channel and result, so the full trail can be audited from Brevo at any time.

import { brevoHeaders } from "@/lib/brevo";

const API = "https://api.brevo.com/v3";
const HISTORY_MAX = 3800;

export const LIST_REGISTRO = Number(process.env.BREVO_LIST_ID_REGISTRO || 7);
export const LIST_CONSULTAS = Number(process.env.BREVO_LIST_ID_CONSULTAS || 8);
export const LIST_CANDIDATOS = Number(process.env.BREVO_LIST_ID_CANDIDATOS || 6);

export type Origen = "Consulta" | "Guía" | "Carreras";

export type Registro = {
  email: string;
  nombre: string;
  origen: Origen;
  detalle: string; // one line describing the interaction
  telefono?: string;
  idioma?: string;
  extra?: Record<string, string>; // other Brevo attributes to set
  listIds?: number[]; // lists besides "Registro general"
};

export function sello(date = new Date()) {
  // 2026-09-25 15:04 (hora de Santo Domingo)
  const p = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Santo_Domingo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const g = (t: string) => p.find((x) => x.type === t)?.value ?? "";
  return `${g("year")}-${g("month")}-${g("day")} ${g("hour")}:${g("minute")}`;
}

async function leerHistorial(apiKey: string, email: string) {
  const res = await fetch(`${API}/contacts/${encodeURIComponent(email)}`, { headers: brevoHeaders(apiKey) });
  if (!res.ok) return { existe: false, historial: "", primer: "" };
  const data = (await res.json().catch(() => ({}))) as { attributes?: Record<string, unknown> };
  const a = data.attributes ?? {};
  return {
    existe: true,
    historial: String(a.HISTORIAL ?? ""),
    primer: String(a.PRIMER_CONTACTO ?? ""),
  };
}

// Records one interaction. Never throws: returns false and logs on failure so
// the calling form can still do its job and raise an alert.
export async function registrar(apiKey: string, r: Registro): Promise<boolean> {
  try {
    const ahora = sello();
    const prev = await leerHistorial(apiKey, r.email);
    const linea = `[${ahora}] ${r.origen}: ${r.detalle}`.replace(/\s+/g, " ").trim();
    const historial = (prev.historial ? `${linea}\n${prev.historial}` : linea).slice(0, HISTORY_MAX);

    const attributes: Record<string, string> = {
      ...(r.extra ?? {}),
      HISTORIAL: historial,
      ORIGEN: r.origen,
      ULTIMO_CONTACTO: ahora,
      PRIMER_CONTACTO: prev.primer || ahora,
    };
    if (r.nombre) attributes.FIRSTNAME = r.nombre;
    if (r.telefono) attributes.TELEFONO = r.telefono;
    if (r.idioma) attributes.IDIOMA = r.idioma.toUpperCase();

    const res = await fetch(`${API}/contacts`, {
      method: "POST",
      headers: brevoHeaders(apiKey),
      body: JSON.stringify({
        email: r.email,
        attributes,
        listIds: [LIST_REGISTRO, ...(r.listIds ?? [])],
        updateEnabled: true,
      }),
    });
    if (!res.ok) {
      console.error("Registro: Brevo rejected contact", res.status, await res.text().catch(() => ""));
      return false;
    }
    return true;
  } catch (err) {
    console.error("Registro: unexpected error", err);
    return false;
  }
}
