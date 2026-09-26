"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONSULT_HREF, PILLARS, SERVICES, serviceHref, type Lang, type PillarId } from "@/lib/services";
import { SERVICES_COPY } from "@/lib/servicesCopy";

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#c8a46a" strokeWidth="1.8" className="mt-[3px] shrink-0" aria-hidden="true">
      <path d="M3 8.5l3.2 3L13 4.5" />
    </svg>
  );
}

// Services page: situation chips, pillar tabs, numbered index and a detail panel.
export default function ServicesExplorer({ lang }: { lang: Lang }) {
  const t = SERVICES_COPY[lang];
  const [tab, setTab] = useState<"all" | PillarId>("all");
  const [selId, setSelId] = useState("inversion");
  const panelRef = useRef<HTMLDivElement>(null);
  const pick = (id: string) => {
    setSelId(id);
    // On phones and tablets the detail panel sits below the list: bring it into view.
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      requestAnimationFrame(() => panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  };

  const visible = SERVICES.filter((s) => tab === "all" || s.pillar === tab);
  const current = visible.find((s) => s.id === selId) ?? visible[0];
  const x = current.text[lang];
  const tabs: ["all" | PillarId, string, number][] = [
    ["all", t.all, SERVICES.length],
    ...(["ni", "pp", "ld"] as PillarId[]).map(
      (p) => [p, PILLARS[p][lang], SERVICES.filter((s) => s.pillar === p).length] as ["all" | PillarId, string, number]
    ),
  ];

  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#8a6a37]">{t.kicker}</div>
            <h1 className="pt-4 font-serif text-[38px] leading-[1.05] text-[#0f2740] md:text-[56px]">{t.expTitle}</h1>
            {t.expQuestion && (
              <p className="pt-4 font-serif text-[24px] leading-tight text-[#8a6a37] md:text-[30px]">{t.expQuestion}</p>
            )}
          </div>
          <p className="text-base leading-8 text-[#5f6b76] md:text-lg">{t.expIntro}</p>
        </div>

        <div className="mt-10">
          <div className="text-sm text-[#5f6b76]">{t.startBy}</div>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {t.intents.map(([label, id]) => {
              const on = current.id === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    setTab("all");
                    pick(id);
                  }}
                  className={`rounded-full border px-4 py-2.5 text-sm font-medium transition ${on ? "border-[#0f2740] bg-[#0f2740] text-white" : "border-[#d9cfbd] bg-white text-[#0f2740] hover:border-[#c8a46a]"}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex gap-1 overflow-x-auto border-b border-[#e3d9c7]" role="tablist">
          {tabs.map(([id, label, count]) => {
            const on = tab === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => setTab(id)}
                className={`-mb-px shrink-0 border-b-2 px-4 py-3.5 text-[15px] ${on ? "border-[#c8a46a] font-semibold text-[#0f2740]" : "border-transparent text-[#5f6b76]"}`}
              >
                {label} <span className="text-xs opacity-60">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            {visible.map((s) => {
              const on = s.id === current.id;
              const n = SERVICES.indexOf(s) + 1;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => pick(s.id)}
                  aria-pressed={on}
                  className={`flex w-full items-center gap-5 border-b border-[#e3d9c7] px-4 py-4 text-left transition md:py-5 ${on ? "rounded-2xl bg-white text-[#0f2740] shadow-[0_12px_30px_rgba(15,39,64,0.10)]" : "text-[#3a4550] hover:text-[#0f2740]"}`}
                >
                  <span className={`w-7 shrink-0 text-[13px] font-semibold tracking-wider ${on ? "text-[#8a6a37]" : "text-[#a3acb3]"}`}>
                    {String(n).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-serif text-[20px] leading-tight md:text-[24px]">{s.text[lang].title}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border ${on ? "border-[#0f2740] bg-[#0f2740] text-[#c8a46a]" : "border-[#d9cfbd] text-[#8a939b]"}`}
                    aria-hidden="true"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>

          <div ref={panelRef} className="scroll-mt-24 overflow-hidden rounded-[26px] bg-[#0f2740] text-white shadow-[0_30px_60px_rgba(15,39,64,0.22)] lg:sticky lg:top-28">
            <div className="relative h-[170px]">
              <Image src={current.img} alt="" fill className="object-cover object-[75%_18%]" sizes="(max-width: 1024px) 100vw, 600px" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0f2740]/15 to-[#0f2740]" />
              <span className="absolute left-8 top-6 rounded-full bg-[#c8a46a] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#0f2740]">
                {PILLARS[current.pillar][lang]}
              </span>
            </div>
            <div className="px-7 pb-9 md:px-10">
              <div className="text-sm font-semibold tracking-wide text-[#c8a46a]">{x.title}</div>
              <p className="pt-2 font-serif text-[26px] leading-tight md:text-[32px]">{x.promise}</p>
              <p className="pt-5 text-base leading-8 text-white/85">{x.what}</p>

              <div className="pt-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8a46a]">{t.howWeWork}</div>
              <ol className="mt-3 grid gap-3 sm:grid-cols-3">
                {x.steps.map((step, k) => (
                  <li key={step} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                    <div className="font-serif text-xl text-[#c8a46a]">0{k + 1}</div>
                    <div className="pt-1 text-sm leading-6 text-white/90">{step}</div>
                  </li>
                ))}
              </ol>

              <ul className="mt-6 grid gap-x-5 gap-y-2.5 border-t border-white/15 pt-5 sm:grid-cols-2">
                {x.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-6 text-white/85">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {x.proof.map((p) => (
                  <span key={p} className="rounded-full border border-[#c8a46a]/50 px-3 py-1.5 text-xs text-[#e9d3ab]">{p}</span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={CONSULT_HREF[lang]} className="inline-flex items-center justify-center rounded-full bg-[#c8a46a] px-6 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#d6b57f]">
                  {t.talk}
                </Link>
                <Link href={serviceHref(current, lang)} className="inline-flex items-center justify-center rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition hover:border-[#c8a46a]">
                  {t.seeArea}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 rounded-[20px] border border-[#e8dfd0] bg-white p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="text-base text-[#0f2740] md:text-[17px]">
            <b className="font-semibold">{t.noFitTitle}</b> <span className="text-[#5f6b76]">{t.noFitText}</span>
          </p>
          <Link href={CONSULT_HREF[lang]} className="inline-flex shrink-0 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold" style={{ backgroundColor: "#0f2740", color: "#ffffff" }}>
            {t.consult}
          </Link>
        </div>
      </div>
    </section>
  );
}
