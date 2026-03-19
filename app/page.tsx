"use client";

import { useMemo, useState } from "react";

type Lang = "ES" | "EN" | "FR";
type Page = "home" | "firma" | "socios" | "servicios" | "marcas" | "consulta";

type Copy = {
  home: string;
  heroTitle: string;
  heroText: string;
  contacto: string;
  consulta: string;
  firma: string;
  socios: string;
  servicios: string;
  marcas: string;
  byAppointment: string;
  firmP1: string;
  firmP2: string;
  firmP3: string;
  aileenRole: string;
  aileenBio: string;
  ellisRole: string;
  ellisBio: string;
  corp: string;
  corpText: string;
  lit: string;
  litText: string;
  strat: string;
  stratText: string;
  missingPhoto: string;
  consultationTitle: string;
  consultationIntro: string;
  nameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  companyLabel: string;
  matterLabel: string;
  messageLabel: string;
  submitLabel: string;
  consultationNote: string;
  consultationSuccess: string;
  consultationError: string;
  submittingLabel: string;
  servicesHighlightTitle: string;
  servicesHighlightText: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  homeIntroTitle: string;
  homeIntroText: string;
  homeWhyTitle: string;
  homeWhyText: string;
  servicesCorporateTitle: string;
  servicesCorporateText: string;
  servicesRealEstateTitle: string;
  servicesRealEstateText: string;
  servicesLitigationTitle: string;
  servicesLitigationText: string;
  servicesIPTitle: string;
  servicesIPText: string;
  servicesBusinessTitle: string;
  servicesBusinessText: string;
  trademarkTitle: string;
  trademarkIntro: string;
  trademarkProblemTitle: string;
  trademarkProblemText: string;
  trademarkServiceTitle: string;
  trademarkServiceText: string;
  trademarkList1: string;
  trademarkList2: string;
  trademarkList3: string;
  trademarkList4: string;
  trademarkList5: string;
  trademarkProcessTitle: string;
  trademarkStep1: string;
  trademarkStep2: string;
  trademarkStep3: string;
  trademarkStep4: string;
  trademarkStep5: string;
  trademarkWhyTitle: string;
  trademarkWhyText: string;
  trademarkFinalCta: string;
};

const NAVY = "#0A3A5A";
const GOLD = "#D9BE3F";
const AILEEN_IMAGE = "/aileen-profesional.jpg";
const ELLIS_IMAGE = "/ellis-profesional.jpg";
const LOGO_IMAGE = "/logo-cabinet-legal.jpg";

