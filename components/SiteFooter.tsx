"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SERVICES, serviceHref, type Lang } from "@/lib/services";

const F: Record<Lang, {
  contact: string; byAppt: string; address: string; areas: string; firm: string; links: [string, string][];
  privacy: string; privacyHref: string; phoneLabel: string; rights: string;
}> = {
  es: {
    contact: "Contacto", byAppt: "Atención únicamente con cita previa",
    address: "Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla, Santo Domingo, República Dominicana",
    areas: "Áreas de práctica", firm: "La firma",
    links: [["/firma", "La firma"], ["/socios", "Equipo"], ["/blog", "Publicaciones"], ["/guia-inversion", "Guía para invertir"], ["/unete", "Únete"], ["/consulta", "Consulta"]],
    privacy: "Política de privacidad", privacyHref: "/privacidad", phoneLabel: "Teléfono y WhatsApp", rights: "Todos los derechos reservados.",
  },
  en: {
    contact: "Contact", byAppt: "By appointment only",
    address: "Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla, Santo Domingo, Dominican Republic",
    areas: "Practice areas", firm: "The firm",
    links: [["/en/firma", "The Firm"], ["/en/socios", "Team"], ["/blog", "Insights"], ["/en/guia-inversion", "Investment guide"], ["/en/unete", "Join us"], ["/en/consulta", "Consultation"]],
    privacy: "Privacy policy", privacyHref: "/en/privacidad", phoneLabel: "Phone and WhatsApp", rights: "All rights reserved.",
  },
  fr: {
    contact: "Contact", byAppt: "Uniquement sur rendez-vous",
    address: "Av. Pedro Henríquez Ureña n° 138, Torre Empresarial Reyna II, Suite 203, La Esperilla, Saint-Domingue, République dominicaine",
    areas: "Domaines d'expertise", firm: "Le cabinet",
    links: [["/fr/firma", "Le Cabinet"], ["/fr/socios", "Équipe"], ["/blog", "Publications"], ["/fr/guia-inversion", "Guide d'investissement"], ["/fr/unete", "Rejoignez-nous"], ["/fr/consulta", "Consultation"]],
    privacy: "Politique de confidentialité", privacyHref: "/fr/privacidad", phoneLabel: "Téléphone et WhatsApp", rights: "Tous droits réservés.",
  },
};

export default function SiteFooter() {
  const pathname = usePathname();
  const lang: Lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : pathname === "/fr" || pathname.startsWith("/fr/") ? "fr" : "es";
  const t = F[lang];

  return (
    <footer className="bg-[#0b1f33] text-white">
      <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-6 py-16 md:grid-cols-[1.3fr_1fr_0.8fr] md:py-20 lg:px-8">
        <div>
          <div className="font-serif text-3xl">{t.contact}</div>
          <div className="mt-6 space-y-3 text-[15px]">
            <a href="mailto:info@cabinetlegal.com.do" className="block text-white hover:text-[#c8a46a]">info@cabinetlegal.com.do</a>
            <div>
              <span className="text-xs uppercase tracking-[0.16em] text-white/50">{t.phoneLabel}</span>
              <div className="mt-1 flex flex-wrap gap-4">
                <a href="tel:+18295420615" className="hover:text-[#c8a46a]">+1 829 542 0615</a>
                <a href="https://wa.me/18295420615" target="_blank" rel="noopener noreferrer" className="text-[#c8a46a] hover:underline">WhatsApp →</a>
              </div>
            </div>
            <p className="max-w-sm pt-1 text-sm leading-7 text-white/65">{t.address}</p>
            <p className="pt-2 text-xs uppercase tracking-[0.2em] text-[#c8a46a]">{t.byAppt}</p>
          </div>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c8a46a]">{t.areas}</div>
          <ul className="mt-5 grid gap-2.5 text-sm">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link href={serviceHref(s, lang)} className="text-white/75 hover:text-white">{s.text[lang].title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c8a46a]">{t.firm}</div>
          <ul className="mt-5 grid gap-2.5 text-sm">
            {t.links.map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-white/75 hover:text-white">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 px-6 py-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="tracking-[0.2em]">CABINET LEGAL · ATTORNEYS AT LAW</div>
          <div className="flex gap-5">
            <Link href={t.privacyHref} className="hover:text-white">{t.privacy}</Link>
            <span>© 2026 Cabinet Legal. {t.rights}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
