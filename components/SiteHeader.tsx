"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    `nav-link ${isActive(path) ? "active-link" : ""}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e8ecef] bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/">
          <Image
            src="/logo-cabinet-legal.jpg"
            alt="Cabinet Legal"
            width={160}
            height={40}
          />
        </Link>

        <div className="flex items-center gap-8">
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
      </div>
    </header>
  );
}