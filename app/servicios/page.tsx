import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import ServicesExplorer from "@/components/ServicesExplorer";

export const metadata: Metadata = {
  title: "Servicios legales en República Dominicana: 12 áreas de práctica",
  description: "Derecho corporativo, fusiones, inversión extranjera e inmobiliario, energía, permisología, planificación sucesoral, residencia, marcas, litigación, cobros y derecho penal en República Dominicana.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/servicios",
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
      <ServicesExplorer lang="es" />
    </main>
  );
}
