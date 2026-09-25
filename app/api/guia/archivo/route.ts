import { readFile } from "fs/promises";
import path from "path";
import { after } from "next/server";
import { GUIDE_FILES, isGuideLang, verifyGuideToken } from "@/lib/guide";
import { registrar } from "@/lib/registro";

// Serves the PDF only to visitors who arrive with a valid, signed link
// (issued after they confirmed their email address).
export async function GET(request: Request) {
  const url = new URL(request.url);
  const access = verifyGuideToken(url.searchParams.get("t"));
  if (!access) {
    return new Response("Enlace no válido o vencido.", { status: 403 });
  }

  const requested = url.searchParams.get("lang");
  const lang = isGuideLang(requested) ? requested : access.lang;
  const { file, download } = GUIDE_FILES[lang];

  // Audit trail: the download is recorded after the file is sent.
  const apiKey = process.env.BREVO_API_KEY;
  if (apiKey) {
    after(() =>
      registrar(apiKey, {
        email: access.email,
        nombre: "",
        origen: "Guía",
        detalle: `correo confirmado; descargó la guía (${lang.toUpperCase()})`,
      }),
    );
  }

  const data = await readFile(path.join(process.cwd(), "private", "guias", file));

  return new Response(new Uint8Array(data), {
    headers: {
      "content-type": "application/pdf",
      "content-disposition": `attachment; filename="${download}"`,
      "cache-control": "private, no-store",
      "x-robots-tag": "noindex",
    },
  });
}
