import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/ServiceDetail";
import { SERVICES, findService } from "@/lib/services";
import { SERVICES_SEO } from "@/lib/servicesSeo";

const LANG = "es" as const;
const BASE = "https://cabinetlegal.com.do";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.filter((s) => !s.custom?.[LANG]).map((s) => ({ slug: s.slug[LANG] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = findService(slug, LANG);
  if (!s) return {};
  const x = s.text[LANG];
  const seo = SERVICES_SEO[s.id]?.[LANG];
  const alt = (l: "es" | "en" | "fr") =>
    s.custom?.[l] ? `${BASE}${s.custom[l]}` : `${BASE}${l === "es" ? "" : "/" + l}/servicios/${s.slug[l]}`;
  return {
    title: seo?.seoTitle ?? `${x.title} en República Dominicana`,
    description: seo?.description ?? x.promise,
    alternates: {
      canonical: alt(LANG),
      languages: { "x-default": alt("es"), "es-DO": alt("es"), en: alt("en"), fr: alt("fr") },
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = findService(slug, LANG);
  if (!s) notFound();
  return <ServiceDetail service={s} lang={LANG} />;
}
