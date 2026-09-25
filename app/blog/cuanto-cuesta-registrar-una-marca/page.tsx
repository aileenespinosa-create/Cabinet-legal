import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cuánto cuesta registrar una marca en República Dominicana",
  description:
    "Cuánto cuesta registrar una marca en República Dominicana: el costo depende del tipo de marca, el número de clases y la estructura de su solicitud ante ONAPI.",
  alternates: {
    canonical:
      "https://cabinetlegal.com.do/blog/cuanto-cuesta-registrar-una-marca",
  },
  openGraph: {
    title: "Cuánto cuesta registrar una marca en República Dominicana | Cabinet Legal",
    description:
      "Cuánto cuesta registrar una marca en República Dominicana: el costo depende del tipo de marca, el número de clases y la estructura de su solicitud ante ONAPI.",
    url: "https://cabinetlegal.com.do/blog/cuanto-cuesta-registrar-una-marca",
    siteName: "Cabinet Legal",
    images: [
      {
        url: "https://cabinetlegal.com.do/blog-legal.jpg",
        width: 1536,
        height: 1024,
        alt: "Costo de registrar una marca en República Dominicana",
      },
    ],
    locale: "es_DO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuánto cuesta registrar una marca en República Dominicana | Cabinet Legal",
    description:
      "Cuánto cuesta registrar una marca en República Dominicana: el costo depende del tipo de marca, el número de clases y la estructura de su solicitud ante ONAPI.",
    images: ["https://cabinetlegal.com.do/blog-legal.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿De qué depende el costo del registro de una marca en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Depende del tipo de marca (denominativa, mixta o figurativa), el número de clases, la actividad comercial y la complejidad del caso, incluyendo posibles oposiciones o requerimientos de ONAPI.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por qué no es recomendable estimar el costo sin evaluación previa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Intentar determinar el costo sin una revisión previa puede conducir a errores en la clasificación, duplicidad de registros o conflictos con marcas existentes.",
      },
    },
  ],
};

export default function Article() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="container-legal py-16 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative flex min-h-[340px] items-end md:min-h-[360px]">
            <Image
              src="/blog-legal.jpg"
              alt="Costo de registrar una marca en República Dominicana"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="relative z-10 w-full p-6 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                Cuánto cuesta registrar una marca en República Dominicana
              </h1>
            </div>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="article-content">
              <p>
                Una de las preguntas más frecuentes al iniciar el proceso de registro de
                una marca en República Dominicana es cuánto cuesta. Sin embargo, a
                diferencia de otros trámites, el costo no es fijo.
              </p>

              <p>
                El valor del registro depende de varios factores propios de cada caso,
                por lo que conviene analizar debidamente la situación antes de
                iniciar el proceso.
              </p>

              <h2>¿De qué depende el costo del registro?</h2>
              <p>
                El costo de registrar una marca ante la Oficina Nacional de la Propiedad
                Industrial (ONAPI) varía principalmente en función de los siguientes
                elementos:
              </p>

              <ul>
                <li>
                  <strong>Tipo de marca:</strong> si se trata de una marca denominativa,
                  mixta o figurativa.
                </li>
                <li>
                  <strong>Número de clases:</strong> cada clase adicional implica un
                  costo independiente.
                </li>
                <li>
                  <strong>Actividad comercial:</strong> la clasificación correcta influye
                  directamente en el alcance del registro.
                </li>
                <li>
                  <strong>Complejidad del caso:</strong> posibles oposiciones o
                  requerimientos de ONAPI pueden generar costos adicionales.
                </li>
              </ul>

              <h2>Costos oficiales y consideraciones</h2>
              <p>
                ONAPI establece tasas oficiales para la solicitud, publicación y emisión
                del certificado de registro. No obstante, el costo total del proceso
                dependerá de cómo se estructure la solicitud y del número de clases
                involucradas.
              </p>

              <p>
                Una estrategia mal definida puede generar gastos adicionales o incluso el
                rechazo del registro.
              </p>

              <h2>¿Por qué no es recomendable estimar el costo sin evaluación?</h2>
              <p>
                Intentar determinar el costo sin una revisión previa puede conducir a
                errores en la clasificación, duplicidad de registros o conflictos con
                marcas existentes.
              </p>

              <p>
                Por esta razón, es recomendable realizar una evaluación legal antes de
                iniciar el proceso.
              </p>

              <h2>Recomendación profesional</h2>
              <p>
                Cada marca requiere un análisis individual. Evaluar correctamente el tipo
                de marca, la actividad comercial y el alcance de protección es lo que
                permite determinar el costo real del registro.
              </p>

              <div className="mt-12 rounded-2xl bg-[#0f2740] p-8 text-white">
                <h3 className="text-xl font-semibold">
                  ¿Desea conocer el costo exacto de registrar su marca?
                </h3>

                <p className="mt-3 text-slate-200">
                  En Cabinet Legal analizamos su caso, verificamos la disponibilidad de
                  su marca y le indicamos el costo real del proceso según su actividad y
                  el alcance de protección que necesita.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/consulta"
                    className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0f2740]"
                  >
                    Solicitar evaluación
                  </Link>

                  <Link
                    href="/blog/como-registrar-una-marca-republica-dominicana"
                    className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white"
                  >
                    Ver guía completa
                  </Link>
                </div>
              </div>

              <p className="mt-8">
                Conozca en detalle nuestro servicio de{" "}
                <Link
                  href="/registro-de-marcas"
                  className="font-semibold text-[#0f2740] underline"
                >
                  registro de marcas en República Dominicana
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}