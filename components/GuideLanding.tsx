import Image from "next/image";
import SiteHeader from "@/components/SiteHeader";
import GuideLeadForm from "@/components/GuideLeadForm";
import type { GuideLang } from "@/lib/guide";
import { GUIDE_COPY } from "@/lib/guideCopy";

export default function GuideLanding({ lang }: { lang: GuideLang }) {
  const t = GUIDE_COPY[lang];
  return (
    <main className="min-h-screen bg-[#fcfaf6] pt-[96px]">
      <SiteHeader />

      <section className="bg-[#0f2740] pb-16 pt-12 md:pb-24 md:pt-20">
        <div className="mx-auto grid w-full max-w-[1200px] items-start gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">{t.kicker}</div>
            <h1 className="text-[32px] font-light leading-[1.1] tracking-tight text-white md:text-[48px]">
              {t.title}
            </h1>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
            <p className="pt-7 max-w-xl text-base leading-8 text-white/80 md:text-lg">{t.subtitle}</p>
            <p className="pt-5 text-sm tracking-wide text-[#e9d3ab]">{t.pages}</p>

            <div className="mt-10 flex items-end gap-6">
              <Image
                src={`/guia/portada-${lang}.jpg`}
                alt={t.title}
                width={910}
                height={1286}
                priority
                className="h-auto w-[170px] -rotate-[4deg] rounded-md shadow-[0_30px_60px_rgba(0,0,0,0.45)] md:w-[230px]"
                sizes="230px"
              />
              <ul className="hidden space-y-3 pb-3 text-sm text-white/75 sm:block">
                {t.forWho.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-[#c8a46a]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div id="formulario" className="card-legal p-6 md:p-9">
            <h2 className="text-2xl font-light tracking-tight text-[#0f2740] md:text-3xl">{t.formTitle}</h2>
            <p className="pb-7 pt-3 leading-7 text-[#5f6b76]">{t.formIntro}</p>
            <GuideLeadForm lang={lang} />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">{t.kicker}</div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">{t.inside}</h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {t.chapters.map((chapter, i) => (
              <li key={chapter} className="card-legal flex gap-4 p-5">
                <span className="text-lg font-semibold text-[#c8a46a]">{String(i + 1).padStart(2, "0")}</span>
                <span className="leading-7 text-[#0f2740]">{chapter}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-16 md:pb-24 sm:hidden">
        <div className="mx-auto w-full max-w-[1200px] px-6">
          <div className="card-legal p-6">
            <h2 className="text-xl font-semibold text-[#0f2740]">{t.forWhoTitle}</h2>
            <ul className="mt-4 space-y-3 text-[#5f6b76]">
              {t.forWho.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-[#c8a46a]">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
