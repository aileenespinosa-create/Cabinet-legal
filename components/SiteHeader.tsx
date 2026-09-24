"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ES = [
  { href: "/firma", label: "La firma" },
  { href: "/servicios", label: "Servicios" },
  { href: "/inversion-extranjera", label: "Inversión Extranjera" },
  { href: "/socios", label: "Socios" },
  { href: "/blog", label: "Blog" },
];

const NAV_EN = [
  { href: "/en/firma", label: "The Firm" },
  { href: "/en/servicios", label: "Services" },
  { href: "/en/inversion-extranjera", label: "Foreign Investment" },
  { href: "/en/socios", label: "Partners" },
  { href: "/blog", label: "Blog" },
];

const NAV_FR = [
  { href: "/fr/firma", label: "Le Cabinet" },
  { href: "/fr/servicios", label: "Services" },
  { href: "/fr/inversion-extranjera", label: "Investissement étranger" },
  { href: "/fr/socios", label: "Associés" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const isFrench = pathname === "/fr" || pathname.startsWith("/fr/");
  const nav = isEnglish ? NAV_EN : isFrench ? NAV_FR : NAV_ES;

  // Path to switch to Spanish (strip the /en or /fr prefix).
  const esPath =
    pathname === "/en" || pathname === "/fr"
      ? "/"
      : pathname.replace(/^\/(en|fr)/, "") || "/";

  // Path to switch to English (prepend /en, or land on /en homepage
  // for pages that don't yet have an English version).
  const englishEquivalents: Record<string, string> = {
    "/": "/en",
    "/firma": "/en/firma",
    "/servicios": "/en/servicios",
    "/socios": "/en/socios",
    "/consulta": "/en/consulta",
    "/inversion-extranjera": "/en/inversion-extranjera",
    "/guia-inversion": "/en/guia-inversion",
    "/fr/guia-inversion": "/en/guia-inversion",
    "/fr": "/en",
    "/fr/firma": "/en/firma",
    "/fr/servicios": "/en/servicios",
    "/fr/socios": "/en/socios",
    "/fr/consulta": "/en/consulta",
    "/fr/inversion-extranjera": "/en/inversion-extranjera",
  };
  const enPath = isEnglish
    ? pathname
    : englishEquivalents[pathname] ?? "/en";

  // Path to switch to French (prepend /fr, or land on /fr homepage
  // for pages that don't yet have a French version).
  const frenchEquivalents: Record<string, string> = {
    "/": "/fr",
    "/firma": "/fr/firma",
    "/servicios": "/fr/servicios",
    "/socios": "/fr/socios",
    "/consulta": "/fr/consulta",
    "/inversion-extranjera": "/fr/inversion-extranjera",
    "/guia-inversion": "/fr/guia-inversion",
    "/en/guia-inversion": "/fr/guia-inversion",
    "/en": "/fr",
    "/en/firma": "/fr/firma",
    "/en/servicios": "/fr/servicios",
    "/en/socios": "/fr/socios",
    "/en/consulta": "/fr/consulta",
    "/en/inversion-extranjera": "/fr/inversion-extranjera",
  };
  const frPath = isFrench
    ? pathname
    : frenchEquivalents[pathname] ?? "/fr";

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `nav-link ${isActive(path) ? "active-link" : ""}`;

  const consultaHref = isEnglish
    ? "/en/consulta"
    : isFrench
    ? "/fr/consulta"
    : "/consulta";
  const consultaLabel = isEnglish
    ? "Consultation"
    : isFrench
    ? "Consultation"
    : "Consulta";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8ecef] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link href={isEnglish ? "/en" : isFrench ? "/fr" : "/"}>
          <Image
            src="/logo-cabinet-legal.jpg"
            alt="Cabinet Legal"
            width={150}
            height={40}
          />
        </Link>

        {/* DESKTOP */}
        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex items-center gap-8 text-[13px] uppercase tracking-[0.08em] text-[#0f2740]">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={linkClass(item.href)}>
                {item.label}
              </Link>
            ))}
          </nav>
          {/* 🌍 LANGUAGE */}
          <div className="flex items-center gap-2 text-xs text-[#5f6b76]">
            <Link href={esPath} className={!isEnglish && !isFrench ? "font-semibold text-[#0f2740]" : ""}>
              ES
            </Link>
            <span>/</span>
            <Link href={enPath} className={isEnglish ? "font-semibold text-[#0f2740]" : ""}>
              EN
            </Link>
            <span>/</span>
            <Link href={frPath} className={isFrench ? "font-semibold text-[#0f2740]" : ""}>
              FR
            </Link>
          </div>

          <Link
            href={consultaHref}
            className="rounded-full px-5 py-2 text-sm font-semibold"
            style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
          >
            {consultaLabel}
          </Link>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t bg-white p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-2 text-xs text-[#5f6b76]">
              <Link href={esPath}>ES</Link>
              <span>/</span>
              <Link href={enPath}>EN</Link>
              <span>/</span>
              <Link href={frPath}>FR</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
