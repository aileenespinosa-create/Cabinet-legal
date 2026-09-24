import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Our Attorneys | Dominican Republic Law Firm",
  description:
    "Meet the partners of Cabinet Legal, a Dominican Republic law firm focused on corporate law, trademarks, intellectual property and litigation.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/en/socios",
    languages: {
      "x-default": "https://cabinetlegal.com.do/socios",
      "es-DO": "https://cabinetlegal.com.do/socios",
      en: "https://cabinetlegal.com.do/en/socios",
      fr: "https://cabinetlegal.com.do/fr/socios",
    },
  },
};

const partners = [
  {
    name: "Aileen Espinosa",
    role: "Managing Partner",
    image: "/aileen.jpg",
    bio: "Aileen Espinosa leads Cabinet Legal with a practice focused on corporate law, business structuring, trademark registration and intellectual property. She advises companies, investors and private clients on high-impact legal decisions, with a strategic, executive and results-oriented approach.",
    focus:
      "Her practice combines business perspective, technical precision and direct involvement in major corporate decisions, as well as the legal protection of trademarks and intangible assets.",
    areas: [
      "Corporate law",
      "Business structuring",
      "Trademark registration",
      "Intellectual property",
      "Corporate governance",
      "Commercial contracts",
      "Corporate legal strategy",
    ],
  },
  {
    name: "Ellis Beato",
    role: "Founding Partner",
    image: "/ellis-beato.jpg",
    bio: "Ellis Beato leads the business and litigation practices at Cabinet Legal. He advises companies and investors on structuring and negotiating their transactions, and represents them in civil, commercial, labor, administrative and real estate litigation, as well as in resolving complex business disputes, with a rigorous, technical and results-oriented approach.",
    focus:
      "His practice combines the business insight that prevents disputes with the litigation strategy that resolves them when they arise: in-depth legal analysis, firm negotiation and solid execution at every stage.",
    areas: [
      "Business law and contracts",
      "Negotiation and dispute resolution",
      "Commercial mediation and arbitration",
      "Estate planning and succession",
      "Civil and commercial litigation",
      "Real estate litigation",
      "Labor and administrative litigation",
      "Appeals before the high courts",
      "Litigation strategy",
    ],
  },
];

export default function SociosPageEN() {
  return (
    <main className="overflow-x-hidden bg-[#f8f6f1] pt-[88px]">
      <SiteHeader />

      <section className="container-legal py-12 md:py-20">
        <div className="max-w-4xl">
          <div className="eyebrow">Cabinet Legal</div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#0f2740] md:text-5xl">
            Partners
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f6b76] md:text-lg">
            A team with a strategic focus, direct partner attention and
            specialization in high-impact corporate advisory and litigation.
          </p>
        </div>

        <div className="mt-14 md:mt-20">
          {partners.map((partner, index) => (
            <article
              key={partner.name}
              className={`grid gap-8 border-t border-[#ddd4c5] py-12 md:grid-cols-[220px_minmax(0,1fr)] md:gap-12 md:py-16 ${
                index === partners.length - 1 ? "border-b" : ""
              }`}
            >
              <div className="relative h-[280px] w-[200px] overflow-hidden rounded-sm bg-[#ece7de] md:h-[300px] md:w-[220px]">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 200px, 220px"
                />
              </div>

              <div className="max-w-4xl">
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#c8a46a]">
                  {partner.role}
                </div>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0f2740] md:text-4xl">
                  {partner.name}
                </h2>

                <div className="mt-8 grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.9fr)] md:gap-10">
                  <div>
                    <p className="text-base leading-8 text-[#5f6b76] md:text-lg">
                      {partner.bio}
                    </p>

                    <div className="mt-8">
                      <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f2740]">
                        Professional focus
                      </h3>
                      <p className="mt-3 text-base leading-8 text-[#5f6b76]">
                        {partner.focus}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f2740]">
                      Practice areas
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {partner.areas.map((area) => (
                        <li
                          key={area}
                          className="border-b border-[#e6dece] pb-3 text-sm text-[#0f2740] md:text-[15px]"
                        >
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container-legal pb-16 md:pb-24">
        <div className="grid gap-10 rounded-[24px] bg-[#0f2740] p-7 text-white md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <div className="text-[11px] uppercase tracking-[0.24em] text-[#c8a46a]">Our team</div>
            <h2 className="pt-4 text-3xl font-light leading-tight tracking-tight md:text-4xl">An excellent team of lawyers, organized by practice area</h2>
            <div className="mt-6 h-[1px] w-16 bg-[#c8a46a]" />
            <p className="pt-6 leading-8 text-white/80">Behind each partner is a team of specialized associate lawyers. Every matter is led by a partner and handled by the lawyer who knows the subject best, so you get a partner&apos;s judgment and a specialist&apos;s dedication.</p>
            <Link
              href="/en/consulta"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#c8a46a] px-7 py-3 text-sm font-semibold text-[#0f2740] transition hover:bg-[#d6b57f]"
            >
              Request a consultation
            </Link>
          </div>
          <ul className="grid content-center gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Corporate and company law
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Foreign investment and real estate
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Trademarks and intellectual property
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Civil and commercial litigation
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Employment and administrative litigation
                </li>
                <li className="flex items-center gap-3 rounded-xl border border-[#e6dece] bg-white px-5 py-4 text-[#0f2740]">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#c8a46a]" />
                  Immigration and residency
                </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
