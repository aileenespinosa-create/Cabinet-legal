import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-[#e8dfd0] bg-transparent">
        <div className="container-legal flex flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-cabinet-legal.jpg"
              alt="Cabinet Legal"
              width={54}
              height={54}
              className="h-11 w-auto rounded-md object-contain md:h-12"
            />
            <div>
              <div className="text-xs font-semibold tracking-[0.18em] text-[#0f2740] md:text-sm md:tracking-[0.22em]">
                CABINET LEGAL
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-[#8b94a0] md:text-[11px] md:tracking-[0.22em]">
                Attorneys at law
              </div>
            </div>
          </div>

          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#48525d] md:gap-6 md:text-sm">
            <Link href="/firma">La Firma</Link>
            <Link href="/socios">Socios</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/registro-de-marcas">Marcas</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/consulta">Consulta</Link>
          </nav>
        </div>
      </section>

      <section className="py-12 md:py-24">
        <div className="container-legal grid items-center gap-8 md:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="eyebrow">Cabinet Legal</div>

            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-[1.05] text-[#0f2740] sm:text-5xl md:text-6xl">
              Firma de abogados en República Dominicana con enfoque corporativo y estratégico.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5f6b76] md:mt-6 md:text-lg md:leading-8">
              Asesoramos empresas, inversionistas y clientes privados en asuntos
              corporativos, propiedad intelectual, litigios y decisiones
              empresariales de alto impacto, con atención directa de socios y
              criterio orientado a resultados.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-8 md:gap-4">
              <Link href="/consulta" className="btn-primary-legal">
                Solicitar consulta
              </Link>

              <Link href="/servicios" className="btn-secondary-legal">
                Ver servicios
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#66717c] md:mt-10 md:gap-6">
              <div>Corporativo</div>
              <div>Litigios</div>
              <div>Propiedad intelectual</div>
              <div>Registro de marcas</div>
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
                  Asesoría legal precisa para decisiones de alto impacto.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-legal grid gap-4 sm:gap-6 md:grid-cols-3">
          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Servicios</div>
            <h2 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Derecho corporativo
            </h2>
            <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
              Estructuración de negocios, gobierno corporativo, contratos y
              acompañamiento jurídico en decisiones empresariales relevantes.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Protección</div>
            <h2 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Marcas y propiedad intelectual
            </h2>
            <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
              Registro, estrategia de protección y defensa de activos
              intangibles ante riesgos legales y comerciales.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Representación</div>
            <h2 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Litigios y disputas
            </h2>
            <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
              Manejo de controversias civiles y comerciales con enfoque
              estratégico, claridad técnica y ejecución rigurosa.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">La firma</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
              Atención boutique, ejecución rigurosa.
            </h2>
            <div className="gold-line mt-6" />
          </div>

          <div className="space-y-5 text-base leading-7 text-[#5f6b76] md:space-y-6 md:text-lg md:leading-8">
            <p>
              Cabinet Legal es una firma legal independiente diseñada para
              ofrecer asesoría sofisticada con atención directa de socios.
            </p>
            <p>
              Nuestra práctica integra derecho, estrategia y operación para
              acompañar decisiones empresariales relevantes y proteger intereses
              de alto valor.
            </p>
            <p>
              Priorizamos claridad, discreción, precisión técnica y una
              comunicación impecable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-legal">
          <div className="mb-8">
            <div className="eyebrow">Publicaciones</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
              Recursos legales recientes
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
                Guía práctica sobre requisitos, proceso en ONAPI, tiempos y
                recomendaciones clave.
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
                Lo que debes evaluar antes de solicitar presupuesto y por qué el
                costo depende del tipo de marca y las clases.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-6 md:pb-20 md:pt-8">
        <div className="container-legal card-legal p-6 md:p-12">
          <div className="eyebrow">Contacto</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
            ¿Necesitas acompañamiento legal?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Podemos evaluar tu caso y orientarte sobre la mejor vía jurídica
            según tus objetivos y la naturaleza de tu negocio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <Link href="/consulta" className="btn-primary-legal">
              Solicitar consulta
            </Link>
            <Link href="/blog" className="btn-secondary-legal">
              Ir al blog
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}