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
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[220px] sm:h-[280px] md:h-[380px]">
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

              <h1 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Agenda una consulta legal con enfoque estratégico
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/90 md:text-lg md:leading-7">
                Evaluamos tu caso, identificamos riesgos y te orientamos sobre la
                mejor vía legal según tus objetivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALOR + FORM */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Cabinet Legal</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              Hablemos de tu caso.
            </h2>

            <p className="mt-4 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              Si necesitas orientación legal para tu empresa, una marca, un contrato,
              una operación o un conflicto específico, podemos ayudarte a definir
              una estrategia clara y jurídicamente sólida.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 space-y-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              <p>• Atención directa y estratégica</p>
              <p>• Evaluación inicial del caso</p>
              <p>• Recomendación clara de próximos pasos</p>
              <p>• Enfoque corporativo, práctico y ejecutivo</p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8dfd0] bg-[#fcfaf6] p-5">
              <h3 className="text-lg font-semibold text-[#0f2740]">
                También puedes escribirnos por WhatsApp
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#5f6b76]">
                Si prefieres un contacto más rápido, podemos orientarte por esa vía
                y coordinar la consulta.
              </p>

              <a
                href="https://wa.me/18095551234?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20Cabinet%20Legal."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-legal mt-4"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="mb-6">
              <div className="eyebrow">Formulario</div>
              <h2 className="mt-4 text-2xl font-semibold text-[#0f2740] md:text-3xl">
                Solicitar consulta
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#5f6b76] md:text-base md:leading-7">
                Completa este formulario y nos pondremos en contacto contigo para
                evaluar tu caso.
              </p>
            </div>

            <form className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Nombre
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-sm text-[#16202a] outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-sm text-[#16202a] outline-none"
                  placeholder="tunombre@correo.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-sm text-[#16202a] outline-none"
                  placeholder="Tu número"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Área de interés
                </label>
                <select className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-sm text-[#16202a] outline-none">
                  <option>Selecciona una opción</option>
                  <option>Derecho corporativo</option>
                  <option>Registro de marcas</option>
                  <option>Propiedad intelectual</option>
                  <option>Litigios y disputas</option>
                  <option>Otro asunto legal</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Mensaje
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-sm text-[#16202a] outline-none"
                  placeholder="Cuéntanos brevemente tu caso"
                />
              </div>

              <button type="submit" className="btn-primary-legal mt-2">
                Enviar solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <div className="eyebrow">Siguiente paso</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
            Toma decisiones con respaldo legal
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Una consulta oportuna puede ayudarte a evitar errores, reducir riesgos
            y estructurar mejor el camino legal de tu negocio o situación.
          </p>
        </div>
      </section>
    </main>
  );
}