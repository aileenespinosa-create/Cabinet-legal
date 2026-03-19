import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Registro de Marcas en República Dominicana | Cabinet Legal",
  description:
    "Protege tu marca en República Dominicana con acompañamiento legal ante ONAPI. Registro de marcas, oposiciones, cancelaciones y defensa de derechos.",
};

export default function RegistroDeMarcasPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
            <h1 className="mt-4 text-4xl font-serif font-semibold text-[#0A3A5A] md:text-5xl">
              Registro de marcas en República Dominicana
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Protege tu marca legalmente y evita conflictos futuros. Te acompañamos en todo el proceso
              ante ONAPI con un enfoque estratégico, no solo operativo.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/consulta"
                className="rounded-full bg-[#0A3A5A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Agendar consulta
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-[#FBFBF8] p-8 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-[#0A3A5A]">¿Por qué registrar tu marca?</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Muchas empresas operan sin registrar su marca y descubren demasiado tarde que un tercero ya
                solicitó o registró un signo similar. Registrar tu marca protege uno de los activos más
                importantes de tu negocio.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-[#0A3A5A]">
                Protección legal con visión estratégica
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                No solo gestionamos solicitudes: ayudamos a reducir riesgos, prevenir conflictos y fortalecer
                la protección jurídica de tu negocio en el mercado dominicano.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-[#0A3A5A]">¿Cómo te ayudamos?</h2>
              <p className="mt-4 leading-8 text-slate-600">
                En Cabinet Legal acompañamos a nuestros clientes en todas las etapas relacionadas con
                protección marcaria en República Dominicana.
              </p>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li>• Búsqueda de disponibilidad de marca</li>
                <li>• Solicitud de registro ante ONAPI</li>
                <li>• Oposición a solicitudes conflictivas</li>
                <li>• Cancelación de marcas o nombres comerciales</li>
                <li>• Defensa de derechos de propiedad intelectual</li>
              </ul>
            </div>

            <div className="rounded-[28px] bg-[#0A3A5A] p-8 text-white shadow-sm">
              <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">ONAPI</div>
              <h2 className="mt-4 text-2xl font-serif font-semibold">Proceso de registro</h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
                <div>1. Evaluación inicial de la marca</div>
                <div>2. Búsqueda de antecedentes y viabilidad</div>
                <div>3. Presentación de solicitud ante ONAPI</div>
                <div>4. Publicación y período de oposición</div>
                <div>5. Emisión del certificado de registro</div>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-[32px] border border-[#D9BE3F]/30 bg-[#D9BE3F]/10 p-10 text-center">
            <h2 className="text-2xl font-serif font-semibold text-[#0A3A5A]">
              Protege tu marca hoy. Agenda una consulta y recibe acompañamiento legal en todo el proceso.
            </h2>
            <Link
              href="/consulta"
              className="mt-6 inline-block rounded-full bg-[#0A3A5A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Agendar consulta
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}