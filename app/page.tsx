import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="border-b border-[#e8dfd0] bg-transparent">
        <div className="container-legal flex items-center justify-between py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-cabinet-legal.jpg"
              alt="Cabinet Legal"
              width={54}
              height={54}
              className="h-12 w-auto rounded-md object-contain"
            />
            <div>
              <div className="text-sm font-semibold tracking-[0.22em] text-[#0f2740]">
                CABINET LEGAL
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-[#8b94a0]">
                Attorneys at law
              </div>
            </div>
          </div>

          <nav className="hidden gap-6 text-sm text-[#48525d] md:flex">
            <Link href="/firma">La Firma</Link>
            <Link href="/socios">Socios</Link>
            <Link href="/servicios">Servicios</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/consulta">Consulta</Link>
          </nav>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-legal grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="eyebrow">Cabinet Legal</div>
            <h1 className="mt-4 max-w-4xl text-5xl font-semibold leading-tight text-[#0f2740] md:text-7xl">
              Firma de abogados en República Dominicana con enfoque corporativo y estratégico.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6b76]">
              Asesoramos empresas, inversionistas y clientes privados en asuntos corporativos,
              inmobiliarios, litigiosos, propiedad intelectual y servicios empresariales, con
              atención directa de socios y visión orientada a resultados.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/consulta" className="btn-primary-legal">
                Solicitar consulta
              </Link>
              <Link href="/servicios" className="btn-secondary-legal">
                Ver servicios
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[#66717c]">
              <div>Corporativo</div>
              <div>Inmobiliario</div>
              <div>Litigios</div>
              <div>Propiedad intelectual</div>
            </div>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative h-[460px]">
              <Image
                src="/legal-hero.jpg"
                alt="Despacho legal"
                fill
                className="object-cover"
              />
              <div className="hero-image-overlay absolute inset-0" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="text-xs uppercase tracking-[0.28em] text-[#e9d3ab]">
                  Cabinet Legal
                </div>
                <div className="mt-3 text-2xl font-semibold">
                  Asesoría legal precisa para decisiones de alto impacto.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container-legal grid gap-6 md:grid-cols-3">
          <div className="card-legal p-8">
            <div className="eyebrow">Servicios</div>
            <h2 className="mt-4 text-2xl font-semibold text-[#0f2740]">Derecho corporativo</h2>
            <p className="mt-4 leading-8 text-[#5f6b76]">
              Estructuración, gobierno corporativo, contratos y acompañamiento legal empresarial.
            </p>
          </div>

          <div className="card-legal p-8">
            <div className="eyebrow">Protección</div>
            <h2 className="mt-4 text-2xl font-semibold text-[#0f2740]">Marcas y propiedad intelectual</h2>
            <p className="mt-4 leading-8 text-[#5f6b76]">
              Registro, estrategia de protección, vigilancia y defensa de activos intangibles.
            </p>
          </div>

          <div className="card-legal p-8">
            <div className="eyebrow">Representación</div>
            <h2 className="mt-4 text-2xl font-semibold text-[#0f2740]">Litigios y disputas</h2>
            <p className="mt-4 leading-8 text-[#5f6b76]">
              Manejo de conflictos civiles y comerciales con criterio técnico y estrategia procesal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-legal card-legal grid gap-8 p-8 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">La firma</div>
            <h2 className="mt-4 text-4xl font-semibold text-[#0f2740]">
              Atención boutique, ejecución rigurosa.
            </h2>
            <div className="gold-line mt-6" />
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#5f6b76]">
            <p>
              Cabinet Legal es una firma legal independiente, diseñada para ofrecer asesoría
              sofisticada con atención directa de socios.
            </p>
            <p>
              Nuestra práctica integra derecho, estrategia y operación para acompañar decisiones
              empresariales relevantes y proteger intereses de alto valor.
            </p>
            <p>
              Priorizamos claridad, discreción, precisión técnica y una comunicación impecable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container-legal">
          <div className="mb-8">
            <div className="eyebrow">Publicaciones</div>
            <h2 className="mt-4 text-4xl font-semibold text-[#0f2740]">Recursos legales recientes</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/blog/como-registrar-una-marca-republica-dominicana"
              className="card-legal block p-8"
            >
              <div className="eyebrow">Blog</div>
              <h3 className="mt-4 text-2xl font-semibold text-[#0f2740]">
                Cómo registrar una marca en República Dominicana (2026)
              </h3>
              <p className="mt-4 leading-8 text-[#5f6b76]">
                Guía práctica sobre requisitos, proceso en ONAPI, tiempos y recomendaciones clave.
              </p>
            </Link>

            <Link
              href="/blog/cuanto-cuesta-registrar-una-marca"
              className="card-legal block p-8"
            >
              <div className="eyebrow">Blog</div>
              <h3 className="mt-4 text-2xl font-semibold text-[#0f2740]">
                Cuánto cuesta registrar una marca en República Dominicana
              </h3>
              <p className="mt-4 leading-8 text-[#5f6b76]">
                Costos oficiales, honorarios y factores que influyen en el valor del proceso.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="pb-20 pt-8">
        <div className="container-legal card-legal p-8 md:p-12">
          <div className="eyebrow">Contacto</div>
          <h2 className="mt-4 text-4xl font-semibold text-[#0f2740]">
            ¿Necesitas acompañamiento legal?
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-[#5f6b76]">
            Podemos evaluar tu caso y orientarte sobre la mejor vía jurídica según tus objetivos.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
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