const CONTENT: Record<Lang, Copy> = {
  ES: {
    home: "Inicio",
    heroTitle: "Estrategia legal para decisiones que definen el rumbo de su empresa.",
    heroText:
      "Cabinet Legal es una firma boutique que asesora empresas, inversionistas y clientes privados en asuntos corporativos, litigiosos y estratégicos. Nuestra práctica se distingue por claridad, criterio y ejecución precisa.",
    contacto: "Contacto",
    consulta: "Consulta",
    firma: "La Firma",
    socios: "Socios",
    servicios: "Servicios",
    marcas: "Marcas",
    byAppointment: "Atención únicamente con cita previa",
    firmP1:
      "Cabinet Legal es una firma legal independiente con enfoque boutique, diseñada para ofrecer asesoría jurídica sofisticada con atención directa de socios.",
    firmP2:
      "Acompañamos decisiones empresariales relevantes, procesos de crecimiento y escenarios de conflicto con una visión que integra derecho, estrategia y operación.",
    firmP3:
      "Nuestra práctica prioriza precisión técnica, comunicación clara y ejecución oportuna.",
    aileenRole: "Managing Partner",
    aileenBio:
      "Abogada enfocada en asesoría corporativa, estructuración de negocios y estrategia legal empresarial.",
    ellisRole: "Founder Partner",
    ellisBio: "Abogado con experiencia en litigios, negociación y resolución de conflictos.",
    corp: "Derecho Corporativo",
    corpText: "Estructuración, gobierno corporativo y decisiones estratégicas.",
    lit: "Litigios",
    litText: "Representación en controversias civiles y comerciales.",
    strat: "Estrategia Legal",
    stratText: "Soluciones jurídicas para decisiones empresariales complejas.",
    missingPhoto: "No se encontró la imagen",
    consultationTitle: "Solicitar una consulta",
    consultationIntro:
      "Compártenos una breve descripción de tu asunto y nuestro equipo se pondrá en contacto para coordinar la mejor vía de atención.",
    nameLabel: "Nombre completo",
    emailLabel: "Correo electrónico",
    phoneLabel: "Teléfono",
    companyLabel: "Empresa",
    matterLabel: "Tipo de asunto",
    messageLabel: "Mensaje",
    submitLabel: "Enviar solicitud",
    consultationNote: "La información enviada será tratada con discreción profesional.",
    consultationSuccess: "Tu solicitud fue enviada correctamente. Te contactaremos pronto.",
    consultationError:
      "No se pudo enviar la solicitud. Verifica tu conexión o la activación del formulario en Formspree.",
    submittingLabel: "Enviando...",
    servicesHighlightTitle: "Atención estratégica y discreta",
    servicesHighlightText:
      "Atendemos asuntos corporativos, contenciosos y consultivos con participación directa de los socios y criterios orientados a resultados.",
    heroCtaPrimary: "Agendar consulta",
    heroCtaSecondary: "Ver servicios",
    homeIntroTitle: "Firma de abogados en República Dominicana",
    homeIntroText:
      "Asesoramos empresas, inversionistas y clientes locales e internacionales en derecho corporativo, inmobiliario, litigios, propiedad intelectual y servicios empresariales.",
    homeWhyTitle: "Asesoría legal estratégica para decisiones relevantes",
    homeWhyText:
      "En Cabinet Legal combinamos criterio jurídico, visión de negocio y ejecución precisa para proteger operaciones, activos y crecimiento empresarial.",
    servicesCorporateTitle: "Derecho Corporativo",
    servicesCorporateText:
      "Asesoría legal para empresas, estructuración societaria, gobierno corporativo y decisiones estratégicas.",
    servicesRealEstateTitle: "Derecho Inmobiliario",
    servicesRealEstateText:
      "Acompañamiento en compraventas, due diligence, inversiones inmobiliarias y conflictos relacionados con bienes inmuebles.",
    servicesLitigationTitle: "Litigios Civiles y Comerciales",
    servicesLitigationText:
      "Representación legal en controversias civiles, comerciales y empresariales con enfoque estratégico.",
    servicesIPTitle: "Propiedad Intelectual",
    servicesIPText:
      "Registro de marcas, oposiciones, cancelaciones y defensa de derechos ante ONAPI.",
    servicesBusinessTitle: "Servicios Empresariales",
    servicesBusinessText:
      "Constitución de sociedades, soporte legal continuo y acompañamiento a empresas locales e internacionales.",
    trademarkTitle: "Registro de marcas en República Dominicana",
    trademarkIntro:
      "Protege tu marca legalmente y evita conflictos futuros. Te acompañamos en todo el proceso ante ONAPI con un enfoque estratégico, no solo operativo.",
    trademarkProblemTitle: "¿Por qué registrar tu marca?",
    trademarkProblemText:
      "Muchas empresas operan sin registrar su marca y descubren demasiado tarde que un tercero ya solicitó o registró un signo similar. Registrar tu marca protege uno de los activos más importantes de tu negocio.",
    trademarkServiceTitle: "¿Cómo te ayudamos?",
    trademarkServiceText:
      "En Cabinet Legal acompañamos a nuestros clientes en todas las etapas relacionadas con protección marcaria en República Dominicana.",
    trademarkList1: "Búsqueda de disponibilidad de marca",
    trademarkList2: "Solicitud de registro ante ONAPI",
    trademarkList3: "Oposición a solicitudes conflictivas",
    trademarkList4: "Cancelación de marcas o nombres comerciales",
    trademarkList5: "Defensa de derechos de propiedad intelectual",
    trademarkProcessTitle: "Proceso de registro",
    trademarkStep1: "1. Evaluación inicial de la marca",
    trademarkStep2: "2. Búsqueda de antecedentes y viabilidad",
    trademarkStep3: "3. Presentación de solicitud ante ONAPI",
    trademarkStep4: "4. Publicación y período de oposición",
    trademarkStep5: "5. Emisión del certificado de registro",
    trademarkWhyTitle: "Protección legal con visión estratégica",
    trademarkWhyText:
      "No solo gestionamos solicitudes: ayudamos a reducir riesgos, prevenir conflictos y fortalecer la protección jurídica de tu negocio en el mercado dominicano.",
    trademarkFinalCta:
      "Protege tu marca hoy. Agenda una consulta y recibe acompañamiento legal en todo el proceso.",
  },
  EN: {
    home: "Home",
    heroTitle: "Legal strategy for decisions that define your business direction.",
    heroText:
      "Cabinet Legal is a boutique law firm advising companies, investors, and private clients on corporate, litigation, and strategic matters. Our practice is defined by clarity, judgment, and precise execution.",
    contacto: "Contact",
    consulta: "Consultation",
    firma: "Firm",
    socios: "Partners",
    servicios: "Services",
    marcas: "Trademarks",
    byAppointment: "By appointment only",
    firmP1:
      "Cabinet Legal is an independent boutique law firm built to deliver sophisticated legal counsel with direct partner attention.",
    firmP2:
      "We advise on key business decisions, growth processes, and dispute scenarios through an approach that integrates law, strategy, and operations.",
    firmP3:
      "Our practice is defined by technical precision, clear communication, and timely execution.",
    aileenRole: "Managing Partner",
    aileenBio:
      "Attorney focused on corporate counsel, business structuring, and legal strategy for companies.",
    ellisRole: "Founder Partner",
    ellisBio: "Attorney with experience in litigation, negotiation, and dispute resolution.",
    corp: "Corporate Law",
    corpText: "Structuring, corporate governance, and strategic decision-making.",
    lit: "Litigation",
    litText: "Representation in civil and commercial disputes.",
    strat: "Legal Strategy",
    stratText: "Legal solutions for complex business decisions.",
    missingPhoto: "Image not found",
    consultationTitle: "Request a consultation",
    consultationIntro:
      "Share a brief description of your matter and our team will get in touch to coordinate the best path forward.",
    nameLabel: "Full name",
    emailLabel: "Email address",
    phoneLabel: "Phone",
    companyLabel: "Company",
    matterLabel: "Type of matter",
    messageLabel: "Message",
    submitLabel: "Send request",
    consultationNote: "Information submitted will be handled with professional discretion.",
    consultationSuccess: "Your request was sent successfully. We will contact you soon.",
    consultationError:
      "Your request could not be sent. Please check your connection or Formspree activation.",
    submittingLabel: "Sending...",
    servicesHighlightTitle: "Strategic and discreet counsel",
    servicesHighlightText:
      "We handle corporate, litigation, and advisory matters with direct partner involvement and outcome-oriented judgment.",
    heroCtaPrimary: "Schedule a consultation",
    heroCtaSecondary: "View services",
    homeIntroTitle: "Law firm in the Dominican Republic",
    homeIntroText:
      "We advise companies, investors, and local and international clients on corporate law, real estate, litigation, intellectual property, and business legal services.",
    homeWhyTitle: "Strategic legal counsel for high-value decisions",
    homeWhyText:
      "At Cabinet Legal, we combine legal judgment, business perspective, and precise execution to protect operations, assets, and business growth.",
    servicesCorporateTitle: "Corporate Law",
    servicesCorporateText:
      "Legal counsel for companies, corporate structuring, governance, and strategic business decisions.",
    servicesRealEstateTitle: "Real Estate Law",
    servicesRealEstateText:
      "Support in acquisitions, due diligence, real estate investments, and disputes involving real property.",
    servicesLitigationTitle: "Civil and Commercial Litigation",
    servicesLitigationText:
      "Legal representation in civil, commercial, and business disputes with a strategic approach.",
    servicesIPTitle: "Intellectual Property",
    servicesIPText:
      "Trademark registration, oppositions, cancellations, and protection of rights before ONAPI.",
    servicesBusinessTitle: "Business Legal Services",
    servicesBusinessText:
      "Company formation, ongoing legal support, and assistance to local and international businesses.",
    trademarkTitle: "Trademark registration in the Dominican Republic",
    trademarkIntro:
      "Protect your brand legally and reduce future conflicts. We guide you through the full ONAPI process with a strategic, not merely administrative, approach.",
    trademarkProblemTitle: "Why register your trademark?",
    trademarkProblemText:
      "Many businesses operate without registering their trademark and discover too late that a third party has already filed or registered a similar sign. Registering your trademark protects one of the most valuable assets of your business.",
    trademarkServiceTitle: "How can we help?",
    trademarkServiceText:
      "At Cabinet Legal, we assist clients in every stage related to trademark protection in the Dominican Republic.",
    trademarkList1: "Trademark availability search",
    trademarkList2: "Trademark filing before ONAPI",
    trademarkList3: "Opposition to conflicting applications",
    trademarkList4: "Cancellation of trademarks or trade names",
    trademarkList5: "Defense of intellectual property rights",
    trademarkProcessTitle: "Registration process",
    trademarkStep1: "1. Initial trademark assessment",
    trademarkStep2: "2. Background search and viability review",
    trademarkStep3: "3. Filing the application before ONAPI",
    trademarkStep4: "4. Publication and opposition period",
    trademarkStep5: "5. Issuance of the registration certificate",
    trademarkWhyTitle: "Legal protection with strategic vision",
    trademarkWhyText:
      "We do more than file applications: we help reduce risks, prevent disputes, and strengthen the legal protection of your business in the Dominican market.",
    trademarkFinalCta:
      "Protect your trademark today. Schedule a consultation and receive legal guidance throughout the entire process.",
  },
  FR: {
    home: "Accueil",
    heroTitle: "Stratégie juridique pour des décisions qui définissent l’avenir de votre entreprise.",
    heroText:
      "Cabinet Legal est un cabinet d’avocats boutique conseillant des entreprises, investisseurs et clients privés en matière corporative, contentieuse et stratégique. Notre pratique se distingue par sa clarté, son discernement et sa précision d’exécution.",
    contacto: "Contact",
    consulta: "Consultation",
    firma: "Le Cabinet",
    socios: "Associés",
    servicios: "Services",
    marcas: "Marques",
    byAppointment: "Uniquement sur rendez-vous",
    firmP1:
      "Cabinet Legal est un cabinet d’avocats indépendant à structure boutique, offrant une assistance juridique sophistiquée avec implication directe des associés.",
    firmP2:
      "Nous accompagnons des décisions stratégiques, des phases de croissance et des situations de conflit avec une approche intégrant droit, stratégie et réalité opérationnelle.",
    firmP3: "Notre pratique privilégie la rigueur technique, la clarté et l’efficacité.",
    aileenRole: "Managing Partner",
    aileenBio:
      "Avocate spécialisée en conseil corporatif, structuration d’entreprises et stratégie juridique.",
    ellisRole: "Founder Partner",
    ellisBio: "Avocat spécialisé en contentieux, négociation et résolution de conflits.",
    corp: "Droit Corporatif",
    corpText: "Structuration, gouvernance et décisions stratégiques.",
    lit: "Contentieux",
    litText: "Représentation en litiges civils et commerciaux.",
    strat: "Stratégie Juridique",
    stratText: "Solutions juridiques pour décisions complexes.",
    missingPhoto: "Image introuvable",
    consultationTitle: "Demander une consultation",
    consultationIntro:
      "Partagez une brève description de votre dossier et notre équipe vous contactera afin de coordonner la meilleure voie d’assistance.",
    nameLabel: "Nom complet",
    emailLabel: "Courriel",
    phoneLabel: "Téléphone",
    companyLabel: "Entreprise",
    matterLabel: "Type de dossier",
    messageLabel: "Message",
    submitLabel: "Envoyer la demande",
    consultationNote: "Les informations transmises seront traitées avec discrétion professionnelle.",
    consultationSuccess: "Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.",
    consultationError:
      "La demande n’a pas pu être envoyée. Vérifiez votre connexion ou l’activation du formulaire Formspree.",
    submittingLabel: "Envoi...",
    servicesHighlightTitle: "Conseil stratégique et discret",
    servicesHighlightText:
      "Nous intervenons en matière corporative, contentieuse et consultative avec implication directe des associés et une vision orientée vers les résultats.",
    heroCtaPrimary: "Planifier une consultation",
    heroCtaSecondary: "Voir les services",
    homeIntroTitle: "Cabinet d’avocats en République dominicaine",
    homeIntroText:
      "Nous conseillons des entreprises, investisseurs et clients locaux et internationaux en droit corporatif, immobilier, contentieux, propriété intellectuelle et services juridiques aux entreprises.",
    homeWhyTitle: "Conseil juridique stratégique pour les décisions importantes",
    homeWhyText:
      "Chez Cabinet Legal, nous combinons analyse juridique, vision d’affaires et exécution précise pour protéger les opérations, les actifs et la croissance de l’entreprise.",
    servicesCorporateTitle: "Droit Corporatif",
    servicesCorporateText:
      "Conseil juridique pour les entreprises, structuration sociétaire, gouvernance et décisions stratégiques.",
    servicesRealEstateTitle: "Droit Immobilier",
    servicesRealEstateText:
      "Accompagnement en acquisitions, due diligence, investissements immobiliers et litiges relatifs aux biens immeubles.",
    servicesLitigationTitle: "Contentieux Civils et Commerciaux",
    servicesLitigationText:
      "Représentation juridique dans les litiges civils, commerciaux et d’affaires avec une approche stratégique.",
    servicesIPTitle: "Propriété Intellectuelle",
    servicesIPText:
      "Enregistrement de marques, oppositions, annulations et défense des droits devant l’ONAPI.",
    servicesBusinessTitle: "Services Juridiques aux Entreprises",
    servicesBusinessText:
      "Constitution de sociétés, accompagnement juridique continu et assistance aux entreprises locales et internationales.",
    trademarkTitle: "Enregistrement de marques en République dominicaine",
    trademarkIntro:
      "Protégez votre marque juridiquement et réduisez les conflits futurs. Nous vous accompagnons dans l’ensemble du processus devant l’ONAPI avec une approche stratégique et non seulement administrative.",
    trademarkProblemTitle: "Pourquoi enregistrer votre marque ?",
    trademarkProblemText:
      "De nombreuses entreprises exercent sans enregistrer leur marque et découvrent trop tard qu’un tiers a déjà déposé ou enregistré un signe similaire. L’enregistrement protège l’un des actifs les plus précieux de votre entreprise.",
    trademarkServiceTitle: "Comment pouvons-nous vous aider ?",
    trademarkServiceText:
      "Chez Cabinet Legal, nous accompagnons nos clients à chaque étape liée à la protection des marques en République dominicaine.",
    trademarkList1: "Recherche de disponibilité de la marque",
    trademarkList2: "Dépôt de la demande devant l’ONAPI",
    trademarkList3: "Opposition aux demandes conflictuelles",
    trademarkList4: "Annulation de marques ou de noms commerciaux",
    trademarkList5: "Défense des droits de propriété intellectuelle",
    trademarkProcessTitle: "Processus d’enregistrement",
    trademarkStep1: "1. Évaluation initiale de la marque",
    trademarkStep2: "2. Recherche d’antériorités et analyse de viabilité",
    trademarkStep3: "3. Dépôt de la demande devant l’ONAPI",
    trademarkStep4: "4. Publication et période d’opposition",
    trademarkStep5: "5. Délivrance du certificat d’enregistrement",
    trademarkWhyTitle: "Protection juridique avec vision stratégique",
    trademarkWhyText:
      "Nous faisons plus que déposer des demandes : nous aidons à réduire les risques, prévenir les conflits et renforcer la protection juridique de votre entreprise sur le marché dominicain.",
    trademarkFinalCta:
      "Protégez votre marque dès aujourd’hui. Planifiez une consultation et bénéficiez d’un accompagnement juridique tout au long du processus.",
  },
};

