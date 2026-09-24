import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Réserver une Consultation Juridique en République Dominicaine",
  description:
    "Demandez une consultation avec Cabinet Legal pour évaluer votre dossier et définir la meilleure stratégie juridique en République Dominicaine.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/fr/consulta",
    languages: {
      "x-default": "https://cabinetlegal.com.do/consulta",
      "es-DO": "https://cabinetlegal.com.do/consulta",
      en: "https://cabinetlegal.com.do/en/consulta",
      fr: "https://cabinetlegal.com.do/fr/consulta",
    },
  },
};

export default function ConsultaPageFR() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfaf6] pt-[120px]">
      <SiteHeader />

      {/* HERO */}
      <section className="container-legal py-10 md:py-16">
        <div className="card-legal overflow-hidden">
          <div className="relative flex min-h-[340px] items-end sm:min-h-[300px] md:min-h-[380px]">
            <Image
              src="/hero-legal.jpg"
              alt="Consultation juridique Cabinet Legal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="relative z-10 w-full p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Demandez une consultation juridique avec une approche
                stratégique
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-lg md:leading-7">
                Nous évaluons votre situation, identifions les risques et
                vous orientons vers la meilleure voie juridique selon votre
                dossier, vos objectifs et votre contexte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU + FORMULAIRE */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.92fr_1.08fr]">
          {/* TEXTE */}
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Consultation</div>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              Parlons de votre dossier avec clarté et rigueur juridique.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              Si vous avez besoin d&apos;un accompagnement juridique pour
              votre entreprise, une marque, un contrat, une opération ou un
              litige spécifique, nous pouvons vous aider à définir une
              stratégie claire, pratique et juridiquement solide.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 space-y-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              <p>• Accompagnement direct et stratégique</p>
              <p>• Évaluation initiale de votre situation</p>
              <p>• Identification des risques et priorités</p>
              <p>• Recommandation claire des prochaines étapes</p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8dfd0] bg-[#fcfaf6] p-5 md:p-6">
              <h3 className="text-lg font-semibold text-[#0f2740]">
                Vous préférez nous écrire directement ?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#5f6b76] md:text-base md:leading-7">
                Vous pouvez également nous contacter sur WhatsApp pour une
                orientation initiale plus rapide.
              </p>

              <a
                href="https://wa.me/18295420615?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20une%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-6 py-3 text-sm font-semibold text-[#0f2740]"
              >
                Nous écrire sur WhatsApp
              </a>
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="card-legal p-6 md:p-10">
            <div className="mb-6">
              <div className="eyebrow">Formulaire</div>

              <h2 className="mt-4 text-2xl font-semibold text-[#0f2740] md:text-3xl">
                Demander une consultation
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#5f6b76] md:text-base md:leading-7">
                Remplissez ce formulaire et nous vous contacterons pour
                évaluer votre demande.
              </p>
            </div>

            <form
              action="https://formspree.io/f/mlgpavya"
              method="POST"
              className="grid gap-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nouvelle demande de consultation depuis Cabinet Legal (FR)"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="idioma" value="FR" />

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Nom
                </label>
                <input
                  name="nombre"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  E-mail
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="vous@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Téléphone
                </label>
                <input
                  name="telefono"
                  type="text"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Pays
                </label>
                <input
                  name="pais"
                  type="text"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="D'où nous écrivez-vous ?"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Domaine d&apos;intérêt
                </label>
                <select
                  name="area"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  defaultValue="Sélectionnez une option"
                >
                  <option disabled>Sélectionnez une option</option>
                  <option>Investissement étranger / immobilier</option>
                  <option>Fusions et acquisitions</option>
                  <option>Création d&apos;entreprise</option>
                  <option>Résidence et permis de travail</option>
                  <option>Dépôt de marques</option>
                  <option>Droit des affaires</option>
                  <option>Propriété intellectuelle</option>
                  <option>Contentieux</option>
                  <option>Contentieux pour investisseurs étrangers</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Message
                </label>
                <textarea
                  name="mensaje"
                  rows={6}
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Décrivez brièvement votre dossier"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Envoyer la demande
              </button>

              <p className="text-center text-xs text-[#8a9099]">
                Nous répondons sous 24 heures ouvrables.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* CLÔTURE */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
            Prenez vos décisions avec un accompagnement juridique solide.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            Une consultation en temps utile peut vous aider à éviter des
            erreurs, réduire les risques et mieux structurer votre situation
            juridique dès le départ.
          </p>
        </div>
      </section>
    </main>
  );
}
