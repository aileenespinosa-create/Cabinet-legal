import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { FIRMA_COPY } from "@/lib/firmaCopy";
import { CONSULT_HREF, PILLARS, SERVICES, serviceHref, type Lang, type PillarId } from "@/lib/services";

const SITE = "https://cabinetlegal.com.do";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Torre+Empresarial+Reyna+II+Av.+Pedro+Henr%C3%ADquez+Ure%C3%B1a+138+Santo+Domingo";

export default function FirmaPage({ lang }: { lang: Lang }) {
  const t = FIRMA_COPY[lang];
  const prefix = lang === "es" ? "" : `/${lang}`;
  const pillars: PillarId[] = ["ni", "pp", "ld"];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LegalService",
      name: "Cabinet Legal",
      url: `${SITE}${prefix}/firma`,
      image: `${SITE}/hero-legal.jpg`,
      logo: `${SITE}/logo-cabinet-legal.jpg`,
      foundingDate: "2009",
      email: "info@cabinetlegal.com.do",
      telephone: "+1-829-542-0615",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203",
        addressLocality: "Santo Domingo",
        addressRegion: "Distrito Nacional",
        addressCountry: "DO",
      },
      areaServed: "DO",
      availableLanguage: ["es", "en", "fr"],
      founder: t.partners.map((p) => ({ "@type": "Person", name: p.name, jobTitle: p.role })),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden pt-[96px]">
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO: the office photo is shown whole, so the firm's sign stays visible. */}
      <section className="container-legal py-8 md:py-14">
        <div className="card-legal relative overflow-hidden">
          <div className="relative aspect-[1808/1024]">
            <Image src="/hero-legal.jpg" alt={t.photoAlt} fill priority className="object-cover" sizes="(max-width: 1200px) 100vw, 1150px" />
            <div className="absolute inset-0 hidden bg-gradient-to-t from-[#0b1d31]/90 via-[#0b1d31]/35 to-transparent md:block" />
          </div>
          <div className="relative bg-[#0f2740] p-5 md:absolute md:inset-x-0 md:bottom-0 md:bg-transparent md:p-10">
            <div className="eyebrow text-white/80">{t.eyebrow}</div>
            <h1 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:mt-3 md:text-5xl">{t.h1}</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">{t.sub}</p>
          </div>
        </div>
      </section>

      {/* PROMISE + ABOUT */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">{t.promiseKicker}</div>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              {t.promise[0]}
              <br />
              {t.promise[1]}
              <br />
              <span className="text-[#8a6a37]">{t.promise[2]}</span>
            </h2>
            <div className="gold-line mt-6" />
            <p className="pt-6 text-base leading-8 text-[#5f6b76] md:text-lg">{t.promiseText}</p>
          </div>
          <div className="card-legal p-6 md:p-10">
            <div className="space-y-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              {t.about.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FIGURES */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal">
          <div className="grid grid-cols-2 gap-6 border-y border-[#e6dece] py-8 md:grid-cols-4 md:py-10">
            {t.stats.map(([n, l]) => (
              <div key={l}>
                <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">{n}</div>
                <div className="mt-1 text-sm text-[#5f6b76]">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal">
          <div className="eyebrow">{t.whoKicker}</div>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[#0f2740] md:text-4xl">{t.whoTitle}</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.who.map((w) => (
              <div key={w.title} className="card-legal flex flex-col p-6">
                <h3 className="text-xl font-semibold text-[#0f2740]">{w.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#5f6b76] md:text-base">{w.text}</p>
                <Link href={w.href} className="mt-5 text-sm font-semibold text-[#8a6a37] hover:text-[#0f2740]">
                  {w.link} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal rounded-[24px] bg-[#0f2740] p-6 text-white md:p-12">
          <div className="eyebrow">{t.areasKicker}</div>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-4xl">{t.areasTitle}</h2>
          <p className="mt-3 max-w-2xl text-white/75">{t.areasIntro}</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {pillars.map((pid) => (
              <div key={pid}>
                <h3 className="border-b border-white/15 pb-3 text-lg font-semibold text-[#e9d3ab]">{PILLARS[pid][lang]}</h3>
                <ul className="mt-3 space-y-2">
                  {SERVICES.filter((s) => s.pillar === pid).map((s) => (
                    <li key={s.id} className="no-justify">
                      <Link href={serviceHref(s, lang)} className="text-white/85 transition hover:text-[#e9d3ab]">
                        {s.text[lang].title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link href={`${prefix}/servicios`} className="mt-10 inline-flex rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition hover:border-[#c8a46a]">
            {t.allAreas}
          </Link>
        </div>
      </section>

      {/* HOW WE WORK (a real sequence, hence the numbers) */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal">
          <div className="eyebrow">{t.howKicker}</div>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-[#0f2740] md:text-4xl">{t.howTitle}</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-4">
            {t.how.map((h, i) => (
              <li key={h.title} className="card-legal p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0f2740] font-serif text-lg text-[#c8a46a]">{i + 1}</div>
                <h3 className="mt-4 text-lg font-semibold text-[#0f2740]">{h.title}</h3>
                <p className="mt-2 text-sm leading-7 text-[#5f6b76] md:text-base">{h.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* COMMITMENTS */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-10">
          <div className="eyebrow">{t.principlesKicker}</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">{t.principlesTitle}</h2>
          <div className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {t.principles.map((p) => (
              <div key={p.title} className="border-t border-[#e6dece] pt-5">
                <h3 className="text-lg font-semibold text-[#0f2740]">{p.title}</h3>
                <p className="mt-2 leading-7 text-[#5f6b76]">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal">
          <div className="eyebrow">{t.partnersKicker}</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">{t.partnersTitle}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {t.partners.map((p) => (
              <div key={p.name} className="card-legal flex items-center gap-5 p-5 md:p-6">
                <div className="relative h-28 w-24 flex-none overflow-hidden rounded-2xl md:h-32 md:w-28">
                  <Image src={p.img} alt={p.name} fill className="object-cover object-top" sizes="112px" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-xl font-semibold text-[#0f2740]">{p.name}</h3>
                  <div className="eyebrow mt-1">{p.role}</div>
                  <p className="mt-2 text-sm leading-6 text-[#5f6b76] md:text-base">{p.focus}</p>
                </div>
              </div>
            ))}
          </div>
          <Link href={`${prefix}/socios`} className="btn-secondary-legal mt-6">
            {t.partnersLink}
          </Link>
        </div>
      </section>

      {/* OFFICE */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">{t.officeKicker}</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">{t.officeTitle}</h2>
            <p className="mt-4 leading-8 text-[#5f6b76]">{t.officeText}</p>
          </div>
          <div className="card-legal flex flex-col justify-center gap-4 p-6 md:p-10">
            <p className="no-justify font-semibold leading-7 text-[#0f2740]">{t.address}</p>
            <p className="no-justify text-sm uppercase tracking-[0.18em] text-[#8a6a37]">{t.byAppointment}</p>
            <div className="no-justify text-[#5f6b76]">
              <div>+1 829 542 0615</div>
              <div>info@cabinetlegal.com.do</div>
            </div>
            <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#8a6a37] hover:text-[#0f2740]">
              {t.mapLabel} →
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-10">
          <div className="eyebrow">{t.faqKicker}</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">{t.faqTitle}</h2>
          <div className="mt-6 divide-y divide-[#e6dece] border-t border-[#e6dece]">
            {t.faq.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-[#0f2740] md:text-lg">
                  {f.q}
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#e6dece] text-lg text-[#c8a46a] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-7 text-[#5f6b76]">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-[#0f2740] md:text-4xl">{t.ctaTitle}</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">{t.ctaText}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <Link href={CONSULT_HREF[lang]} className="btn-primary-legal">
              {t.ctaPrimary}
            </Link>
            <Link href={`${prefix}/socios`} className="btn-secondary-legal">
              {t.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
