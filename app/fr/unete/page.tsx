import type { Metadata } from "next";
import CareersPage from "@/components/CareersPage";
import { CAREERS_COPY } from "@/lib/careersCopy";

const t = CAREERS_COPY.fr;

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDesc,
  alternates: {
    canonical: "https://cabinetlegal.com.do/fr/unete",
    languages: {
      "x-default": "https://cabinetlegal.com.do/unete",
      "es-DO": "https://cabinetlegal.com.do/unete",
      en: "https://cabinetlegal.com.do/en/unete",
      fr: "https://cabinetlegal.com.do/fr/unete",
    },
  },
};

export default function Page() {
  return <CareersPage lang="fr" />;
}
