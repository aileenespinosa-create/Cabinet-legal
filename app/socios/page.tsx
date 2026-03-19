import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

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
    image: "/aileen.jpg",
    bio: "Aileen Espinosa lidera Cabinet Legal con una práctica enfocada en derecho corporativo, estructuración de negocios y estrategia legal empresarial. Asesora a empresas, inversionistas y clientes privados en decisiones jurídicas de alto impacto, con un enfoque claro, ejecutivo y orientado a resultados.",
    focus:
      "Su práctica combina visión estratégica, precisión técnica y acompañamiento cercano en la toma de decisiones corporativas relevantes.",
    areas: [
      "Derecho corporativo",
      "Estructuración de negocios",
      "Gobierno corporativo",
      "Contratos comerciales",
      "Estrategia legal empresarial",
    ],
  },
  {
    name: "Ellis",
    role: "Partner",
    image: "/ellis.jpg",
    bio: "Ellis desarrolla una práctica enfocada en asuntos corporativos, comerciales y en el acompañamiento legal de operaciones empresariales. Su trabajo se distingue por un enfoque práctico, analítico y orientado a la ejecución rigurosa de estrategias jurídicas.",
    focus:
      "Acompaña a clientes en la gestión legal de sus operaciones y en la resolución de situaciones complejas con criterio técnico y visión empresarial.",
    areas: [
      "Asuntos corporativos",
      "Operaciones comerciales",
      "Asesoría empresarial",
      "Estrategia legal",
      "Resolución de situaciones complejas",
    ],
  },
];

export default function SociosPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader internal />

      <section className="container-legal py-10 md:py-16">
        <div className="mb-10 md:mb-14">
          <div className="eyebrow">Cabinet Legal</div>
          <h1 className="mt-4 text-4xl font-semibold text-[#0f2740] md:text-5xl">
            Socios
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Un equipo con visión estratégica, atención directa y enfoque en decisiones
            legales de alto impacto.
          </p>
        </div>

        <div className="space-y-8 md:space-y-10">
          {partners.map((partner) => (
            <article key={partner.name} className="card-legal overflow-hidden">
              <div className="grid lg:grid-cols-[320px_minmax(0,1fr)]">
                <div className="relative h-[360px] sm:h-[420px] lg:h-full">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  <div className="eyebrow">Cabinet Legal</div>

                  <h2 className="mt-4 text-2xl font-semibold leading-tight text-[#0f2740] md:text-3xl">
                    {partner.name}
                  </h2>

                  <p className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#c8a46a]">
                    {partner.role}
                  </p>

                  <p className="mt-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
                    {partner.bio}
                  </p>

                  <div className="mt-7">
                    <h3 className="text-lg font-semibold text-[#0f2740] md:text-xl">
                      Enfoque profesional
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#5f6b76] md:leading-8">
                      {partner.focus}
                    </p>
                  </div>

                  <div className="mt-7">
                    <h3 className="text-lg font-semibold text-[#0f2740] md:text-xl">
                      Áreas de práctica
                    </h3>

                    <div className="mt-4 flex flex-wrap gap-3">
                      {partner.areas.map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-[#e8dfd0] bg-white px-4 py-2 text-sm text-[#0f2740]"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}