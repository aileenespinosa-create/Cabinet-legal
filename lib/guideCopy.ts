import type { GuideLang } from "./guide";

export type GuideCopy = {
  kicker: string;
  title: string;
  subtitle: string;
  pages: string;
  inside: string;
  chapters: string[];
  forWhoTitle: string;
  forWho: string[];
  formTitle: string;
  formIntro: string;
  name: string;
  email: string;
  country: string;
  interest: string;
  interestOptions: string[];
  consent: string;
  submit: string;
  sending: string;
  sentTitle: string;
  sentText: string;
  errorInvalid: string;
  errorGeneric: string;
  privacy: string;
  bannerKicker: string;
  bannerTitle: string;
  bannerText: string;
  bannerCta: string;
  dlKicker: string;
  dlTitle: string;
  dlText: string;
  dlButton: string;
  dlOther: string;
  dlNextTitle: string;
  dlNextText: string;
  dlConsult: string;
  dlWhatsApp: string;
  dlInvalidTitle: string;
  dlInvalidText: string;
  dlInvalidCta: string;
  consultHref: string;
  langNames: Record<GuideLang, string>;
  whatsappText: string;
};

export const GUIDE_COPY: Record<GuideLang, GuideCopy> = {
  es: {
    kicker: "Guía gratuita 2026",
    title: "Cómo invertir en República Dominicana",
    subtitle:
      "La guía legal que preparamos para inversionistas extranjeros: compra de inmuebles, CONFOTUR, empresas, residencia, costos de cierre y los errores que más dinero cuestan.",
    pages: "12 páginas · PDF · Español, inglés y francés",
    inside: "Qué incluye",
    chapters: [
      "Por qué República Dominicana: cifras de inversión y turismo 2025",
      "Las leyes que protegen al inversionista extranjero",
      "Compra de inmuebles paso a paso, incluida la compra en planos",
      "Impuestos y costos de cierre vigentes en 2026",
      "Cómo aprovechar las exenciones de CONFOTUR",
      "Formas de sociedad y proceso de constitución",
      "Residencia como inversionista, rentista o pensionado",
      "Errores frecuentes y lista de control antes de firmar",
    ],
    forWhoTitle: "Pensada para",
    forWho: [
      "Compradores de vivienda o propiedades vacacionales",
      "Inversionistas en proyectos turísticos o en planos",
      "Emprendedores que quieren abrir una empresa en el país",
      "Jubilados y rentistas que evalúan la residencia",
    ],
    formTitle: "Recibe la guía en tu correo",
    formIntro:
      "Te enviaremos un correo para confirmar tu dirección. Al confirmarla, podrás descargar la guía de inmediato.",
    name: "Nombre",
    email: "Correo electrónico",
    country: "País de residencia",
    interest: "¿Qué te interesa?",
    interestOptions: [
      "Comprar un inmueble",
      "Invertir en un proyecto turístico",
      "Abrir una empresa",
      "Obtener la residencia",
      "Otro",
    ],
    consent:
      "Acepto recibir la guía y comunicaciones ocasionales de Cabinet Legal. Puedo darme de baja en cualquier momento.",
    submit: "Enviar la guía",
    sending: "Enviando...",
    sentTitle: "Revisa tu correo",
    sentText:
      "Te enviamos un mensaje para confirmar tu dirección. Haz clic en el enlace de confirmación y se abrirá la página de descarga. Si no lo ves en unos minutos, revisa la carpeta de correo no deseado.",
    errorInvalid: "Revisa tu nombre, tu correo y la casilla de aceptación.",
    errorGeneric:
      "No pudimos enviar la solicitud en este momento. Inténtalo de nuevo o escríbenos por WhatsApp.",
    privacy: "No compartimos tus datos con terceros.",
    bannerKicker: "Guía gratuita 2026",
    bannerTitle: "Cómo invertir en República Dominicana",
    bannerText:
      "Compra de inmuebles, CONFOTUR, empresas, residencia y costos de cierre, explicados por nuestros abogados en 12 páginas. Disponible en español, inglés y francés.",
    bannerCta: "Descargar la guía",
    dlKicker: "Correo confirmado",
    dlTitle: "Tu guía está lista",
    dlText:
      "Gracias por confirmar tu correo. Descarga la guía y guárdala; el enlace de descarga estará activo durante 30 días.",
    dlButton: "Descargar la guía (PDF)",
    dlOther: "También disponible en:",
    dlNextTitle: "¿Tienes una operación en mente?",
    dlNextText:
      "Cuéntanos qué planeas. Un socio revisará tu caso y te indicará los pasos, los plazos y el costo antes de comenzar.",
    dlConsult: "Solicitar consulta",
    dlWhatsApp: "Escribir por WhatsApp",
    dlInvalidTitle: "Este enlace no es válido o ya venció",
    dlInvalidText:
      "Solicita la guía de nuevo con tu correo y te enviaremos un enlace nuevo.",
    dlInvalidCta: "Solicitar la guía",
    consultHref: "/consulta",
    langNames: { es: "Español", en: "English", fr: "Français" },
    whatsappText: "Hola, descargué la guía para invertir en República Dominicana y me gustaría una consulta.",
  },
  en: {
    kicker: "Free guide 2026",
    title: "How to invest in the Dominican Republic",
    subtitle:
      "The legal guide we prepared for foreign investors: buying property, CONFOTUR, companies, residency, closing costs and the mistakes that cost the most money.",
    pages: "12 pages · PDF · English, Spanish and French",
    inside: "What's inside",
    chapters: [
      "Why the Dominican Republic: 2025 investment and tourism figures",
      "The laws that protect foreign investors",
      "Buying property step by step, including off-plan purchases",
      "Taxes and closing costs in force in 2026",
      "How to benefit from CONFOTUR exemptions",
      "Company types and the incorporation process",
      "Residency as an investor, rentier or retiree",
      "Common mistakes and a checklist before you sign",
    ],
    forWhoTitle: "Written for",
    forWho: [
      "Buyers of homes or vacation properties",
      "Investors in tourism or off-plan projects",
      "Entrepreneurs setting up a company in the country",
      "Retirees and rentiers considering residency",
    ],
    formTitle: "Get the guide by email",
    formIntro:
      "We will send you an email to confirm your address. Once you confirm it, you can download the guide right away.",
    name: "Name",
    email: "Email",
    country: "Country of residence",
    interest: "What are you interested in?",
    interestOptions: [
      "Buying property",
      "Investing in a tourism project",
      "Setting up a company",
      "Getting residency",
      "Other",
    ],
    consent:
      "I agree to receive the guide and occasional updates from Cabinet Legal. I can unsubscribe at any time.",
    submit: "Send me the guide",
    sending: "Sending...",
    sentTitle: "Check your inbox",
    sentText:
      "We sent you a message to confirm your address. Click the confirmation link and the download page will open. If you don't see it within a few minutes, check your spam folder.",
    errorInvalid: "Please check your name, email and the consent box.",
    errorGeneric:
      "We couldn't send your request right now. Please try again or message us on WhatsApp.",
    privacy: "We never share your details with third parties.",
    bannerKicker: "Free guide 2026",
    bannerTitle: "How to invest in the Dominican Republic",
    bannerText:
      "Buying property, CONFOTUR, companies, residency and closing costs, explained by our lawyers in 12 pages. Available in English, Spanish and French.",
    bannerCta: "Download the guide",
    dlKicker: "Email confirmed",
    dlTitle: "Your guide is ready",
    dlText:
      "Thank you for confirming your email. Download the guide and keep it; this download link stays active for 30 days.",
    dlButton: "Download the guide (PDF)",
    dlOther: "Also available in:",
    dlNextTitle: "Do you have a transaction in mind?",
    dlNextText:
      "Tell us what you are planning. A partner will review your case and explain the steps, timeline and cost before we begin.",
    dlConsult: "Request a consultation",
    dlWhatsApp: "Message us on WhatsApp",
    dlInvalidTitle: "This link is not valid or has expired",
    dlInvalidText: "Request the guide again with your email and we will send you a new link.",
    dlInvalidCta: "Request the guide",
    consultHref: "/en/consulta",
    langNames: { es: "Español", en: "English", fr: "Français" },
    whatsappText: "Hello, I downloaded the guide to investing in the Dominican Republic and would like a consultation.",
  },
  fr: {
    kicker: "Guide gratuit 2026",
    title: "Comment investir en République dominicaine",
    subtitle:
      "Le guide juridique que nous avons préparé pour les investisseurs étrangers : achat immobilier, CONFOTUR, sociétés, résidence, frais de clôture et les erreurs qui coûtent le plus cher.",
    pages: "12 pages · PDF · Français, anglais et espagnol",
    inside: "Au sommaire",
    chapters: [
      "Pourquoi la République dominicaine : chiffres 2025 de l'investissement et du tourisme",
      "Les lois qui protègent l'investisseur étranger",
      "Acheter un bien étape par étape, y compris sur plan",
      "Impôts et frais de clôture en vigueur en 2026",
      "Comment profiter des exonérations CONFOTUR",
      "Formes de société et démarches de constitution",
      "Résidence d'investisseur, de rentier ou de retraité",
      "Erreurs fréquentes et liste de contrôle avant de signer",
    ],
    forWhoTitle: "Conçu pour",
    forWho: [
      "Les acheteurs de résidences principales ou secondaires",
      "Les investisseurs dans des projets touristiques ou sur plan",
      "Les entrepreneurs qui créent une société dans le pays",
      "Les retraités et rentiers qui envisagent la résidence",
    ],
    formTitle: "Recevez le guide par courriel",
    formIntro:
      "Nous vous enverrons un courriel pour confirmer votre adresse. Une fois confirmée, vous pourrez télécharger le guide immédiatement.",
    name: "Nom",
    email: "Courriel",
    country: "Pays de résidence",
    interest: "Qu'est-ce qui vous intéresse ?",
    interestOptions: [
      "Acheter un bien",
      "Investir dans un projet touristique",
      "Créer une société",
      "Obtenir la résidence",
      "Autre",
    ],
    consent:
      "J'accepte de recevoir le guide et des communications occasionnelles de Cabinet Legal. Je peux me désinscrire à tout moment.",
    submit: "Recevoir le guide",
    sending: "Envoi...",
    sentTitle: "Consultez votre boîte de réception",
    sentText:
      "Nous vous avons envoyé un message pour confirmer votre adresse. Cliquez sur le lien de confirmation et la page de téléchargement s'ouvrira. Si vous ne le voyez pas d'ici quelques minutes, vérifiez vos courriers indésirables.",
    errorInvalid: "Vérifiez votre nom, votre courriel et la case de consentement.",
    errorGeneric:
      "Nous n'avons pas pu envoyer votre demande pour le moment. Réessayez ou écrivez-nous sur WhatsApp.",
    privacy: "Nous ne partageons jamais vos données avec des tiers.",
    bannerKicker: "Guide gratuit 2026",
    bannerTitle: "Comment investir en République dominicaine",
    bannerText:
      "Achat immobilier, CONFOTUR, sociétés, résidence et frais de clôture, expliqués par nos avocats en 12 pages. Disponible en français, anglais et espagnol.",
    bannerCta: "Télécharger le guide",
    dlKicker: "Courriel confirmé",
    dlTitle: "Votre guide est prêt",
    dlText:
      "Merci d'avoir confirmé votre courriel. Téléchargez le guide et conservez-le ; ce lien reste actif pendant 30 jours.",
    dlButton: "Télécharger le guide (PDF)",
    dlOther: "Également disponible en :",
    dlNextTitle: "Vous avez un projet en tête ?",
    dlNextText:
      "Dites-nous ce que vous envisagez. Un associé examinera votre dossier et vous indiquera les étapes, les délais et le coût avant de commencer.",
    dlConsult: "Demander une consultation",
    dlWhatsApp: "Nous écrire sur WhatsApp",
    dlInvalidTitle: "Ce lien n'est pas valide ou a expiré",
    dlInvalidText: "Demandez à nouveau le guide avec votre courriel et nous vous enverrons un nouveau lien.",
    dlInvalidCta: "Demander le guide",
    consultHref: "/fr/consulta",
    langNames: { es: "Español", en: "English", fr: "Français" },
    whatsappText: "Bonjour, j'ai téléchargé le guide pour investir en République dominicaine et je souhaiterais une consultation.",
  },
};
