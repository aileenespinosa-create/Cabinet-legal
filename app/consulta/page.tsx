import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Consulta legal | Cabinet Legal",
  description:
    "Solicita una consulta con Cabinet Legal para evaluar tu caso y definir la mejor estrategia legal en República Dominicana.",
  alternates: {
    canonical: "https://www.cabinetlegal.com.do/consulta",
  },
};

export default function ConsultaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfaf6] pt-[120px]">
      <SiteHeader />

      {/* HERO */}
      <section className="container-legal py-10 md:py-16">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[240px] sm:h-[300px] md:h-[380px]">
            <Image
              src="/hero-legal.jpg"
              alt="Consulta legal Cabinet Legal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Solicita una consulta legal con enfoque estratégico
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-lg md:leading-7">
                Evaluamos tu situación, identificamos riesgos y te orientamos
                sobre la mejor vía legal según tu caso, tus objetivos y tu contexto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO + FORMULARIO */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.92fr_1.08fr]">
          {/* TEXTO */}
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Consulta</div>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              Hablemos de tu caso con claridad y criterio jurídico.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              Si necesitas orientación legal para tu empresa, una marca, un contrato,
              una operación o un conflicto específico, podemos ayudarte a definir
              una estrategia clara, práctica y jurídicamente sólida.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 space-y-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              <p>• Atención directa y estratégica</p>
              <p>• Evaluación inicial de tu situación</p>
              <p>• Identificación de riesgos y prioridades</p>
              <p>• Recomendación clara de próximos pasos</p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8dfd0] bg-[#fcfaf6] p-5 md:p-6">
              <h3 className="text-lg font-semibold text-[#0f2740]">
                ¿Prefieres escribirnos directamente?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#5f6b76] md:text-base md:leading-7">
                También puedes contactarnos por WhatsApp para una orientación inicial
                más rápida.
              </p>

              <a
                href="https://wa.me/18093302232?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-6 py-3 text-sm font-semibold text-[#0f2740]"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* FORMULARIO */}
          <div className="card-legal p-6 md:p-10">
            <div className="mb-6">
              <div className="eyebrow">Formulario</div>

              <h2 className="mt-4 text-2xl font-semibold text-[#0f2740] md:text-3xl">
                Solicitar consulta
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#5f6b76] md:text-base md:leading-7">
                Completa este formulario y nos pondremos en contacto contigo para
                evaluar tu solicitud.
              </p>
            </div>

            <form
              action="https://formspree.io/f/mlgpavya"
              method="POST"
              className="grid gap-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nueva consulta desde Cabinet Legal"
              />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Nombre
                </label>
                <input
                  name="nombre"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Correo electrónico
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="tunombre@correo.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Teléfono
                </label>
                <input
                  name="telefono"
                  type="text"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Tu número"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Área de interés
                </label>
                <select
                  name="area"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  defaultValue="Selecciona una opción"
                >
                  <option disabled>Selecciona una opción</option>
                  <option>Registro de marcas</option>
                  <option>Derecho corporativo</option>
                  <option>Propiedad intelectual</option>
                  <option>Litigios</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  rows={6}
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Cuéntanos brevemente tu caso"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
            Toma decisiones con respaldo legal.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Una consulta oportuna puede ayudarte a evitar errores, reducir riesgos
            y estructurar mejor tu situación legal desde el inicio.
          </p>
        </div>
      </section>
    </main>
  );
}