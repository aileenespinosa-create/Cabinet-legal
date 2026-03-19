import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulta | Cabinet Legal",
  description:
    "Solicita una consulta con Cabinet Legal para evaluar tu caso y definir la mejor estrategia legal en República Dominicana.",
  alternates: {
    canonical: "https://www.cabinetlegal.com.do/consulta",
  },
};

export default function ConsultaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[200px] sm:h-[260px] md:h-[360px]">
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
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:mt-3 md:text-5xl">
                Consulta
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">
                Evaluamos tu caso y te orientamos sobre la estrategia legal más adecuada.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Cabinet Legal</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              Hablemos de tu caso.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              Si necesitas orientación legal, estructuración de una operación,
              acompañamiento corporativo, registro de marca o evaluación de un conflicto,
              podemos ayudarte a definir la mejor vía.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 space-y-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              <p>• Atención directa y estratégica</p>
              <p>• Evaluación inicial del caso</p>
              <p>• Orientación clara sobre próximos pasos</p>
              <p>• Enfoque práctico y ejecutivo</p>
            </div>
          </div>

          <div className="card-legal p-6 md:p-10">
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
                  Asunto
                </label>
                <input
                  type="text"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-sm text-[#16202a] outline-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
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
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}