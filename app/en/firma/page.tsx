import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Law Firm in Santo Domingo, Dominican Republic",
  description:
    "Cabinet Legal is a law firm in Santo Domingo, Dominican Republic, with a corporate, strategic focus and direct partner attention for local and foreign clients.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/en/firma",
    languages: {
      "es-DO": "https://cabinetlegal.com.do/firma",
      en: "https://cabinetlegal.com.do/en/firma",
      fr: "https://cabinetlegal.com.do/fr/firma",
    },
  },
};

export default function FirmaPageEN() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[200px] sm:h-[260px] md:h-[360px]">
            <Image
              src="/hero-legal.jpg"
              alt="Cabinet Legal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-image-overlay absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>
              <h1 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl md:mt-3 md:text-5xl">
                The Firm
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/85 md:mt-4 md:text-lg md:leading-7">
                Sophisticated legal counsel, strategic vision and rigorous
                execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.95fr_1.05fr]">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Our vision</div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              Boutique attention, business judgment and results-driven focus.
            </h2>
            <div className="gold-line mt-6" />
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="space-y-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              <p>
                Cabinet Legal is an independent law firm in the Dominican
                Republic, focused on delivering high-level counsel to
                companies, investors and private clients.
              </p>
              <p>
                Our practice combines law, strategy and operations to support
                important business decisions with a clear, modern and precise
                perspective.
              </p>
              <p>
                We work with direct partner attention, impeccable
                communication and a rigorous standard of execution on every
                matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-3">
          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Approach</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Strategic closeness
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              We support our clients with a practical, legally sound
              perspective aligned with their real objectives.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Method</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Technical precision
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              We analyze every case in depth to build clear, secure and
              sustainable solutions.
            </p>
          </div>

          <div className="card-legal p-6 md:p-8">
            <div className="eyebrow">Standard</div>
            <h3 className="mt-4 text-xl font-semibold text-[#0f2740] md:text-2xl">
              Rigorous execution
            </h3>
            <p className="mt-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              We prioritize order, follow-through and excellence in
              implementing every legal strategy.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <div className="eyebrow">Contact</div>
          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740] md:text-4xl">
            Want to talk with our team?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            We can evaluate your situation and guide you on the best legal
            strategy for your company or project.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
            <Link href="/en/consulta" className="btn-primary-legal">
              Book a consultation
            </Link>
            <Link href="/en/socios" className="btn-secondary-legal">
              View partners
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
