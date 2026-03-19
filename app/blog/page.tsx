import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

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
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[180px] sm:h-[220px] md:h-[320px]">
            <Image
              src="/hero-legal.jpg"
              alt="Blog legal Cabinet Legal"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-2 max-w-4xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:mt-3 md:text-5xl">
                Blog legal
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">
                Publicaciones sobre marcas, propiedad intelectual y decisiones jurídicas
                relevantes para proteger y fortalecer tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-2">
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className="card-legal overflow-hidden">
              <div className="relative h-[170px] sm:h-[200px] md:h-[220px]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="hero-image-overlay absolute inset-0" />
              </div>

              <div className="p-5 md:p-8">
                <div className="eyebrow">Artículo</div>
                <h2 className="mt-3 text-lg font-semibold leading-tight text-[#0f2740] sm:text-xl md:mt-4 md:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#5f6b76] md:mt-4 md:text-base md:leading-8">
                  {article.description}
                </p>
                <div className="mt-5 text-sm font-semibold text-[#0f2740] md:mt-6">
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