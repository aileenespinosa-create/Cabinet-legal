import type { Lang } from "./services";

type Copy = {
  kicker: string;
  accTitleA: string;
  accTitleB: string;
  accIntro: string;
  expTitle: string;
  expIntro: string;
  startBy: string;
  all: string;
  howWeWork: string;
  includes: string;
  helpWhen: string;
  talk: string;
  seeArea: string;
  seeAll: string;
  noFitTitle: string;
  noFitText: string;
  consult: string;
  intents: [string, string][];
  whyUs: string;
  otherAreas: string;
  detailCtaTitle: string;
  detailCtaText: string;
};

// intents: [label, service id]
export const SERVICES_COPY: Record<Lang, Copy> = {
  es: {
    kicker: "Áreas de práctica",
    accTitleA: "Doce áreas.",
    accTitleB: "Un mismo estándar.",
    accIntro: "Abre cualquier área y conoce qué hacemos por ti, cómo trabajamos y qué incluye. Cada asunto lo dirige un socio.",
    expTitle: "¿Qué necesitas resolver?",
    expIntro: "Elige tu situación o un área y descubre qué hacemos, cómo lo hacemos y qué puedes esperar de nosotros.",
    startBy: "Empieza por tu situación:",
    all: "Todas",
    howWeWork: "Cómo trabajamos",
    includes: "Incluye",
    helpWhen: "Qué hacemos por ti",
    talk: "Hablar con un especialista",
    seeArea: "Ver el área completa",
    seeAll: "Ver todas las áreas",
    noFitTitle: "¿Tu caso no encaja en ninguna?",
    noFitText: "Cuéntanoslo y un socio te dirá en 24 horas cómo podemos ayudarte.",
    consult: "Solicitar consulta",
    intents: [
      ["Comprar una propiedad", "inversion"],
      ["Abrir o reorganizar una empresa", "corporativo"],
      ["Cobrar una deuda", "cobros"],
      ["Defenderme en un proceso", "litigacion"],
      ["Planificar mi herencia", "patrimonial"],
      ["Obtener la residencia", "residencia"],
      ["Denunciar una estafa", "penal"],
      ["Resolver un tema con la DGII", "tributario"],
    ],
    whyUs: "Por qué con nosotros",
    otherAreas: "Otras áreas del mismo frente",
    detailCtaTitle: "Hablemos de tu caso",
    detailCtaText: "Un socio revisará tu situación y te explicará los pasos, los plazos y el costo antes de comenzar.",
  },
  en: {
    kicker: "Practice areas",
    accTitleA: "Twelve areas.",
    accTitleB: "One standard.",
    accIntro: "Open any area to see what we do for you, how we work and what is included. Every matter is led by a partner.",
    expTitle: "What do you need to solve?",
    expIntro: "Pick your situation or an area and see what we do, how we do it and what you can expect from us.",
    startBy: "Start with your situation:",
    all: "All",
    howWeWork: "How we work",
    includes: "Includes",
    helpWhen: "What we do for you",
    talk: "Talk to a specialist",
    seeArea: "See the full area",
    seeAll: "See all areas",
    noFitTitle: "Your matter doesn't fit any of these?",
    noFitText: "Tell us about it and a partner will reply within 24 hours on how we can help.",
    consult: "Request a consultation",
    intents: [
      ["Buy a property", "inversion"],
      ["Set up or restructure a company", "corporativo"],
      ["Collect a debt", "cobros"],
      ["Defend myself in court", "litigacion"],
      ["Plan my estate", "patrimonial"],
      ["Get residency", "residencia"],
      ["Report a fraud", "penal"],
      ["Handle a tax issue", "tributario"],
    ],
    whyUs: "Why us",
    otherAreas: "Other areas in this group",
    detailCtaTitle: "Let's talk about your matter",
    detailCtaText: "A partner will review your situation and explain the steps, timeline and cost before we begin.",
  },
  fr: {
    kicker: "Domaines d'expertise",
    accTitleA: "Douze domaines.",
    accTitleB: "Une même exigence.",
    accIntro: "Ouvrez un domaine pour découvrir ce que nous faisons pour vous, notre méthode et ce qui est inclus. Chaque dossier est dirigé par un associé.",
    expTitle: "Que devez-vous résoudre ?",
    expIntro: "Choisissez votre situation ou un domaine et découvrez ce que nous faisons, comment nous le faisons et ce que vous pouvez attendre de nous.",
    startBy: "Commencez par votre situation :",
    all: "Tous",
    howWeWork: "Notre méthode",
    includes: "Comprend",
    helpWhen: "Ce que nous faisons pour vous",
    talk: "Parler à un spécialiste",
    seeArea: "Voir le domaine complet",
    seeAll: "Voir tous les domaines",
    noFitTitle: "Votre dossier n'entre dans aucune catégorie ?",
    noFitText: "Expliquez-le-nous : un associé vous répondra sous 24 heures.",
    consult: "Demander une consultation",
    intents: [
      ["Acheter un bien", "inversion"],
      ["Créer ou réorganiser une société", "corporativo"],
      ["Recouvrer une créance", "cobros"],
      ["Me défendre en justice", "litigacion"],
      ["Organiser ma succession", "patrimonial"],
      ["Obtenir la résidence", "residencia"],
      ["Porter plainte pour escroquerie", "penal"],
      ["Régler une question fiscale", "tributario"],
    ],
    whyUs: "Pourquoi nous",
    otherAreas: "Autres domaines du même pôle",
    detailCtaTitle: "Parlons de votre dossier",
    detailCtaText: "Un associé examinera votre situation et vous indiquera les étapes, les délais et le coût avant de commencer.",
  },
};
