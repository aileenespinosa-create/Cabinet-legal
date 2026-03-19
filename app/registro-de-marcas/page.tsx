import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro de marcas | Cabinet Legal",
  description:
    "Acompañamiento legal en registro de marcas en República Dominicana: evaluación, clasificación, presentación y seguimiento ante ONAPI.",
  alternates: {
    canonical: "https://www.cabinetlegal.com.do/registro-de-marcas",
  },
};

export default function RegistroDeMarcasPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[200px] sm:h-[260px] md:h-[360px]">
            <Image
              src="/hero-legal.jpg"
              alt="Registro de marcas en República Dominicana"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:mt-3 md:text-5xl">
                Registro de marcas
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">
                Protegemos la identidad comercial de tu negocio con estrategia,
                precisión técnica y acompañamiento integral.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">¿Qué hacemos?</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              Acompañamos todo el proceso de registro ante ONAPI.
            </h2>
            <div className="gold-line mt-6" />
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="space-y-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              <p>
                El registro de una marca exige una evaluación correcta del signo,
                la clasificación adecuada y una estrategia que reduzca riesgos de
                rechazo o conflicto.
              </p>
              <p>
                En Cabinet Legal ofrecemos acompañamiento integral para que el
                proceso se gestione con claridad y seguridad desde el inicio.
              </p>
              <p>
                Analizamos disponibilidad, alcance de protección y estructura del
                expediente antes de presentar la solicitud.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-3">
          <article className="card-legal p-6 md:p-8">
            <div className="eyebrow">Paso 1</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Evaluación inicial
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Revisamos la marca, tu actividad comercial y el alcance de protección
              que realmente necesitas.
            </p>
          </article>

          <article className="card-legal p-6 md:p-8">
            <div className="eyebrow">Paso 2</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Clasificación y estrategia
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Definimos la clasificación correcta y estructuramos la solicitud de
              forma clara y técnicamente sólida.
            </p>
          </article>

          <article className="card-legal p-6 md:p-8">
            <div className="eyebrow">Paso 3</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Presentación y seguimiento
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Presentamos el expediente ante ONAPI y damos seguimiento al proceso
              hasta su conclusión.
            </p>
          </article>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <div className="eyebrow">Consulta</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
            ¿Quieres registrar tu marca con estrategia legal?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Podemos revisar tu caso, evaluar disponibilidad y orientarte sobre la
            mejor vía para proteger tu marca en República Dominicana.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>
            <Link
              href="/blog/como-registrar-una-marca-republica-dominicana"
              className="btn-secondary-legal"
            >
              Ver guía completa
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}