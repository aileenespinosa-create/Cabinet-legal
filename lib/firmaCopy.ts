import type { Lang } from "@/lib/services";

type Card = { title: string; text: string };

export type FirmaCopy = {
  metaTitle: string;
  metaDesc: string;
  eyebrow: string;
  h1: string;
  sub: string;
  photoAlt: string;
  promiseKicker: string;
  promise: [string, string, string];
  promiseText: string;
  about: string[];
  stats: [string, string][];
  whoKicker: string;
  whoTitle: string;
  who: (Card & { href: string; link: string })[];
  areasKicker: string;
  areasTitle: string;
  areasIntro: string;
  allAreas: string;
  howKicker: string;
  howTitle: string;
  how: Card[];
  principlesKicker: string;
  principlesTitle: string;
  principles: Card[];
  partnersKicker: string;
  partnersTitle: string;
  partners: { name: string; role: string; focus: string; img: string }[];
  partnersLink: string;
  officeKicker: string;
  officeTitle: string;
  officeText: string;
  address: string;
  mapLabel: string;
  byAppointment: string;
  faqKicker: string;
  faqTitle: string;
  faq: { q: string; a: string }[];
  ctaTitle: string;
  ctaText: string;
  ctaPrimary: string;
  ctaSecondary: string;
};

