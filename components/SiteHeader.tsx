"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PILLARS, SERVICES, serviceHref, type Lang, type PillarId } from "@/lib/services";

type NavItem = { href: string; label: string; services?: boolean };

const NAV: Record<Lang, NavItem[]> = {
  es: [
    { href: "/firma", label: "La firma" },
    { href: "/servicios", label: "Servicios", services: true },
    { href: "/inversion-extranjera", label: "Inversión extranjera" },
    { href: "/socios", label: "Equipo" },
    { href: "/blog", label: "Publicaciones" },
    { href: "/unete", label: "Únete" },
  ],
  en: [
    { href: "/en/firma", label: "The Firm" },
    { href: "/en/servicios", label: "Services", services: true },
    { href: "/en/inversion-extranjera", label: "Foreign Investment" },
    { href: "/en/socios", label: "Team" },
    { href: "/blog", label: "Insights" },
    { href: "/en/unete", label: "Careers" },
  ],
  fr: [
    { href: "/fr/firma", label: "Le Cabinet" },
    { href: "/fr/servicios", label: "Services", services: true },
    { href: "/fr/inversion-extranjera", label: "Investissement étranger" },
    { href: "/fr/socios", label: "Équipe" },
    { href: "/blog", label: "Publications" },
    { href: "/fr/unete", label: "Carrières" },
  ],
};

const UI: Record<Lang, { consult: string; consultHref: string; allAreas: string; notSure: string; notSureText: string; menu: string }> = {
  es: { consult: "Consulta", consultHref: "/consulta", allAreas: "Ver todas las áreas", notSure: "¿No sabes qué área necesitas?", notSureText: "Cuéntanos tu caso y un socio te orienta.", menu: "Abrir menú" },
  en: { consult: "Consultation", consultHref: "/en/consulta", allAreas: "See all areas", notSure: "Not sure which area you need?", notSureText: "Tell us about your matter and a partner will guide you.", menu: "Open menu" },
  fr: { consult: "Consultation", consultHref: "/fr/consulta", allAreas: "Voir tous les domaines", notSure: "Vous ne savez pas quel domaine choisir ?", notSureText: "Expliquez-nous votre dossier, un associé vous oriente.", menu: "Ouvrir le menu" },
};

// Pages whose address differs only by the language prefix.
const SHARED = ["/", "/firma", "/servicios", "/socios", "/consulta", "/inversion-extranjera", "/guia-inversion", "/unete", "/privacidad"];

function languageOf(pathname: string): Lang {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/fr" || pathname.startsWith("/fr/")) return "fr";
  return "es";
}

