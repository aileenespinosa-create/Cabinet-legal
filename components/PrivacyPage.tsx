import SiteHeader from "@/components/SiteHeader";
import type { Lang } from "@/lib/services";
import { PRIVACY_COPY } from "@/lib/privacyCopy";

export default function PrivacyPage({ lang }: { lang: Lang }) {
  const t = PRIVACY_COPY[lang];
  return (
    <main className="min-h-screen bg-[#fcfaf6] pt-[96px]">
      <SiteHeader />
      <article className="mx-auto w-full max-w-[820px] px-6 py-14 md:py-24">
        <h1 className="font-serif text-[38px] leading-tight text-[#0f2740] md:text-[52px]">{t.title}</h1>
        <p className="pt-3 text-sm text-[#8a939b]">{t.updated}</p>
        <p className="pt-8 text-lg leading-8 text-[#3a4550]">{t.intro}</p>
        {t.sections.map(([heading, paragraphs]) => (
          <section key={heading} className="pt-10">
            <h2 className="font-serif text-2xl text-[#0f2740]">{heading}</h2>
            {paragraphs.map((p) => (
              <p key={p} className="pt-3 leading-8 text-[#3a4550]">{p}</p>
            ))}
          </section>
        ))}
      </article>
    </main>
  );
}
