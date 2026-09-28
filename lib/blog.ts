import type { Metadata } from "next";
import type { Article, BlogLang } from "@/lib/blogTypes";
import { ARTICLES } from "@/lib/blogArticles";

export const BASE = "https://cabinetlegal.com.do";

export const BLOG_INDEX: Record<BlogLang, string> = { es: "/blog", en: "/en/blog", fr: "/fr/blog" };

export function blogPath(a: Article, lang: BlogLang) {
  return `${BLOG_INDEX[lang]}/${a.slug[lang]}`;
}
export function blogUrl(a: Article, lang: BlogLang) {
  return `${BASE}${blogPath(a, lang)}`;
}

export function findArticle(slug: string, lang: BlogLang) {
  return ARTICLES.find((a) => a.slug[lang] === slug && a.text[lang]);
}

export function articlesFor(lang: BlogLang) {
  return ARTICLES.filter((a) => a.text[lang]).sort((x, y) => y.date.localeCompare(x.date));
}

// hreflang for an article: every language in which it exists.
export function articleAlternates(a: Article, lang: BlogLang): Metadata["alternates"] {
  const langs: Record<string, string> = {
    "x-default": blogUrl(a, "es"),
    "es-DO": blogUrl(a, "es"),
  };
  if (a.text.en) langs.en = blogUrl(a, "en");
  if (a.text.fr) langs.fr = blogUrl(a, "fr");
  return { canonical: blogUrl(a, lang), languages: langs };
}

export function articleMetadata(a: Article, lang: BlogLang): Metadata {
  const t = a.text[lang]!;
  const locale = { es: "es_DO", en: "en_US", fr: "fr_FR" }[lang];
  return {
    title: t.title,
    description: t.description,
    alternates: articleAlternates(a, lang),
    openGraph: {
      title: `${t.title} | Cabinet Legal`,
      description: t.description,
      url: blogUrl(a, lang),
      siteName: "Cabinet Legal",
      images: [{ url: `${BASE}/blog-legal.jpg`, width: 1536, height: 1024, alt: t.h1 }],
      locale,
      type: "article",
    },
    twitter: { card: "summary_large_image", title: `${t.title} | Cabinet Legal`, description: t.description, images: [`${BASE}/blog-legal.jpg`] },
  };
}

// Map a blog path in one language to the same page in another (used by the language switcher).
export function switchBlogPath(pathname: string, from: BlogLang, to: BlogLang): string | null {
  if (pathname === BLOG_INDEX[from]) return BLOG_INDEX[to];
  const prefix = `${BLOG_INDEX[from]}/`;
  if (!pathname.startsWith(prefix)) return null;
  const slug = pathname.slice(prefix.length);
  const a = ARTICLES.find((x) => x.slug[from] === slug);
  if (!a) return BLOG_INDEX[to];
  // Spanish pages always exist; other languages only when translated.
  return to === "es" || a.text[to] ? blogPath(a, to) : BLOG_INDEX[to];
}

export const BLOG_UI: Record<BlogLang, {
  eyebrow: string; indexHref: string; faq: string; consult: string; consultHref: string;
  read: string; kicker: string; indexTitle: string; indexH1: string; indexText: string; indexDescription: string;
}> = {
  es: {
    eyebrow: "Publicaciones", indexHref: "/blog", faq: "Preguntas frecuentes", consult: "Solicitar consulta", consultHref: "/consulta",
    read: "Leer artículo →", kicker: "Artículo",
    indexTitle: "Blog jurídico: guías legales en República Dominicana",
    indexH1: "Blog jurídico: guías legales sobre República Dominicana",
    indexText: "Publicaciones sobre marcas, inversión inmobiliaria, empresas y residencia, con criterios jurídicos para proteger y fortalecer su patrimonio y su negocio.",
    indexDescription: "Guías jurídicas de Cabinet Legal: inversión inmobiliaria, verificación de títulos, empresas, residencia y marcas en República Dominicana.",
  },
  en: {
    eyebrow: "Insights", indexHref: "/en/blog", faq: "Frequently asked questions", consult: "Request a consultation", consultHref: "/en/consulta",
    read: "Read article →", kicker: "Article",
    indexTitle: "Legal insights: Dominican Republic law for foreign investors",
    indexH1: "Legal insights on the Dominican Republic",
    indexText: "Practical guidance on buying property, verifying titles, residency, companies and trademarks in the Dominican Republic, written by our partners.",
    indexDescription: "Legal guides by Cabinet Legal for foreign investors: buying property, title verification, residency, company formation and trademarks in the Dominican Republic.",
  },
  fr: {
    eyebrow: "Publications", indexHref: "/fr/blog", faq: "Questions fréquentes", consult: "Demander une consultation", consultHref: "/fr/consulta",
    read: "Lire l'article →", kicker: "Article",
    indexTitle: "Publications juridiques : le droit dominicain pour les investisseurs étrangers",
    indexH1: "Publications juridiques sur la République dominicaine",
    indexText: "Des repères pratiques pour acheter un bien, vérifier un titre, obtenir la résidence, créer une société ou protéger une marque en République dominicaine, rédigés par nos associés.",
    indexDescription: "Guides juridiques de Cabinet Legal pour investisseurs étrangers : achat immobilier, vérification de titre, résidence, création de société et marques en République dominicaine.",
  },
};
