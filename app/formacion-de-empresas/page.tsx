import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Formación de Empresas en República Dominicana para Extranjeros",
  description:
    "Abre tu empresa en República Dominicana desde el extranjero: elección entre SRL y SA, registro mercantil, RNC y estructura legal completa para inversionistas y emprendedores.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/formacion-de-empresas",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo abrir una empresa en República Dominicana sin ser residente?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. No se requiere residencia ni nacionalidad dominicana para constituir una sociedad ni para ser socio o accionista de una empresa dominicana. El trámite puede iniciarse con poder desde el extranjero.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre una SRL y una SA en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La SRL (Sociedad de Responsabilidad Limitada) exige un mínimo de dos socios y un capital social menor, con una estructura de gestión más simple, adecuada para PYMES y negocios familiares. La SA (Sociedad Anónima) exige un mínimo de dos accionistas y un consejo de administración, y es la forma habitual para empresas de mayor tamaño, con planes de levantar capital o admitir múltiples inversionistas.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma constituir una empresa en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Con la documentación en regla, el proceso de constitución y registro mercantil suele tomar entre dos y cuatro semanas, sin contar el tiempo de apertura de cuenta bancaria, que depende de cada entidad financiera.",
      },
    },
  ],
};

export default function FormacionDeEmpresasPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />

      {/* HERO */}
      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[220px] sm:h-[280px] md:h-[380px]">
            <Image
              src="/hero-legal.jpg"
              alt="Formación de empresas en República Dominicana para extranjeros"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Constituye tu empresa en República Dominicana con la
                estructura correcta desde el inicio
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                Acompañamos a extranjeros y emprendedores en la elección de la
                estructura societaria, la constitución y el registro de su
                empresa, sin necesidad de residencia previa.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/consulta" className="btn-primary-legal">
                  Solicitar consulta
                </Link>

                <a
                  href="https://wa.me/18295420615?text=Hola%2C%20quiero%20constituir%20una%20empresa%20en%20Rep%C3%BAblica%20Dominicana%20y%20necesito%20asesor%C3%ADa%20legal."
                  target="_blank"
                  className="btn-secondary-legal"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-2">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Riesgo frecuente</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Elegir la estructura societaria equivocada tiene consecuencias
              que aparecen años después.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Un tipo societario mal elegido, estatutos genéricos sin
              adaptarse al negocio real, o socios extranjeros que no
              entienden sus obligaciones de gobierno corporativo en
              República Dominicana, generan fricciones internas y problemas
              de cumplimiento que podían evitarse desde la constitución.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Nuestra solución</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Estructura societaria pensada para tu negocio, no una plantilla
              genérica.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              En Cabinet Legal evaluamos tu operación, tus socios y tus planes
              de crecimiento antes de recomendar el tipo societario, y
              redactamos estatutos y acuerdos de socios adaptados a tu caso,
              no formularios estándar.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-3">
          <div className="card-legal p-6">
            <div className="eyebrow">Paso 1</div>
            <h3 className="mt-3 text-xl font-semibold">
              Elección de estructura
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Analizamos el número de socios, el plan de negocio y la
              necesidad futura de capital para recomendar entre SRL, SA u
              otra figura societaria disponible.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 2</div>
            <h3 className="mt-3 text-xl font-semibold">
              Constitución y registro
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Redactamos los estatutos, gestionamos la reserva de nombre
              comercial, el registro mercantil ante la Cámara de Comercio y
              la obtención del Registro Nacional de Contribuyentes (RNC).
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 3</div>
            <h3 className="mt-3 text-xl font-semibold">
              Puesta en marcha
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Coordinamos la apertura de cuenta bancaria corporativa, los
              registros laborales y fiscales necesarios para operar, y
              dejamos a la empresa lista para facturar y contratar.
            </p>
          </div>
        </div>
      </section>

      {/* PROFUNDIDAD: SRL VS SA */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">SRL o SA</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Qué estructura societaria conviene a un extranjero que invierte
              en República Dominicana.
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>

          <div className="space-y-5 text-[#5f6b76] leading-7">
            <p>
              La Sociedad de Responsabilidad Limitada (SRL) es la forma
              societaria más utilizada en República Dominicana para negocios
              pequeños y medianos. Requiere un mínimo de dos socios, tiene un
              capital social mínimo reducido y una gestión relativamente
              simple, con uno o varios gerentes en lugar de un consejo de
              administración. Es la opción habitual para negocios
              familiares, franquicias, comercios y prestación de servicios.
            </p>
            <p>
              La Sociedad Anónima (SA) exige un mínimo de dos accionistas y
              un consejo de administración, con un régimen de gobierno
              corporativo más formal: asambleas, actas y libros societarios
              con mayores exigencias. Es la estructura recomendada para
              empresas de mayor envergadura, negocios con planes de admitir
              inversionistas adicionales, o actividades reguladas que exigen
              esta figura societaria específicamente.
            </p>
            <p>
              Ninguna ley dominicana exige que el capital de una SRL o una SA
              esté en manos de socios dominicanos, ni que la administración
              esté a cargo de un residente. Un extranjero puede ser socio
              único de facto en una SRL constituida con un segundo socio
              nominal, o accionista mayoritario en una SA, y administrar la
              sociedad directamente o mediante apoderado.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Link href="/consulta" className="btn-primary-legal">
                Solicitar consulta legal
              </Link>
              <Link href="/servicios" className="btn-secondary-legal">
                Ver todos los servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COSTO */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-10">
          <div className="eyebrow">Costo</div>

          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
            ¿Cuánto cuesta constituir una empresa en República Dominicana?
          </h2>

          <p className="mt-4 max-w-2xl text-[#5f6b76] leading-7">
            El costo varía según el tipo societario, el capital declarado y
            los trámites adicionales que requiera tu negocio (permisos
            sectoriales, registros especiales). Te damos un presupuesto claro
            luego de conocer tu caso.
          </p>

          <div className="mt-6">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar presupuesto
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-[#0f2740]">
            Empieza tu negocio en República Dominicana con la base legal
            correcta
          </h2>

          <p className="mt-4 max-w-2xl text-[#5f6b76]">
            Puedes iniciar el proceso de constitución desde el extranjero,
            con poder notarial, sin necesidad de viajar antes de tener la
            empresa lista.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>

            <a
              href="https://wa.me/18295420615?text=Hola%2C%20quiero%20constituir%20una%20empresa%20en%20Rep%C3%BAblica%20Dominicana%20y%20necesito%20asesor%C3%ADa%20legal."
              target="_blank"
              className="btn-secondary-legal"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
