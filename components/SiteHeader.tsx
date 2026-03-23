"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `nav-link ${isActive(path) ? "active-link" : ""}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8ecef] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LOGO */}
        <Link href="/">
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
  <Link href="/firma" className={linkClass("/firma")}>
    La firma
  </Link>

  <Link href="/servicios" className={linkClass("/servicios")}>
    Servicios
  </Link>

  <Link href="/socios" className={linkClass("/socios")}>
    Socios
  </Link>

  <Link href="/blog" className={linkClass("/blog")}>
    Blog
  </Link>
</nav>
          {/* 🌍 LANGUAGE */}
          <div className="flex items-center gap-2 text-xs text-[#5f6b76]">
            <Link href="/">ES</Link>
            <span>/</span>
            <Link href="/en">EN</Link>
            <span>/</span>
            <Link href="/fr">FR</Link>
          </div>

          <Link
            href="/consulta"
            className="rounded-full px-5 py-2 text-sm font-semibold"
            style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
          >
            Consulta
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
            <Link href="/">ES</Link>
            <Link href="/en">EN</Link>
            <Link href="/fr">FR</Link>
          </div>
        </div>
      )}
    </header>
  );
}
