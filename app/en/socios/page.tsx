import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Partners | Cabinet Legal",
  description:
    "Meet the partners of Cabinet Legal, a Dominican Republic law firm focused on corporate law, trademarks, intellectual property and litigation.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/en/socios",
    languages: {
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
    image: "/ellis.jpg",
    bio: "Ellis Beato leads the litigation practice at Cabinet Legal, with experience in civil, labor, administrative and real estate litigation, as well as resolving complex business disputes. He represents clients in judicial proceedings and strategic disputes with a rigorous, technical and results-oriented approach.",
    focus:
      "His practice centers on the effective defense of his clients' interests, combining in-depth legal analysis, procedural strategy and solid execution at every stage of litigation.",
    areas: [
      "Civil litigation",
      "Labor litigation",
      "Administrative litigation",
      "Real estate litigation",
      "Dispute resolution",
      "Judicial representation",
      "Procedural strategy",
      "Business disputes",
    ],
  },
];

export default function SociosPageEN() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f8f6f1]">
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
    </main>
  );
}
