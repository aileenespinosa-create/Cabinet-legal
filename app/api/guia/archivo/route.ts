import { readFile } from "fs/promises";
import path from "path";
import { GUIDE_FILES, isGuideLang, verifyGuideToken } from "@/lib/guide";

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
