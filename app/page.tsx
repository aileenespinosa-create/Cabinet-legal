import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />

      {/* HERO */}
      <section className="py-12 md:py-24">
        <div className="container-legal grid items-center gap-8 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="eyebrow">Cabinet Legal</div>

            <h1 className="mt-4 max-w-3xl text-[30px] font-semibold leading-[1.08] text-[#0f2740] sm:text-[38px] md:text-6xl">
              Asesoría legal estratégica para proteger tu negocio y tomar decisiones con seguridad.
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-6 text-[#5f6b76] md:mt-6 md:text-lg md:leading-8">
              Acompañamos empresas, inversionistas y clientes privados en derecho
              corporativo, registro de marcas, propiedad intelectual y asuntos
              legales de alto impacto en República Dominicana.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8">
              <Link href="/consulta" className="btn-primary-legal">
                Solicitar consulta
              </Link>

              <a
                href="https://wa.me/18095551234?text=Hola%2C%20visité%20Cabinet%20Legal%20y%20me%20gustaría%20recibir%20orientación."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-legal"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#66717c] md:mt-10 md:gap-6">
              <div>Derecho corporativo</div>
              <div>Registro de marcas</div>
              <div>Propiedad intelectual</div>
              <div>Litigios</div>
            </div>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative h-[320px] sm:h-[420px] md:h-[520px]">
              <Image
                src="/hero-legal.jpg"
                alt="Cabinet Legal - Asesoría legal premium"
                fill
                className="object-cover"
              />
              <div className="hero-image-overlay absolute inset-0" />

              <div className="absolute bottom-0 left-0 right-0 p-5 text-white md:p-8">
                <div className="text-[10px] uppercase tracking-[0.22em] text-[#e9d3ab] md:text-xs md:tracking-[0.28em]">
                  Cabinet Legal
                </div>
                <div className="mt-2 text-lg font-semibold leading-tight sm:text-xl md:mt-3 md:text-2xl">
                  Atención directa, precisión técnica y visión estratégica.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-2">
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
        <div className="container-legal">
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
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.95fr_1.05fr] md:p-12">
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

            <div className="pt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/registro-de-marcas" className="btn-primary-legal">
                Ver servicio
              </Link>
              <Link href="/consulta" className="btn-secondary-legal">
                Solicitar evaluación
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal">
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
        <div className="container-legal">
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
        <div className="container-legal card-legal p-6 md:p-12">
          <div className="eyebrow">Consulta</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
            ¿Necesitas orientación legal?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Podemos evaluar tu situación y orientarte sobre la mejor estrategia
            según tu caso, tu negocio y tus objetivos.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>
            <a
              href="https://wa.me/18095551234?text=Hola%2C%20visité%20Cabinet%20Legal%20y%20me%20gustaría%20recibir%20orientación."
              target="_blank"
              rel="noopener noreferrer"
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