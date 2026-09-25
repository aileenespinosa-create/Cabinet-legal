import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import FaqAccordion from "@/components/FaqAccordion";
import { buildFaqSchema } from "@/components/faqSchema";

export const metadata: Metadata = {
  title: "Abogados de fusiones y adquisiciones en República Dominicana",
  description:
    "Abogados de fusiones y adquisiciones en República Dominicana: debida diligencia, estructuración, negociación y cierre de compraventas de empresas.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/fusiones-y-adquisiciones",
  },
};

const faqs = [
  {
    question: "¿Cuánto tiempo toma cerrar una adquisición en República Dominicana?",
    answer:
      "Depende del tamaño de la operación, de los hallazgos de la debida diligencia y de las autorizaciones que se requieran. Una empresa pequeña con la documentación en regla puede adquirirse en algunas semanas; las operaciones con activos regulados, financiamiento o varias jurisdicciones requieren más tiempo. Le damos un calendario concreto tras la revisión inicial.",
  },
  {
    question: "¿Puede un extranjero comprar una empresa dominicana directamente?",
    answer:
      "Sí. La Ley 16-95 sobre Inversión Extranjera permite la inversión extranjera directa sin necesidad de socio local en la generalidad de los sectores. La operación puede estructurarse como compra de cuotas sociales o acciones, o como compra de activos, según convenga al comprador.",
  },
  {
    question: "¿Qué revisa la debida diligencia legal antes de comprar una empresa?",
    answer:
      "Como mínimo: la situación societaria y de gobierno corporativo conforme a la Ley 479-08, el cumplimiento ante la DGII y en materia laboral, los contratos vigentes con clientes y proveedores, los litigios en curso o potenciales, los gravámenes sobre activos y el estado de los permisos y registros necesarios para operar, incluido el Registro Mercantil.",
  },
];

const faqSchema = buildFaqSchema(faqs);

export default function FusionesYAdquisicionesPage() {
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
          <div className="relative flex min-h-[340px] items-end sm:min-h-[280px] md:min-h-[380px]">
            <Image
              src="/hero-legal.jpg"
              alt="Abogados de fusiones y adquisiciones en República Dominicana"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="relative z-10 w-full p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Fusiones y adquisiciones en República Dominicana, de la oferta
                al cierre
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                Asesoramos a compradores, vendedores e inversionistas en
                fusiones y adquisiciones (M&amp;A) en República Dominicana:
                debida diligencia (due diligence), estructuración, negociación
                y cierre.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/consulta" className="btn-primary-legal">
                  Solicitar consulta
                </Link>

                <a
                  href="https://wa.me/18295420615?text=Hola%2C%20estoy%20evaluando%20una%20operaci%C3%B3n%20de%20fusiones%20y%20adquisiciones%20en%20Rep%C3%BAblica%20Dominicana%20y%20necesito%20asesor%C3%ADa%20legal."
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
              Una operación mal estructurada expone al comprador a pasivos que
              no aparecen en los estados financieros.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Contingencias laborales, fiscales o societarias, contratos con
              cláusulas de cambio de control no previstas o un cierre sin las
              garantías adecuadas pueden convertir una buena operación en un
              litigio costoso meses después de la firma.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Nuestro trabajo</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Debida diligencia completa y estructuración a la medida de la
              operación.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              En Cabinet Legal identificamos los riesgos antes de que se
              conviertan en pasivos, estructuramos la operación de la forma
              más conveniente para el comprador o el vendedor y negociamos las
              garantías, indemnizaciones y condiciones de cierre necesarias
              para proteger su posición. Un socio del despacho dirige cada
              operación.
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
              Debida diligencia legal
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Revisamos la situación societaria, fiscal, laboral, contractual
              y litigiosa de la empresa objetivo, e identificamos las
              contingencias que deben resolverse o reflejarse en el precio
              antes del cierre.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 2</div>
            <h3 className="mt-3 text-xl font-semibold">
              Estructuración y negociación
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Definimos si la operación se hace por compra de cuotas o
              acciones, o por compra de activos, y negociamos los términos
              del acuerdo de compraventa, las declaraciones y garantías, y
              los mecanismos de ajuste de precio.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 3</div>
            <h3 className="mt-3 text-xl font-semibold">
              Cierre e integración
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Coordinamos la firma, las inscripciones ante el Registro
              Mercantil y la DGII y las gestiones societarias posteriores al
              cierre, incluidos el otorgamiento de poderes y la renovación de
              los órganos de administración.
            </p>
          </div>
        </div>
      </section>

      {/* PROFUNDIDAD: ESTRUCTURAS Y MARCO LEGAL */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">Marco legal</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Cómo se estructura una compraventa de empresa en República
              Dominicana.
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>

          <div className="space-y-5 text-[#5f6b76] leading-7">
            <p>
              La Ley 16-95 sobre Inversión Extranjera y su reglamento de
              aplicación garantizan el mismo tratamiento legal a la inversión
              extranjera y a la inversión nacional, sin exigir un socio
              dominicano ni un porcentaje mínimo de capital local en la
              generalidad de los sectores económicos. Esto permite a un
              comprador extranjero adquirir el 100 % de una sociedad
              dominicana de forma directa.
            </p>
            <p>
              La operación puede estructurarse como compra de cuotas
              sociales o acciones, en la que se adquiere la sociedad con
              todos sus activos y pasivos, o como compra de activos, en la
              que se adquieren únicamente los bienes, contratos y clientes
              que interesan al comprador y, en principio, los pasivos
              permanecen en la sociedad vendedora. La elección entre una y otra depende del
              perfil de riesgo de la operación, del tratamiento fiscal
              aplicable y de la existencia de contratos, permisos o licencias
              que convenga preservar en cabeza de la sociedad.
            </p>
            <p>
              En operaciones con socios dominicanos que permanecen en la
              sociedad, negociamos también los pactos de socios: reglas
              de gobierno corporativo, mecanismos de salida, derechos de
              preferencia y cláusulas de no competencia.
            </p>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Link href="/consulta" className="btn-primary-legal">
                Solicitar consulta legal
              </Link>
              <Link
                href="/inversion-extranjera"
                className="btn-secondary-legal"
              >
                Ver inversión extranjera
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
            ¿Cuánto cuesta la asesoría legal en una operación de M&amp;A?
          </h2>

          <p className="mt-4 max-w-2xl text-[#5f6b76] leading-7">
            El costo depende del alcance de la debida diligencia, de la
            complejidad de la estructura y del tamaño de la operación.
            Evaluamos cada caso de forma individual para ofrecerle un
            presupuesto claro antes de comenzar.
          </p>

          <div className="mt-6">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar presupuesto
            </Link>
          </div>
        </div>
      </section>

      <FaqAccordion faqs={faqs} />

      {/* CTA FINAL */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-[#0f2740]">
            Consúltenos antes de firmar una carta de intención
          </h2>

          <p className="mt-4 max-w-2xl text-[#5f6b76]">
            Contar con asesoría legal desde la negociación, y no solo en el
            cierre, le permite anticipar riesgos y obtener mejores
            condiciones.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>

            <a
              href="https://wa.me/18295420615?text=Hola%2C%20estoy%20evaluando%20una%20operaci%C3%B3n%20de%20fusiones%20y%20adquisiciones%20en%20Rep%C3%BAblica%20Dominicana%20y%20necesito%20asesor%C3%ADa%20legal."
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
