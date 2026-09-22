import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Services | Cabinet Legal",
  description:
    "Cabinet Legal's legal services in the Dominican Republic: corporate law, litigation, intellectual property and trademark registration.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/en/servicios",
    languages: {
      "es-DO": "https://cabinetlegal.com.do/servicios",
      en: "https://cabinetlegal.com.do/en/servicios",
      fr: "https://cabinetlegal.com.do/fr/servicios",
    },
  },
};

const services = [
  {
    title: "Corporate law",
    description:
      "Advice on business structuring, contracts, corporate governance and legal support for major business decisions.",
  },
  {
    title: "Intellectual property",
    description:
      "Trademark protection, registration strategy, defense of intangible assets and guidance on industrial property matters.",
  },
  {
    title: "Litigation and disputes",
    description:
      "Representation in civil and commercial disputes with a strategic approach, technical clarity and rigorous execution.",
  },
  {
    title: "Trademark registration",
    description:
      "Availability assessment, classification, filing and full follow-through before ONAPI, the Dominican IP office.",
  },
];

export default function ServiciosPageEN() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfaf6]">
      <SiteHeader />

      {/* HERO */}
      <section className="pt-24 pb-14 md:pt-32 md:pb-20">
        <div className="container-legal">

          <div className="mb-10 max-w-3xl">
            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Cabinet Legal
            </div>

            <h1 className="text-4xl font-light tracking-tight text-[#0f2740] md:text-5xl">
              Services
            </h1>

            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />

            <p className="mt-6 text-base leading-8 text-[#5f6b76] md:text-lg">
              Strategic legal counsel for companies, investors and private
              clients in the Dominican Republic.
            </p>
          </div>

          <div className="card-legal overflow-hidden">
            <div className="relative h-[200px] sm:h-[260px] md:h-[360px]">
              <Image
                src="/hero-legal.jpg"
                alt="Cabinet Legal legal services"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="hero-image-overlay absolute inset-0" />
            </div>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="pb-14 md:pb-24">
        <div className="container-legal grid gap-5 md:grid-cols-2">

          {services.map((service) => (
            <article
              key={service.title}
              className="card-legal p-6 transition hover:-translate-y-[2px] md:p-9"
            >
              <div className="mb-3 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
                Service
              </div>

              <h2 className="text-2xl font-semibold tracking-tight text-[#0f2740] md:text-3xl">
                {service.title}
              </h2>

              <p className="mt-4 leading-8 text-[#5f6b76]">
                {service.description}
              </p>
            </article>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container-legal">
          <div className="card-legal p-6 md:p-12">

            <div className="mb-4 text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">
              Consultation
            </div>

            <h2 className="text-3xl font-light tracking-tight text-[#0f2740] md:text-4xl">
              Need legal guidance?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#5f6b76] md:text-lg">
              We can evaluate your situation and recommend the right legal
              service for your needs and objectives.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:gap-4">
              <Link href="/en/consulta" className="btn-primary-legal">
                Book a consultation
              </Link>

              <Link href="/en" className="btn-secondary-legal">
                Back to home
              </Link>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