function ImageWithFallback({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt: string;
  className: string;
  fallback: React.ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

function LogoFallback() {
  return (
    <div className="flex items-center gap-4">
      <div
        className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 text-xl font-semibold"
        style={{ borderColor: GOLD, color: NAVY, backgroundColor: "#fffdf5" }}
      >
        CL
      </div>
      <div>
        <div className="text-xl font-semibold tracking-wide" style={{ color: NAVY }}>
          Cabinet Legal
        </div>
        <div className="text-xs uppercase tracking-[0.28em] text-slate-400">Attorneys at law</div>
      </div>
    </div>
  );
}

function PortraitFallback({ label }: { label: string }) {
  return (
    <div className="mx-auto flex aspect-[4/5] w-full max-w-[320px] items-center justify-center rounded-[28px] border border-dashed border-slate-300 bg-slate-50 px-6 text-center text-sm text-slate-400">
      {label}
    </div>
  );
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("ES");
  const [page, setPage] = useState<Page>("home");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = useMemo(() => CONTENT[lang], [lang]);

  const handleConsultationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Nueva consulta - Cabinet Legal");

    try {
      const response = await fetch("https://formspree.io/f/mlgpavya", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        setFormError(t.consultationError);
      }
    } catch {
      setFormError(t.consultationError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const NavButton = ({ label, value }: { label: string; value: Page }) => (
    <button
      onClick={() => setPage(value)}
      className={`transition ${page === value ? "text-[#0A3A5A]" : "text-slate-600 hover:text-[#0A3A5A]"}`}
    >
      {label}
    </button>
  );

  const renderHome = () => (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#D9BE3F]/40 bg-[#D9BE3F]/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.28em] text-[#0A3A5A]">
              Cabinet Legal
            </div>
            <h1 className="max-w-4xl text-5xl font-serif font-semibold leading-tight text-[#0A3A5A] md:text-7xl">
              {t.homeIntroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.homeIntroText}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setPage("consulta")}
                className="rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ backgroundColor: NAVY }}
              >
                {t.heroCtaPrimary}
              </button>
              <button
                onClick={() => setPage("servicios")}
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-700 transition duration-300 hover:border-[#0A3A5A] hover:text-[#0A3A5A]"
              >
                {t.heroCtaSecondary}
              </button>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-[32px] border border-slate-200 bg-[#FBFBF8] p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <ImageWithFallback
                src={LOGO_IMAGE}
                alt="Cabinet Legal logo"
                className="mx-auto w-full max-w-md object-contain"
                fallback={<LogoFallback />}
              />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-[28px] bg-[#0A3A5A] p-6 text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
                <div className="mt-3 text-2xl font-serif">{t.homeWhyTitle}</div>
                <p className="mt-3 text-sm leading-7 text-slate-200">{t.homeWhyText}</p>
              </div>
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="text-xs uppercase tracking-[0.28em] text-slate-500">Contact</div>
                <div className="mt-3 text-lg font-semibold text-[#0A3A5A]">info@cabinetlegal.com.do</div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La
                  Esperilla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderFirma = () => (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
            <h2 className="mb-6 mt-4 text-4xl font-serif font-semibold text-[#0A3A5A]">
              {t.firma}
            </h2>
            <div className="h-[2px] w-16" style={{ backgroundColor: GOLD }} />
          </div>
          <div className="space-y-6 text-lg leading-8 text-slate-600">
            <p>{t.firmP1}</p>
            <p>{t.firmP2}</p>
            <p>{t.firmP3}</p>
          </div>
        </div>
      </div>
    </section>
  );

  const renderSocios = () => (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <div className="group text-center">
          <ImageWithFallback
            src={AILEEN_IMAGE}
            alt="Aileen Espinosa"
            className="mx-auto aspect-[4/5] w-full max-w-[320px] rounded-[28px] object-cover grayscale shadow-lg transition duration-500 group-hover:grayscale-0"
            fallback={<PortraitFallback label="No se encontró /public/aileen-profesional.jpg" />}
          />
          <h3 className="mt-6 text-2xl font-semibold text-[#0A3A5A]">Aileen Espinosa</h3>
          <div className="mx-auto mt-3 h-[2px] w-12" style={{ backgroundColor: GOLD }} />
          <p className="mt-3 text-xs uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            {t.aileenRole}
          </p>
          <p className="mx-auto mt-5 max-w-md leading-8 text-slate-600">{t.aileenBio}</p>
        </div>

        <div className="group text-center">
          <ImageWithFallback
            src={ELLIS_IMAGE}
            alt="Ellis Beato"
            className="mx-auto aspect-[4/5] w-full max-w-[320px] rounded-[28px] object-cover grayscale shadow-lg transition duration-500 group-hover:grayscale-0"
            fallback={<PortraitFallback label="No se encontró /public/ellis-profesional.jpg" />}
          />
          <h3 className="mt-6 text-2xl font-semibold text-[#0A3A5A]">Ellis Beato</h3>
          <div className="mx-auto mt-3 h-[2px] w-12" style={{ backgroundColor: GOLD }} />
          <p className="mt-3 text-xs uppercase tracking-[0.25em]" style={{ color: GOLD }}>
            {t.ellisRole}
          </p>
          <p className="mx-auto mt-5 max-w-md leading-8 text-slate-600">{t.ellisBio}</p>
        </div>
      </div>
    </section>
  );

  const renderServicios = () => (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
            <h2 className="mt-4 text-4xl font-serif font-semibold text-[#0A3A5A]">
              {t.servicios}
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">{t.servicesHighlightText}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[
            [t.servicesCorporateTitle, t.servicesCorporateText],
            [t.servicesRealEstateTitle, t.servicesRealEstateText],
            [t.servicesLitigationTitle, t.servicesLitigationText],
            [t.servicesIPTitle, t.servicesIPText],
            [t.servicesBusinessTitle, t.servicesBusinessText],
          ].map(([title, text]) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div
                className="mb-4 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20"
                style={{ backgroundColor: GOLD }}
              />
              <h3 className="mb-3 text-lg font-semibold text-[#0A3A5A]">{title}</h3>
              <p className="leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderMarcas = () => (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
          <h2 className="mt-4 text-4xl font-serif font-semibold text-[#0A3A5A] md:text-5xl">
            {t.trademarkTitle}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">{t.trademarkIntro}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setPage("consulta")}
              className="rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ backgroundColor: NAVY }}
            >
              {t.consulta}
            </button>
          </div>
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-[28px] border border-slate-200 bg-[#FBFBF8] p-8 shadow-sm">
            <h3 className="text-2xl font-serif font-semibold text-[#0A3A5A]">
              {t.trademarkProblemTitle}
            </h3>
            <p className="mt-4 leading-8 text-slate-600">{t.trademarkProblemText}</p>
          </div>

          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-serif font-semibold text-[#0A3A5A]">
              {t.trademarkWhyTitle}
            </h3>
            <p className="mt-4 leading-8 text-slate-600">{t.trademarkWhyText}</p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-serif font-semibold text-[#0A3A5A]">
              {t.trademarkServiceTitle}
            </h3>
            <p className="mt-4 leading-8 text-slate-600">{t.trademarkServiceText}</p>
            <ul className="mt-6 space-y-4 text-slate-700">
              <li>• {t.trademarkList1}</li>
              <li>• {t.trademarkList2}</li>
              <li>• {t.trademarkList3}</li>
              <li>• {t.trademarkList4}</li>
              <li>• {t.trademarkList5}</li>
            </ul>
          </div>

          <div className="rounded-[28px] bg-[#0A3A5A] p-8 text-white shadow-sm">
            <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">ONAPI</div>
            <h3 className="mt-4 text-2xl font-serif font-semibold">{t.trademarkProcessTitle}</h3>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-200">
              <div>{t.trademarkStep1}</div>
              <div>{t.trademarkStep2}</div>
              <div>{t.trademarkStep3}</div>
              <div>{t.trademarkStep4}</div>
              <div>{t.trademarkStep5}</div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[32px] border border-[#D9BE3F]/30 bg-[#D9BE3F]/10 p-10 text-center">
          <h3 className="text-2xl font-serif font-semibold text-[#0A3A5A]">
            {t.trademarkFinalCta}
          </h3>
          <button
            onClick={() => setPage("consulta")}
            className="mt-6 rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ backgroundColor: NAVY }}
          >
            {t.consulta}
          </button>
        </div>
      </div>
    </section>
  );

  const renderConsulta = () => (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
          <h2 className="mt-4 text-4xl font-serif font-semibold text-[#0A3A5A]">
            {t.consultationTitle}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">{t.consultationIntro}</p>
          <div className="mt-10 rounded-[28px] bg-[#0A3A5A] p-8 text-white shadow-sm">
            <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
            <p className="mt-4 text-sm leading-7 text-slate-200">{t.consultationNote}</p>
            <div className="mt-8 space-y-3 text-sm text-slate-200">
              <div>info@cabinetlegal.com.do</div>
              <div>809 221 7768</div>
              <div>Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203</div>
            </div>
          </div>
        </div>
        <div className="rounded-[32px] border border-slate-200 bg-[#FBFBF8] p-8 shadow-sm">
          {formSubmitted ? (
            <div className="flex min-h-[540px] flex-col items-center justify-center text-center">
              <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
              <h3 className="mt-4 text-3xl font-serif font-semibold text-[#0A3A5A]">
                {t.consultationTitle}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                {t.consultationSuccess}
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-8 rounded-full px-5 py-3 text-sm font-medium text-white"
                style={{ backgroundColor: NAVY }}
              >
                {t.consulta}
              </button>
            </div>
          ) : (
            <form className="grid gap-6" onSubmit={handleConsultationSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-slate-600">
                  <span>{t.nameLabel}</span>
                  <input
                    name="nombre"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                    type="text"
                    required
                  />
                </label>
                <label className="grid gap-2 text-sm text-slate-600">
                  <span>{t.emailLabel}</span>
                  <input
                    name="email"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                    type="email"
                    required
                  />
                </label>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-slate-600">
                  <span>{t.phoneLabel}</span>
                  <input
                    name="telefono"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                    type="tel"
                  />
                </label>
                <label className="grid gap-2 text-sm text-slate-600">
                  <span>{t.companyLabel}</span>
                  <input
                    name="empresa"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                    type="text"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm text-slate-600">
                <span>{t.matterLabel}</span>
                <input
                  name="asunto"
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                  type="text"
                  required
                />
              </label>
              <label className="grid gap-2 text-sm text-slate-600">
                <span>{t.messageLabel}</span>
                <textarea
                  name="mensaje"
                  className="min-h-[180px] rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                  required
                />
              </label>
              {formError ? <p className="text-sm text-red-600">{formError}</p> : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-fit rounded-full px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                style={{ backgroundColor: NAVY }}
              >
                {isSubmitting ? t.submittingLabel : t.submitLabel}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <main className="min-h-screen bg-white">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-4">
            <ImageWithFallback
              src={LOGO_IMAGE}
              alt="Cabinet Legal"
              className="h-12 w-auto object-contain"
              fallback={<LogoFallback />}
            />
          </div>
          <div className="flex items-center gap-6 text-xs uppercase tracking-[0.2em]">
            <NavButton label={t.home} value="home" />
            <NavButton label={t.firma} value="firma" />
            <NavButton label={t.socios} value="socios" />
            <NavButton label={t.servicios} value="servicios" />
            <NavButton label={t.marcas} value="marcas" />
            <NavButton label={t.consulta} value="consulta" />
            <div className="flex items-center gap-1 rounded-full border border-slate-300 p-1 normal-case tracking-normal">
              {(["ES", "EN", "FR"] as Lang[]).map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-full px-3 py-1 text-xs transition ${lang === code ? "text-white" : "text-slate-600 hover:text-[#0A3A5A]"}`}
                  style={lang === code ? { backgroundColor: NAVY } : undefined}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {page === "home" && renderHome()}
      {page === "firma" && renderFirma()}
      {page === "socios" && renderSocios()}
      {page === "servicios" && renderServicios()}
      {page === "marcas" && renderMarcas()}
      {page === "consulta" && renderConsulta()}

      <section className="bg-[#FAFAF7] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-serif font-semibold text-[#0A3A5A]">{t.contacto}</h2>
          <p className="mt-6 text-lg text-slate-800">info@cabinetlegal.com.do</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla,
            Santo Domingo de Guzmán, Distrito Nacional, República Dominicana
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em]" style={{ color: GOLD }}>
            {t.byAppointment}
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-[0.28em] text-[#0A3A5A]">
              CABINET LEGAL
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-400">
              Attorneys at law
            </div>
          </div>
          <div className="text-center text-xs tracking-[0.2em] text-slate-500 md:text-right">
            © 2026 Cabinet Legal
          </div>
        </div>
      </footer>
    </main>
  );
}