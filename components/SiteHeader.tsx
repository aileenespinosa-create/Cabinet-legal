import Link from "next/link";
import { ImageWithFallback, LogoFallback } from "./ImageWithFallback";

const LOGO_IMAGE = "/logo-cabinet-legal.jpg";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-4">
          <ImageWithFallback
            src={LOGO_IMAGE}
            alt="Cabinet Legal"
            className="h-12 w-auto object-contain"
            fallback={<LogoFallback />}
          />
        </Link>

        <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.2em] text-slate-600">
          <Link href="/" className="transition hover:text-[#0A3A5A]">Inicio</Link>
          <Link href="/firma" className="transition hover:text-[#0A3A5A]">La Firma</Link>
          <Link href="/socios" className="transition hover:text-[#0A3A5A]">Socios</Link>
          <Link href="/servicios" className="transition hover:text-[#0A3A5A]">Servicios</Link>
          <Link href="/registro-de-marcas" className="transition hover:text-[#0A3A5A]">Marcas</Link>
          <Link href="/consulta" className="transition hover:text-[#0A3A5A]">Consulta</Link>
        </nav>
      </div>
    </header>
  );
}