import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/BlogArticle";
import { articleMetadata, articlesFor, findArticle } from "@/lib/blog";

const LANG = "fr" as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return articlesFor(LANG).map((a) => ({ slug: a.slug[LANG] }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const a = findArticle(slug, LANG);
  return a ? articleMetadata(a, LANG) : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = findArticle(slug, LANG);
  if (!a) notFound();
  return <BlogArticle article={a} lang={LANG} />;
}
