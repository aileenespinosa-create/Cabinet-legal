import type { Metadata } from "next";
import GuideLanding from "@/components/GuideLanding";

export const metadata: Metadata = {
  title: `Guía gratuita: cómo invertir en República Dominicana 2026 | Cabinet Legal`,
  description: `Descarga la guía legal 2026 para inversionistas extranjeros: compra de inmuebles, CONFOTUR, empresas, residencia y costos de cierre en República Dominicana.`,
  alternates: {
    canonical: "https://cabinetlegal.com.do/guia-inversion",
    languages: {
      "x-default": "https://cabinetlegal.com.do/guia-inversion",
      "es-DO": "https://cabinetlegal.com.do/guia-inversion",
      en: "https://cabinetlegal.com.do/en/guia-inversion",
      fr: "https://cabinetlegal.com.do/fr/guia-inversion",
    },
  },
  openGraph: {
    title: `Guía gratuita: cómo invertir en República Dominicana 2026 | Cabinet Legal`,
    description: `Descarga la guía legal 2026 para inversionistas extranjeros: compra de inmuebles, CONFOTUR, empresas, residencia y costos de cierre en República Dominicana.`,
    url: "https://cabinetlegal.com.do/guia-inversion",
    images: [{ url: "https://cabinetlegal.com.do/guia/portada-es.jpg", width: 910, height: 1286 }],
  },
};

export default function Page() {
  return <GuideLanding lang="es" />;
}
