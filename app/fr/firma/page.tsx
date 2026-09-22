import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Le Cabinet | Cabinet Legal",
  description:
    "Cabinet Legal est un cabinet d'avocats en République Dominicaine, avec une approche corporative, stratégique et une attention directe des associés.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/fr/firma",
    languages: {
      "es-DO": "https://cabinetlegal.com.do/firma",
      en: "https://cabinetlegal.com.do/en/firma",
      fr: "https://cabinetlegal.com.do/fr/firma",
    },
  },
};

export default function FirmaPageFR() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[200px] sm:h-[260px] md:h-[360px]">
            <Image
              src="/hero-legal.jpg"
              alt="Cabinet Legal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:mt-3 md:text-5xl">
                Le Cabinet
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">
                Conseil juridique sophistiqué, vision stratégique et
                exécution rigoureuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Notre vision</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              Un accompagnement de proximité, un sens des affaires et une
              approche orientée résultats.
            </h2>
            <div className="gold-line mt-6" />
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="space-y-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              <p>
                Cabinet Legal est un cabinet d&apos;avocats indépendant en
                République Dominicaine, dédié à offrir un conseil de haut
                niveau aux entreprises, investisseurs et clients privés.
              </p>
              <p>
                Notre pratique combine droit, stratégie et opérations pour
                accompagner les décisions d&apos;affaires importantes avec
                une vision claire, moderne et précise.
              </p>
              <p>
                Nous travaillons avec l&apos;implication directe des
                associés, une communication irréprochable et un standard
                d&apos;exécution rigoureux dans chaque dossier.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-3">
          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Approche</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Proximité stratégique
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Nous accompagnons nos clients avec une vision pratique et
              juridique alignée sur leurs objectifs réels.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Méthode</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Précision technique
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Nous analysons chaque dossier en profondeur pour construire des
              solutions claires, sûres et durables.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Standard</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Exécution rigoureuse
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              Nous privilégions l&apos;ordre, le suivi et l&apos;excellence
              dans la mise en œuvre de chaque stratégie juridique.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <div className="eyebrow">Contact</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
            Vous souhaitez échanger avec notre équipe ?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Nous pouvons évaluer votre situation et vous orienter vers la
            stratégie juridique la plus adaptée pour votre entreprise ou
            votre projet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <Link href="/fr/consulta" className="btn-primary-legal">
              Demander une consultation
            </Link>
            <Link href="/fr/socios" className="btn-secondary-legal">
              Voir les associés
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
