import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import GuideBanner from "@/components/GuideBanner";

export const metadata: Metadata = {
  title: "Avocat Immobilier pour Investisseurs Étrangers en République Dominicaine",
  description:
    "Achetez un bien immobilier en République Dominicaine avec une protection juridique complète : structuration, contrats, clôture et protection après l'achat pour investisseurs étrangers.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/fr/inversion-extranjera",
    languages: {
      "x-default": "https://cabinetlegal.com.do/inversion-extranjera",
      "es-DO": "https://cabinetlegal.com.do/inversion-extranjera",
      en: "https://cabinetlegal.com.do/en/inversion-extranjera",
      fr: "https://cabinetlegal.com.do/fr/inversion-extranjera",
    },
  },
};

export default function InvestisseursEtrangersPageFR() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative flex min-h-[340px] items-end sm:min-h-[280px] md:min-h-[380px]">
            <Image
              src="/hero-legal.jpg"
              alt="Accompagnement juridique pour investisseurs étrangers en République Dominicaine"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="relative z-10 w-full p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Investissez en République Dominicaine avec la protection
                juridique que mérite votre investissement
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                Nous accompagnons les investisseurs et acheteurs étrangers à
                chaque étape juridique de l&apos;achat immobilier :
                structuration, contrats, clôture et protection de vos droits
                de propriété.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/fr/consulta" className="btn-primary-legal">
                  Demander une consultation
                </Link>

                <a
                  href="https://wa.me/18295420615?text=Bonjour%2C%20je%20suis%20un%20investisseur%20%C3%A9tranger%20et%20je%20souhaite%20obtenir%20un%20accompagnement%20juridique%20pour%20l%27achat%20d%27un%20bien%20immobilier%20en%20R%C3%A9publique%20Dominicaine."
                  target="_blank"
                  className="btn-secondary-legal"
                >
                  Nous écrire sur WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLÈME / SOLUTION */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-2">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Risque fréquent</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Acheter un bien dans un pays étranger comporte des risques qui
              ne sont pas toujours visibles.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Un titre de propriété peu clair, un vendeur sans documentation
              en règle, des contrats mal structurés ou une clôture sans
              accompagnement juridique peuvent transformer un investissement
              prometteur en un problème coûteux.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Notre solution</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Une exécution juridique complète, du début à la fin.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Chez Cabinet Legal, nous structurons votre achat, examinons et
              négocions les contrats, vérifions la conformité juridique lors
              de la clôture et protégeons vos droits de propriété une fois la
              transaction conclue.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-3">
          <div className="card-legal p-6">
            <div className="eyebrow">Étape 1</div>
            <h3 className="mt-3 text-xl font-semibold">Structuration</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Nous définissons la voie juridique adaptée à votre
              investissement : achat personnel, via une société, ou structure
              patrimoniale selon votre situation.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Étape 2</div>
            <h3 className="mt-3 text-xl font-semibold">
              Contrats et clôture
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Nous examinons, négocions et exécutons le contrat de vente, et
              vous accompagnons lors de la clôture notariée et de
              l&apos;enregistrement du titre.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Étape 3</div>
            <h3 className="mt-3 text-xl font-semibold">
              Protection après l&apos;achat
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              Nous assurons un suivi juridique continu : conformité fiscale,
              contrats de location et défense de vos droits en cas de litige.
            </p>
          </div>
        </div>
      </section>

      {/* PARTENARIAT AVEC LAND CONSULTING DR */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">Partenariat stratégique</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Due diligence technique et exécution juridique, en un seul
              processus.
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>

          <div className="space-y-5 text-[#5f6b76] leading-7">
            <p>
              Avant de signer un accord, il est essentiel de vérifier que le
              bien, le terrain ou le projet correspond exactement à ce qui
              est annoncé : bornage correct, permis en règle, absence de
              charges et viabilité réelle du projet.
            </p>
            <p>
              C&apos;est pourquoi nous travaillons aux côtés de{" "}
              <a
                href="https://landconsultingdr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0f2740] underline"
              >
                Land Consulting DR
              </a>
              , un cabinet spécialisé dans la due diligence immobilière pour
              les acheteurs étrangers en République Dominicaine. Land
              Consulting DR enquête et vérifie le bien avant l&apos;achat ;
              Cabinet Legal structure, négocie et exécute l&apos;achat sur le
              plan juridique.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e8ecef] p-4">
                <div className="text-sm font-semibold text-[#0f2740]">
                  Land Consulting DR
                </div>
                <p className="mt-2 text-sm text-[#5f6b76]">
                  Due diligence technique, vérification du terrain et études
                  préalables à l&apos;achat.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8ecef] p-4">
                <div className="text-sm font-semibold text-[#0f2740]">
                  Cabinet Legal
                </div>
                <p className="mt-2 text-sm text-[#5f6b76]">
                  Structuration juridique, contrats, clôture et protection
                  après l&apos;achat.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Link href="/fr/consulta" className="btn-primary-legal">
                Demander une consultation juridique
              </Link>
              <a
                href="https://landconsultingdr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-legal"
              >
                Voir Land Consulting DR
              </a>
            </div>
          </div>
        </div>
      </section>

      <GuideBanner lang="fr" />

      {/* COÛT */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-10">
          <div className="eyebrow">Coût</div>

          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
            Combien coûte l&apos;accompagnement juridique de mon
            investissement ?
          </h2>

          <p className="mt-4 text-[#5f6b76] leading-7 max-w-2xl">
            Le coût dépend du type de bien, du montant de l&apos;investissement
            et de la complexité de la structure juridique requise. Nous
            évaluons chaque dossier individuellement pour vous fournir un
            devis précis.
          </p>

          <div className="mt-6">
            <Link href="/fr/consulta" className="btn-primary-legal">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-[#0f2740]">
            Protégez votre investissement avant de signer
          </h2>

          <p className="mt-4 text-[#5f6b76] max-w-2xl">
            Une fois un contrat signé ou un acompte versé, vos options
            juridiques se réduisent. Parlez-nous avant de vous engager.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/fr/consulta" className="btn-primary-legal">
              Demander une consultation
            </Link>

            <a
              href="https://wa.me/18295420615?text=Bonjour%2C%20je%20suis%20un%20investisseur%20%C3%A9tranger%20et%20je%20souhaite%20obtenir%20un%20accompagnement%20juridique%20pour%20l%27achat%20d%27un%20bien%20immobilier%20en%20R%C3%A9publique%20Dominicaine."
              target="_blank"
              className="btn-secondary-legal"
            >
              Nous écrire sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
