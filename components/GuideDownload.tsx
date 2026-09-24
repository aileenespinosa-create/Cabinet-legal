import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { GUIDE_LANDING, GUIDE_LANGS, verifyGuideToken, type GuideLang } from "@/lib/guide";
import { GUIDE_COPY } from "@/lib/guideCopy";

export default function GuideDownload({ lang, token }: { lang: GuideLang; token?: string }) {
  const access = verifyGuideToken(token);
  const t = GUIDE_COPY[access?.lang ?? lang];
  const fileHref = (l: GuideLang) =>
    `/api/guia/archivo?t=${encodeURIComponent(token ?? "")}&lang=${l}`;

  return (
    <main className="min-h-screen bg-[#fcfaf6] pt-[96px]">
      <SiteHeader />
      <section className="py-14 md:py-24">
        <div className="mx-auto w-full max-w-[860px] px-6 lg:px-8">
          {access ? (
            <>
              <div className="card-legal p-7 text-center md:p-12">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#0f2740] text-2xl text-[#c8a46a]">
                  ✓
                </div>
                <div className="mt-6 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">{t.dlKicker}</div>
                <h1 className="pt-3 text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">{t.dlTitle}</h1>
                <p className="mx-auto pt-5 max-w-xl leading-8 text-[#5f6b76]">{t.dlText}</p>
                <a
                  href={fileHref(access.lang)}
                  className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
                >
                  {t.dlButton}
                </a>
                <div className="mt-6 text-sm text-[#5f6b76]">
                  {t.dlOther}{" "}
                  {GUIDE_LANGS.filter((l) => l !== access.lang).map((l, i) => (
                    <span key={l}>
                      {i > 0 && " · "}
                      <a href={fileHref(l)} className="font-medium text-[#0f2740] underline decoration-[#c8a46a] underline-offset-4">
                        {t.langNames[l]}
                      </a>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 rounded-[24px] bg-[#0f2740] p-7 text-white md:p-12">
                <h2 className="text-2xl font-light tracking-tight md:text-3xl">{t.dlNextTitle}</h2>
                <p className="pt-4 max-w-2xl leading-8 text-white/80">{t.dlNextText}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={t.consultHref}
                    className="inline-flex items-center justify-center rounded-full bg-[#c8a46a] px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#d6b57f]"
                  >
                    {t.dlConsult}
                  </Link>
                  <a
                    href={`https://wa.me/18295420615?text=${encodeURIComponent(t.whatsappText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 text-sm font-medium text-white transition hover:border-[#c8a46a]"
                  >
                    {t.dlWhatsApp}
                  </a>
                </div>
              </div>
            </>
          ) : (
            <div className="card-legal p-7 text-center md:p-12">
              <h1 className="text-3xl font-light tracking-tight text-[#0f2740]">{t.dlInvalidTitle}</h1>
              <p className="mx-auto pt-5 max-w-xl leading-8 text-[#5f6b76]">{t.dlInvalidText}</p>
              <Link
                href={GUIDE_LANDING[lang]}
                className="mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                {t.dlInvalidCta}
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
