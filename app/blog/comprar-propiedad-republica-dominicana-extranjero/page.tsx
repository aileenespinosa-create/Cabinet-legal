import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import GuideBanner from "@/components/GuideBanner";

export const metadata: Metadata = {
  title: "Cómo Comprar Propiedad en República Dominicana Siendo Extranjero",
  description:
    "Guía legal para comprar bienes raíces en República Dominicana siendo extranjero: requisitos, due diligence de título, cierre notarial y errores que debes evitar.",
  alternates: {
    canonical:
      "https://cabinetlegal.com.do/blog/comprar-propiedad-republica-dominicana-extranjero",
  },
  openGraph: {
    title:
      "Cómo comprar propiedad en República Dominicana siendo extranjero | Cabinet Legal",
    description:
      "Guía legal para comprar bienes raíces en República Dominicana siendo extranjero: requisitos, due diligence de título, cierre notarial y errores que debes evitar.",
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
      "Cómo comprar propiedad en República Dominicana siendo extranjero | Cabinet Legal",
    description:
      "Guía legal para comprar bienes raíces en República Dominicana siendo extranjero: requisitos, due diligence de título, cierre notarial y errores que debes evitar.",
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
        text: "No. La Ley 16-95 de Inversión Extranjera permite a un extranjero no residente comprar, poseer y vender bienes inmuebles en las mismas condiciones que un dominicano.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo comprar sin viajar a República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, mediante un poder especial otorgado a tu abogado, quien te representa en la due diligence, la firma del contrato y el cierre notarial.",
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
              alt="Comprar propiedad en República Dominicana siendo extranjero"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
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
                exige residencia ni un socio dominicano para comprar. Pero
                &quot;puedes comprar&quot; no es lo mismo que &quot;deberías
                comprar sin protección legal&quot;. Esta guía resume lo que
                un comprador extranjero debe saber antes de firmar.
              </p>

              <h2>1. No necesitas residencia, pero sí necesitas due diligence</h2>
              <p>
                La Ley 16-95 de Inversión Extranjera da a la inversión
                extranjera el mismo tratamiento que a la inversión nacional.
                Puedes comprar, poseer y vender inmuebles como cualquier
                dominicano. Lo que la ley no hace por ti es verificar que el
                vendedor sea realmente el titular registrado, que el
                inmueble esté libre de hipotecas y embargos, y que los
                linderos coincidan con el certificado de título. Eso lo
                confirma una due diligence de título ante la Jurisdicción
                Inmobiliaria, antes de comprometer un solo dólar.
              </p>

              <h2>2. El proceso, en términos generales</h2>
              <p>
                Todo empieza con una oferta o carta de intención, seguida de
                un contrato de promesa de venta que fija precio, plazo y
                condiciones. Mientras se completa la due diligence, se
                verifica que el vendedor esté al día con el Impuesto sobre
                la Propiedad Inmobiliaria (IPI). El cierre se formaliza ante
                notario, con firma personal o mediante poder especial si no
                puedes estar presente en el país. Después se paga el
                impuesto de transferencia (3% del valor, salvo exención) y
                se registra el nuevo título a tu nombre.
              </p>

              <h2>3. CONFOTUR puede reducir tu carga fiscal</h2>
              <p>
                Si la propiedad está dentro de un proyecto con clasificación
                CONFOTUR vigente (Ley 158-01 de Fomento al Desarrollo
                Turístico), puedes calificar para exención del impuesto de
                transferencia y del IPI durante el período que otorgue el
                decreto. No todos los proyectos que se anuncian como
                &quot;CONFOTUR&quot; tienen la aprobación vigente y aplicable
                a tu unidad específica — confírmalo antes de comprar, no
                después.
              </p>

              <h2>4. Errores comunes que vemos en compradores extranjeros</h2>
              <ul>
                <li>
                  Firmar un contrato de promesa de venta sin condición
                  suspensiva ligada al resultado de la due diligence.
                </li>
                <li>
                  Entregar un depósito sin que quede protegido
                  contractualmente si la operación no se concreta.
                </li>
                <li>
                  Asumir que un proyecto tiene beneficios CONFOTUR porque el
                  desarrollador lo dice, sin verificarlo de forma
                  independiente.
                </li>
                <li>
                  Cerrar sin un abogado propio, confiando únicamente en el
                  abogado o notario que trajo el vendedor o la
                  inmobiliaria.
                </li>
              </ul>

              <h2>5. Verificación técnica + estructuración legal</h2>
              <p>
                Antes de firmar, conviene separar dos trabajos distintos:
                verificar que el terreno o la propiedad es exactamente lo
                que promete (linderos, permisos, viabilidad del proyecto) y
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
                para la parte técnica, mientras Cabinet Legal estructura,
                negocia y ejecuta la compra legalmente.
              </p>

              <div className="mt-12 rounded-2xl bg-[#0f2740] p-8 text-white">
                <h3 className="text-xl font-semibold">
                  ¿Estás evaluando comprar propiedad en República Dominicana?
                </h3>

                <p className="mt-3 text-slate-200">
                  Revisamos el título, el contrato y la estructura de la
                  compra antes de que firmes, para que tomes la decisión con
                  información real, no con lo que dice el vendedor.
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
