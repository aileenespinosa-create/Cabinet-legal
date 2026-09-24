import { createHmac, timingSafeEqual } from "crypto";

export type GuideLang = "es" | "en" | "fr";

export const GUIDE_LANGS: GuideLang[] = ["es", "en", "fr"];

export const GUIDE_FILES: Record<GuideLang, { file: string; download: string }> = {
  es: {
    file: "guia-2026-es.pdf",
    download: "Guia-Invertir-Republica-Dominicana-2026-Cabinet-Legal.pdf",
  },
  en: {
    file: "guia-2026-en.pdf",
    download: "Guide-Investing-Dominican-Republic-2026-Cabinet-Legal.pdf",
  },
  fr: {
    file: "guia-2026-fr.pdf",
    download: "Guide-Investir-Republique-Dominicaine-2026-Cabinet-Legal.pdf",
  },
};

export const GUIDE_LANDING: Record<GuideLang, string> = {
  es: "/guia-inversion",
  en: "/en/guia-inversion",
  fr: "/fr/guia-inversion",
};

export function isGuideLang(value: unknown): value is GuideLang {
  return value === "es" || value === "en" || value === "fr";
}

// Download links stay valid for 30 days after the email is confirmed.
const TOKEN_TTL_MS = 30 * 24 * 60 * 60 * 1000;

function secret(): string {
  const s = process.env.GUIA_SECRET;
  if (!s || s.length < 16) {
    throw new Error("GUIA_SECRET is not configured");
  }
  return s;
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url");
}

export function createGuideToken(email: string, lang: GuideLang): string {
  const payload = Buffer.from(
    JSON.stringify({ e: email, l: lang, x: Date.now() + TOKEN_TTL_MS })
  ).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifyGuideToken(
  token: string | undefined | null
): { email: string; lang: GuideLang } | null {
  if (!token || typeof token !== "string") return null;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  let expected: string;
  try {
    expected = sign(payload);
  } catch {
    return null;
  }
  const a = Buffer.from(signature);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;

  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    if (typeof data.x !== "number" || data.x < Date.now()) return null;
    if (typeof data.e !== "string" || !isGuideLang(data.l)) return null;
    return { email: data.e, lang: data.l };
  } catch {
    return null;
  }
}
