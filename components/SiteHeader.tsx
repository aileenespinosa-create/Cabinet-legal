"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_ES = [
  { href: "/firma", label: "La firma" },
  { href: "/servicios", label: "Servicios" },
  { href: "/socios", label: "Socios" },
  { href: "/blog", label: "Blog" },
];

const NAV_EN = [
  { href: "/en/firma", label: "The Firm" },
  { href: "/en/servicios", label: "Services" },
  { href: "/en/socios", label: "Partners" },
  { href: "/blog", label: "Blog" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const nav = isEnglish ? NAV_EN : NAV_ES;

  // Path to switch to Spanish (strip the /en prefix).
  const esPath =
    pathname === "/en" ? "/" : pathname.replace(/^\/en/, "") || "/";

  // Path to switch to English (prepend /en, or land on /en homepage
  // for pages that don't yet have an English version).
  const englishEquivalents: Record<string, string> = {
    "/": "/en",
    "/firma": "/en/firma",
    "/servicios": "/en/servicios",
    "/socios": "/en/socios",
    "/consulta": "/en/consulta",
  };
  const enPath = isEnglish ? pathname : englishEquivalents[pathname] ?? "/en";

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `nav-link ${isActive(path) ? "active-link" : ""}`;

  const consultaHref = isEnglish ? "/en/consulta" : "/consulta";
  const consultaLabel = isEnglish ? "Consultation" : "Consulta";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8ecef] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link href={isEnglish ? "/en" : "/"}>
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
            <Link href={esPath} className={!isEnglish ? "font-semibold text-[#0f2740]" : ""}>
              ES
            </Link>
            <span>/</span>
            <Link href={enPath} className={isEnglish ? "font-semibold text-[#0f2740]" : ""}>
              EN
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
