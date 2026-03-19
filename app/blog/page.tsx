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
      <section className="container-legal py-16 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[260px] md:h-[320px]">
            <Image
              src="/hero-legal.jpg"
              alt="Blog legal Cabinet Legal"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-white md:text-5xl">
                Blog legal
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 md:text-lg">
                Publicaciones sobre marcas, propiedad intelectual y decisiones jurídicas
                relevantes para proteger y fortalecer tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className="card-legal overflow-hidden">
              <div className="relative h-[220px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="hero-image-overlay absolute inset-0" />
              </div>

              <div className="p-8">
                <div className="eyebrow">Artículo</div>
                <h2 className="mt-4 text-2xl font-semibold text-[#0f2740]">
                  {article.title}
                </h2>
                <p className="mt-4 leading-8 text-[#5f6b76]">{article.description}</p>
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