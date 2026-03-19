import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios | Cabinet Legal",
  description:
    "Servicios legales de Cabinet Legal en República Dominicana: corporativo, litigios, propiedad intelectual y registro de marcas.",
  alternates: {
    canonical: "https://www.cabinetlegal.com.do/servicios",
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
    <main className="min-h-screen overflow-x-hidden">
      <section className="container-legal py-10 md:py-20">
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
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:mt-3 md:text-5xl">
                Servicios
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">
                Asesoría legal estratégica para empresas, inversionistas y clientes
                privados en República Dominicana.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="card-legal p-6 md:p-8">
              <div className="eyebrow">Servicio</div>
              <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#0f2740] md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <div className="eyebrow">Contacto</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
            ¿Necesitas orientación legal?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Podemos evaluar tu situación y recomendarte el servicio legal más adecuado
            según tu necesidad y tus objetivos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>
            <Link href="/registro-de-marcas" className="btn-secondary-legal">
              Ver registro de marcas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}