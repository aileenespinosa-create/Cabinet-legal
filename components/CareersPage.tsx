import SiteHeader from "@/components/SiteHeader";
import CareersForm from "@/components/CareersForm";
import type { Lang } from "@/lib/services";
import { CAREERS_COPY } from "@/lib/careersCopy";

export default function CareersPage({ lang }: { lang: Lang }) {
  const t = CAREERS_COPY[lang];
  return (
    <main className="min-h-screen bg-[#fcfaf6] pt-[88px]">
      <SiteHeader />

      <section className="bg-[#0f2740] py-16 text-white md:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-end md:gap-16 lg:px-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">{t.kicker}</div>
            <h1 className="pt-4 font-serif text-[36px] leading-[1.07] md:text-[56px]">{t.title}</h1>
          </div>
          <p className="text-base leading-8 text-white/80 md:text-lg">{t.intro}</p>
        </div>
      </section>

      <section className="pt-14 md:pt-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {t.reasons.map(([title, text]) => (
            <div key={title} className="border-t-2 border-[#c8a46a] pt-5">
              <h2 className="font-serif text-[22px] text-[#0f2740]">{title}</h2>
              <p className="pt-2 text-[15px] leading-7 text-[#5f6b76]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] items-start gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#8a6a37]">{t.profilesTitle}</div>
            <div className="mt-5 space-y-3.5">
              {t.profiles.map(([title, text]) => (
                <div key={title} className="rounded-[18px] border border-[#e8dfd0] bg-white p-6">
                  <h3 className="font-serif text-[21px] text-[#0f2740]">{title}</h3>
                  <p className="pt-1.5 text-[15px] leading-6 text-[#5f6b76]">{text}</p>
                </div>
              ))}
            </div>
            <p className="pt-5 text-sm leading-6 text-[#5f6b76]">{t.noOpening}</p>
          </div>
          <CareersForm lang={lang} />
        </div>
      </section>
    </main>
  );
}
