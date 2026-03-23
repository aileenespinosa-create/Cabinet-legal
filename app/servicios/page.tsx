import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Servicios | Cabinet Legal",
  description:
    "Servicios legales de Cabinet Legal en República Dominicana: corporativo, litigios, propiedad intelectual y registro de marcas.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/servicios",
  },
};

const services = [
  {
    title: "Derecho corporativo",
    description:
      "Asesoría en estructuración de negocios, contratos, gobierno corporativo y acompañamiento jurídico en decisiones empresariales relevantes.",
  },
  {
    title: "Propiedad intelectual",
    description:
      "Protección de marcas, estrategia registral, defensa de activos intangibles y acompañamiento en asuntos de propiedad industrial.",
  },
  {
    title: "Litigios y disputas",
    description:
      "Representación en controversias civiles y comerciales con enfoque estratégico, claridad técnica y ejecución rigurosa.",
  },
  {
    title: "Registro de marcas",
    description:
      "Evaluación de disponibilidad, clasificación, presentación de solicitudes y seguimiento integral ante ONAPI.",
  },
];

export default function ServiciosPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfaf6]">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-12 pb-14 md:pt-20 md:pb-20">
        <div className="container-legal">

          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Cabinet Legal
            </div>

            <h1 className="text-4xl font-light tracking-tight text-[#0f2740] md:text-5xl">
              Servicios
            </h1>

            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />

            <p className="mt-6 text-base leading-8 text-[#5f6b76] md:text-lg">
              Asesoría legal estratégica para empresas, inversionistas y clientes
              privados en República Dominicana.
            </p>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative h-[200px] sm:h-[260px] md:h-[360px]">
              <Image
                src="/hero-legal.jpg"
                alt="Servicios legales Cabinet Legal"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="hero-image-overlay absolute inset-0" />
            </div>
          </div>

        </div>
      </section>

      {/* SERVICIOS */}
      <section className="pb-14 md:pb-24">
        <div className="container-legal grid gap-5 md:grid-cols-2">

          {services.map((service) => (
            <article
              key={service.title}
              className="card-legal p-6 transition hover:-translate-y-[2px] md:p-9"
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Servicio
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-[#0f2740] md:text-3xl">
                {service.title}
              </h2>

              <p className="mt-4 leading-8 text-[#5f6b76]">
                {service.description}
              </p>
            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container-legal">
          <div className="card-legal p-6 md:p-12">

            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Consulta
            </div>

            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              ¿Necesitas orientación legal?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6b76] md:text-lg">
              Podemos evaluar tu situación y recomendarte el servicio legal más adecuado
              según tu necesidad y tus objetivos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
              <Link href="/consulta" className="btn-primary-legal">
                Solicitar consulta
              </Link>

              <Link href="/registro-de-marcas" className="btn-secondary-legal">
                Ver registro de marcas
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
