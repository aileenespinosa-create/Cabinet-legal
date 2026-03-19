"use client";

import Image from "next/image";
import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-[#e8dfd0] bg-[rgba(251,248,243,0.95)] backdrop-blur sticky top-0 z-50">
      <div className="container-legal py-4 md:py-5">
        <div className="flex items-center justify-between gap-8">

          {/* LOGO + NOMBRE */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-cabinet-legal.jpg"
              alt="Cabinet Legal"
              width={56}
              height={56}
              className="h-10 w-auto object-contain md:h-12"
            />
            <div>
              <div className="text-[11px] font-semibold tracking-[0.18em] text-[#0f2740] md:text-sm md:tracking-[0.24em]">
                CABINET LEGAL
              </div>
              <div className="text-[9px] uppercase tracking-[0.16em] text-[#8b94a0] md:text-[11px] md:tracking-[0.22em]">
                Attorneys at law
              </div>
            </div>
          </Link>

          {/* MENÚ DESKTOP */}
          <nav className="hidden items-center gap-8 text-[15px] text-[#48525d] lg:flex">
            <Link href="/firma" className="hover:text-[#0f2740]">
              La Firma
            </Link>
            <Link href="/socios" className="hover:text-[#0f2740]">
              Socios
            </Link>
            <Link href="/servicios" className="hover:text-[#0f2740]">
              Servicios
            </Link>
            <Link href="/registro-de-marcas" className="hover:text-[#0f2740]">
              Marcas
            </Link>
            <Link href="/blog" className="hover:text-[#0f2740]">
              Blog
            </Link>
            <Link href="/consulta" className="hover:text-[#0f2740]">
              Consulta
            </Link>
          </nav>
        </div>

        {/* MENÚ MOBILE */}
        <nav className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-[#48525d] lg:hidden">
          <Link href="/firma">La Firma</Link>
          <Link href="/socios">Socios</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/registro-de-marcas">Marcas</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/consulta">Consulta</Link>
        </nav>
      </div>
    </header>
  );
}