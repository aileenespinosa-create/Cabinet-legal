import type { Metadata } from "next";
import GuideLanding from "@/components/GuideLanding";

export const metadata: Metadata = {
  title: `Guide gratuit : investir en République dominicaine 2026`,
  description: `Téléchargez le guide juridique 2026 pour investisseurs étrangers : achat immobilier, CONFOTUR, sociétés, résidence et frais de clôture en République dominicaine.`,
  alternates: {
    canonical: "https://cabinetlegal.com.do/fr/guia-inversion",
    languages: {
      "x-default": "https://cabinetlegal.com.do/guia-inversion",
      "es-DO": "https://cabinetlegal.com.do/guia-inversion",
      en: "https://cabinetlegal.com.do/en/guia-inversion",
      fr: "https://cabinetlegal.com.do/fr/guia-inversion",
    },
  },
  openGraph: {
    title: `Guide gratuit : investir en République dominicaine 2026 | Cabinet Legal`,
    description: `Téléchargez le guide juridique 2026 pour investisseurs étrangers : achat immobilier, CONFOTUR, sociétés, résidence et frais de clôture en République dominicaine.`,
    url: "https://cabinetlegal.com.do/fr/guia-inversion",
    images: [{ url: "https://cabinetlegal.com.do/guia/portada-fr.jpg", width: 910, height: 1286 }],
  },
};

export default function Page() {
  return <GuideLanding lang="fr" />;
}
