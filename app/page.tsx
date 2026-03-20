import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fcfaf6] pt-[120px]">
      <SiteHeader />

      {/* HERO */}
      <section className="py-14 md:py-20">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="eyebrow">Cabinet Legal</div>

            <h1 className="mt-4 max-w-3xl text-[24px] font-semibold leading-[1.2] text-[#0f2740] sm:text-[30px] md:text-[38px] lg:text-[42px]">
              Protegemos tu negocio, tu marca y tus decisiones más importantes con asesoría legal estratégica.
            </h1>

            <div className="h-6" />

            <p className="max-w-2xl text-[16px] leading-8 text-[#5f6b76]">
              Acompañamos empresas, inversionistas y clientes privados en derecho
              corporativo, registro de marcas, propiedad intelectual y asuntos
              legales de alto impacto en República Dominicana.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/consulta"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Solicitar consulta
              </Link>

              <a
                href="https://wa.me/18093302232?text=Hola%2C%20visité%20Cabinet%20Legal%20y%20me%20gustaría%20recibir%20orientación."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740]"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#66717c]">
              <div>Derecho corporativo</div>
              <div>Registro de marcas</div>
              <div>Propiedad intelectual</div>
              <div>Litigios</div>
            </div>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative h-[320px] sm:h-[420px] md:h-[500px]">
              <Image
                src="/hero-legal.jpg"
                alt="Cabinet Legal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="hero-image-overlay absolute inset-0" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-8">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#e9d3ab]">
                  Cabinet Legal
                </div>
                <div className="mt-2 text-xl font-semibold md:text-[28px]">
                  Atención directa, precisión técnica y visión estratégica.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-6 md:grid-cols-2 lg:px-8">
          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Problema frecuente</div>
            <h2 className="mt-4 text-2xl font-semibold text-[#0f2740] md:text-3xl">
              Muchos negocios operan sin la protección legal adecuada.
            </h2>
            <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
              Contratos mal estructurados, marcas sin registrar o decisiones
              empresariales sin soporte jurídico pueden generar conflictos,
              pérdidas económicas y riesgos innecesarios.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Nuestra propuesta</div>
            <h2 className="mt-4 text-2xl font-semibold text-[#0f2740] md:text-3xl">
              Asesoría clara, ejecutiva y enfocada en resultados.
            </h2>
            <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
              En Cabinet Legal combinamos estrategia, técnica y acompañamiento
              directo para ayudarte a proteger tu negocio y actuar con seguridad
              jurídica desde el inicio.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-8">
            <div className="eyebrow">Servicios clave</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
              Áreas donde podemos ayudarte
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="card-legal p-6 md:p-8">
              <div className="eyebrow">Corporativo</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Derecho corporativo
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Estructuración de negocios, contratos y acompañamiento legal empresarial.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="eyebrow">Marcas</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Registro de marcas
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Evaluación, estrategia y gestión completa del proceso ante ONAPI.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="eyebrow">Protección</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Propiedad intelectual
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Protección y defensa de activos intangibles con enfoque estratégico.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="eyebrow">Representación</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Litigios y disputas
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Manejo de controversias civiles y comerciales con rigor técnico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REGISTRO DE MARCAS DESTACADO */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-12">
            <div>
              <div className="eyebrow">Servicio destacado</div>
              <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
                Registro de marcas en República Dominicana
              </h2>
              <div className="gold-line mt-6" />
            </div>

            <div className="space-y-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              <p>
                Registrar tu marca correctamente desde el inicio puede evitar
                rechazos, conflictos y pérdida de derechos sobre tu identidad comercial.
              </p>
              <p>
                Evaluamos la viabilidad legal de tu marca, definimos la estrategia
                adecuada y gestionamos el proceso completo ante ONAPI.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  href="/registro-de-marcas"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm"
                  style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
                >
                  Ver servicio
                </Link>
                <Link
                  href="/consulta"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740]"
                >
                  Solicitar evaluación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-8">
            <div className="eyebrow">Cabinet Legal</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
              ¿Por qué trabajar con nosotros?
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Atención directa
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Recibes acompañamiento cercano y estratégico, sin procesos impersonales.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Visión empresarial
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Entendemos el contexto de negocio detrás de cada decisión jurídica.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Ejecución rigurosa
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Priorizamos claridad, estructura y seguimiento en cada asunto legal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-8">
            <div className="eyebrow">Recursos legales</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
              Publicaciones recientes
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <Link
              href="/blog/como-registrar-una-marca-republica-dominicana"
              className="card-legal block p-6 md:p-8"
            >
              <div className="eyebrow">Blog</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
                Cómo registrar una marca en República Dominicana (2026)
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
                Guía práctica sobre requisitos, proceso en ONAPI, tiempos y recomendaciones clave.
              </p>
            </Link>

            <Link
              href="/blog/cuanto-cuesta-registrar-una-marca"
              className="card-legal block p-6 md:p-8"
            >
              <div className="eyebrow">Blog</div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
                Cuánto cuesta registrar una marca en República Dominicana
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
                Lo que debes evaluar antes de solicitar presupuesto y por qué el costo depende del tipo de marca y las clases.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal p-6 md:p-12">
            <div className="eyebrow">Consulta</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
              ¿Necesitas orientación legal?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              Podemos evaluar tu situación y orientarte sobre la mejor estrategia
              según tu caso, tu negocio y tus objetivos.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
              <Link
                href="/consulta"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Solicitar consulta
              </Link>
              <a
                href="https://wa.me/18093302232?text=Hola%2C%20visité%20Cabinet%20Legal%20y%20me%20gustaría%20recibir%20orientación."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740]"
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}