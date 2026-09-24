import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ServicesExplorer from "@/components/ServicesExplorer";

export const metadata: Metadata = {
  title: "Legal services in the Dominican Republic: 11 practice areas",
  description: "Corporate, M&A, foreign investment and real estate, energy, permits, estate planning, residency, trademarks, litigation, debt collection and criminal law in the Dominican Republic.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/en/servicios",
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
      <ServicesExplorer lang="en" />
    </main>
  );
}
