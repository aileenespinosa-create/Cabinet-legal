"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONSULT_HREF, PILLARS, SERVICES, serviceHref, type Lang } from "@/lib/services";
import { SERVICES_COPY } from "@/lib/servicesCopy";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#c8a46a" strokeWidth="1.8" className="mt-[3px] shrink-0" aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  );
}

// Home page: editorial accordion on navy, one area open at a time.
export default function ServicesAccordion({ lang }: { lang: Lang }) {
  const t = SERVICES_COPY[lang];
  const [open, setOpen] = useState(() => SERVICES.findIndex((s) => s.id === "inversion"));

  return (
    <section className="bg-[#0f2740] py-16 text-white md:py-28">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">{t.kicker}</div>
            <h2 className="pt-4 font-serif text-[38px] leading-[1.05] md:text-[60px]">
              {t.accTitleA}
              <br />
              <em className="text-[#c8a46a]">{t.accTitleB}</em>
            </h2>
          </div>
          <p className="text-base leading-8 text-white/75 md:text-lg">{t.accIntro}</p>
        </div>

        <div className="mt-12 border-t border-white/15">
          {SERVICES.map((s, i) => {
            const on = open === i;
            const x = s.text[lang];
            return (
              <div key={s.id} className="border-b border-white/15">
                <button
                  type="button"
                  onClick={() => setOpen(on ? -1 : i)}
                  aria-expanded={on}
                  className="flex w-full items-center gap-4 py-5 text-left md:gap-7 md:py-6"
                >
                  <span className={`w-7 shrink-0 text-sm font-semibold tracking-wider ${on ? "text-[#c8a46a]" : "text-white/45"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`flex-1 font-serif leading-tight transition-all ${on ? "text-[26px] text-white md:text-[40px]" : "text-[21px] text-white/85 md:text-[32px]"}`}>
                    {x.title}
                  </span>
                  <span className="hidden text-xs uppercase tracking-[0.14em] text-white/50 lg:block">{PILLARS[s.pillar][lang]}</span>
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#c8a46a] transition-transform md:h-12 md:w-12 ${on ? "rotate-45 bg-[#c8a46a] text-[#0f2740]" : "text-[#c8a46a]"}`}
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M9 3v12M3 9h12" />
                    </svg>
                  </span>
                </button>

                {on && (
                  <div className="grid gap-10 pb-12 md:pl-14 lg:grid-cols-[1fr_1fr_300px]">
                    <div>
                      <p className="font-serif text-[24px] italic leading-snug text-[#e9d3ab] md:text-[30px]">{x.promise}</p>
                      <p className="pt-5 text-base leading-8 text-white/80">{x.what}</p>
                      <div className="flex flex-col gap-3 pt-7 sm:flex-row">
                        <Link href={CONSULT_HREF[lang]} className="inline-flex items-center justify-center rounded-full bg-[#c8a46a] px-6 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#d6b57f]">
                          {t.talk}
                        </Link>
                        <Link href={serviceHref(s, lang)} className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition hover:border-[#c8a46a]">
                          {t.seeArea}
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8a46a]">{t.howWeWork}</div>
                      <ol className="mt-4 space-y-4">
                        {x.steps.map((step, k) => (
                          <li key={step} className="flex items-start gap-4">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c8a46a] font-serif text-[#c8a46a]">{k + 1}</span>
                            <span className="pt-1.5 text-[15px] leading-6 text-white/90">{step}</span>
                          </li>
                        ))}
                      </ol>
                      <div className="pt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8a46a]">{t.includes}</div>
                      <ul className="mt-3 space-y-2.5">
                        {x.items.map((item) => (
                          <li key={item} className="flex gap-2.5 text-sm leading-6 text-white/85">
                            <Check />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="hidden flex-col gap-3 lg:flex">
                      <div className="relative h-[220px] overflow-hidden rounded-2xl">
                        <Image src={s.img} alt="" fill className="object-cover" sizes="300px" />
                      </div>
                      {x.proof.map((p) => (
                        <div key={p} className="rounded-xl bg-white/[0.06] px-4 py-2.5 text-[13px] text-[#e9d3ab]">{p}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
