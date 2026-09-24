import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residencia por Inversión en República Dominicana: Guía 2026",
  description:
    "Cómo obtener la residencia en República Dominicana por inversión inmobiliaria, negocio o cuenta a plazo: requisitos, tiempos y errores comunes en el proceso.",
  alternates: {
    canonical:
      "https://cabinetlegal.com.do/blog/residencia-por-inversion-republica-dominicana",
  },
  openGraph: {
    title:
      "Residencia por inversión en República Dominicana: guía 2026 | Cabinet Legal",
    description:
      "Cómo obtener la residencia en República Dominicana por inversión inmobiliaria, negocio o cuenta a plazo: requisitos, tiempos y errores comunes en el proceso.",
    url: "https://cabinetlegal.com.do/blog/residencia-por-inversion-republica-dominicana",
    siteName: "Cabinet Legal",
    images: [
      {
        url: "https://cabinetlegal.com.do/blog-legal.jpg",
        width: 1536,
        height: 1024,
        alt: "Residencia por inversión en República Dominicana",
      },
    ],
    locale: "es_DO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Residencia por inversión en República Dominicana: guía 2026 | Cabinet Legal",
    description:
      "Cómo obtener la residencia en República Dominicana por inversión inmobiliaria, negocio o cuenta a plazo: requisitos, tiempos y errores comunes en el proceso.",
    images: ["https://cabinetlegal.com.do/blog-legal.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Qué inversiones califican para la residencia por inversión en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bienes raíces, un negocio establecido en el país, o una cuenta a plazo fijo en una entidad financiera local, por el monto mínimo que establece la normativa vigente.",
      },
    },
    {
      "@type": "Question",
      name: "¿La residencia por inversión me obliga a vivir en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No exige residencia física permanente, pero sí el cumplimiento de los requisitos de renovación y presencia que establece la categoría migratoria correspondiente.",
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
          <div className="relative h-[280px] md:h-[360px]">
            <Image
              src="/hero-legal.jpg"
              alt="Residencia por inversión en República Dominicana"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                Residencia por inversión en República Dominicana: guía 2026
              </h1>
            </div>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="article-content">
              <p>
                Muchos compradores de propiedad e inversionistas extranjeros
                en República Dominicana descubren, ya avanzada la compra o
                el negocio, que también pueden calificar para la residencia
                legal. Esta guía resume las vías disponibles y qué esperar
                del proceso.
              </p>

              <h2>Las tres vías más comunes</h2>
              <p>
                La <strong>residencia por inversión</strong> está disponible
                para quienes inviertan en bienes raíces, en un negocio
                establecido en el país, o en una cuenta a plazo fijo en una
                entidad financiera local, por el monto mínimo que exige la
                normativa vigente. La <strong>residencia por pensión o
                renta</strong> está dirigida a jubilados y rentistas con
                ingresos fijos y verificables desde el extranjero. Y la{" "}
                <strong>residencia por vínculo laboral o familiar</strong>{" "}
                aplica a quienes son contratados por una empresa dominicana,
                administran una sociedad local, o tienen vínculo matrimonial
                o familiar con un residente o nacional dominicano.
              </p>

              <h2>Tiempos realistas</h2>
              <p>
                Con el expediente completo, la residencia provisional suele
                tomar entre tres y seis meses. La residencia definitiva se
                solicita después de mantener la provisional durante el
                período que exige la categoría migratoria correspondiente.
                Los plazos más largos casi siempre se deben a documentos sin
                apostillar correctamente o a la vía migratoria equivocada
                elegida desde el inicio, no al trámite en sí.
              </p>

              <h2>Documentos que suelen generar demoras</h2>
              <ul>
                <li>
                  Certificado de no antecedentes penales del país de origen,
                  sin apostillar o con apostilla vencida.
                </li>
                <li>
                  Certificado médico que no cumple con el formato exigido
                  por la Dirección General de Migración.
                </li>
                <li>
                  Prueba de ingresos o de la inversión que no coincide
                  exactamente con la vía migratoria solicitada.
                </li>
              </ul>

              <h2>Residencia no es lo mismo que permiso de trabajo</h2>
              <p>
                La residencia legal es el requisito habilitante para
                trabajar o ser socio de una empresa en República Dominicana,
                pero el empleador debe además cumplir con los registros
                laborales correspondientes ante el Ministerio de Trabajo
                para formalizar la contratación del extranjero. Si tu plan
                es trabajar o dirigir una empresa localmente, vale la pena
                resolver ambos trámites en paralelo desde el inicio.
              </p>

              <div className="mt-12 rounded-2xl bg-[#0f2740] p-8 text-white">
                <h3 className="text-xl font-semibold">
                  ¿Quieres saber qué vía de residencia se ajusta a tu caso?
                </h3>

                <p className="mt-3 text-slate-200">
                  Evaluamos tu situación (inversión, pensión, vínculo
                  laboral o familiar) y te decimos exactamente qué
                  documentos necesitas y cuánto puede tomar el proceso.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/consulta"
                    className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0f2740]"
                  >
                    Solicitar consulta
                  </Link>

                  <Link
                    href="/residencia-y-permisos-de-trabajo"
                    className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white"
                  >
                    Ver servicio completo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
