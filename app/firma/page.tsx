import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "La Firma | Cabinet Legal",
  description:
    "Cabinet Legal es una firma de abogados en República Dominicana con enfoque corporativo, estratégico y atención directa de socios.",
  alternates: {
    canonical: "https://www.cabinetlegal.com.do/firma",
  },
};

export default function FirmaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[200px] sm:h-[260px] md:h-[360px]">
            <Image
              src="/hero-legal.jpg"
              alt="Cabinet Legal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:mt-3 md:text-5xl">
                La Firma
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">
                Asesoría legal sofisticada, visión estratégica y ejecución rigurosa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Nuestra visión</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              Atención boutique, criterio empresarial y enfoque en resultados.
            </h2>
            <div className="gold-line mt-6" />
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="space-y-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              <p>
                Cabinet Legal es una firma legal independiente en República Dominicana,
                orientada a ofrecer asesoría de alto nivel a empresas, inversionistas y
                clientes privados.
              </p>
              <p>
                Nuestra práctica combina derecho, estrategia y operación para acompañar
                decisiones empresariales relevantes con una visión clara, moderna y precisa.
              </p>
              <p>
                Trabajamos con atención directa de socios, comunicación impecable y un
                estándar de ejecución riguroso en cada asunto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-3">
          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Enfoque</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Cercanía estratégica
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Acompañamos a nuestros clientes con una visión práctica y jurídica alineada
              con sus objetivos reales.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Método</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Precisión técnica
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Analizamos cada caso con profundidad para construir soluciones claras,
              seguras y sostenibles.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Estándar</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Ejecución rigurosa
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Priorizamos orden, seguimiento y excelencia en la implementación de cada
              estrategia legal.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <div className="eyebrow">Contacto</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
            ¿Quieres conversar con nuestro equipo?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Podemos evaluar tu situación y orientarte sobre la estrategia legal más adecuada
            para tu empresa o proyecto.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>
            <Link href="/socios" className="btn-secondary-legal">
              Ver socios
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}