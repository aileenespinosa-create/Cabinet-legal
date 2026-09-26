import type { Metadata } from "next";
import FirmaPage from "@/components/FirmaPage";
import { FIRMA_COPY } from "@/lib/firmaCopy";

const t = FIRMA_COPY.fr;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDesc,
  alternates: {
    canonical: "https://cabinetlegal.com.do/fr/firma",
    languages: {
      "x-default": "https://cabinetlegal.com.do/firma",
      "es-DO": "https://cabinetlegal.com.do/firma",
      en: "https://cabinetlegal.com.do/en/firma",
      fr: "https://cabinetlegal.com.do/fr/firma",
    },
  },
  openGraph: { title: t.metaTitle, description: t.metaDesc, url: "https://cabinetlegal.com.do/fr/firma", images: ["https://cabinetlegal.com.do/hero-legal.jpg"] },
};

export default function Page() {
  return <FirmaPage lang="fr" />;
}
