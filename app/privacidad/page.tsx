import type { Metadata } from "next";
import PrivacyPage from "@/components/PrivacyPage";
import { PRIVACY_COPY } from "@/lib/privacyCopy";

export const metadata: Metadata = {
  title: PRIVACY_COPY.es.metaTitle,
  alternates: {
    canonical: "https://cabinetlegal.com.do/privacidad",
    languages: { "x-default": "https://cabinetlegal.com.do/privacidad", "es-DO": "https://cabinetlegal.com.do/privacidad", en: "https://cabinetlegal.com.do/en/privacidad", fr: "https://cabinetlegal.com.do/fr/privacidad" },
  },
};

export default function Page() {
  return <PrivacyPage lang="es" />;
}
