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

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8ecef] bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link href="/" onClick={closeMenu} className="shrink-0">
          <Image
            src="/logo-cabinet-legal.jpg"
            alt="Cabinet Legal"
            width={150}
            height={38}
            className="h-auto w-[130px] sm:w-[150px]"
            priority
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8 text-[13px] uppercase tracking-[0.08em] text-[#0f2740]">
            <Link href="/firma" className={linkClass("/firma")}>
              La Firma
            </Link>

            <Link href="/socios" className={linkClass("/socios")}>
              Socios
            </Link>

            <Link href="/servicios" className={linkClass("/servicios")}>
              Servicios
            </Link>

            <Link
              href="/registro-de-marcas"
              className={linkClass("/registro-de-marcas")}
            >
              Marcas
            </Link>

            <Link href="/blog" className={linkClass("/blog")}>
              Blog
            </Link>
          </nav>

          <Link
            href="/consulta"
            className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold shadow-sm"
            style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
          >
            Solicitar consulta
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#dfe5ea] bg-white text-[#0f2740] md:hidden"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-[#e8ecef] bg-white md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-4 py-4 sm:px-6">
            <Link
              href="/firma"
              onClick={closeMenu}
              className={`rounded-xl px-3 py-3 text-sm font-medium ${
                isActive("/firma") ? "bg-[#f5efe4] text-[#0f2740]" : "text-[#0f2740]"
              }`}
            >
              La Firma
            </Link>

            <Link
              href="/socios"
              onClick={closeMenu}
              className={`rounded-xl px-3 py-3 text-sm font-medium ${
                isActive("/socios") ? "bg-[#f5efe4] text-[#0f2740]" : "text-[#0f2740]"
              }`}
            >
              Socios
            </Link>

            <Link
              href="/servicios"
              onClick={closeMenu}
              className={`rounded-xl px-3 py-3 text-sm font-medium ${
                isActive("/servicios") ? "bg-[#f5efe4] text-[#0f2740]" : "text-[#0f2740]"
              }`}
            >
              Servicios
            </Link>

            <Link
              href="/registro-de-marcas"
              onClick={closeMenu}
              className={`rounded-xl px-3 py-3 text-sm font-medium ${
                isActive("/registro-de-marcas") ? "bg-[#f5efe4] text-[#0f2740]" : "text-[#0f2740]"
              }`}
            >
              Marcas
            </Link>

            <Link
              href="/blog"
              onClick={closeMenu}
              className={`rounded-xl px-3 py-3 text-sm font-medium ${
                isActive("/blog") ? "bg-[#f5efe4] text-[#0f2740]" : "text-[#0f2740]"
              }`}
            >
              Blog
            </Link>

            <Link
              href="/consulta"
              onClick={closeMenu}
              className="mt-3 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold shadow-sm"
              style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
            >
              Solicitar consulta
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}