export const FIRMA_COPY: Record<Lang, FirmaCopy> = {
  es: {
    metaTitle: "Firma de abogados en Santo Domingo, República Dominicana",
    metaDesc:
      "Cabinet Legal, firma de abogados en Santo Domingo desde 2009. Un socio dirige cada asunto: personas, familias, empresas e inversionistas extranjeros, en español, inglés y francés.",
    eyebrow: "Cabinet Legal",
    h1: "Firma de abogados en Santo Domingo",
    sub: "Rigor jurídico, discreción absoluta y un socio que responde por su asunto hasta el último detalle.",
    photoAlt: "Oficina de Cabinet Legal, abogados en Santo Domingo, con el nombre de la firma en la pared",
    promiseKicker: "Nuestra promesa",
    promise: [
      "Pensamos como su socio de negocios.",
      "Actuamos como su defensa más firme.",
      "Y le atendemos como si fuera nuestro único cliente.",
    ],
    promiseText:
      "Cada asunto recibe un trato personalizado: lo dirige un socio que conoce su caso, le habla con claridad y no suelta el expediente hasta cerrarlo. Así protegemos lo que usted ha construido, en República Dominicana y desde cualquier lugar del mundo.",
    about: [
      "Cabinet Legal es una firma legal independiente con sede en Santo Domingo. Asesoramos a personas, familias, empresas e inversionistas en compras de inmuebles, estructuración societaria, fusiones y adquisiciones, derecho tributario, planificación sucesoral, registro de marcas, residencia y litigios.",
      "Buena parte de nuestros clientes vive fuera del país. Por eso organizamos el trabajo para que puedan comprar, invertir o litigar en República Dominicana sin trasladarse: poderes apostillados, firmas coordinadas a distancia y reportes periódicos en su idioma.",
      "El equipo está organizado por área de práctica y lo dirigen nuestros socios, Aileen Espinosa y Ellis Beato. El socio responsable asume el asunto desde la primera consulta hasta el cierre, y lo ejecuta el abogado especializado en la materia.",
    ],
    stats: [
      ["2009", "Año de fundación"],
      ["12", "Áreas de práctica especializadas"],
      ["3", "Idiomas de atención: español, inglés y francés"],
      ["24 h", "Respuesta de un socio, en días hábiles"],
    ],
    whoKicker: "A quién servimos",
    whoTitle: "Asesoría para cada etapa de su vida y de su negocio",
    who: [
      { title: "Personas y familias", text: "Compra y venta de inmuebles, contratos, sucesiones, particiones, testamentos y defensa de sus derechos ante los tribunales.", href: "/servicios", link: "Ver servicios" },
      { title: "Empresas", text: "Constitución y gobierno de sociedades, contratos comerciales, cumplimiento tributario, permisos, cobros y litigios empresariales.", href: "/servicios/derecho-corporativo", link: "Derecho corporativo" },
      { title: "Inversionistas extranjeros", text: "Debida diligencia inmobiliaria, estructuras para invertir, incentivos como CONFOTUR y residencia por inversión, sin necesidad de viajar.", href: "/inversion-extranjera", link: "Inversión extranjera" },
      { title: "Dominicanos en el exterior", text: "Gestionamos por poder sus propiedades, herencias y trámites en el país, con información clara y a tiempo sobre cada paso.", href: "/consulta", link: "Solicitar consulta" },
    ],
    areasKicker: "Áreas de práctica",
    areasTitle: "Doce áreas, organizadas en tres grandes frentes",
    areasIntro: "Cada área la atiende un abogado especializado, bajo la dirección de un socio.",
    allAreas: "Ver todas las áreas",
    howKicker: "Cómo trabajamos",
    howTitle: "Un método claro, de la primera llamada al cierre",
    how: [
      { title: "Consulta con un socio", text: "Escuchamos su objetivo, revisamos los documentos disponibles y le explicamos sus opciones con franqueza." },
      { title: "Propuesta por escrito", text: "Le entregamos el alcance del trabajo, los plazos estimados y los honorarios antes de iniciar. Sin sorpresas." },
      { title: "Ejecución", text: "El abogado especializado prepara y presenta cada actuación; el socio revisa y firma. Usted recibe reportes periódicos." },
      { title: "Cierre y seguimiento", text: "Damos seguimiento ante ONAPI, Migración, la DGII, el Registro de Títulos o el tribunal hasta obtener el resultado." },
    ],
    principlesKicker: "Nuestros compromisos",
    principlesTitle: "Lo que puede exigirnos",
    principles: [
      { title: "Secreto profesional", text: "La información que nos confía queda protegida por el secreto profesional del abogado y por una estricta política de confidencialidad." },
      { title: "Honorarios transparentes", text: "Acordamos por escrito el alcance y el costo del servicio. Si el asunto cambia, lo conversamos antes de continuar." },
      { title: "Independencia", text: "Verificamos conflictos de interés antes de aceptar cada encargo y actuamos únicamente en defensa de su interés." },
      { title: "Verificación técnica", text: "En operaciones inmobiliarias trabajamos junto a Land Consulting DR en la revisión técnica y registral de cada propiedad." },
    ],
    partnersKicker: "Socios",
    partnersTitle: "Quienes responden por su asunto",
    partners: [
      { name: "Aileen Espinosa", role: "Socia directora", focus: "Derecho corporativo, estructuración de negocios, marcas y propiedad intelectual.", img: "/aileen.jpg" },
      { name: "Ellis Beato", role: "Socio fundador", focus: "Negocios, litigación y resolución de conflictos, hasta la Suprema Corte de Justicia y el Tribunal Constitucional.", img: "/ellis-beato.jpg" },
    ],
    partnersLink: "Conocer al equipo",
    officeKicker: "Oficina",
    officeTitle: "En el corazón de Santo Domingo",
    officeText: "Le recibimos con cita previa en nuestra oficina de La Esperilla. Si reside en el exterior, las reuniones se realizan por videollamada.",
    address: "Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla, Santo Domingo",
    mapLabel: "Ver en Google Maps",
    byAppointment: "Atención con cita previa",
    faqKicker: "Preguntas frecuentes",
    faqTitle: "Antes de contratarnos",
    faq: [
      { q: "¿Atienden a personas físicas o solo a empresas?", a: "Atendemos a personas, familias, empresas e inversionistas. Muchos de nuestros asuntos son de particulares: compras de inmuebles, herencias, contratos y litigios." },
      { q: "¿Puedo contratar sus servicios si vivo fuera del país?", a: "Sí. La mayoría de los trámites puede realizarse mediante un poder apostillado. Coordinamos las firmas a distancia y le informamos cada avance en español, inglés o francés." },
      { q: "¿Cómo se fijan los honorarios?", a: "Después de la consulta le enviamos una propuesta por escrito con el alcance, los plazos y los honorarios. Nada se inicia sin su aprobación." },
      { q: "¿Quién lleva mi caso?", a: "Un socio dirige su asunto de principio a fin, con el apoyo del abogado especializado en la materia. Usted sabe siempre con quién hablar." },
    ],
    ctaTitle: "Hablemos de su caso",
    ctaText: "Un socio evaluará su situación y le indicará la vía legal más adecuada para usted, su familia, su empresa o su inversión.",
    ctaPrimary: "Solicitar consulta",
    ctaSecondary: "Conocer al equipo",
  },

  en: {
    metaTitle: "Law Firm in Santo Domingo, Dominican Republic",
    metaDesc:
      "Cabinet Legal, a law firm in Santo Domingo since 2009. A partner leads every matter for individuals, families, companies and foreign investors, in English, Spanish and French.",
    eyebrow: "Cabinet Legal",
    h1: "A law firm in Santo Domingo",
    sub: "Legal rigor, absolute discretion and a partner accountable for your matter down to the last detail.",
    photoAlt: "Cabinet Legal office in Santo Domingo, with the firm's name on the wall",
    promiseKicker: "Our promise",
    promise: [
      "We think like your business partner.",
      "We act as your firmest defense.",
      "And we treat you as if you were our only client.",
    ],
    promiseText:
      "Every matter receives personal attention: it is led by a partner who knows your case, speaks to you plainly and stays with the file until it is closed. That is how we protect what you have built, in the Dominican Republic and from anywhere in the world.",
    about: [
      "Cabinet Legal is an independent law firm based in Santo Domingo. We advise individuals, families, companies and investors on property purchases, corporate structuring, mergers and acquisitions, tax law, estate planning, trademark registration, residency and litigation.",
      "Many of our clients live abroad. We organize our work so they can buy, invest or litigate in the Dominican Republic without traveling: apostilled powers of attorney, remotely coordinated signings and regular reports in their language.",
      "Our team is organized by practice area and led by our partners, Aileen Espinosa and Ellis Beato. The responsible partner takes on the matter from the first consultation to closing, and it is carried out by the lawyer who specializes in that field.",
    ],
    stats: [
      ["2009", "Year founded"],
      ["12", "Specialized practice areas"],
      ["3", "Languages: English, Spanish and French"],
      ["24 h", "A partner replies, on business days"],
    ],
    whoKicker: "Who we serve",
    whoTitle: "Counsel for every stage of your life and your business",
    who: [
      { title: "Individuals and families", text: "Buying and selling property, contracts, estates, partitions, wills and the defense of your rights in court.", href: "/en/servicios", link: "View services" },
      { title: "Companies", text: "Incorporation and governance, commercial contracts, tax compliance, permits, collections and business litigation.", href: "/en/servicios/corporate-law", link: "Corporate law" },
      { title: "Foreign investors", text: "Real estate due diligence, investment structures, incentives such as CONFOTUR and residency by investment, without having to travel.", href: "/en/inversion-extranjera", link: "Foreign investment" },
      { title: "Dominicans living abroad", text: "We manage your property, inheritances and procedures in the country under a power of attorney, with clear and timely updates on every step.", href: "/en/consulta", link: "Request a consultation" },
    ],
    areasKicker: "Practice areas",
    areasTitle: "Twelve areas, organized in three fronts",
    areasIntro: "Each area is handled by a specialized lawyer, under a partner's direction.",
    allAreas: "View all areas",
    howKicker: "How we work",
    howTitle: "A clear method, from the first call to closing",
    how: [
      { title: "Consultation with a partner", text: "We listen to your goal, review the documents available and explain your options candidly." },
      { title: "Written proposal", text: "You receive the scope of work, estimated timelines and fees before we begin. No surprises." },
      { title: "Execution", text: "The specialized lawyer prepares and files each step; the partner reviews and signs. You receive regular reports." },
      { title: "Closing and follow-up", text: "We follow up before ONAPI, Migration, the tax authority, the Title Registry or the court until the result is obtained." },
    ],
    principlesKicker: "Our commitments",
    principlesTitle: "What you can expect from us",
    principles: [
      { title: "Professional secrecy", text: "What you share with us is protected by attorney professional secrecy and a strict confidentiality policy." },
      { title: "Transparent fees", text: "We agree on the scope and cost of the service in writing. If the matter changes, we discuss it before going further." },
      { title: "Independence", text: "We check for conflicts of interest before accepting each engagement and act solely in your interest." },
      { title: "Technical verification", text: "In property transactions we work with Land Consulting DR on the technical and registry review of every property." },
    ],
    partnersKicker: "Partners",
    partnersTitle: "The people accountable for your matter",
    partners: [
      { name: "Aileen Espinosa", role: "Managing partner", focus: "Corporate law, business structuring, trademarks and intellectual property.", img: "/aileen.jpg" },
      { name: "Ellis Beato", role: "Founding partner", focus: "Business, litigation and dispute resolution, up to the Supreme Court and the Constitutional Court.", img: "/ellis-beato.jpg" },
    ],
    partnersLink: "Meet the team",
    officeKicker: "Office",
    officeTitle: "In the heart of Santo Domingo",
    officeText: "We welcome you by appointment at our office in La Esperilla. If you live abroad, meetings take place by video call.",
    address: "Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla, Santo Domingo",
    mapLabel: "View on Google Maps",
    byAppointment: "By appointment only",
    faqKicker: "Frequently asked questions",
    faqTitle: "Before you hire us",
    faq: [
      { q: "Do you work with individuals or only with companies?", a: "We work with individuals, families, companies and investors. Many of our matters come from private clients: property purchases, inheritances, contracts and litigation." },
      { q: "Can I hire you if I live outside the Dominican Republic?", a: "Yes. Most procedures can be completed through an apostilled power of attorney. We coordinate signings remotely and report every step in English, Spanish or French." },
      { q: "How are fees set?", a: "After the consultation we send you a written proposal with the scope, timelines and fees. Nothing starts without your approval." },
      { q: "Who handles my case?", a: "A partner leads your matter from start to finish, supported by the lawyer who specializes in the field. You always know whom to call." },
    ],
    ctaTitle: "Let's talk about your case",
    ctaText: "A partner will assess your situation and recommend the most suitable legal route for you, your family, your company or your investment.",
    ctaPrimary: "Request a consultation",
    ctaSecondary: "Meet the team",
  },

  fr: {
    metaTitle: "Cabinet d'avocats à Saint-Domingue, République dominicaine",
    metaDesc:
      "Cabinet Legal, cabinet d'avocats à Saint-Domingue depuis 2009. Un associé dirige chaque dossier pour particuliers, familles, entreprises et investisseurs étrangers, en français, anglais et espagnol.",
    eyebrow: "Cabinet Legal",
    h1: "Cabinet d'avocats à Saint-Domingue",
    sub: "Rigueur juridique, discrétion absolue et un associé qui répond de votre dossier jusqu'au moindre détail.",
    photoAlt: "Bureaux de Cabinet Legal à Saint-Domingue, avec le nom du cabinet au mur",
    promiseKicker: "Notre engagement",
    promise: [
      "Nous pensons comme votre associé.",
      "Nous agissons comme votre défense la plus ferme.",
      "Et nous vous accompagnons comme notre seul client.",
    ],
    promiseText:
      "Chaque dossier bénéficie d'une attention personnelle : il est dirigé par un associé qui connaît votre situation, vous parle clairement et suit le dossier jusqu'à sa clôture. C'est ainsi que nous protégeons ce que vous avez bâti, en République dominicaine et partout dans le monde.",
    about: [
      "Cabinet Legal est un cabinet d'avocats indépendant établi à Saint-Domingue. Nous conseillons particuliers, familles, entreprises et investisseurs en acquisitions immobilières, structuration de sociétés, fusions et acquisitions, droit fiscal, planification successorale, dépôt de marques, résidence et contentieux.",
      "Une grande partie de nos clients vit à l'étranger. Nous organisons notre travail pour qu'ils puissent acheter, investir ou plaider en République dominicaine sans se déplacer : procurations apostillées, signatures coordonnées à distance et comptes rendus réguliers dans leur langue.",
      "Notre équipe est organisée par domaine d'expertise et dirigée par nos associés, Aileen Espinosa et Ellis Beato. L'associé responsable prend en charge le dossier de la première consultation jusqu'à la clôture, et l'avocat spécialisé dans la matière l'exécute.",
    ],
    stats: [
      ["2009", "Année de fondation"],
      ["12", "Domaines d'expertise"],
      ["3", "Langues : français, anglais et espagnol"],
      ["24 h", "Réponse d'un associé, jours ouvrables"],
    ],
    whoKicker: "Nos clients",
    whoTitle: "Un conseil pour chaque étape de votre vie et de vos affaires",
    who: [
      { title: "Particuliers et familles", text: "Achat et vente de biens immobiliers, contrats, successions, partages, testaments et défense de vos droits devant les tribunaux.", href: "/fr/servicios", link: "Voir les services" },
      { title: "Entreprises", text: "Constitution et gouvernance de sociétés, contrats commerciaux, conformité fiscale, permis, recouvrement et contentieux des affaires.", href: "/fr/servicios/droit-des-societes", link: "Droit des sociétés" },
      { title: "Investisseurs étrangers", text: "Audit immobilier, structures d'investissement, incitations comme CONFOTUR et résidence par investissement, sans avoir à voyager.", href: "/fr/inversion-extranjera", link: "Investissement étranger" },
      { title: "Dominicains de l'étranger", text: "Nous gérons par procuration vos biens, successions et démarches dans le pays, avec une information claire et rapide à chaque étape.", href: "/fr/consulta", link: "Demander une consultation" },
    ],
    areasKicker: "Domaines d'expertise",
    areasTitle: "Douze domaines, organisés en trois pôles",
    areasIntro: "Chaque domaine est confié à un avocat spécialisé, sous la direction d'un associé.",
    allAreas: "Voir tous les domaines",
    howKicker: "Notre méthode",
    howTitle: "Une méthode claire, du premier appel à la clôture",
    how: [
      { title: "Consultation avec un associé", text: "Nous écoutons votre objectif, examinons les documents disponibles et vous présentons vos options en toute franchise." },
      { title: "Proposition écrite", text: "Vous recevez le périmètre de la mission, les délais estimés et les honoraires avant tout commencement. Aucune surprise." },
      { title: "Exécution", text: "L'avocat spécialisé prépare et dépose chaque acte ; l'associé le relit et le signe. Vous recevez des comptes rendus réguliers." },
      { title: "Clôture et suivi", text: "Nous assurons le suivi auprès de l'ONAPI, de la Migration, de l'administration fiscale, du Registre des titres ou du tribunal jusqu'au résultat." },
    ],
    principlesKicker: "Nos engagements",
    principlesTitle: "Ce que vous pouvez exiger de nous",
    principles: [
      { title: "Secret professionnel", text: "Les informations que vous nous confiez sont protégées par le secret professionnel de l'avocat et une politique de confidentialité stricte." },
      { title: "Honoraires transparents", text: "Le périmètre et le coût de la mission sont convenus par écrit. Si le dossier évolue, nous en parlons avant d'aller plus loin." },
      { title: "Indépendance", text: "Nous vérifions l'absence de conflit d'intérêts avant d'accepter chaque mission et agissons uniquement dans votre intérêt." },
      { title: "Vérification technique", text: "Pour les opérations immobilières, nous travaillons avec Land Consulting DR à l'examen technique et foncier de chaque bien." },
    ],
    partnersKicker: "Associés",
    partnersTitle: "Ceux qui répondent de votre dossier",
    partners: [
      { name: "Aileen Espinosa", role: "Associée gérante", focus: "Droit des sociétés, structuration d'affaires, marques et propriété intellectuelle.", img: "/aileen.jpg" },
      { name: "Ellis Beato", role: "Associé fondateur", focus: "Affaires, contentieux et résolution des litiges, jusqu'à la Cour suprême et au Tribunal constitutionnel.", img: "/ellis-beato.jpg" },
    ],
    partnersLink: "Découvrir l'équipe",
    officeKicker: "Bureaux",
    officeTitle: "Au cœur de Saint-Domingue",
    officeText: "Nous vous recevons sur rendez-vous dans nos bureaux de La Esperilla. Si vous résidez à l'étranger, les réunions ont lieu par visioconférence.",
    address: "Av. Pedro Henríquez Ureña n° 138, Torre Empresarial Reyna II, Suite 203, La Esperilla, Saint-Domingue",
    mapLabel: "Voir sur Google Maps",
    byAppointment: "Sur rendez-vous",
    faqKicker: "Questions fréquentes",
    faqTitle: "Avant de nous confier votre dossier",
    faq: [
      { q: "Conseillez-vous les particuliers ou seulement les entreprises ?", a: "Nous conseillons particuliers, familles, entreprises et investisseurs. Une grande partie de nos dossiers concerne des particuliers : achats immobiliers, successions, contrats et contentieux." },
      { q: "Puis-je vous consulter si je vis hors de la République dominicaine ?", a: "Oui. La plupart des démarches peuvent se faire par procuration apostillée. Nous coordonnons les signatures à distance et vous informons de chaque étape en français, anglais ou espagnol." },
      { q: "Comment les honoraires sont-ils fixés ?", a: "Après la consultation, nous vous adressons une proposition écrite précisant le périmètre, les délais et les honoraires. Rien ne commence sans votre accord." },
      { q: "Qui suit mon dossier ?", a: "Un associé dirige votre dossier du début à la fin, avec l'appui de l'avocat spécialisé dans la matière. Vous savez toujours à qui vous adresser." },
    ],
    ctaTitle: "Parlons de votre dossier",
    ctaText: "Un associé examinera votre situation et vous indiquera la voie juridique la plus adaptée pour vous, votre famille, votre entreprise ou votre investissement.",
    ctaPrimary: "Demander une consultation",
    ctaSecondary: "Découvrir l'équipe",
  },
};
