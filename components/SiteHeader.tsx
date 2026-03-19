"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type SiteHeaderProps = {
  internal?: boolean;
};

export default function SiteHeader({ internal = false }: SiteHeaderProps) {
  const router = useRouter();

  return (
    <header className="border-b border-[#e8dfd0] bg-[rgba(251,248,243,0.94)] backdrop-blur">
      <div className="container-legal py-4 md:py-5">
        <div className="flex items-center justify-between gap-8">
          <div className="flex min-w-0 items-center gap-4">
            {internal && (
              <button
                type="button"
                onClick={() => router.back()}
                className="hidden h-10 items-center justify-center rounded-full border border-[#e8dfd0] bg-white px-4 text-sm font-medium text-[#0f2740] transition hover:border-[#c8a46a] md:inline-flex"
                aria-label="Volver"
              >
                ← Volver
              </button>
            )}

            <Link href="/" className="flex min-w-0 items-center gap-3">
              <Image
                src="/logo-cabinet-legal.jpg"
                alt="Cabinet Legal"
                width={56}
                height={56}
                className="h-10 w-auto object-contain md:h-12"
              />
              <div className="min-w-0">
                <div className="truncate text-[11px] font-semibold tracking-[0.18em] text-[#0f2740] md:text-sm md:tracking-[0.24em]">
                  CABINET LEGAL
                </div>
                <div className="truncate text-[9px] uppercase tracking-[0.16em] text-[#8b94a0] md:text-[11px] md:tracking-[0.22em]">
                  Attorneys at law
                </div>
              </div>
            </Link>
          </div>

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

        <div className="mt-4 flex items-center justify-between gap-4 lg:hidden">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-[12px] text-[#48525d]">
            <Link href="/firma">La Firma</Link>
            <Link href="/socios">Socios</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/registro-de-marcas">Marcas</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/consulta">Consulta</Link>
          </nav>

          {internal && (
            <button
              type="button"
              onClick={() => router.back()}
              className="inline-flex h-9 items-center justify-center rounded-full border border-[#e8dfd0] bg-white px-3 text-sm font-medium text-[#0f2740]"
              aria-label="Volver"
            >
              ←
            </button>
          )}
        </div>
      </div>
    </header>
  );
}