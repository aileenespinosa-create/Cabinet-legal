"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "La Firma", href: "/firma" },
  { label: "Socios", href: "/socios" },
  { label: "Servicios", href: "/servicios" },
  { label: "Marcas", href: "/registro-de-marcas" },
  { label: "Blog", href: "/blog" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e9e2d7] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1180px] items-center justify-between gap-6 px-4 py-4 md:px-8 md:py-5">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src="/logo-cabinet-legal.jpg"
            alt="Cabinet Legal"
            className="h-10 w-auto object-contain md:h-12"
          />

          <div className="min-w-0 leading-tight">
            <div className="truncate text-[15px] font-semibold tracking-[0.18em] text-[#102942] md:text-[17px]">
              CABINET LEGAL
            </div>
            <div className="mt-1 truncate text-[10px] uppercase tracking-[0.32em] text-[#b9975b] md:text-[11px]">
              Attorneys at Law
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-[15px] font-medium text-[#304256] transition hover:text-[#102942]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/consulta"
            className="inline-flex items-center justify-center rounded-full bg-[#102942] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(16,41,66,0.14)] transition duration-300 hover:-translate-y-[1px] hover:bg-[#0b1f33]"
          >
            Solicitar consulta
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e6ddd0] bg-white text-[#102942] shadow-sm transition hover:border-[#cdb894] lg:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-[22px] leading-none">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-[#eee5d8] bg-white lg:hidden">
          <nav className="mx-auto flex max-w-[1180px] flex-col gap-1 px-4 py-4 md:px-8">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-2xl px-3 py-3 text-[15px] font-medium text-[#304256] transition hover:bg-[#faf7f2] hover:text-[#102942]"
            >
              Inicio
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-3 py-3 text-[15px] font-medium text-[#304256] transition hover:bg-[#faf7f2] hover:text-[#102942]"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/consulta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#102942] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(16,41,66,0.14)]"
            >
              Solicitar consulta
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}