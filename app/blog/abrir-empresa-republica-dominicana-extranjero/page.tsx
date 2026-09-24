import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cómo Abrir una Empresa en República Dominicana Siendo Extranjero",
  description:
    "Guía para constituir una empresa en República Dominicana desde el extranjero: SRL vs SA, registro mercantil, RNC y tiempos reales del proceso.",
  alternates: {
    canonical:
      "https://cabinetlegal.com.do/blog/abrir-empresa-republica-dominicana-extranjero",
  },
  openGraph: {
    title:
      "Cómo abrir una empresa en República Dominicana siendo extranjero | Cabinet Legal",
    description:
      "Guía para constituir una empresa en República Dominicana desde el extranjero: SRL vs SA, registro mercantil, RNC y tiempos reales del proceso.",
    url: "https://cabinetlegal.com.do/blog/abrir-empresa-republica-dominicana-extranjero",
    siteName: "Cabinet Legal",
    images: [
      {
        url: "https://cabinetlegal.com.do/blog-legal.jpg",
        width: 1536,
        height: 1024,
        alt: "Abrir una empresa en República Dominicana siendo extranjero",
      },
    ],
    locale: "es_DO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Cómo abrir una empresa en República Dominicana siendo extranjero | Cabinet Legal",
    description:
      "Guía para constituir una empresa en República Dominicana desde el extranjero: SRL vs SA, registro mercantil, RNC y tiempos reales del proceso.",
    images: ["https://cabinetlegal.com.do/blog-legal.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puedo constituir una empresa en República Dominicana sin viajar al país?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, el trámite puede iniciarse con poder desde el extranjero. No se requiere residencia ni nacionalidad dominicana para ser socio o accionista.",
      },
    },
    {
      "@type": "Question",
      name: "¿Debo elegir SRL o SA para mi empresa en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La SRL es la opción más simple y habitual para negocios pequeños y medianos; la SA es la forma recomendada para empresas de mayor tamaño o con planes de admitir múltiples inversionistas.",
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
              alt="Abrir una empresa en República Dominicana siendo extranjero"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                Cómo abrir una empresa en República Dominicana siendo
                extranjero
              </h1>
            </div>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="article-content">
              <p>
                Ni la residencia ni la nacionalidad dominicana son requisito
                para constituir una sociedad en República Dominicana. Lo que
                sí marca la diferencia entre un negocio bien estructurado y
                uno que genera problemas años después es la elección de la
                figura societaria correcta desde el inicio.
              </p>

              <h2>SRL o SA: la primera decisión que toca tomar</h2>
              <p>
                La Sociedad de Responsabilidad Limitada (SRL) es la forma
                más usada para negocios pequeños y medianos: mínimo dos
                socios, capital social reducido y gestión simple, con uno o
                varios gerentes en lugar de un consejo de administración. La
                Sociedad Anónima (SA) exige mínimo dos accionistas y un
                consejo de administración, con un régimen de gobierno
                corporativo más formal — es la estructura recomendada para
                empresas de mayor envergadura o con planes de admitir
                inversionistas adicionales más adelante.
              </p>

              <h2>El proceso, paso a paso</h2>
              <ul>
                <li>
                  <strong>Reserva de nombre comercial</strong> ante la
                  Oficina Nacional de la Propiedad Industrial.
                </li>
                <li>
                  <strong>Redacción de estatutos</strong> adaptados al
                  negocio real, no una plantilla genérica.
                </li>
                <li>
                  <strong>Registro mercantil</strong> ante la Cámara de
                  Comercio correspondiente.
                </li>
                <li>
                  <strong>Obtención del RNC</strong> (Registro Nacional de
                  Contribuyentes) ante la DGII.
                </li>
                <li>
                  <strong>Apertura de cuenta bancaria corporativa</strong>,
                  el paso que más varía en tiempo según la entidad
                  financiera elegida.
                </li>
              </ul>
              <p>
                Con la documentación en regla, la constitución y el registro
                mercantil suelen tomar entre dos y cuatro semanas, sin
                contar el tiempo de apertura de cuenta bancaria.
              </p>

              <h2>Un socio nominal no significa perder el control</h2>
              <p>
                La SRL exige un mínimo de dos socios, lo que lleva a algunos
                inversionistas extranjeros a asumir que necesitan un socio
                dominicano con participación real. No es así: puedes ser
                socio mayoritario de facto y administrar la sociedad
                directamente o mediante apoderado, sin que ninguna ley exija
                que la administración esté a cargo de un residente.
              </p>

              <h2>Errores que encarecen el proceso después</h2>
              <p>
                Los problemas más comunes no aparecen al constituir la
                empresa, sino meses o años después: estatutos genéricos que
                no contemplan cómo se resuelven los desacuerdos entre
                socios, ausencia de un acuerdo de socios que regule salidas
                y derechos de preferencia, o una estructura societaria
                elegida sin pensar en cómo se va a financiar o vender el
                negocio en el futuro.
              </p>

              <div className="mt-12 rounded-2xl bg-[#0f2740] p-8 text-white">
                <h3 className="text-xl font-semibold">
                  ¿Vas a constituir una empresa en República Dominicana?
                </h3>

                <p className="mt-3 text-slate-200">
                  Evaluamos tu operación y tus socios antes de recomendar la
                  estructura, y redactamos estatutos adaptados a tu negocio,
                  no formularios estándar.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/consulta"
                    className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0f2740]"
                  >
                    Solicitar consulta
                  </Link>

                  <Link
                    href="/formacion-de-empresas"
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
