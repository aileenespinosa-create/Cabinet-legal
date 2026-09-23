import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Abogado para Comprar Bienes Raíces en República Dominicana",
  description:
    "Compra propiedades en República Dominicana con protección legal completa: due diligence de título, contratos, cierre notarial y protección post-compra para inversionistas extranjeros.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/inversion-extranjera",
    languages: {
      "es-DO": "https://cabinetlegal.com.do/inversion-extranjera",
      en: "https://cabinetlegal.com.do/en/inversion-extranjera",
      fr: "https://cabinetlegal.com.do/fr/inversion-extranjera",
    },
  },
};

export default function InversionExtranjeraPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
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
                  href="https://wa.me/18494603517?text=Hola%2C%20soy%20inversionista%20extranjero%20y%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n%20legal%20para%20comprar%20una%20propiedad%20en%20Rep%C3%BAblica%20Dominicana."
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
              href="https://wa.me/18494603517?text=Hola%2C%20soy%20inversionista%20extranjero%20y%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n%20legal%20para%20comprar%20una%20propiedad%20en%20Rep%C3%BAblica%20Dominicana."
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
