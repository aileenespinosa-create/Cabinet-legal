import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ConsultaForm from "@/components/ConsultaForm";

export const metadata: Metadata = {
  title: "Solicite una consulta legal en República Dominicana",
  description:
    "Solicite una consulta con Cabinet Legal en Santo Domingo. Un socio evalúa su caso y le responde en español, inglés o francés en menos de 24 horas hábiles.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/consulta",
    languages: {
      "x-default": "https://cabinetlegal.com.do/consulta",
      "es-DO": "https://cabinetlegal.com.do/consulta",
      en: "https://cabinetlegal.com.do/en/consulta",
      fr: "https://cabinetlegal.com.do/fr/consulta",
    },
  },
};

export default function ConsultaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfaf6] pt-[120px]">
      <SiteHeader />

      {/* HERO */}
      <section className="container-legal py-10 md:py-16">
        <div className="card-legal overflow-hidden">
          <div className="relative flex min-h-[340px] items-end sm:min-h-[300px] md:min-h-[380px]">
            <Image
              src="/hero-legal.jpg"
              alt="Consulta legal Cabinet Legal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="relative z-10 w-full p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Solicite una consulta legal
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-lg md:leading-7">
                Un socio evalúa su situación, identifica los riesgos y le
                indica la vía legal más adecuada según su caso y sus objetivos.
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
              Hablemos de su caso con claridad.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              Si necesita orientación legal para su empresa, una marca, un contrato,
              una compra de inmueble, una sucesión o un conflicto específico, le
              ayudamos a definir los próximos pasos y a ejecutarlos. Atendemos en
              español, inglés y francés, y muchos trámites pueden hacerse por
              poder, sin que usted viaje al país.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 space-y-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              <p>• Atención directa de un socio</p>
              <p>• Evaluación inicial de su situación</p>
              <p>• Identificación de riesgos y prioridades</p>
              <p>• Recomendación clara de próximos pasos</p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8dfd0] bg-[#fcfaf6] p-5 md:p-6">
              <h3 className="text-lg font-semibold text-[#0f2740]">
                ¿Prefiere escribirnos directamente?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#5f6b76] md:text-base md:leading-7">
                También puede contactarnos por WhatsApp para una orientación inicial
                más rápida.
              </p>

              <a
                href="https://wa.me/18295420615?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta."
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
                Complete este formulario y nos pondremos en contacto con usted para
                evaluar su solicitud.
              </p>
            </div>

            <ConsultaForm lang="es" className="grid gap-4">
              <input
                type="hidden"
                name="_subject"
                value="Nueva consulta desde Cabinet Legal"
              />

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Nombre
                </label>
                <input
                  name="nombre"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Su nombre"
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
                  placeholder="nombre@correo.com"
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
                  placeholder="Su número"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Área de interés
                </label>
                <select
                  name="area"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  defaultValue="Seleccione una opción"
                >
                  <option disabled>Seleccione una opción</option>
                  <option>Inversión extranjera / bienes raíces</option>
                  <option>Fusiones y adquisiciones</option>
                  <option>Formación de empresas</option>
                  <option>Residencia y permisos de trabajo</option>
                  <option>Registro de marcas</option>
                  <option>Derecho corporativo</option>
                  <option>Propiedad intelectual</option>
                  <option>Litigios</option>
                  <option>Litigios para inversionistas extranjeros</option>
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
                  placeholder="Cuéntenos brevemente su caso"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Enviar solicitud
              </button>

              <p className="text-center text-xs text-[#8a9099]">
                Le respondemos en menos de 24 horas hábiles.
              </p>
            </ConsultaForm>
          </div>
        </div>
      </section>

      {/* CIERRE */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
            Decida con respaldo legal.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Una consulta a tiempo le permite evitar errores, reducir riesgos
            y estructurar correctamente su situación legal desde el inicio.
          </p>
        </div>
      </section>
    </main>
  );
}