import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Socios | Cabinet Legal",
  description:
    "Conoce a los socios de Cabinet Legal, firma de abogados en República Dominicana, con enfoque en derecho corporativo, marcas, propiedad intelectual y litigios.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/socios",
  },
};

const partners = [
  {
    name: "Aileen Espinosa",
    role: "Managing Partner",
    image: "/aileen.jpg",
    bio: "Aileen Espinosa lidera Cabinet Legal con una práctica enfocada en derecho corporativo, estructuración de negocios, registro de marcas y propiedad intelectual. Asesora a empresas, inversionistas y clientes privados en decisiones jurídicas de alto impacto, con un enfoque estratégico, ejecutivo y orientado a resultados.",
    focus:
      "Su práctica combina visión empresarial, precisión técnica y acompañamiento directo en la toma de decisiones corporativas relevantes, así como en la protección legal de marcas y activos intangibles.",
    areas: [
      "Derecho corporativo",
      "Estructuración de negocios",
      "Registro de marcas",
      "Propiedad intelectual",
      "Gobierno corporativo",
      "Contratos comerciales",
      "Estrategia legal empresarial",
    ],
  },
  {
    name: "Ellis Beato",
    role: "Founding Partner",
    image: "/ellis.jpg",
    bio: "Ellis Beato lidera la práctica de litigios en Cabinet Legal, con experiencia en litigios civiles, laborales, administrativos y en materia inmobiliaria, así como en la resolución de conflictos empresariales complejos. Representa a clientes en procesos judiciales y controversias estratégicas, con un enfoque riguroso, técnico y orientado a resultados.",
    focus:
      "Su práctica se centra en la defensa efectiva de los intereses de sus clientes, combinando análisis jurídico profundo, estrategia procesal y ejecución sólida en cada etapa del litigio.",
    areas: [
      "Litigios civiles",
      "Litigios laborales",
      "Litigios administrativos",
      "Litigios en materia inmobiliaria",
      "Resolución de conflictos",
      "Representación judicial",
      "Estrategia procesal",
      "Controversias empresariales",
    ],
  },
];

export default function SociosPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f6f1]">
      <SiteHeader />

      <section className="container-legal py-12 md:py-20">
        <div className="max-w-4xl">
          <div className="eyebrow">Cabinet Legal</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0f2740] md:text-5xl">
            Socios
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f6b76] md:text-lg">
            Un equipo con enfoque estratégico, atención directa de socios y
            especialización en asesoría corporativa y litigios de alto impacto.
          </p>
        </div>

        <div className="mt-14 md:mt-20">
          {partners.map((partner, index) => (
            <article
              key={partner.name}
              className={`grid gap-8 border-t border-[#ddd4c5] py-12 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-16 ${
                index === partners.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="relative h-[280px] w-[200px] overflow-hidden rounded-sm bg-[#ece7de] md:h-[300px] md:w-[220px]">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, 220px"
                />
              </div>

              <div className="max-w-4xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c8a46a]">
                  {partner.role}
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0f2740] md:text-4xl">
                  {partner.name}
                </h2>

                <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.9fr)] md:gap-10">
                  <div>
                    <p className="text-base leading-8 text-[#5f6b76] md:text-lg">
                      {partner.bio}
                    </p>

                    <div className="mt-8">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f2740]">
                        Enfoque profesional
                      </h3>
                      <p className="mt-3 text-base leading-8 text-[#5f6b76]">
                        {partner.focus}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f2740]">
                      Áreas de práctica
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {partner.areas.map((area) => (
                        <li
                          key={area}
                          className="border-b border-[#e6dece] pb-3 text-sm text-[#0f2740] md:text-[15px]"
                        >
                          {area}
                        </li>
                      ))}
                    </ul>
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
