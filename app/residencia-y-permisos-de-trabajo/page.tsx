import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import FaqAccordion from "@/components/FaqAccordion";
import { buildFaqSchema } from "@/components/faqSchema";

export const metadata: Metadata = {
  title: "Residencia dominicana para extranjeros y permiso de trabajo",
  description:
    "Residencia dominicana para extranjeros: residencia por inversión, pensión o vínculo laboral ante la Dirección General de Migración, de la solicitud a la cédula.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/residencia-y-permisos-de-trabajo",
  },
};

const faqs = [
  {
    question: "¿Cómo puede un extranjero obtener la residencia en República Dominicana?",
    answer:
      "Las vías más comunes son la residencia por inversión (en bienes inmuebles, en una empresa o en un certificado de depósito a plazo), la residencia por pensión o renta para jubilados y rentistas, y la residencia derivada de un vínculo laboral, familiar o matrimonial con un residente o nacional dominicano. Cada vía tiene requisitos y plazos distintos conforme a la Ley 285-04 General de Migración y su reglamento.",
  },
  {
    question: "¿Cuánto tiempo toma obtener la residencia dominicana?",
    answer:
      "Con el expediente completo, el proceso de residencia provisional suele tomar entre tres y seis meses. La residencia definitiva se solicita después de haber mantenido la residencia provisional durante el período que exige la ley para cada categoría migratoria.",
  },
  {
    question:
      "¿Necesito un permiso de trabajo distinto a la residencia para trabajar en República Dominicana?",
    answer:
      "Para trabajar en relación de dependencia en República Dominicana, el extranjero debe contar con una categoría migratoria que lo habilite, como la residencia. Además, el empleador debe cumplir con los registros laborales correspondientes ante el Ministerio de Trabajo para formalizar la contratación. Ser socio o accionista de una sociedad dominicana, en cambio, no exige residencia.",
  },
];

const faqSchema = buildFaqSchema(faqs);

export default function ResidenciaYPermisosDeTrabajoPage() {
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
              alt="Residencia dominicana para extranjeros y permisos de trabajo"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="relative z-10 w-full p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Residencia en República Dominicana para extranjeros, sin
                contratiempos
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                Asistimos a inversionistas, jubilados y profesionales
                extranjeros en todo el proceso de residencia, permiso de
                trabajo y regularización migratoria ante la Dirección General
                de Migración, en español, inglés o francés.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/consulta" className="btn-primary-legal">
                  Solicitar consulta
                </Link>

                <a
                  href="https://wa.me/18295420615?text=Hola%2C%20quiero%20tramitar%20mi%20residencia%20en%20Rep%C3%BAblica%20Dominicana%20y%20necesito%20asesor%C3%ADa%20legal."
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
              Un expediente migratorio incompleto retrasa la residencia
              meses, no semanas.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Documentos sin apostillar o legalizar correctamente, una vía
              migratoria inadecuada para su situación o errores en la
              solicitud inicial ante la Dirección General de Migración pueden
              convertir un trámite de meses en un proceso de años.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Nuestro trabajo</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Expediente completo desde el primer intento.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              En Cabinet Legal, como abogados de migración, identificamos la
              vía migratoria adecuada para su caso, preparamos y verificamos
              cada documento antes de presentarlo y damos seguimiento al
              expediente ante Migración hasta la entrega de su cédula.
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
              Evaluación de la vía migratoria
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Analizamos su situación (inversión, pensión, vínculo laboral o
              familiar) para determinar la categoría migratoria que mejor se
              ajusta y los requisitos aplicables.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 2</div>
            <h3 className="mt-3 text-xl font-semibold">
              Preparación del expediente
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Coordinamos la legalización y apostilla de sus documentos, el
              certificado médico, el certificado de no antecedentes penales y
              el resto de los requisitos exigidos por Migración.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 3</div>
            <h3 className="mt-3 text-xl font-semibold">
              Trámite y seguimiento
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Presentamos la solicitud, damos seguimiento al expediente ante
              la Dirección General de Migración y le asistimos hasta la
              obtención de la residencia y la cédula de identidad para
              extranjeros.
            </p>
          </div>
        </div>
      </section>

      {/* PROFUNDIDAD: VÍAS DE RESIDENCIA */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">Vías de residencia</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Qué vía migratoria se ajusta a su situación.
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>

          <div className="space-y-5 text-[#5f6b76] leading-7">
            <p>
              La residencia por inversión está disponible para quienes
              inviertan en bienes inmuebles, en una empresa establecida en
              República Dominicana o en un certificado de depósito a plazo
              en una entidad financiera local, por el monto mínimo que
              establece la normativa vigente. Es la vía más utilizada por compradores de
              propiedad e inversionistas extranjeros.
            </p>
            <p>
              La residencia por pensión o renta está dirigida a jubilados y
              rentistas que perciben ingresos fijos y verificables desde el
              extranjero, sin necesidad de realizar una inversión adicional
              en el país.
            </p>
            <p>
              La residencia derivada de un vínculo laboral aplica a
              extranjeros contratados por una empresa establecida en
              República Dominicana o que forman parte de la administración
              de una sociedad dominicana en la que participan como socios o
              accionistas. También existe la vía de residencia por
              matrimonio o vínculo familiar con un nacional o residente
              dominicano.
            </p>
            <p>
              Por regla general, la residencia provisional precede a la
              residencia definitiva, que se solicita una vez transcurrido el
              período que exige la categoría migratoria correspondiente.
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
            ¿Cuánto cuesta tramitar la residencia en República Dominicana?
          </h2>

          <p className="mt-4 max-w-2xl text-[#5f6b76] leading-7">
            El costo depende de la vía migratoria, del número de
            dependientes incluidos en la solicitud y de la complejidad del
            expediente. Le ofrecemos un presupuesto claro luego de evaluar
            su caso.
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
            Inicie su trámite de residencia con el expediente en regla
          </h2>

          <p className="mt-4 max-w-2xl text-[#5f6b76]">
            Un expediente bien preparado desde el inicio evita rechazos y
            retrasos innecesarios ante la Dirección General de Migración.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>

            <a
              href="https://wa.me/18295420615?text=Hola%2C%20quiero%20tramitar%20mi%20residencia%20en%20Rep%C3%BAblica%20Dominicana%20y%20necesito%20asesor%C3%ADa%20legal."
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
