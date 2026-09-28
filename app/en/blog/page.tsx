import type { Metadata } from "next";
import BlogIndex from "@/components/BlogIndex";
import { BASE, BLOG_UI, articlesFor, blogPath } from "@/lib/blog";

const LANG = "en" as const;

export const metadata: Metadata = {
  title: BLOG_UI[LANG].indexTitle,
  description: BLOG_UI[LANG].indexDescription,
  alternates: {
    canonical: `${BASE}/${LANG}/blog`,
    languages: { "x-default": `${BASE}/blog`, "es-DO": `${BASE}/blog`, en: `${BASE}/en/blog`, fr: `${BASE}/fr/blog` },
  },
};

export default function Page() {
  const items = articlesFor(LANG).map((a) => ({
    href: blogPath(a, LANG),
    title: a.text[LANG]!.h1,
    description: a.text[LANG]!.description,
  }));
  return <BlogIndex lang={LANG} items={items} />;
}
