import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Socios y Abogados de Cabinet Legal en República Dominicana",
  description:
    "Conoce a los socios de Cabinet Legal, firma de abogados en República Dominicana, con enfoque en derecho corporativo, marcas, propiedad intelectual y litigios.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/socios",
    languages: {
      "x-default": "https://cabinetlegal.com.do/socios",
      "es-DO": "https://cabinetlegal.com.do/socios",
      en: "https://cabinetlegal.com.do/en/socios",
      fr: "https://cabinetlegal.com.do/fr/socios",
    },
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
    image: "/ellis-beato.jpg",
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
    <main className="overflow-x-hidden bg-[#f8f6f1] pt-[88px]">
      <SiteHeader />

      <section className="container-legal py-12 md:py-20">
        <div className="max-w-4xl">
          <div className="eyebrow">Cabinet Legal</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0f2740] md:text-5xl">
            Socios
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f6b76] md:text-lg">
            Dos socios al frente de un equipo de más de siete abogados
            asociados, con especialización en asesoría corporativa, inversión
            extranjera y litigios de alto impacto.
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

      <section className="container-legal pb-16 md:pb-24">
        <div className="grid gap-10 rounded-[24px] bg-[#0f2740] p-7 text-white md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">Nuestro equipo</div>
            <h2 className="pt-4 text-3xl font-light leading-tight tracking-tight md:text-4xl">Más de siete abogados asociados, organizados por área</h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
            <p className="pt-6 leading-8 text-white/80">Detrás de cada socio trabaja un equipo de abogados asociados especializados. Cada asunto lo dirige un socio y lo desarrolla el abogado que domina la materia, para que tengas criterio de socio y dedicación de especialista.</p>
            <div className="mt-8 flex items-end gap-4">
              <div className="text-5xl font-semibold text-[#c8a46a]">+7</div>
              <div className="pb-1 text-sm uppercase tracking-[0.14em] text-white/70">Abogados asociados</div>
            </div>
            <Link
              href="/consulta"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c8a46a] px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#d6b57f]"
            >
              Solicitar consulta
            </Link>
          </div>
          <ul className="grid content-center gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Derecho corporativo y societario
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Inversión extranjera e inmobiliario
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Registro de marcas y propiedad intelectual
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Litigios civiles y comerciales
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Litigios laborales y administrativos
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Migración y residencia
                </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
