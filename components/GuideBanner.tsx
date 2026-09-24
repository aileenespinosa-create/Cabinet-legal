import Image from "next/image";
import Link from "next/link";
import { GUIDE_LANDING, type GuideLang } from "@/lib/guide";
import { GUIDE_COPY } from "@/lib/guideCopy";

// Promotional band for the downloadable investment guide.
export default function GuideBanner({ lang }: { lang: GuideLang }) {
  const t = GUIDE_COPY[lang];
  return (
    <section className="pb-14 md:pb-24">
      <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[24px] bg-[#0f2740] shadow-[0_24px_60px_rgba(15,39,64,0.18)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full border-[28px] border-[#c8a46a] opacity-10"
          />
          <div className="relative grid items-center gap-10 p-7 md:grid-cols-[1.2fr_0.8fr] md:p-14">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                {t.bannerKicker}
              </div>
              <h2 className="text-3xl font-light leading-tight tracking-tight text-white md:text-[40px]">
                {t.bannerTitle}
              </h2>
              <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
              <p className="pt-6 max-w-xl text-base leading-8 text-white/80 md:text-lg">
                {t.bannerText}
              </p>
              <div className="mt-8">
                <Link
                  href={GUIDE_LANDING[lang]}
                  className="inline-flex items-center justify-center rounded-full bg-[#c8a46a] px-7 py-3 text-sm font-semibold text-[#0f2740] shadow-sm transition hover:bg-[#d6b57f]"
                >
                  {t.bannerCta}
                </Link>
              </div>
            </div>
            <Link href={GUIDE_LANDING[lang]} className="mx-auto block w-[220px] md:w-[260px]">
              <Image
                src={`/guia/portada-${lang}.jpg`}
                alt={t.bannerTitle}
                width={910}
                height={1286}
                className="h-auto w-full rotate-[3deg] rounded-md shadow-[0_30px_60px_rgba(0,0,0,0.45)] transition duration-300 hover:rotate-0"
                sizes="260px"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
