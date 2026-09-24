import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ServicesExplorer from "@/components/ServicesExplorer";

export const metadata: Metadata = {
  title: "Services juridiques en République dominicaine : 12 domaines",
  description: "Droit des sociétés, fusions, investissement étranger et immobilier, énergie, permis, succession, résidence, marques, contentieux, recouvrement et droit pénal en République dominicaine.",
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

export default function Page() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfaf6] pt-[88px]">
      <SiteHeader />
      <ServicesExplorer lang="fr" />
    </main>
  );
}
