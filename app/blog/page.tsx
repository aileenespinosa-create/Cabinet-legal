import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="container-legal py-12 md:py-20">
        <h1 className="text-4xl font-semibold text-[#0f2740] mb-8">
          Blog
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/blog/como-registrar-una-marca-republica-dominicana" className="card-legal p-6">
            Cómo registrar una marca en República Dominicana
          </Link>

          <Link href="/blog/cuanto-cuesta-registrar-una-marca" className="card-legal p-6">
            Cuánto cuesta registrar una marca
          </Link>
        </div>
      </section>
    </main>
  );
}