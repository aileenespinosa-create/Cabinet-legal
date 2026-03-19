import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Blog Legal | Cabinet Legal",
  description:
    "Artículos legales de Cabinet Legal sobre marcas, empresas, litigios y derecho empresarial en República Dominicana.",
};

const posts = [
  {
    title: "Cómo registrar una marca en República Dominicana",
    href: "/blog/como-registrar-una-marca-republica-dominicana",
    excerpt:
      "Guía práctica sobre el proceso de registro de marcas ante ONAPI, requisitos, tiempos y recomendaciones legales.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
            <h1 className="mt-4 text-4xl font-serif font-semibold text-[#0A3A5A]">
              Blog Legal
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Publicamos contenido jurídico útil para empresas, inversionistas y clientes que
              necesitan tomar decisiones legales informadas en República Dominicana.
            </p>
          </div>

          <div className="mt-16 grid gap-8">
            {posts.map((post) => (
              <article
                key={post.href}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-2xl font-serif font-semibold text-[#0A3A5A]">
                  <Link href={post.href} className="hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-4 leading-8 text-slate-600">{post.excerpt}</p>
                <div className="mt-6">
                  <Link
                    href={post.href}
                    className="inline-flex rounded-full bg-[#0A3A5A] px-5 py-2 text-sm font-medium text-white"
                  >
                    Leer artículo
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}