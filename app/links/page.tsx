import type { Metadata } from "next";
import Image from "next/image";

// Link-in-bio page for Instagram and other social profiles. Kept outside the
// search index: it only exists to route visitors to the right place.
export const metadata: Metadata = {
  title: "Cabinet Legal · Links",
  description: "Abogados de negocios, inversión y litigios en Santo Domingo desde 2009. Business lawyers in the Dominican Republic. Avocats d'affaires en République dominicaine.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://cabinetlegal.com.do/links" },
};

const UTM = "utm_source=instagram&utm_medium=social&utm_campaign=bio";
const wa = (t: string) => `https://wa.me/18295420615?text=${encodeURIComponent(t)}`;

const groups = [
  {
    label: "English",
    links: [
      { title: "Free guide: investing in the Dominican Republic", href: `/en/guia-inversion?${UTM}` },
      { title: "Book a consultation", href: `/en/consulta?${UTM}` },
      { title: "Articles for investors and businesses", href: `/en/blog?${UTM}` },
    ],
  },
  {
    label: "Français",
    links: [
      { title: "Guide gratuit : investir en République dominicaine", href: `/fr/guia-inversion?${UTM}` },
      { title: "Prendre rendez-vous", href: `/fr/consulta?${UTM}` },
      { title: "Articles pour investisseurs et entreprises", href: `/fr/blog?${UTM}` },
    ],
  },
  {
    label: "Español",
    links: [
      { title: "Guía gratuita para invertir en RD", href: `/guia-inversion?${UTM}` },
      { title: "Agende su consulta", href: `/consulta?${UTM}` },
      { title: "Blog jurídico", href: `/blog?${UTM}` },
    ],
  },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] px-4 py-12">
      <div className="mx-auto max-w-md">
        <div className="flex flex-col items-center text-center">
          <Image src="/logo-cabinet-legal.jpg" alt="Cabinet Legal" width={88} height={88} className="rounded-full" priority />
          <h1 className="mt-4 font-serif text-2xl text-[#0f2740]">Cabinet Legal</h1>
          <p className="mt-1 text-sm text-[#8a6d3b]">Santo Domingo · desde 2009</p>
          <p className="mt-3 text-sm leading-relaxed text-[#1f2a36]">
            Business law, investment and litigation in the Dominican Republic.
            <br />
            English · Français · Español
          </p>
        </div>

        <a
          href={wa("Hello, I found you on Instagram. / Hola, los encontré en Instagram.")}
          className="mt-8 block rounded-full bg-[#0f2740] px-5 py-3 text-center text-sm font-semibold text-white"
        >
          WhatsApp
        </a>

        {groups.map((g) => (
          <section key={g.label} className="mt-8">
            <h2 className="mb-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6d3b]">{g.label}</h2>
            <ul className="space-y-3">
              {g.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="block rounded-full border border-[#c8a46a] bg-white px-5 py-3 text-center text-sm text-[#0f2740] transition hover:bg-[#efe2c8]"
                  >
                    {l.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <p className="mt-10 text-center text-xs text-[#5b6470]">
          <a href={`/?${UTM}`} className="underline">cabinetlegal.com.do</a> · info@cabinetlegal.com.do
        </p>
      </div>
    </main>
  );
}
