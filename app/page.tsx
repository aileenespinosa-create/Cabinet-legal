import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ImageWithFallback, LogoFallback } from "@/components/ImageWithFallback";

const LOGO_IMAGE = "/logo-cabinet-legal.jpg";

export const metadata: Metadata = {
  title: "Firma de Abogados en República Dominicana | Cabinet Legal",
  description:
    "Asesoramos empresas, inversionistas y clientes locales e internacionales en derecho corporativo, inmobiliario, litigios, propiedad intelectual y servicios empresariales.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#D9BE3F]/40 bg-[#D9BE3F]/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#0A3A5A]">
                Cabinet Legal
              </div>

              <h1 className="max-w-4xl text-5xl font-serif font-semibold leading-tight text-[#0A3A5A] md:text-7xl">
                Firma de abogados en República Dominicana
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Asesoramos empresas, inversionistas y clientes locales e internacionales en derecho
                corporativo, inmobiliario, litigios, propiedad intelectual y servicios empresariales.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/consulta"
                  className="rounded-full bg-[#0A3A5A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Agendar consulta
                </Link>

                <Link
                  href="/servicios"
                  className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:border-[#0A3A5A] hover:text-[#0A3A5A]"
                >
                  Ver servicios
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              <div className="rounded-[32px] border border-slate-200 bg-[#FBFBF8] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <ImageWithFallback
                  src={LOGO_IMAGE}
                  alt="Cabinet Legal logo"
                  className="mx-auto w-full max-w-md object-contain"
                  fallback={<LogoFallback />}
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[28px] bg-[#0A3A5A] p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
                  <div className="mt-3 text-2xl font-serif">
                    Asesoría legal estratégica para decisiones relevantes
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    En Cabinet Legal combinamos criterio jurídico, visión de negocio y ejecución precisa
                    para proteger operaciones, activos y crecimiento empresarial.
                  </p>
                </div>

                <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Contacto</div>
                  <div className="mt-3 text-lg font-semibold text-[#0A3A5A]">info@cabinetlegal.com.do</div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}