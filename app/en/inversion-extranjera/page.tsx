import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Real Estate Lawyer for Foreign Buyers in the Dominican Republic",
  description:
    "Buy property in the Dominican Republic with full legal protection: title due diligence, contracts, notarial closing and post-purchase protection for foreign investors.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/en/inversion-extranjera",
    languages: {
      "es-DO": "https://cabinetlegal.com.do/inversion-extranjera",
      en: "https://cabinetlegal.com.do/en/inversion-extranjera",
      fr: "https://cabinetlegal.com.do/fr/inversion-extranjera",
    },
  },
};

export default function ForeignInvestorsPageEN() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="container-legal py-10 md:py-20">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[220px] sm:h-[280px] md:h-[380px]">
            <Image
              src="/hero-legal.jpg"
              alt="Legal guidance for foreign investors in the Dominican Republic"
              fill
              className="object-cover"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
                Invest in the Dominican Republic with the legal protection
                your investment deserves
              </h1>

              <p className="mt-3 max-w-2xl text-sm text-white/90 md:text-lg">
                We guide foreign investors and buyers through every legal
                stage of a real estate purchase: structuring, contracts,
                closing and protection of your property rights.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link href="/en/consulta" className="btn-primary-legal">
                  Book a consultation
                </Link>

                <a
                  href="https://wa.me/18494603517?text=Hello%2C%20I%27m%20a%20foreign%20investor%20and%20would%20like%20legal%20guidance%20on%20purchasing%20property%20in%20the%20Dominican%20Republic."
                  target="_blank"
                  className="btn-secondary-legal"
                >
                  Message us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-2">
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">A common risk</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Buying property in a foreign country carries risks that
              aren&apos;t always visible.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              Unclear title, sellers without proper documentation, poorly
              structured contracts or a closing with no legal support can
              turn a promising investment into a costly problem.
            </p>
          </div>

          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Our solution</div>

            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Complete legal execution, start to finish.
            </h2>

            <p className="mt-4 text-[#5f6b76] leading-7">
              At Cabinet Legal we structure your purchase, review and
              negotiate contracts, verify legal compliance at closing, and
              protect your property rights once the transaction is complete.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal grid gap-4 md:grid-cols-3">
          <div className="card-legal p-6">
            <div className="eyebrow">Step 1</div>
            <h3 className="mt-3 text-xl font-semibold">Structuring</h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              We define the right legal path for your investment: a personal
              purchase, a company structure, or an estate-planning structure
              suited to your case.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Step 2</div>
            <h3 className="mt-3 text-xl font-semibold">
              Contracts and closing
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              We review, negotiate and execute the purchase agreement, and
              accompany you through the notarized closing and title
              registration.
            </p>
          </div>

          <div className="card-legal p-6">
            <div className="eyebrow">Step 3</div>
            <h3 className="mt-3 text-xl font-semibold">
              Post-purchase protection
            </h3>
            <p className="mt-3 text-sm text-[#5f6b76]">
              We provide ongoing legal follow-up: tax compliance, lease
              agreements, and defense of your rights if a dispute arises.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP WITH LAND CONSULTING DR */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal grid gap-8 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="eyebrow">Strategic partnership</div>
            <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
              Technical due diligence and legal execution, in one process.
            </h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
          </div>

          <div className="space-y-5 text-[#5f6b76] leading-7">
            <p>
              Before signing any agreement, it&apos;s essential to verify
              that the property, land or project is exactly what it claims to
              be: correct boundaries, permits in order, no liens, and real
              project viability.
            </p>
            <p>
              That&apos;s why we work alongside{" "}
              <a
                href="https://landconsultingdr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#0f2740] underline"
              >
                Land Consulting DR
              </a>
              , a firm specialized in real estate due diligence for foreign
              buyers in the Dominican Republic. Land Consulting DR
              investigates and verifies the property before the purchase;
              Cabinet Legal structures, negotiates and executes the purchase
              from a legal standpoint.
            </p>

            <div className="grid gap-4 pt-2 sm:grid-cols-2">
              <div className="rounded-xl border border-[#e8ecef] p-4">
                <div className="text-sm font-semibold text-[#0f2740]">
                  Land Consulting DR
                </div>
                <p className="mt-2 text-sm text-[#5f6b76]">
                  Technical due diligence, land verification and pre-purchase
                  studies.
                </p>
              </div>
              <div className="rounded-xl border border-[#e8ecef] p-4">
                <div className="text-sm font-semibold text-[#0f2740]">
                  Cabinet Legal
                </div>
                <p className="mt-2 text-sm text-[#5f6b76]">
                  Legal structuring, contracts, closing and post-purchase
                  protection.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap">
              <Link href="/en/consulta" className="btn-primary-legal">
                Book a legal consultation
              </Link>
              <a
                href="https://landconsultingdr.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-legal"
              >
                Visit Land Consulting DR
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COST */}
      <section className="pb-12 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-10">
          <div className="eyebrow">Cost</div>

          <h2 className="mt-4 text-3xl font-semibold text-[#0f2740]">
            How much does legal guidance for my investment cost?
          </h2>

          <p className="mt-4 text-[#5f6b76] leading-7 max-w-2xl">
            The cost depends on the type of property, the investment amount
            and the complexity of the legal structure required. We evaluate
            each case individually to give you an accurate quote.
          </p>

          <div className="mt-6">
            <Link href="/en/consulta" className="btn-primary-legal">
              Request a quote
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-[#0f2740]">
            Protect your investment before you sign
          </h2>

          <p className="mt-4 text-[#5f6b76] max-w-2xl">
            Once a contract is signed or a deposit is made, your legal
            options narrow. Talk to us before you commit.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/en/consulta" className="btn-primary-legal">
              Book a consultation
            </Link>

            <a
              href="https://wa.me/18494603517?text=Hello%2C%20I%27m%20a%20foreign%20investor%20and%20would%20like%20legal%20guidance%20on%20purchasing%20property%20in%20the%20Dominican%20Republic."
              target="_blank"
              className="btn-secondary-legal"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
