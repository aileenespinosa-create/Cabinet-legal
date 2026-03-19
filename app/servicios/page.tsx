import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "La Firma | Cabinet Legal",
  description:
    "Cabinet Legal es una firma de abogados en República Dominicana con enfoque corporativo, estratégico y atención directa de socios.",
};

export default function FirmaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader internal />

      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[220px] md:h-[360px]">
            <Image src="/hero-legal.jpg" alt="Cabinet Legal" fill className="object-cover" />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-2 text-3xl md:text-5xl font-semibold">
                La Firma
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="container-legal pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-legal p-8">
            <h2 className="text-3xl font-semibold text-[#0f2740]">
              Atención boutique, ejecución rigurosa.
            </h2>
            <div className="gold-line mt-6" />
          </div>

          <div className="card-legal p-8 text-[#5f6b76] leading-8">
            <p>
              Cabinet Legal es una firma legal independiente diseñada para ofrecer
              asesoría sofisticada con atención directa de socios.
            </p>
            <p className="mt-4">
              Integramos derecho, estrategia y operación para acompañar decisiones
              empresariales relevantes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}