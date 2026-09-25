import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import FaqAccordion from "@/components/FaqAccordion";
import { buildFaqSchema } from "@/components/faqSchema";

export const metadata: Metadata = {
  title: "Registro de marca en República Dominicana ante ONAPI",
  description:
    "Registro de marca en República Dominicana ante ONAPI: búsqueda de antecedentes, solicitud, oposiciones y renovación conforme a la Ley 20-00. Consúltenos.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/registro-de-marcas",
  },
};

const faqs = [
  {
    question: "¿Cuánto cuesta registrar una marca en República Dominicana?",
    answer:
      "El costo depende del tipo de marca (denominativa, figurativa o mixta), de la cantidad de clases de la Clasificación de Niza que deba cubrir y de las tasas vigentes de ONAPI. Evaluamos cada caso de forma individual para ofrecerle un presupuesto preciso.",
  },
  {
    question: "¿Cuánto tiempo toma el registro de una marca ante ONAPI?",
    answer:
      "Sin objeciones ni oposiciones, el registro ante ONAPI suele completarse en tres a cuatro meses. La solicitud pasa por un examen de forma y un examen de fondo conforme a los artículos 73 y 74 de la Ley 20-00; luego se publica y se abre un plazo de 45 días para que terceros presenten oposición. Una objeción de ONAPI o una oposición puede extender el proceso varios meses.",
  },
  {
    question: "¿Qué ocurre si no registro mi marca?",
    answer:
      "Conforme a la Ley 20-00 sobre Propiedad Industrial, el derecho exclusivo sobre una marca se adquiere con su registro ante ONAPI. Sin registro, un tercero puede inscribir antes una marca igual o similar y obligarle a usted a cambiar su identidad comercial o a litigar para defenderla.",
  },
];

const faqSchema = buildFaqSchema(faqs);

export default function RegistroDeMarcasPage() {
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
              alt="Registro de marca en República Dominicana ante ONAPI"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="relative z-10 w-full p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Registro de marca en República Dominicana ante ONAPI
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                Evite rechazos, oposiciones y pérdida de derechos. Le
                asistimos en todo el procedimiento ante ONAPI, desde la
                búsqueda de antecedentes hasta la emisión del certificado.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/consulta" className="btn-primary-legal">
                  Solicitar evaluación
                </Link>

                <a
                  href="https://wa.me/18295420615?text=Hola%2C%20quiero%20registrar%20una%20marca."
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

      {/* PROBLEMA */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-2">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Problema común</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Muchas solicitudes de marca son rechazadas u objetadas.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Elegir mal la clase, no verificar antecedentes o presentar una
              solicitud defectuosa puede costarle tiempo, dinero y derechos
              sobre su marca.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Nuestro trabajo</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Un registro bien fundamentado, no un simple trámite.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              En Cabinet Legal analizamos su marca, su actividad comercial y
              sus planes de expansión antes de presentar la solicitud, para
              que la protección cubra lo que usted realmente necesita.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-3">
          <div className="card-legal p-6">
            <div className="eyebrow">Paso 1</div>
            <h3 className="mt-3 text-xl font-semibold">Evaluación</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Realizamos la búsqueda de antecedentes y evaluamos la
              registrabilidad de su marca.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 2</div>
            <h3 className="mt-3 text-xl font-semibold">Solicitud</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Definimos las clases de la Clasificación de Niza y la
              estructura adecuada de la solicitud.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 3</div>
            <h3 className="mt-3 text-xl font-semibold">Gestión completa</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Presentamos la solicitud, damos seguimiento ante ONAPI y
              atendemos observaciones u oposiciones de terceros.
            </p>
          </div>
        </div>
      </section>

      {/* COSTO */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-10">
          <div className="eyebrow">Costo</div>

          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
            ¿Cuánto cuesta registrar una marca?
          </h2>

          <p className="mt-4 text-[#5f6b76] leading-7 max-w-2xl">
            El costo depende del tipo de marca, de la cantidad de clases y de
            la estructura de la solicitud. Por eso evaluamos cada caso de
            forma individual para ofrecerle un presupuesto preciso.
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
            Proteja su marca antes de que otro la registre
          </h2>

          <p className="mt-4 text-[#5f6b76] max-w-2xl">
            Mientras más espere, mayor es el riesgo de conflictos o de que un
            tercero registre una marca similar a la suya.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>

            <a
              href="https://wa.me/18295420615?text=Hola%2C%20quiero%20registrar%20una%20marca."
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