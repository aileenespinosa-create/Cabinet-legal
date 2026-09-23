import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Dominican Republic Law Firm for Foreign Investors & Real Estate",
  description:
    "Cabinet Legal advises foreign investors, companies and private clients on real estate purchases, corporate law, M&A, trademarks and litigation in the Dominican Republic.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/en",
    languages: {
      "x-default": "https://cabinetlegal.com.do",
      "es-DO": "https://cabinetlegal.com.do",
      en: "https://cabinetlegal.com.do/en",
      fr: "https://cabinetlegal.com.do/fr",
    },
  },
};

export default function HomePageEN() {
  return (
    <main className="min-h-screen bg-[#fcfaf6] pt-[96px]">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1200px] items-center gap-10 px-6 lg:grid-cols-2 lg:gap-14 lg:px-8">
          <div>
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Cabinet Legal
            </div>

            <h1 className="max-w-3xl text-[26px] font-light leading-[1.12] tracking-tight text-[#0f2740] sm:text-[34px] md:text-[44px] lg:text-[52px]">
              We protect your business, your brand and your most important
              decisions with strategic, personalized legal counsel.
            </h1>

            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />

            <p className="mt-8 max-w-2xl text-[16px] leading-8 text-[#5f6b76] md:text-[17px]">
              We advise companies, investors and private clients on corporate
              law, trademark registration, intellectual property and
              high-impact legal matters in the Dominican Republic.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                href="/en/consulta"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Book a consultation
              </Link>

              <a
                href="https://wa.me/18295420615?text=Hello%2C%20I%20visited%20Cabinet%20Legal%20and%20would%20like%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#f7f4ee]"
              >
                Message us on WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[#66717c]">
              <div>Corporate law</div>
              <div>Trademark registration</div>
              <div>Intellectual property</div>
              <div>Litigation</div>
            </div>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative h-[340px] sm:h-[430px] md:h-[520px]">
              <Image
                src="/hero-legal.jpg"
                alt="Cabinet Legal attorneys advising foreign investors in the Dominican Republic"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="hero-image-overlay absolute inset-0" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-9">
                <div className="text-[10px] uppercase tracking-[0.24em] text-[#e9d3ab]">
                  Cabinet Legal
                </div>
                <div className="mt-3 max-w-xl text-[22px] font-light leading-[1.2] tracking-tight md:text-[30px]">
                  Direct attention, technical precision and strategic vision.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto grid w-full max-w-[1200px] gap-6 px-6 md:grid-cols-2 lg:px-8">
          <div className="card-legal p-6 md:p-9">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              A common problem
            </div>
            <h2 className="text-2xl font-light tracking-tight text-[#0f2740] md:text-3xl">
              Many businesses operate without adequate legal protection.
            </h2>
            <p className="mt-5 leading-8 text-[#5f6b76]">
              Poorly structured contracts, unregistered trademarks or
              business decisions made without legal support can create
              disputes, financial losses and unnecessary risk.
            </p>
          </div>

          <div className="card-legal p-6 md:p-9">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Our approach
            </div>
            <h2 className="text-2xl font-light tracking-tight text-[#0f2740] md:text-3xl">
              Clear, executive advice focused on results.
            </h2>
            <p className="mt-5 leading-8 text-[#5f6b76]">
              At Cabinet Legal we combine strategy, technical rigor and
              direct partner involvement to help protect your business and
              act with legal certainty from day one.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Key services
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Areas where we can help
            </h2>
          </div>

          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Corporate
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Corporate law
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Business structuring, contracts and ongoing corporate legal
                support.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Trademarks
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Trademark registration
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Evaluation, strategy and full case management before ONAPI
                (the Dominican IP office).
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Protection
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Intellectual property
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Strategic protection and defense of intangible assets.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Representation
              </div>
              <h3 className="mt-4 text-xl font-semibold text-[#0f2740]">
                Litigation and disputes
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                Handling civil and commercial disputes with technical rigor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TRADEMARK REGISTRATION FEATURE */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Featured service
              </div>
              <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
                Trademark registration in the Dominican Republic
              </h2>
              <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#5f6b76] md:text-lg">
              <p>
                Registering your trademark correctly from the start can
                prevent rejections, disputes and loss of rights over your
                brand identity.
              </p>
              <p>
                We evaluate the legal viability of your trademark, define the
                right strategy and manage the full process before ONAPI.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  href="/en/servicios"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
                >
                  View service
                </Link>
                <Link
                  href="/en/consulta"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#f7f4ee]"
                >
                  Request an evaluation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOREIGN INVESTORS FEATURE */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
            <div>
              <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Featured service
              </div>
              <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
                Legal guidance for foreign investors
              </h2>
              <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
            </div>

            <div className="space-y-5 text-base leading-8 text-[#5f6b76] md:text-lg">
              <p>
                If you&apos;re buying real estate in the Dominican Republic
                from abroad, the right legal protection is what separates a
                secure investment from a costly problem.
              </p>
              <p>
                We structure your purchase, review contracts and guide you
                through closing, working alongside Land Consulting DR for
                the technical verification of the property.
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
                <Link
                  href="/en/inversion-extranjera"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                  style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
                >
                  View service
                </Link>
                <Link
                  href="/en/consulta"
                  className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#f7f4ee]"
                >
                  Book a consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="pb-14 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Cabinet Legal
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Why work with us?
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Direct attention
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                You receive close, strategic support, with no impersonal
                processes.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Business perspective
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                We understand the business context behind every legal
                decision.
              </p>
            </div>

            <div className="card-legal p-6 md:p-8">
              <h3 className="text-xl font-semibold text-[#0f2740]">
                Rigorous execution
              </h3>
              <p className="mt-4 leading-7 text-[#5f6b76]">
                We prioritize clarity, structure and follow-through on every
                legal matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 lg:px-8">
          <div className="card-legal p-6 md:p-12">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Consultation
            </div>
            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Need legal guidance?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6b76] md:text-lg">
              We can evaluate your situation and guide you on the best
              strategy for your case, your business and your goals.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
              <Link
                href="/en/consulta"
                className="inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm transition hover:opacity-95"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Book a consultation
              </Link>
              <a
                href="https://wa.me/18295420615?text=Hello%2C%20I%20visited%20Cabinet%20Legal%20and%20would%20like%20guidance."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#f7f4ee]"
              >
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
