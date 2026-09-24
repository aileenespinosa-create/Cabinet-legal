import type { Metadata } from "next";
import GuideLanding from "@/components/GuideLanding";

export const metadata: Metadata = {
  title: `Free guide: how to invest in the Dominican Republic 2026 | Cabinet Legal`,
  description: `Download the 2026 legal guide for foreign investors: buying property, CONFOTUR, companies, residency and closing costs in the Dominican Republic.`,
  alternates: {
    canonical: "https://cabinetlegal.com.do/en/guia-inversion",
    languages: {
      "x-default": "https://cabinetlegal.com.do/guia-inversion",
      "es-DO": "https://cabinetlegal.com.do/guia-inversion",
      en: "https://cabinetlegal.com.do/en/guia-inversion",
      fr: "https://cabinetlegal.com.do/fr/guia-inversion",
    },
  },
  openGraph: {
    title: `Free guide: how to invest in the Dominican Republic 2026 | Cabinet Legal`,
    description: `Download the 2026 legal guide for foreign investors: buying property, CONFOTUR, companies, residency and closing costs in the Dominican Republic.`,
    url: "https://cabinetlegal.com.do/en/guia-inversion",
    images: [{ url: "https://cabinetlegal.com.do/guia/portada-en.jpg", width: 910, height: 1286 }],
  },
};

export default function Page() {
  return <GuideLanding lang="en" />;
}
