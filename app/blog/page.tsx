import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog legal | Cabinet Legal",
  description:
    "Artículos legales de Cabinet Legal sobre marcas, propiedad intelectual, asuntos corporativos y decisiones jurídicas relevantes en República Dominicana.",
  alternates: {
    canonical: "https://www.cabinetlegal.com.do/blog",
  },
};

const articles = [
  {
    href: "/blog/como-registrar-una-marca-republica-dominicana",
    title: "Cómo registrar una marca en República Dominicana (2026)",
    description:
      "Guía práctica sobre requisitos, proceso en ONAPI, tiempos, errores comunes y recomendaciones clave.",
    image: "/blog-legal.jpg",
  },
  {
    href: "/blog/cuanto-cuesta-registrar-una-marca",
    title: "Cuánto cuesta registrar una marca en República Dominicana",
    description:
      "Explicamos por qué el costo depende del tipo de marca, la cantidad de clases y la estructura del expediente.",
    image: "/blog-legal.jpg",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <section className="container-legal py-12 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[220px] sm:h-[260px] md:h-[320px]">
            <Image
              src="/hero-legal.jpg"
              alt="Blog legal Cabinet Legal"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
                Blog legal
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">
                Publicaciones sobre marcas, propiedad intelectual y decisiones jurídicas
                relevantes para proteger y fortalecer tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-legal grid gap-4 sm:gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className="card-legal overflow-hidden">
              <div className="relative h-[200px] sm:h-[220px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="hero-image-overlay absolute inset-0" />
              </div>

              <div className="p-6 md:p-8">
                <div className="eyebrow">Artículo</div>
                <h2 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-4 leading-7 text-[#5f6b76] md:leading-8">
                  {article.description}
                </p>
                <div className="mt-6 text-sm font-semibold text-[#0f2740]">
                  Leer artículo →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}