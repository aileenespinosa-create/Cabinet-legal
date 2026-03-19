import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "La Firma | Cabinet Legal",
  description:
    "Cabinet Legal es una firma boutique en República Dominicana enfocada en asesoría jurídica sofisticada con atención directa de socios.",
};

export default function FirmaPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
              <h1 className="mb-6 mt-4 text-4xl font-serif font-semibold text-[#0A3A5A]">
                La Firma
              </h1>
              <div className="h-[2px] w-16 bg-[#D9BE3F]" />
            </div>

            <div className="space-y-6 text-lg leading-8 text-slate-600">
              <p>
                Cabinet Legal es una firma legal independiente con enfoque boutique, diseñada para
                ofrecer asesoría jurídica sofisticada con atención directa de socios.
              </p>
              <p>
                Acompañamos decisiones empresariales relevantes, procesos de crecimiento y escenarios
                de conflicto con una visión que integra derecho, estrategia y operación.
              </p>
              <p>
                Nuestra práctica prioriza precisión técnica, comunicación clara y ejecución oportuna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}