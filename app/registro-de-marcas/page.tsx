import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Registro de marcas en República Dominicana | Cabinet Legal",
  description:
    "Protege tu marca en República Dominicana con asesoría legal estratégica. Evaluamos, registramos y damos seguimiento completo ante ONAPI.",
};

export default function RegistroDeMarcasPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[220px] sm:h-[280px] md:h-[380px]">
            <Image
              src="/hero-legal.jpg"
              alt="Registro de marcas en República Dominicana"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Registra tu marca correctamente desde el inicio
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                Evita rechazos, conflictos legales y pérdida de derechos. Te
                acompañamos en todo el proceso ante ONAPI con estrategia y precisión.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/consulta" className="btn-primary-legal">
                  Solicitar evaluación
                </Link>

                <a
                  href="https://wa.me/18095551234?text=Hola%2C%20quiero%20registrar%20una%20marca."
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
              Muchas marcas son rechazadas o mal registradas.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Elegir mal la clase, no evaluar disponibilidad o presentar una
              solicitud incorrecta puede hacer que pierdas tiempo, dinero y
              derechos sobre tu marca.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Nuestra solución</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Registro estratégico, no solo trámite.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              En Cabinet Legal analizamos tu marca, tu negocio y tu proyección
              antes de presentar la solicitud, para protegerte correctamente desde el inicio.
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
              Revisamos disponibilidad y viabilidad legal de tu marca.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 2</div>
            <h3 className="mt-3 text-xl font-semibold">Estrategia</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Definimos clases y estructura correcta de la solicitud.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Paso 3</div>
            <h3 className="mt-3 text-xl font-semibold">Gestión completa</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Presentamos y damos seguimiento ante ONAPI.
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
            El costo varía dependiendo del tipo de marca, la cantidad de clases
            y la estructura de la solicitud. Por eso, cada caso debe evaluarse
            individualmente para darte un presupuesto preciso.
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
            Protege tu marca antes de que sea tarde
          </h2>

          <p className="mt-4 text-[#5f6b76] max-w-2xl">
            Mientras más esperas, más riesgo existe de conflictos o de que otra
            persona registre una marca similar.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>

            <a
              href="https://wa.me/18095551234?text=Hola%2C%20quiero%20registrar%20una%20marca."
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