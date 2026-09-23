import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Services Juridiques : Droit des Affaires, M&A, Contentieux et Marques",
  description:
    "Services juridiques en République Dominicaine pour investisseurs étrangers et entreprises : droit des affaires, fusions-acquisitions, contentieux, propriété intellectuelle et dépôt de marques.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/fr/servicios",
    languages: {
      "x-default": "https://cabinetlegal.com.do/servicios",
      "es-DO": "https://cabinetlegal.com.do/servicios",
      en: "https://cabinetlegal.com.do/en/servicios",
      fr: "https://cabinetlegal.com.do/fr/servicios",
    },
  },
};

const services = [
  {
    title: "Droit des affaires",
    description:
      "Conseil en structuration d'entreprise, contrats, gouvernance d'entreprise et accompagnement juridique dans les décisions d'affaires importantes.",
  },
  {
    title: "Propriété intellectuelle",
    description:
      "Protection des marques, stratégie de dépôt, défense des actifs incorporels et accompagnement en matière de propriété industrielle.",
  },
  {
    title: "Contentieux et litiges",
    description:
      "Représentation dans les litiges civils et commerciaux avec une approche stratégique, une clarté technique et une exécution rigoureuse.",
  },
  {
    title: "Dépôt de marques",
    description:
      "Évaluation de disponibilité, classification, dépôt des demandes et suivi complet auprès de l'ONAPI, l'office dominicain de la propriété industrielle.",
  },
];

export default function ServiciosPageFR() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfaf6]">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="container-legal">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Cabinet Legal
            </div>

            <h1 className="text-4xl font-light tracking-tight text-[#0f2740] md:text-5xl">
              Services
            </h1>

            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />

            <p className="mt-6 text-base leading-8 text-[#5f6b76] md:text-lg">
              Conseil juridique stratégique pour entreprises, investisseurs
              et clients privés en République Dominicaine.
            </p>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative h-[200px] sm:h-[260px] md:h-[360px]">
              <Image
                src="/hero-legal.jpg"
                alt="Services juridiques Cabinet Legal"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="hero-image-overlay absolute inset-0" />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-14 md:pb-24">
        <div className="container-legal grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="card-legal p-6 transition hover:-translate-y-[2px] md:p-9"
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Service
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-[#0f2740] md:text-3xl">
                {service.title}
              </h2>

              <p className="mt-4 leading-8 text-[#5f6b76]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container-legal">
          <div className="card-legal p-6 md:p-12">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Consultation
            </div>

            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Besoin d&apos;un accompagnement juridique ?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6b76] md:text-lg">
              Nous pouvons évaluer votre situation et vous recommander le
              service juridique le plus adapté à vos besoins et à vos
              objectifs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
              <Link href="/fr/consulta" className="btn-primary-legal">
                Demander une consultation
              </Link>

              <Link href="/fr/inversion-extranjera" className="btn-secondary-legal">
                Investisseurs étrangers
              </Link>

              <Link href="/fr" className="btn-secondary-legal">
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
