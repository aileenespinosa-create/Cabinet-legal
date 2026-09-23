import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Abogado para Comprar Bienes Raíces en República Dominicana",
  description:
    "Compra propiedades en República Dominicana con protección legal completa: due diligence de título, contratos, cierre notarial, Ley 16-95 y protección post-compra para inversionistas extranjeros.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/inversion-extranjera",
    languages: {
      "x-default": "https://cabinetlegal.com.do/inversion-extranjera",
      "es-DO": "https://cabinetlegal.com.do/inversion-extranjera",
      en: "https://cabinetlegal.com.do/en/inversion-extranjera",
      fr: "https://cabinetlegal.com.do/fr/inversion-extranjera",
    },
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Necesito ser residente dominicano para comprar propiedad en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. La Ley 16-95 de Inversión Extranjera otorga a la inversión extranjera el mismo tratamiento que a la inversión nacional. Un extranjero no residente puede comprar, poseer y vender bienes inmuebles en República Dominicana en las mismas condiciones que un dominicano, sin necesidad de residencia ni de un socio local.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el CONFOTUR y cuándo aplica a una inversión inmobiliaria?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El CONFOTUR (Consejo de Fomento Turístico) administra incentivos fiscales para proyectos turísticos e inmobiliarios en polos designados por la Ley 158-01. Un proyecto o unidad con clasificación CONFOTUR puede beneficiarse de exención del impuesto de transferencia inmobiliaria (3%) y del IPI (impuesto anual sobre la propiedad) durante el período que otorga el decreto, siempre que el desarrollador haya obtenido la aprobación correspondiente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué verifica exactamente la due diligence de título antes de comprar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Confirma que el vendedor es el titular registrado ante la Jurisdicción Inmobiliaria, que el inmueble está libre de hipotecas, embargos, oposiciones o litis pendientes, que los linderos y la cabida coinciden con el certificado de título, y que no existen afectaciones (como declaratorias de utilidad pública o restricciones ambientales y costeras) que limiten el uso previsto de la propiedad.",
      },
    },
  ],
};

