import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Litigios para Inversionistas Extranjeros en República Dominicana",
  description:
    "Representación legal en litigios civiles, comerciales e inmobiliarios para inversionistas extranjeros en República Dominicana, con estrategia procesal clara desde el inicio.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/litigios-inversionistas-extranjeros",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Puede un extranjero demandar y ser demandado en los tribunales dominicanos?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Los tribunales dominicanos son competentes para conocer de litigios que involucren a partes extranjeras cuando el objeto de la disputa, el domicilio de la contraparte o el bien en controversia se encuentran en territorio dominicano. Un extranjero no residente puede litigar mediante apoderado especial, sin necesidad de estar presente en el país durante todo el proceso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué opciones tiene un inversionista extranjero frente a un incumplimiento contractual en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Puede iniciar una demanda civil o comercial ante los tribunales ordinarios, o recurrir al arbitraje si el contrato contiene una cláusula arbitral. La vía adecuada depende de lo pactado en el contrato, del monto en disputa y de la urgencia de la medida buscada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tiempo toma resolver un litigio comercial en República Dominicana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Varía según la jurisdicción, la complejidad del caso y si hay medidas cautelares o recursos de por medio. Un proceso civil o comercial en primera instancia puede tomar entre varios meses y más de un año; el arbitraje suele ser más rápido cuando ambas partes lo eligieron como vía de resolución.",
      },
    },
  ],
};

export default function LitigiosInversionistasExtranjerosPage() {
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
              alt="Litigios para inversionistas extranjeros en República Dominicana"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Defiende tu inversión en los tribunales dominicanos con
                estrategia clara
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                Representamos a inversionistas y compradores extranjeros en
                disputas civiles, comerciales e inmobiliarias en República
                Dominicana, incluso a distancia.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/consulta" className="btn-primary-legal">
                  Solicitar consulta
                </Link>

                <a
                  href="https://wa.me/18295420615?text=Hola%2C%20soy%20inversionista%20extranjero%20y%20tengo%20una%20disputa%20legal%20en%20Rep%C3%BAblica%20Dominicana."
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
              La distancia y el desconocimiento del sistema local dejan al
              inversionista extranjero en desventaja.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Un incumplimiento de contrato, un socio local que actúa de mala
              fe, o una disputa sobre un título de propiedad, se vuelven más
              difíciles de resolver cuando el inversionista no está en el
              país y no conoce los tiempos ni los mecanismos del sistema
              judicial dominicano.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Nuestra solución</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Representación local con comunicación constante a distancia.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              En Cabinet Legal actuamos como tus ojos y tu voz en República
              Dominicana: evaluamos la fortaleza del caso, definimos una
              estrategia procesal clara y te mantenemos informado en cada
              etapa, sin que tengas que estar presente en el país.
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
              Evaluación del caso
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Analizamos los hechos, la documentación disponible y las
              opciones legales reales, incluyendo la posibilidad de resolver
              la disputa sin necesidad de litigar.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 2</div>
            <h3 className="mt-3 text-xl font-semibold">
              Estrategia y representación
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Actuamos mediante poder especial, presentamos las acciones o
              defensas correspondientes y damos seguimiento activo al
              proceso ante el tribunal o el panel arbitral competente.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 3</div>
            <h3 className="mt-3 text-xl font-semibold">
              Resolución y ejecución
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Te acompañamos hasta la sentencia o el laudo, y gestionamos su
              ejecución para que la decisión favorable se traduzca en un
              resultado real.
            </p>
          </div>
        </div>
      </section>

      {/* PROFUNDIDAD: VÍAS DE RESOLUCIÓN */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">Vías de resolución</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Litigio ordinario o arbitraje: qué conviene a tu caso.
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>

          <div className="space-y-5 text-[#5f6b76] leading-7">
            <p>
              Cuando el contrato en disputa contiene una cláusula arbitral,
              el arbitraje suele ser la vía más rápida y predecible,
              especialmente para inversionistas extranjeros que prefieren un
              proceso más confidencial y con reglas pactadas de antemano. El
              Centro de Resolución Alternativa de Controversias de la Cámara
              de Comercio de Santo Domingo administra buena parte de los
              arbitrajes comerciales del país.
            </p>
            <p>
              A falta de cláusula arbitral, la vía ordinaria ante los
              tribunales civiles y comerciales sigue siendo la más común para
              disputas contractuales, reclamaciones de cobro, conflictos
              societarios entre socios y controversias sobre bienes
              inmuebles, incluyendo litigios de deslinde y saneamiento de
              títulos.
            </p>
            <p>
              En ambos casos, un extranjero puede litigar sin residir en el
              país mediante un poder especial otorgado a su abogado, quien
              actúa en su representación y lo mantiene informado del avance
              del proceso.
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
            ¿Cuánto cuesta la representación legal en un litigio?
          </h2>

          <p className="mt-4 max-w-2xl text-[#5f6b76] leading-7">
            El costo depende de la complejidad del caso, la jurisdicción y si
            se requieren medidas cautelares urgentes. Evaluamos cada caso
            individualmente para darte un presupuesto claro.
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
            Actúa antes de que el plazo legal juegue en tu contra
          </h2>

          <p className="mt-4 max-w-2xl text-[#5f6b76]">
            En materia civil y comercial existen plazos de prescripción que
            limitan el tiempo disponible para reclamar. Consulta tu caso lo
            antes posible.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>

            <a
              href="https://wa.me/18295420615?text=Hola%2C%20soy%20inversionista%20extranjero%20y%20tengo%20una%20disputa%20legal%20en%20Rep%C3%BAblica%20Dominicana."
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
