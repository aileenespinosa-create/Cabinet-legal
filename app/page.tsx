import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Abogados en República Dominicana para Inversionistas Extranjeros",
  description:
    "Cabinet Legal asesora a inversionistas extranjeros, empresas y clientes privados en compra de bienes raíces, derecho corporativo, fusiones y adquisiciones, marcas y litigios en República Dominicana.",
  alternates: {
    canonical: "https://cabinetlegal.com.do",
    languages: {
      "x-default": "https://cabinetlegal.com.do",
      "es-DO": "https://cabinetlegal.com.do",
      en: "https://cabinetlegal.com.do/en",
      fr: "https://cabinetlegal.com.do/fr",
    },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#fcfaf6] pt-[96px]">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Cabinet Legal
            </div>

            <h1 className="max-w-3xl text-[26px] font-light leading-[1.12] tracking-tight text-[#0f2740] sm:text-[34px] md:text-[44px] lg:text-[52px]">
              Protegemos tu negocio, tu marca y tus decisiones más importantes
              con asesoría legal estratégica y personalizada. 
            </h1>

            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />

            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-[#5f6b76] md:text-[17px]">
              Acompañamos empresas, inversionistas y clientes privados en derecho
              corporativo, registro de marcas, propiedad intelectual y asuntos
              legales de alto impacto en República Dominicana.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/consulta"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Solicitar consulta
              </Link>

              <a
                href="https://wa.me/18295420615?text=Hola%2C%20visité%20Cabinet%20Legal%20y%20me%20gustaría%20recibir%20orientación."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-transparent px-7 py-3 text-sm font-medium text-[#5f6b76] transition hover:border-[#c8a46a] hover:bg-white hover:text-[#0f2740]"
              >
                Escribir por WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#66717c]">
              <div>Derecho corporativo</div>
              <div>Registro de marcas</div>
              <div>Propiedad intelectual</div>
              <div>Litigios</div>
            </div>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative h-[340px] sm:h-[430px] md:h-[520px]">
              <Image
                src="/hero-legal.jpg"
                alt="Abogados de Cabinet Legal asesorando a inversionistas extranjeros en República Dominicana"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="hero-image-overlay absolute inset-0" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-9">
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#e9d3ab]">
                  Cabinet Legal
                </div>
                <div className="mt-3 max-w-xl text-[22px] font-light leading-[1.2] tracking-tight md:text-[30px]">
                  Atención directa, precisión técnica y visión estratégica.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section className="pb-14 md:pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 border-y border-[#e6dece] py-8 md:grid-cols-4 md:py-10">
            <div>
              <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
                2009
              </div>
              <div className="mt-1 text-sm text-[#5f6b76]">
                Año de fundación
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
                9
              </div>
              <div className="mt-1 text-sm text-[#5f6b76]">
                Áreas de práctica especializadas
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
                3
              </div>
              <div className="mt-1 text-sm text-[#5f6b76]">
                Idiomas de atención: español, inglés y francés
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
                100%
              </div>
              <div className="mt-1 text-sm text-[#5f6b76]">
                Trámites que puedes iniciar por poder, sin viajar al país
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA / SOLUCIÓN */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-6 md:grid-cols-2 lg:px-8">
          <div className="card-legal p-6 md:p-9">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Problema frecuente
            </div>
            <h2 className="text-2xl font-light tracking-tight text-[#0f2740] md:text-3xl">
              Muchos negocios operan sin la protección legal adecuada.
            </h2>
            <p className="mt-5 leading-8 text-[#5f6b76]">
              Contratos mal estructurados, marcas sin registrar o decisiones
              empresariales sin soporte jurídico pueden generar conflictos,
              pérdidas económicas y riesgos innecesarios.
            </p>
          </div>

          <div className="card-legal p-6 md:p-9">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Nuestra propuesta
            </div>
            <h2 className="text-2xl font-light tracking-tight text-[#0f2740] md:text-3xl">
              Un socio revisa tu caso, no un formulario.
            </h2>
            <p className="mt-5 leading-8 text-[#5f6b76]">
              Desde 2009 acompañamos a empresas, inversionistas extranjeros y
              clientes privados en compras de bienes raíces, estructuración
              societaria, registro de marcas y litigios en República
              Dominicana, con atención directa de socios en cada caso.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Servicios clave
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Áreas donde podemos ayudarte
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Corporativo
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Derecho corporativo
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Estructuración de negocios, contratos y acompañamiento legal
                empresarial.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Marcas
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Registro de marcas
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Evaluación, estrategia y gestión completa del proceso ante ONAPI.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Protección
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Propiedad intelectual
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Protección y defensa de activos intangibles con enfoque
                estratégico.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Representación
              </div>
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
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Servicio destacado
              </div>
              <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
                Registro de marcas en República Dominicana
              </h2>
              <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#5f6b76] md:text-lg">
              <p>
                Registrar tu marca correctamente desde el inicio puede evitar
                rechazos, conflictos y pérdida de derechos sobre tu identidad
                comercial.
              </p>
              <p>
                Evaluamos la viabilidad legal de tu marca, definimos la
                estrategia adecuada y gestionamos el proceso completo ante ONAPI.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  href="/registro-de-marcas"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
                >
                  Ver servicio
                </Link>
                <Link
                  href="/consulta"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-transparent px-7 py-3 text-sm font-medium text-[#5f6b76] transition hover:border-[#c8a46a] hover:bg-white hover:text-[#0f2740]"
                >
                  Solicitar evaluación
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVERSIÓN EXTRANJERA DESTACADO */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Servicio destacado
              </div>
              <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
                Asesoría legal para inversionistas extranjeros
              </h2>
              <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#5f6b76] md:text-lg">
              <p>
                Si estás comprando bienes raíces en República Dominicana
                desde el extranjero, la protección legal correcta marca la
                diferencia entre una inversión segura y un problema costoso.
              </p>
              <p>
                Estructuramos tu compra, revisamos contratos y te
                acompañamos en el cierre, trabajando junto a Land Consulting
                DR para la verificación técnica de la propiedad.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  href="/inversion-extranjera"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
                >
                  Ver servicio
                </Link>
                <Link
                  href="/consulta"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-transparent px-7 py-3 text-sm font-medium text-[#5f6b76] transition hover:border-[#c8a46a] hover:bg-white hover:text-[#0f2740]"
                >
                  Solicitar consulta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Cabinet Legal
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              ¿Por qué trabajar con nosotros?
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Atención directa de socios
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Hablas con Aileen Espinosa o Ellis Beato desde la primera
                consulta, no con un equipo júnior intermedio.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Atención en tu idioma
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Trabajamos en español, inglés y francés, sin depender de un
                intermediario para entender lo que está en juego.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Seguimiento hasta el cierre
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Damos seguimiento activo a cada expediente ante ONAPI,
                Migración o el Registro de Títulos hasta que el trámite
                termina, no solo hasta que se presenta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Recursos legales
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Publicaciones recientes
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <Link
              href="/blog/comprar-propiedad-republica-dominicana-extranjero"
              className="card-legal block p-6 transition hover:-translate-y-[1px] md:p-8"
            >
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Blog
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
                Cómo comprar propiedad en República Dominicana siendo
                extranjero
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
                Requisitos, due diligence de título, cierre notarial y
                errores que debes evitar antes de firmar.
              </p>
            </Link>

            <Link
              href="/blog/residencia-por-inversion-republica-dominicana"
              className="card-legal block p-6 transition hover:-translate-y-[1px] md:p-8"
            >
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Blog
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
                Residencia por inversión en República Dominicana: guía 2026
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
                Las tres vías más comunes para obtener la residencia y
                tiempos realistas del proceso.
              </p>
            </Link>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/blog"
              className="btn-secondary-legal"
            >
              Ver todas las publicaciones
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal p-6 md:p-12">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Consulta
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              ¿Necesitas orientación legal?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6b76] md:text-lg">
              Podemos evaluar tu situación y orientarte sobre la mejor estrategia
              según tu caso, tu negocio y tus objetivos.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
              <Link
                href="/consulta"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Solicitar consulta
              </Link>
              <a
                href="https://wa.me/18295420615?text=Hola%2C%20visité%20Cabinet%20Legal%20y%20me%20gustaría%20recibir%20orientación."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-transparent px-7 py-3 text-sm font-medium text-[#5f6b76] transition hover:border-[#c8a46a] hover:bg-white hover:text-[#0f2740]"
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
