import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socios | Cabinet Legal",
  description:
    "Conoce a los socios de Cabinet Legal, firma de abogados en República Dominicana.",
  alternates: {
    canonical: "https://www.cabinetlegal.com.do/socios",
  },
};

const partners = [
  {
    name: "Aileen Espinosa",
    role: "Managing Partner",
    image: "/aileen-espinosa.jpg",
    description:
      "Abogada enfocada en asesoría corporativa, estructuración de negocios y estrategia legal empresarial.",
  },
];

export default function SociosPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="container-legal py-12 md:py-20">
        <div className="mb-10 md:mb-14">
          <div className="eyebrow">Cabinet Legal</div>
          <h1 className="mt-4 text-4xl font-semibold text-[#0f2740] md:text-5xl">
            Socios
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Un equipo con visión estratégica, atención directa y enfoque en decisiones
            legales de alto impacto.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {partners.map((partner) => (
            <article
              key={partner.name}
              className="card-legal overflow-hidden"
            >
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-6 md:p-8">
                <h2 className="text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
                  {partner.name}
                </h2>

                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#c8a46a]">
                  {partner.role}
                </p>

                <p className="mt-6 text-base leading-8 text-[#5f6b76]">
                  {partner.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}