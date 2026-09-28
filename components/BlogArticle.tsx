import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import GuideBanner from "@/components/GuideBanner";
import type { Article, BlogLang } from "@/lib/blogTypes";
import { blogUrl, BLOG_UI } from "@/lib/blog";

// Renders "[label](href)" links inside a plain string.
function Rich({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!m) return <span key={i}>{p}</span>;
        const external = m[2].startsWith("http");
        return external ? (
          <a key={i} href={m[2]} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0f2740] underline">
            {m[1]}
          </a>
        ) : (
          <Link key={i} href={m[2]} className="font-semibold text-[#0f2740] underline">
            {m[1]}
          </Link>
        );
      })}
    </>
  );
}

export default function BlogArticle({ article, lang }: { article: Article; lang: BlogLang }) {
  const t = article.text[lang]!;
  const ui = BLOG_UI[lang];
  const url = blogUrl(article, lang);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: t.h1,
      description: t.description,
      inLanguage: lang,
      datePublished: article.date,
      mainEntityOfPage: url,
      image: "https://cabinetlegal.com.do/blog-legal.jpg",
      author: { "@type": "Organization", name: "Cabinet Legal", url: "https://cabinetlegal.com.do" },
      publisher: {
        "@type": "Organization",
        name: "Cabinet Legal",
        logo: { "@type": "ImageObject", url: "https://cabinetlegal.com.do/logo-cabinet-legal.jpg" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <main className="min-h-screen pt-[96px]">
      <SiteHeader />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="container-legal py-10 md:py-16">
        <div className="card-legal overflow-hidden">
          <div className="relative flex min-h-[340px] items-end md:min-h-[360px]">
            <Image src="/hero-legal.jpg" alt={t.h1} fill className="object-cover object-[center_18%]" />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="relative z-10 w-full p-6 md:p-10">
              <Link href={ui.indexHref} className="eyebrow text-white/80">
                {ui.eyebrow}
              </Link>
              <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">{t.h1}</h1>
            </div>
          </div>

          <div className="px-6 py-10 md:px-10 md:py-12">
            <div className="article-content">
              {t.intro.map((p, i) => (
                <p key={i}>
                  <Rich text={p} />
                </p>
              ))}

              {t.sections.map((s) => (
                <section key={s.h}>
                  <h2>{s.h}</h2>
                  {s.blocks.map((b, i) =>
                    b.t === "p" ? (
                      <p key={i}>
                        <Rich text={b.text} />
                      </p>
                    ) : b.t === "ul" ? (
                      <ul key={i}>
                        {b.items.map((it) => (
                          <li key={it}>
                            <Rich text={it} />
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ol key={i} className="list-decimal">
                        {b.items.map((it) => (
                          <li key={it}>
                            <Rich text={it} />
                          </li>
                        ))}
                      </ol>
                    )
                  )}
                </section>
              ))}

              <h2>{ui.faq}</h2>
              {t.faq.map((f) => (
                <div key={f.q} className="mt-4">
                  <h3 className="text-lg font-semibold text-[#0f2740]">{f.q}</h3>
                  <p className="mt-1">{f.a}</p>
                </div>
              ))}

              <div className="mt-12 rounded-2xl bg-[#0f2740] p-8 text-white">
                <h3 className="text-xl font-semibold">{t.cta.title}</h3>
                <p className="mt-3 text-slate-200">{t.cta.text}</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link href={ui.consultHref} className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0f2740]">
                    {ui.consult}
                  </Link>
                  <Link href={article.serviceHref[lang]} className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white">
                    {t.cta.service}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <GuideBanner lang={lang} />
    </main>
  );
}