export default function InversionExtranjeraPage() {
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
              alt="Asesoría legal para inversionistas extranjeros en República Dominicana"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Invierte en República Dominicana con la protección legal que
                tu inversión merece
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                Acompañamos a inversionistas y compradores extranjeros en cada
                etapa legal de la compra de bienes raíces: estructuración,
                contratos, cierre y protección de tus derechos de propiedad.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/consulta" className="btn-primary-legal">
                  Solicitar consulta
                </Link>

                <a
                  href="https://wa.me/18295420615?text=Hola%2C%20soy%20inversionista%20extranjero%20y%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n%20legal%20para%20comprar%20una%20propiedad%20en%20Rep%C3%BAblica%20Dominicana."
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
              Comprar propiedad en un país extranjero conlleva riesgos que no
              siempre son visibles.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Títulos de propiedad poco claros, vendedores sin la
              documentación en regla, contratos mal estructurados o cierres
              sin acompañamiento legal pueden convertir una inversión
              prometedora en un problema costoso.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Nuestra solución</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Ejecución legal completa, de principio a fin.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              En Cabinet Legal estructuramos tu compra, revisamos y negociamos
              contratos, verificamos el cumplimiento legal en el cierre y
              protegemos tus derechos de propiedad una vez que la transacción
              se completa.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-3">
          <div className="card-legal p-6">
            <div className="eyebrow">Paso 1</div>
            <h3 className="mt-3 text-xl font-semibold">Estructuración</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Definimos la vía legal correcta para tu inversión: compra
              personal, a través de sociedad, o estructura patrimonial según
              tu caso.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 2</div>
            <h3 className="mt-3 text-xl font-semibold">Contratos y cierre</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Revisamos, negociamos y ejecutamos los contratos de
              compraventa, acompañándote en el cierre ante notario y en el
              registro del título.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 3</div>
            <h3 className="mt-3 text-xl font-semibold">
              Protección post-compra
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Damos seguimiento legal continuo: cumplimiento fiscal,
              contratos de alquiler y defensa de tus derechos si surge alguna
              disputa.
            </p>
          </div>
        </div>
      </section>

      {/* PROFUNDIDAD: PROCESO DE CIERRE PASO A PASO */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">Proceso de cierre</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Cómo es, paso a paso, el cierre de una compra inmobiliaria en
              República Dominicana.
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>

          <div className="space-y-5 text-[#5f6b76] leading-7">
            <p>
              Todo proceso comienza con una <strong>oferta de compra</strong>{" "}
              o carta de intención, seguida de un{" "}
              <strong>contrato de promesa de venta</strong> que fija el
              precio, el plazo y las condiciones suspensivas (por ejemplo,
              que la due diligence no revele afectaciones sobre el título).
              En esta etapa es habitual el pago de un depósito en garantía,
              que debe quedar protegido contractualmente.
            </p>
            <p>
              Mientras se prepara el cierre, se completa la{" "}
              <strong>due diligence de título</strong> ante la Jurisdicción
              Inmobiliaria correspondiente y se verifica que el vendedor esté
              al día con el Impuesto sobre la Propiedad Inmobiliaria (IPI) y,
              si aplica, con las cuotas de mantenimiento del condominio o
              proyecto.
            </p>
            <p>
              El <strong>cierre</strong> se formaliza mediante un contrato de
              venta ante notario público, con la firma de ambas partes o de
              sus apoderados. Si el comprador no puede estar presente en
              República Dominicana, puede actuar mediante un{" "}
              <strong>poder especial</strong> otorgado a su abogado.
            </p>
            <p>
              Tras la firma, se paga el <strong>impuesto de transferencia
              inmobiliaria</strong> (3% del valor de la propiedad, salvo
              exención aplicable) y se somete el expediente ante la{" "}
              <strong>Dirección General de Impuestos Internos (DGII)</strong>{" "}
              y luego ante el <strong>Registro de Títulos</strong>{" "}
              correspondiente, que emite el nuevo certificado de título a
              nombre del comprador. Este último paso registral es el que
              hace oponible la compra frente a terceros, y es donde el
              acompañamiento legal marca la diferencia frente a un cierre
              informal.
            </p>
          </div>
        </div>
      </section>

      {/* PROFUNDIDAD: LEY 16-95 Y CONFOTUR */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-2">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Marco legal</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Ley 16-95 de Inversión Extranjera
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              La Ley 16-95 y su reglamento de aplicación garantizan a la
              inversión extranjera el mismo tratamiento legal que a la
              inversión nacional, sin exigir autorización previa para
              invertir en la generalidad de los sectores económicos, ni
              porcentaje mínimo de participación dominicana. Permite
              comprar bienes inmuebles, constituir o adquirir empresas, y
              repatriar capital y utilidades, sujeto al registro
              correspondiente ante las autoridades competentes cuando
              aplique.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Incentivos turísticos</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              CONFOTUR para desarrolladores y compradores
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              La Ley 158-01 de Fomento al Desarrollo Turístico crea
              incentivos fiscales para proyectos ubicados en polos
              turísticos designados, administrados por el Consejo de
              Fomento Turístico (CONFOTUR). Un proyecto con clasificación
              CONFOTUR vigente puede eximir al comprador del impuesto de
              transferencia inmobiliaria y del IPI durante el período que
              otorgue el decreto correspondiente. Verificamos la validez y
              el alcance real de estos beneficios antes de que compres,
              algo que muchos compradores extranjeros asumen sin confirmar.
            </p>
          </div>
        </div>
      </section>

      {/* ALIANZA CON LAND CONSULTING DR */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">Alianza estratégica</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Due diligence técnica y ejecución legal, en un mismo proceso.
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>

          <div className="space-y-5 text-[#5f6b76] leading-7">
            <p>
              Antes de firmar cualquier acuerdo, es clave verificar que la
              propiedad, el terreno o el proyecto sea exactamente lo que
              promete: linderos correctos, permisos en regla, ausencia de
              gravámenes y viabilidad real del proyecto.
            </p>
            <p>
              Por eso trabajamos junto a{" "}
              <a
                href="https://landconsultingdr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0f2740] underline"
              >
                Land Consulting DR
              </a>
              , firma especializada en due diligence inmobiliaria para
              compradores extranjeros en República Dominicana. Land
              Consulting DR investiga y verifica la propiedad antes de la
              compra; Cabinet Legal estructura, negocia y ejecuta la compra
              desde el punto de vista legal.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e8ecef] p-4">
                <div className="text-sm font-semibold text-[#0f2740]">
                  Land Consulting DR
                </div>
                <p className="mt-2 text-sm text-[#5f6b76]">
                  Due diligence técnica, verificación de terreno y estudios
                  previos a la compra.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8ecef] p-4">
                <div className="text-sm font-semibold text-[#0f2740]">
                  Cabinet Legal
                </div>
                <p className="mt-2 text-sm text-[#5f6b76]">
                  Estructuración legal, contratos, cierre y protección
                  post-compra.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Link href="/consulta" className="btn-primary-legal">
                Solicitar consulta legal
              </Link>
              <a
                href="https://landconsultingdr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-legal"
              >
                Ver Land Consulting DR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COSTO */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-10">
          <div className="eyebrow">Costo</div>

          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
            ¿Cuánto cuesta la asesoría legal para mi inversión?
          </h2>

          <p className="mt-4 text-[#5f6b76] leading-7 max-w-2xl">
            El costo depende del tipo de propiedad, el monto de la inversión
            y la complejidad de la estructura legal requerida. Evaluamos cada
            caso individualmente para darte un presupuesto preciso.
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
            Protege tu inversión antes de firmar
          </h2>

          <p className="mt-4 text-[#5f6b76] max-w-2xl">
            Una vez firmado un contrato o entregado un depósito, tus opciones
            legales se reducen. Habla con nosotros antes de comprometerte.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>

            <a
              href="https://wa.me/18295420615?text=Hola%2C%20soy%20inversionista%20extranjero%20y%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n%20legal%20para%20comprar%20una%20propiedad%20en%20Rep%C3%BAblica%20Dominicana."
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
