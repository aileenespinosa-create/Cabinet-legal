import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GuideBanner from "@/components/GuideBanner";

export const metadata: Metadata = {
  title: "Comprar propiedad en República Dominicana como extranjero",
  description:
    "Comprar propiedad en República Dominicana siendo extranjero: requisitos, debida diligencia del título, cierre notarial y errores que usted debe evitar.",
  alternates: {
    canonical:
      "https://cabinetlegal.com.do/blog/comprar-propiedad-republica-dominicana-extranjero",
  },
  openGraph: {
    title:
      "Comprar propiedad en República Dominicana como extranjero | Cabinet Legal",
    description:
      "Comprar propiedad en República Dominicana siendo extranjero: requisitos, debida diligencia del título, cierre notarial y errores que usted debe evitar.",
    url: "https://cabinetlegal.com.do/blog/comprar-propiedad-republica-dominicana-extranjero",
    siteName: "Cabinet Legal",
    images: [
      {
        url: "https://cabinetlegal.com.do/blog-legal.jpg",
        width: 1536,
        height: 1024,
        alt: "Comprar propiedad en República Dominicana siendo extranjero",
      },
    ],
    locale: "es_DO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Comprar propiedad en República Dominicana como extranjero | Cabinet Legal",
    description:
      "Comprar propiedad en República Dominicana siendo extranjero: requisitos, debida diligencia del título, cierre notarial y errores que usted debe evitar.",
    images: ["https://cabinetlegal.com.do/blog-legal.jpg"],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Necesito ser residente para comprar propiedad en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La Ley núm. 16-95 sobre Inversión Extranjera permite a un extranjero no residente comprar, poseer y vender bienes inmuebles en las mismas condiciones que un dominicano.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo comprar sin viajar a República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, mediante un poder especial otorgado a su abogado, quien actúa en su representación durante la debida diligencia (due diligence), la firma del contrato y el cierre notarial.",
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
              alt="Comprar propiedad en República Dominicana siendo extranjero"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="relative z-10 w-full p-6 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                Cómo comprar propiedad en República Dominicana siendo
                extranjero
              </h1>
            </div>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="article-content">
              <p>
                República Dominicana es uno de los mercados inmobiliarios más
                activos del Caribe para compradores extranjeros, y la ley no
                exige residencia ni un socio dominicano para adquirir
                inmuebles. Sin embargo, que usted &quot;pueda comprar&quot; no
                significa que &quot;deba comprar sin protección legal&quot;.
                Esta guía resume lo que todo comprador extranjero debe conocer
                antes de firmar.
              </p>

              <h2>1. No necesita residencia, pero sí una debida diligencia (due diligence)</h2>
              <p>
                La Ley núm. 16-95 sobre Inversión Extranjera otorga a la
                inversión extranjera el mismo tratamiento que a la inversión
                nacional. Usted puede comprar, poseer y vender inmuebles en
                las mismas condiciones que cualquier dominicano. Lo que la ley
                no hace por usted es verificar que el vendedor sea
                efectivamente el titular registrado, que el inmueble esté
                libre de hipotecas y embargos, y que los linderos coincidan
                con el certificado de título. Eso se confirma mediante una
                debida diligencia del título ante la Jurisdicción
                Inmobiliaria, antes de comprometer un solo dólar.
              </p>

              <h2>2. El proceso, en términos generales</h2>
              <p>
                Todo comienza con una oferta o carta de intención, seguida de
                un contrato de promesa de venta que fija el precio, el plazo y
                las condiciones. Mientras se completa la debida diligencia, se
                verifica que el vendedor esté al día con el Impuesto al
                Patrimonio Inmobiliario (IPI). El cierre se formaliza ante
                notario, con firma personal o mediante poder especial si usted
                no puede estar presente en el país. Posteriormente se paga el
                impuesto de transferencia inmobiliaria (3% del valor, salvo
                exención) y se registra el nuevo título a su nombre.
              </p>

              <h2>3. CONFOTUR puede reducir su carga fiscal</h2>
              <p>
                Si la propiedad forma parte de un proyecto con clasificación
                CONFOTUR vigente (Ley núm. 158-01 sobre Fomento al Desarrollo
                Turístico), usted puede calificar para la exención del
                impuesto de transferencia en la primera adquisición y del IPI,
                en los términos que establecen la Ley 158-01, sus
                modificaciones y la resolución de clasificación del proyecto,
                por un plazo que puede llegar a 15 años. La exención se
                tramita ante el Ministerio de Hacienda y la DGII. No todos los proyectos que se anuncian
                como &quot;CONFOTUR&quot; cuentan con una aprobación vigente y
                aplicable a su unidad específica: verifíquelo antes de
                comprar, no después.
              </p>

              <h2>4. Errores comunes que vemos en compradores extranjeros</h2>
              <ul>
                <li>
                  Suscribir un contrato de promesa de venta sin condición
                  suspensiva vinculada al resultado de la debida diligencia.
                </li>
                <li>
                  Entregar un depósito sin que quede protegido
                  contractualmente si la operación no se concreta.
                </li>
                <li>
                  Asumir que un proyecto goza de beneficios CONFOTUR porque el
                  desarrollador lo afirma, sin verificarlo de forma
                  independiente.
                </li>
                <li>
                  Cerrar sin un abogado propio, confiando únicamente en el
                  abogado o notario designado por el vendedor o la
                  inmobiliaria.
                </li>
              </ul>

              <h2>5. Verificación técnica y estructuración legal</h2>
              <p>
                Antes de firmar, conviene separar dos trabajos distintos:
                verificar que el terreno o la propiedad sea exactamente lo
                que se promete (linderos, permisos, viabilidad del proyecto) y
                estructurar la compra desde el punto de vista legal
                (contrato, cierre, registro). Trabajamos junto a{" "}
                <a
                  href="https://landconsultingdr.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0f2740] underline"
                >
                  Land Consulting DR
                </a>{" "}
                en la parte técnica, mientras Cabinet Legal estructura,
                negocia y ejecuta la compra en el plano jurídico.
              </p>

              <div className="mt-12 rounded-2xl bg-[#0f2740] p-8 text-white">
                <h3 className="text-xl font-semibold">
                  ¿Evalúa comprar una propiedad en República Dominicana?
                </h3>

                <p className="mt-3 text-slate-200">
                  Revisamos el título, el contrato y la estructura de la
                  compra antes de que usted firme, para que tome la decisión
                  con información verificada, no con lo que afirma el
                  vendedor.
                </p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Link
                    href="/consulta"
                    className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0f2740]"
                  >
                    Solicitar consulta
                  </Link>

                  <Link
                    href="/inversion-extranjera"
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
