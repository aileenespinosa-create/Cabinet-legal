import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Firma de Abogados en Santo Domingo, República Dominicana",
  description:
    "Cabinet Legal es una firma de abogados en Santo Domingo, República Dominicana, con enfoque corporativo, estratégico y atención directa de socios para clientes locales y extranjeros.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/firma",
    languages: {
      "x-default": "https://cabinetlegal.com.do/firma",
      "es-DO": "https://cabinetlegal.com.do/firma",
      en: "https://cabinetlegal.com.do/en/firma",
      fr: "https://cabinetlegal.com.do/fr/firma",
    },
  },
};

export default function FirmaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

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
                Cabinet Legal es una firma legal independiente en Santo Domingo,
                República Dominicana, fundada en 2009. Asesoramos a empresas,
                inversionistas extranjeros y clientes privados en compras de
                bienes raíces, estructuración societaria, fusiones y
                adquisiciones, registro de marcas y litigios de alto impacto.
              </p>
              <p>
                Atendemos en español, inglés y francés, lo que nos permite
                acompañar directamente a clientes que compran, invierten o
                litigan en República Dominicana sin residir en el país.
              </p>
              <p>
                Contamos con un equipo de más de siete abogados asociados,
                organizados por área de práctica y dirigidos por nuestros
                socios, Aileen Espinosa y Ellis Beato. Cada asunto lo dirige un
                socio desde la primera consulta hasta el cierre, y lo trabaja
                el abogado especializado en la materia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal">
          <div className="grid grid-cols-2 gap-6 border-y border-[#e6dece] py-8 md:grid-cols-4 md:py-10">
            <div>
              <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
                2009
              </div>
              <div className="mt-1 text-sm text-[#5f6b76]">
                Año de fundación
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
                11
              </div>
              <div className="mt-1 text-sm text-[#5f6b76]">
                Áreas de práctica especializadas
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
                3
              </div>
              <div className="mt-1 text-sm text-[#5f6b76]">
                Idiomas de atención: español, inglés y francés
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
                +7
              </div>
              <div className="mt-1 text-sm text-[#5f6b76]">
                Abogados asociados, dirigidos por dos socios
              </div>
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
              Antes de recomendar una vía legal, entendemos qué necesitas
              lograr como negocio o como inversionista, no solo qué documento
              hace falta firmar.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Método</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Precisión técnica
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Revisamos cada caso a fondo — título, contrato, estructura
              societaria o expediente migratorio — antes de actuar, para
              evitar sorpresas después de firmado.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Estándar</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Ejecución rigurosa
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Damos seguimiento activo a cada expediente ante la institución
              correspondiente (ONAPI, Migración, Registro de Títulos) hasta
              su cierre, no solo hasta la presentación.
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