function switchTo(pathname: string, from: Lang, to: Lang): string {
  const bare = from === "es" ? pathname : pathname.replace(/^\/(en|fr)/, "") || "/";
  const prefix = to === "es" ? "" : `/${to}`;
  if (SHARED.includes(bare)) return bare === "/" ? prefix || "/" : `${prefix}${bare}`;
  const svc = bare.match(/^\/servicios\/([^/]+)$/);
  if (svc) {
    const s = SERVICES.find((x) => x.slug[from] === svc[1]);
    if (s) return serviceHref(s, to);
  }
  const custom = SERVICES.find((x) => x.custom?.[from] === pathname);
  if (custom) return serviceHref(custom, to);
  return prefix || "/";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const lang = languageOf(pathname);
  const nav = NAV[lang];
  const ui = UI[lang];
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMegaSoon = () => {
    closeTimer.current = setTimeout(() => setMega(false), 150);
  };

  const isActive = (href: string) =>
    href === "/servicios" || href.endsWith("/servicios")
      ? pathname === href || pathname.startsWith(`${href}/`)
      : pathname === href;
  const linkClass = (href: string) => `nav-link ${isActive(href) ? "active-link" : ""}`;
  const pillars: PillarId[] = ["ni", "pp", "ld"];

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b border-[#e8ecef] bg-white/95 backdrop-blur-md"
      onClickCapture={(e) => {
        // Close the menus once the visitor follows a link.
        if ((e.target as HTMLElement).closest("a")) {
          setOpen(false);
          setMega(false);
        }
      }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={lang === "es" ? "/" : `/${lang}`} className="shrink-0">
          <Image src="/logo-cabinet-legal.jpg" alt="Cabinet Legal" width={150} height={40} priority />
        </Link>

        {/* DESKTOP */}
        <div className="hidden items-center gap-6 lg:flex">
          <nav aria-label="Principal" className="flex items-center gap-7 text-[12.5px] uppercase tracking-[0.08em] text-[#0f2740]">
            {nav.map((item) =>
              item.services ? (
                <div key={item.href} className="relative" onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
                  <Link
                    href={item.href}
                    className={`${linkClass(item.href)} inline-flex items-center gap-1.5`}
                    aria-expanded={mega}
                    aria-haspopup="true"
                    onFocus={openMega}
                  >
                    {item.label}
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={`transition-transform ${mega ? "rotate-180" : ""}`}>
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  </Link>
                </div>
              ) : (
                <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="flex items-center gap-2 text-xs text-[#5f6b76]">
            <Link href={switchTo(pathname, lang, "es")} className={lang === "es" ? "font-semibold text-[#0f2740]" : ""}>ES</Link>
            <span>/</span>
            <Link href={switchTo(pathname, lang, "en")} className={lang === "en" ? "font-semibold text-[#0f2740]" : ""}>EN</Link>
            <span>/</span>
            <Link href={switchTo(pathname, lang, "fr")} className={lang === "fr" ? "font-semibold text-[#0f2740]" : ""}>FR</Link>
          </div>

          <Link href={ui.consultHref} className="rounded-full px-5 py-2 text-sm font-semibold" style={{ backgroundColor: "#0f2740", color: "#ffffff" }}>
            {ui.consult}
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full text-[#0f2740] lg:hidden"
          aria-expanded={open}
          aria-label={ui.menu}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
            {open ? <path d="M5 5l12 12M17 5L5 17" /> : <path d="M3 6h16M3 11h16M3 16h16" />}
          </svg>
        </button>
      </div>

      {/* MEGA MENU */}
      {mega && (
        <div className="absolute left-0 right-0 top-full hidden lg:block" onMouseEnter={openMega} onMouseLeave={closeMegaSoon}>
          <div className="mx-auto max-w-[1280px] px-8">
            <div className="grid grid-cols-[repeat(3,minmax(0,1fr))_280px] gap-8 rounded-b-[20px] border border-t-0 border-[#e8dfd0] bg-white p-9 shadow-[0_24px_48px_rgba(15,39,64,0.10)]">
              {pillars.map((p) => (
                <div key={p}>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a6a37]">{PILLARS[p][lang]}</div>
                  <ul className="mt-4 space-y-3">
                    {SERVICES.filter((s) => s.pillar === p).map((s) => (
                      <li key={s.id}>
                        <Link href={serviceHref(s, lang)} className="text-[15px] text-[#0f2740] transition hover:text-[#8a6a37]">
                          {s.text[lang].title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col gap-3 rounded-2xl bg-[#0f2740] p-6 text-white">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#c8a46a]">{ui.notSure}</div>
                <div className="font-serif text-xl leading-snug">{ui.notSureText}</div>
                <Link href={ui.consultHref} className="text-sm font-semibold text-[#c8a46a]">
                  {ui.consult} →
                </Link>
                <Link href={nav[1].href} className="mt-auto text-xs text-white/70 underline underline-offset-4">
                  {ui.allAreas}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MOBILE MENU */}
      {open && (
        <div className="max-h-[calc(100vh-80px)] overflow-y-auto border-t border-[#e8ecef] bg-white px-6 py-5 lg:hidden">
          <nav aria-label="Principal" className="flex flex-col text-[#0f2740]">
            {nav.map((item) =>
              item.services ? (
                <div key={item.href} className="border-b border-[#eef0f2]">
                  <button
                    type="button"
                    onClick={() => setMobileServices(!mobileServices)}
                    aria-expanded={mobileServices}
                    className="flex w-full items-center justify-between py-3.5 text-left text-base"
                  >
                    {item.label}
                    <svg width="12" height="8" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" className={mobileServices ? "rotate-180" : ""}>
                      <path d="M1 1l4 4 4-4" />
                    </svg>
                  </button>
                  {mobileServices && (
                    <div className="space-y-4 pb-4">
                      {pillars.map((p) => (
                        <div key={p}>
                          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8a6a37]">{PILLARS[p][lang]}</div>
                          <ul className="mt-2 space-y-2 pl-1">
                            {SERVICES.filter((s) => s.pillar === p).map((s) => (
                              <li key={s.id}>
                                <Link href={serviceHref(s, lang)} className="text-[15px] text-[#3a4550]">
                                  {s.text[lang].title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link href={item.href} className="inline-block text-sm font-semibold text-[#8a6a37]">
                        {ui.allAreas} →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="border-b border-[#eef0f2] py-3.5 text-base">
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-[#5f6b76]">
              <Link href={switchTo(pathname, lang, "es")} className={lang === "es" ? "font-semibold text-[#0f2740]" : ""}>ES</Link>
              <span>/</span>
              <Link href={switchTo(pathname, lang, "en")} className={lang === "en" ? "font-semibold text-[#0f2740]" : ""}>EN</Link>
              <span>/</span>
              <Link href={switchTo(pathname, lang, "fr")} className={lang === "fr" ? "font-semibold text-[#0f2740]" : ""}>FR</Link>
            </div>
            <Link href={ui.consultHref} className="rounded-full px-5 py-2.5 text-sm font-semibold" style={{ backgroundColor: "#0f2740", color: "#ffffff" }}>
              {ui.consult}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
