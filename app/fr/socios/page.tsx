import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Associés | Cabinet Legal",
  description:
    "Découvrez les associés de Cabinet Legal, cabinet d'avocats en République Dominicaine, spécialisé en droit des affaires, marques, propriété intellectuelle et contentieux.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/fr/socios",
    languages: {
      "es-DO": "https://cabinetlegal.com.do/socios",
      en: "https://cabinetlegal.com.do/en/socios",
      fr: "https://cabinetlegal.com.do/fr/socios",
    },
  },
};

const partners = [
  {
    name: "Aileen Espinosa",
    role: "Associée gérante",
    image: "/aileen.jpg",
    bio: "Aileen Espinosa dirige Cabinet Legal avec une pratique axée sur le droit des affaires, la structuration d'entreprise, le dépôt de marques et la propriété intellectuelle. Elle conseille entreprises, investisseurs et clients privés dans des décisions juridiques à fort enjeu, avec une approche stratégique, exécutive et orientée résultats.",
    focus:
      "Sa pratique combine sens des affaires, précision technique et implication directe dans les décisions d'entreprise importantes, ainsi que dans la protection juridique des marques et des actifs incorporels.",
    areas: [
      "Droit des affaires",
      "Structuration d'entreprise",
      "Dépôt de marques",
      "Propriété intellectuelle",
      "Gouvernance d'entreprise",
      "Contrats commerciaux",
      "Stratégie juridique d'entreprise",
    ],
  },
  {
    name: "Ellis Beato",
    role: "Associé fondateur",
    image: "/ellis.jpg",
    bio: "Ellis Beato dirige la pratique contentieuse de Cabinet Legal, avec une expérience en contentieux civil, du travail, administratif et immobilier, ainsi que dans la résolution de litiges d'affaires complexes. Il représente ses clients dans les procédures judiciaires et les litiges stratégiques, avec une approche rigoureuse, technique et orientée résultats.",
    focus:
      "Sa pratique se concentre sur la défense efficace des intérêts de ses clients, combinant analyse juridique approfondie, stratégie procédurale et exécution solide à chaque étape du litige.",
    areas: [
      "Contentieux civil",
      "Contentieux du travail",
      "Contentieux administratif",
      "Contentieux immobilier",
      "Résolution de litiges",
      "Représentation judiciaire",
      "Stratégie procédurale",
      "Litiges d'affaires",
    ],
  },
];

export default function SociosPageFR() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f6f1]">
      <SiteHeader />

      <section className="container-legal py-12 md:py-20">
        <div className="max-w-4xl">
          <div className="eyebrow">Cabinet Legal</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0f2740] md:text-5xl">
            Associés
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f6b76] md:text-lg">
            Une équipe avec une approche stratégique, l&apos;implication
            directe des associés et une spécialisation en conseil
            d&apos;entreprise et contentieux à fort enjeu.
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
                        Domaine de spécialisation
                      </h3>
                      <p className="mt-3 text-base leading-8 text-[#5f6b76]">
                        {partner.focus}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f2740]">
                      Domaines de pratique
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
