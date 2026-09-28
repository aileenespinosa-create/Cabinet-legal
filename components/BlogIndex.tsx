import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import GuideBanner from "@/components/GuideBanner";
import type { BlogLang } from "@/lib/blogTypes";
import { BLOG_UI } from "@/lib/blog";

export type BlogCard = { href: string; title: string; description: string };

export default function BlogIndex({ lang, items }: { lang: BlogLang; items: BlogCard[] }) {
  const ui = BLOG_UI[lang];
  return (
    <main className="min-h-screen overflow-x-hidden pt-[96px]">
      <SiteHeader />

      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative flex min-h-[340px] items-end sm:min-h-[220px] md:min-h-[320px]">
            <Image src="/hero-legal.jpg" alt={ui.indexH1} fill className="object-cover object-[center_18%]" />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="relative z-10 w-full p-4 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-2 max-w-4xl text-2xl font-semibold leading-tight text-white sm:text-3xl md:mt-3 md:text-5xl">
                {ui.indexH1}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">{ui.indexText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-2">
          {items.map((article) => (
            <Link key={article.href} href={article.href} className="card-legal overflow-hidden">
              <div className="relative h-[170px] sm:h-[200px] md:h-[220px]">
                <Image src="/blog-legal.jpg" alt={article.title} fill className="object-cover" />
                <div className="hero-image-overlay absolute inset-0" />
              </div>
              <div className="p-5 md:p-8">
                <div className="eyebrow">{ui.kicker}</div>
                <h2 className="mt-3 text-lg font-semibold leading-tight text-[#0f2740] sm:text-xl md:mt-4 md:text-2xl">{article.title}</h2>
                <p className="mt-3 text-sm leading-6 text-[#5f6b76] md:mt-4 md:text-base md:leading-8">{article.description}</p>
                <div className="mt-5 text-sm font-semibold text-[#0f2740] md:mt-6">{ui.read}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <GuideBanner lang={lang} />
    </main>
  );
}
