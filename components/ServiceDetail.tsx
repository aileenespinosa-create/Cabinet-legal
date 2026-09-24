import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { CONSULT_HREF, PILLARS, SERVICES, serviceHref, type Lang, type Service } from "@/lib/services";
import { SERVICES_COPY } from "@/lib/servicesCopy";

// Generic page for a practice area that has no hand-written page of its own.
export default function ServiceDetail({ service, lang }: { service: Service; lang: Lang }) {
  const t = SERVICES_COPY[lang];
  const x = service.text[lang];
  const related = SERVICES.filter((s) => s.pillar === service.pillar && s.id !== service.id);
  const wa = `https://wa.me/18295420615?text=${encodeURIComponent(x.title)}`;

  return (
    <main className="min-h-screen bg-[#fcfaf6] pt-[88px]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#0f2740] text-white">
        <Image src={service.img} alt="" fill priority className="object-cover opacity-25" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2740] via-[#0f2740]/90 to-[#0f2740]/60" />
        <div className="relative mx-auto w-full max-w-[1200px] px-6 py-16 md:py-28 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">{PILLARS[service.pillar][lang]}</div>
          <h1 className="max-w-3xl pt-4 font-serif text-[38px] leading-[1.05] md:text-[60px]">{x.title}</h1>
          <p className="max-w-2xl pt-6 font-serif text-[22px] italic leading-snug text-[#e9d3ab] md:text-[28px]">{x.promise}</p>
          <div className="flex flex-col gap-3 pt-9 sm:flex-row">
            <Link href={CONSULT_HREF[lang]} className="inline-flex items-center justify-center rounded-full bg-[#c8a46a] px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#d6b57f]">
              {t.talk}
            </Link>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-3 text-sm font-medium text-white transition hover:border-[#c8a46a]">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 px-6 md:grid-cols-[0.8fr_1.2fr] md:gap-16 lg:px-8">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#8a6a37]">{t.helpWhen}</div>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>
          <p className="text-lg leading-9 text-[#3a4550] md:text-xl">{x.what}</p>
        </div>
      </section>

      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="text-[11px] uppercase tracking-[0.24em] text-[#8a6a37]">{t.howWeWork}</div>
          <ol className="mt-6 grid gap-5 md:grid-cols-3">
            {x.steps.map((step, k) => (
              <li key={step} className="card-legal p-7">
                <div className="font-serif text-4xl text-[#c8a46a]">0{k + 1}</div>
                <div className="pt-4 text-lg leading-7 text-[#0f2740]">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-14 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-6 md:grid-cols-2 lg:px-8">
          <div className="card-legal p-7 md:p-10">
            <h2 className="font-serif text-2xl text-[#0f2740] md:text-3xl">{t.includes}</h2>
            <ul className="mt-6 space-y-4">
              {x.items.map((item) => (
                <li key={item} className="flex gap-3 text-[#3a4550]">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[24px] bg-[#0f2740] p-7 text-white md:p-10">
            <h2 className="font-serif text-2xl md:text-3xl">{t.whyUs}</h2>
            <ul className="mt-6 space-y-4">
              {x.proof.map((p) => (
                <li key={p} className="flex gap-3 text-white/85">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="pb-14 md:pb-24">
          <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#8a6a37]">{t.otherAreas}</div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((s) => (
                <Link key={s.id} href={serviceHref(s, lang)} className="card-legal flex items-center justify-between gap-4 p-6 hover:-translate-y-[1px]">
                  <span className="font-serif text-xl text-[#0f2740]">{s.text[lang].title}</span>
                  <span className="text-[#c8a46a]" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal p-7 md:p-12">
            <h2 className="font-serif text-3xl text-[#0f2740] md:text-4xl">{t.detailCtaTitle}</h2>
            <p className="max-w-2xl pt-4 text-base leading-8 text-[#5f6b76] md:text-lg">{t.detailCtaText}</p>
            <div className="pt-8">
              <Link href={CONSULT_HREF[lang]} className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold" style={{ backgroundColor: "#0f2740", color: "#ffffff" }}>
                {t.consult}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
