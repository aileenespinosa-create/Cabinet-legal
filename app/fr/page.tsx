import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Cabinet Legal | Cabinet d'avocats d'affaires en République Dominicaine",
  description:
    "Cabinet Legal conseille des entreprises, des investisseurs et des clients privés en droit des affaires, dépôt de marques, propriété intellectuelle et dossiers juridiques à fort enjeu en République Dominicaine.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/fr",
    languages: {
      "es-DO": "https://cabinetlegal.com.do",
      en: "https://cabinetlegal.com.do/en",
      fr: "https://cabinetlegal.com.do/fr",
    },
  },
};

export default function HomePageFR() {
  return (
    <main className="min-h-screen bg-[#fcfaf6] pt-[96px]">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Cabinet Legal
            </div>

            <h1 className="max-w-3xl text-[26px] font-light leading-[1.12] tracking-tight text-[#0f2740] sm:text-[34px] md:text-[44px] lg:text-[52px]">
              Nous protégeons votre entreprise, votre marque et vos décisions
              les plus importantes grâce à un conseil juridique stratégique et
              personnalisé.
            </h1>

            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />

            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-[#5f6b76] md:text-[17px]">
              Nous accompagnons entreprises, investisseurs et clients privés
              en droit des affaires, dépôt de marques, propriété
              intellectuelle et dossiers juridiques à fort enjeu en
              République Dominicaine.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/fr/consulta"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Demander une consultation
              </Link>

              <a
                href="https://wa.me/18494603517?text=Bonjour%2C%20j%27ai%20visit%C3%A9%20le%20site%20de%20Cabinet%20Legal%20et%20je%20souhaite%20obtenir%20des%20renseignements."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#f7f4ee]"
              >
                Nous écrire sur WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#66717c]">
              <div>Droit des affaires</div>
              <div>Dépôt de marques</div>
              <div>Propriété intellectuelle</div>
              <div>Contentieux</div>
            </div>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative h-[340px] sm:h-[430px] md:h-[520px]">
              <Image
                src="/hero-legal.jpg"
                alt="Cabinet Legal"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="hero-image-overlay absolute inset-0" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-9">
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#e9d3ab]">
                  Cabinet Legal
                </div>
                <div className="mt-3 max-w-xl text-[22px] font-light leading-[1.2] tracking-tight md:text-[30px]">
                  Attention directe, précision technique et vision
                  stratégique.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLÈME / SOLUTION */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-6 md:grid-cols-2 lg:px-8">
          <div className="card-legal p-6 md:p-9">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Problème fréquent
            </div>
            <h2 className="text-2xl font-light tracking-tight text-[#0f2740] md:text-3xl">
              De nombreuses entreprises opèrent sans protection juridique
              adéquate.
            </h2>
            <p className="mt-5 leading-8 text-[#5f6b76]">
              Des contrats mal structurés, des marques non déposées ou des
              décisions d&apos;affaires prises sans accompagnement juridique
              peuvent générer des litiges, des pertes financières et des
              risques inutiles.
            </p>
          </div>

          <div className="card-legal p-6 md:p-9">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Notre approche
            </div>
            <h2 className="text-2xl font-light tracking-tight text-[#0f2740] md:text-3xl">
              Un conseil clair, exécutif et orienté vers les résultats.
            </h2>
            <p className="mt-5 leading-8 text-[#5f6b76]">
              Chez Cabinet Legal, nous combinons stratégie, rigueur technique
              et implication directe des associés pour vous aider à protéger
              votre entreprise et à agir avec sécurité juridique dès le
              départ.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Services clés
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Domaines dans lesquels nous pouvons vous aider
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Affaires
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Droit des affaires
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Structuration d&apos;entreprise, contrats et accompagnement
                juridique continu.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Marques
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Dépôt de marques
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Évaluation, stratégie et gestion complète du dossier auprès
                de l&apos;ONAPI.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Protection
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Propriété intellectuelle
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Protection stratégique et défense des actifs incorporels.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Représentation
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Contentieux et litiges
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Traitement des litiges civils et commerciaux avec rigueur
                technique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE PHARE */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Service phare
              </div>
              <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
                Dépôt de marques en République Dominicaine
              </h2>
              <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#5f6b76] md:text-lg">
              <p>
                Déposer correctement votre marque dès le départ permet
                d&apos;éviter les refus, les litiges et la perte de droits
                sur votre identité commerciale.
              </p>
              <p>
                Nous évaluons la viabilité juridique de votre marque,
                définissons la stratégie adaptée et gérons l&apos;ensemble du
                processus auprès de l&apos;ONAPI.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  href="/fr/servicios"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
                >
                  Voir le service
                </Link>
                <Link
                  href="/fr/consulta"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#f7f4ee]"
                >
                  Demander une évaluation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Cabinet Legal
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Pourquoi travailler avec nous ?
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Attention directe
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Vous bénéficiez d&apos;un accompagnement proche et
                stratégique, sans démarches impersonnelles.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Vision d&apos;affaires
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Nous comprenons le contexte commercial derrière chaque
                décision juridique.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Exécution rigoureuse
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Nous privilégions la clarté, la structure et le suivi dans
                chaque dossier juridique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal p-6 md:p-12">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Consultation
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Besoin d&apos;un accompagnement juridique ?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6b76] md:text-lg">
              Nous pouvons évaluer votre situation et vous orienter vers la
              meilleure stratégie selon votre dossier, votre entreprise et
              vos objectifs.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
              <Link
                href="/fr/consulta"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Demander une consultation
              </Link>
              <a
                href="https://wa.me/18494603517?text=Bonjour%2C%20j%27ai%20visit%C3%A9%20le%20site%20de%20Cabinet%20Legal%20et%20je%20souhaite%20obtenir%20des%20renseignements."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#f7f4ee]"
              >
                Nous écrire sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
