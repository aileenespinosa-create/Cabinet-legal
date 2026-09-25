import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import FaqAccordion from "@/components/FaqAccordion";
import { buildFaqSchema } from "@/components/faqSchema";
import GuideBanner from "@/components/GuideBanner";

export const metadata: Metadata = {
  title: "Abogado inmobiliario en República Dominicana para extranjeros",
  description:
    "Abogado inmobiliario en República Dominicana para extranjeros: debida diligencia de título, contratos, cierre notarial, CONFOTUR y registro de su título.",
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

const faqs = [
  {
    question:
      "¿Necesito ser residente dominicano para comprar propiedad en República Dominicana?",
    answer:
      "No. La Ley 16-95 sobre Inversión Extranjera otorga a la inversión extranjera el mismo tratamiento que a la inversión nacional. Un extranjero no residente puede comprar, poseer y vender bienes inmuebles en República Dominicana en las mismas condiciones que un dominicano, sin necesidad de residencia ni de un socio local.",
  },
  {
    question: "¿Qué es el CONFOTUR y cuándo aplica a una inversión inmobiliaria?",
    answer:
      "El CONFOTUR (Consejo de Fomento Turístico) administra los incentivos fiscales de la Ley 158-01 para proyectos turísticos e inmobiliarios ubicados en polos turísticos designados. Una unidad en un proyecto con clasificación CONFOTUR puede beneficiarse de la exención del impuesto de transferencia inmobiliaria (3 %) y del Impuesto al Patrimonio Inmobiliario (IPI), por el plazo que establezca la resolución de clasificación (hasta 15 años), siempre que el desarrollador haya obtenido la aprobación correspondiente y la exención se tramite ante el Ministerio de Hacienda y la DGII.",
  },
  {
    question: "¿Qué verifica exactamente la debida diligencia de título antes de comprar?",
    answer:
      "Confirma que el vendedor es el titular registrado ante la Jurisdicción Inmobiliaria, que el inmueble está libre de hipotecas, embargos, oposiciones o litis sobre derechos registrados, que los linderos y la superficie coinciden con el certificado de título, y que no existen afectaciones (como declaratorias de utilidad pública o restricciones ambientales y costeras) que limiten el uso previsto de la propiedad.",
  },
  {
    question: "¿Puedo comprar una propiedad en República Dominicana sin viajar al país?",
    answer:
      "Sí. La compra puede formalizarse mediante un poder especial otorgado a su abogado, quien lo representa en la debida diligencia, la firma del contrato y el cierre notarial. Le mantenemos informado en cada etapa sin que usted tenga que estar presente en el país.",
  },
];

const faqSchema = buildFaqSchema(faqs);

export default function InversionExtranjeraPage() {
  return (
    <main className="min-h-screen overflow-x-hidden pt-[96px]">
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
              alt="Abogado inmobiliario en República Dominicana para compradores extranjeros"
              fill
              className="object-cover object-[center_18%]"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="relative z-10 w-full p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Abogados para comprar propiedad en República Dominicana
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                Asistimos a inversionistas y compradores extranjeros en cada
                etapa legal de la compra de un inmueble en Punta Cana, Cap
                Cana, Las Terrenas o Santo Domingo: estructuración, contratos,
                cierre notarial y registro de su título.
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
              Comprar propiedad en otro país conlleva riesgos que no siempre
              son visibles.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Títulos con cargas no declaradas, vendedores sin la
              documentación en regla, contratos mal redactados o cierres sin
              asistencia legal pueden convertir una buena inversión en un
              litigio costoso.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Nuestro trabajo</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Asistencia legal completa, de la oferta al registro.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              En Cabinet Legal estructuramos su compra, revisamos y negociamos
              los contratos, verificamos el cumplimiento legal en el cierre y
              defendemos sus derechos de propiedad una vez inscrita la
              transacción. Un socio del despacho dirige cada expediente, en
              español, inglés o francés.
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
              Definimos la vía legal adecuada para su inversión: compra a
              título personal, a través de una sociedad o mediante una
              estructura patrimonial, según su caso.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 2</div>
            <h3 className="mt-3 text-xl font-semibold">Contratos y cierre</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Revisamos, negociamos y formalizamos los contratos de
              compraventa, y le asistimos en el cierre ante notario y en el
              registro del título.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 3</div>
            <h3 className="mt-3 text-xl font-semibold">
              Protección posterior a la compra
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Damos seguimiento legal continuo: obligaciones fiscales,
              contratos de alquiler y defensa de sus derechos si surge una
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
              precio, el plazo y las condiciones suspensivas, por ejemplo,
              que la debida diligencia (due diligence) no revele afectaciones
              sobre el título. En esta etapa es habitual el pago de un
              depósito, que debe quedar protegido contractualmente.
            </p>
            <p>
              Mientras se prepara el cierre, se completa la{" "}
              <strong>debida diligencia de título</strong> ante la
              Jurisdicción Inmobiliaria y se verifica que el vendedor esté al
              día con el Impuesto al Patrimonio Inmobiliario (IPI) y, si
              aplica, con las cuotas de mantenimiento del condominio o
              proyecto.
            </p>
            <p>
              El <strong>cierre</strong> se formaliza mediante un contrato de
              venta ante notario público, con la firma de ambas partes o de
              sus apoderados. Si usted no puede estar presente en República
              Dominicana, puede actuar mediante un{" "}
              <strong>poder especial</strong> otorgado a su abogado.
            </p>
            <p>
              Tras la firma, se paga el <strong>impuesto de transferencia
              inmobiliaria</strong> (3 % del valor del inmueble, salvo
              exención aplicable) ante la{" "}
              <strong>Dirección General de Impuestos Internos (DGII)</strong>{" "}
              y luego se deposita el expediente en el{" "}
              <strong>Registro de Títulos</strong> correspondiente, que emite
              el nuevo certificado de título a nombre del comprador conforme
              a la Ley 108-05 de Registro Inmobiliario. Esta inscripción es
              la que hace oponible la compra frente a terceros, y es la etapa
              en la que un cierre informal suele fallar.
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
              Ley 16-95 sobre Inversión Extranjera
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              La Ley 16-95 y su reglamento de aplicación garantizan a la
              inversión extranjera el mismo tratamiento legal que a la
              inversión nacional, sin exigir autorización previa para
              invertir en la generalidad de los sectores económicos ni un
              porcentaje mínimo de participación dominicana. Permite comprar
              bienes inmuebles, constituir o adquirir empresas y repatriar
              capital y utilidades, sujeto al registro de la inversión ante
              las autoridades competentes cuando corresponda.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Incentivos turísticos</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              CONFOTUR para desarrolladores y compradores
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              La Ley 158-01 sobre Fomento al Desarrollo Turístico establece
              incentivos fiscales para proyectos ubicados en polos turísticos
              designados, administrados por el Consejo de Fomento Turístico
              (CONFOTUR). Un proyecto con clasificación CONFOTUR vigente puede
              eximir al primer comprador del impuesto de transferencia
              inmobiliaria y del IPI, en los términos de la resolución de
              clasificación del proyecto y por un plazo que puede llegar a 15
              años; la exención se tramita ante el Ministerio de Hacienda y
              la DGII. Antes de que usted compre, verificamos la
              vigencia y el alcance real de esos beneficios, que muchos
              compradores extranjeros dan por supuestos sin confirmarlos.
            </p>
          </div>
        </div>
      </section>

      {/* ALIANZA CON LAND CONSULTING DR */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">Alianza profesional</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Debida diligencia técnica y ejecución legal, en un mismo
              proceso.
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>

          <div className="space-y-5 text-[#5f6b76] leading-7">
            <p>
              Antes de firmar cualquier acuerdo, conviene verificar que la
              propiedad, el terreno o el proyecto sea exactamente lo que se
              ofrece: linderos correctos, permisos en regla, ausencia de
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
              , firma especializada en debida diligencia inmobiliaria para
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
                  Debida diligencia técnica, verificación de terreno y
                  estudios previos a la compra.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8ecef] p-4">
                <div className="text-sm font-semibold text-[#0f2740]">
                  Cabinet Legal
                </div>
                <p className="mt-2 text-sm text-[#5f6b76]">
                  Estructuración legal, contratos, cierre y protección
                  posterior a la compra.
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

      <GuideBanner lang="es" />

      {/* COSTO */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-10">
          <div className="eyebrow">Costo</div>

          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
            ¿Cuánto cuesta la asesoría legal para su inversión?
          </h2>

          <p className="mt-4 text-[#5f6b76] leading-7 max-w-2xl">
            El costo depende del tipo de propiedad, del monto de la inversión
            y de la complejidad de la estructura legal requerida. Evaluamos
            cada caso de forma individual para ofrecerle un presupuesto
            preciso.
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
            Proteja su inversión antes de firmar
          </h2>

          <p className="mt-4 text-[#5f6b76] max-w-2xl">
            Una vez firmado un contrato o entregado un depósito, sus opciones
            legales se reducen. Consúltenos antes de comprometerse.
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
