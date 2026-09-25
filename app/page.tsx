import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import GuideBanner from "@/components/GuideBanner";
import ServicesAccordion from "@/components/ServicesAccordion";

export const metadata: Metadata = {
  title: "Abogados en República Dominicana, Santo Domingo",
  description:
    "Firma de abogados en Santo Domingo desde 2009: derecho corporativo, tributario, inmobiliario, sucesiones, marcas, residencia y litigios. Atención directa de socios.",
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
              Abogados en República Dominicana
            </div>

            <h1 className="max-w-3xl text-[26px] font-light leading-[1.12] tracking-tight text-[#0f2740] sm:text-[34px] md:text-[44px] lg:text-[52px]">
              Protegemos lo que usted construye en República Dominicana.
            </h1>

            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />

            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-[#5f6b76] md:text-[17px]">
              Personas, familias, empresas e inversionistas confían en
              nosotros para comprar e invertir con seguridad, estructurar sus
              negocios, proteger su patrimonio y defender sus derechos:
              derecho corporativo y tributario, inmobiliario, sucesiones,
              marcas, residencia y litigios. Un socio dirige su asunto, le
              atiende en español, inglés o francés y, en la mayoría de los
              trámites, puede actuar por poder sin que usted tenga que viajar.
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
              <Link href="/servicios/derecho-corporativo" className="transition hover:text-[#0f2740]">
                Derecho corporativo
              </Link>
              <Link href="/inversion-extranjera" className="transition hover:text-[#0f2740]">
                Inversión inmobiliaria
              </Link>
              <Link href="/servicios/planificacion-patrimonial-y-sucesoral" className="transition hover:text-[#0f2740]">
                Planificación sucesoral
              </Link>
              <Link href="/servicios/litigacion-y-defensa-judicial" className="transition hover:text-[#0f2740]">
                Litigación
              </Link>
            </div>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative aspect-[1808/1024]">
              <Image
                src="/hero-legal.jpg"
                alt="Abogados de Cabinet Legal asesorando a inversionistas extranjeros en República Dominicana"
                fill
                priority
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="bg-[#0f2740] p-6 text-white md:p-8">
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#e9d3ab]">
                  Cabinet Legal
                </div>
                <div className="mt-3 max-w-xl text-[22px] font-light leading-[1.2] tracking-tight md:text-[30px]">
                  Cada asunto, dirigido por un socio desde la primera consulta.
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
                24 h
              </div>
              <div className="mt-1 text-sm text-[#5f6b76]">
                Respuesta de un socio, en días hábiles
              </div>
            </div>
            <div>
              <div className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
                12
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
                Trámites que puede iniciar por poder, sin viajar al país
              </div>
            </div>
          </div>
        </div>
      </section>

      <GuideBanner lang="es" />

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
              Contratos mal redactados, marcas sin registrar ante ONAPI o
              decisiones societarias sin soporte jurídico terminan en
              conflictos entre socios, reclamaciones fiscales y pérdidas
              que se podían evitar.
            </p>
          </div>

          <div className="card-legal p-6 md:p-9">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Nuestra propuesta
            </div>
            <h2 className="text-2xl font-light tracking-tight text-[#0f2740] md:text-3xl">
              Un socio revisa su caso, no un formulario.
            </h2>
            <p className="mt-5 leading-8 text-[#5f6b76]">
              Asesoramos a empresas, inversionistas extranjeros y
              familias en compras de inmuebles, estructuración societaria,
              registro de marcas y litigios en República Dominicana. Cada
              asunto lo dirige un socio, con el apoyo de abogados dedicados
              a cada área de práctica.
            </p>
          </div>
        </div>
      </section>

      <ServicesAccordion lang="es" />

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
                Registrar su marca correctamente desde el inicio evita
                rechazos, oposiciones y la pérdida de derechos sobre su
                nombre comercial.
              </p>
              <p>
                Verificamos la disponibilidad de su marca, definimos las
                clases que debe proteger y gestionamos el proceso completo
                ante ONAPI.
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
                Si usted compra un inmueble en República Dominicana desde el
                extranjero, la revisión del título ante la Jurisdicción
                Inmobiliaria y un contrato bien redactado separan una
                inversión segura de un litigio costoso.
              </p>
              <p>
                Estructuramos su compra, revisamos los contratos y le
                acompañamos hasta la inscripción en el Registro de Títulos,
                junto a Land Consulting DR para la verificación técnica de la
                propiedad.
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
                Un socio dirige su asunto desde la primera consulta, con el
                apoyo de abogados dedicados a cada área de práctica.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Atención en su idioma
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
                errores que debe evitar antes de firmar.
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
              ¿Necesita orientación legal?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6b76] md:text-lg">
              Cuéntenos su situación. Un socio la evaluará y le explicará
              sus opciones legales antes de que usted tome una decisión.
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
