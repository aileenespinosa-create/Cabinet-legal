import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GuideBanner from "@/components/GuideBanner";

export const metadata: Metadata = {
  title: "Residencia por inversión en República Dominicana: guía 2026",
  description:
    "Residencia por inversión en República Dominicana: conozca las vías disponibles (inmobiliaria, empresarial o financiera), requisitos, plazos y errores comunes.",
  alternates: {
    canonical:
      "https://cabinetlegal.com.do/blog/residencia-por-inversion-republica-dominicana",
  },
  openGraph: {
    title:
      "Residencia por inversión en República Dominicana: guía 2026 | Cabinet Legal",
    description:
      "Residencia por inversión en República Dominicana: conozca las vías disponibles (inmobiliaria, empresarial o financiera), requisitos, plazos y errores comunes.",
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
      "Residencia por inversión en República Dominicana: conozca las vías disponibles (inmobiliaria, empresarial o financiera), requisitos, plazos y errores comunes.",
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
        text: "Bienes raíces, un negocio establecido en el país o una cuenta a plazo fijo en una entidad financiera local, por el monto mínimo que establece la normativa vigente.",
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
          <div className="relative flex min-h-[340px] items-end md:min-h-[360px]">
            <Image
              src="/hero-legal.jpg"
              alt="Residencia por inversión en República Dominicana"
              fill
              className="object-cover object-[center_18%]"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="relative z-10 w-full p-6 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                Residencia por inversión en República Dominicana: guía 2026
              </h1>
            </div>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="article-content">
              <p>
                Muchos compradores de inmuebles e inversionistas extranjeros
                en República Dominicana descubren, ya avanzada la compra o
                el negocio, que también pueden calificar para la residencia
                legal. Esta guía resume las vías disponibles y lo que usted
                puede esperar del proceso.
              </p>

              <h2>Las tres vías más comunes</h2>
              <p>
                La <strong>residencia por inversión</strong> está disponible
                para quienes inviertan en bienes raíces, en un negocio
                establecido en el país o en una cuenta a plazo fijo en una
                entidad financiera local, por el monto mínimo que exige la
                normativa vigente. La <strong>residencia por pensión o
                renta</strong> está dirigida a jubilados y rentistas con
                ingresos fijos y verificables desde el extranjero. Y la{" "}
                <strong>residencia por vínculo laboral o familiar</strong>{" "}
                aplica a quienes son contratados por una empresa dominicana,
                administran una sociedad local o tienen vínculo matrimonial
                o familiar con un residente o nacional dominicano.
              </p>

              <h2>Plazos realistas</h2>
              <p>
                El proceso comienza con el visado de residencia en el
                consulado dominicano. Ya en el país, con el expediente
                completo, la Dirección General de Migración suele resolver la
                residencia en unos dos a tres meses. La residencia temporal se
                renueva cada año y, tras cinco años, puede solicitarse la
                permanente; el inversionista que cumple los requisitos puede
                acceder directamente a la residencia permanente.
                Los plazos más largos casi siempre obedecen a documentos
                apostillados de forma incorrecta o a la elección de una vía
                migratoria equivocada desde el inicio, no al trámite en sí.
              </p>

              <h2>Documentos que suelen generar demoras</h2>
              <ul>
                <li>
                  Certificado de no antecedentes penales del país de origen,
                  sin apostillar o con apostilla vencida.
                </li>
                <li>
                  Certificado médico que no se ajusta al formato exigido
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
                para formalizar la contratación del extranjero. Si usted
                proyecta trabajar o dirigir una empresa en el país, conviene
                tramitar ambos procesos en paralelo desde el inicio.
              </p>

              <div className="mt-12 rounded-2xl bg-[#0f2740] p-8 text-white">
                <h3 className="text-xl font-semibold">
                  ¿Desea saber qué vía de residencia se ajusta a su caso?
                </h3>

                <p className="mt-3 text-slate-200">
                  Evaluamos su situación (inversión, pensión, vínculo
                  laboral o familiar) y le indicamos con precisión qué
                  documentos necesita y cuánto puede tomar el proceso.
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
      <GuideBanner lang="es" />

    </main>
  );
}
