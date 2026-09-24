export type Lang = "es" | "en" | "fr";
export type PillarId = "ni" | "pp" | "ld";

export type ServiceText = {
  title: string;
  promise: string;
  what: string;
  steps: [string, string, string];
  items: [string, string, string, string];
  proof: [string, string, string];
};

export type Service = {
  id: string;
  pillar: PillarId;
  img: "/hero-legal.jpg" | "/blog-legal.jpg";
  // Custom page per language; when absent the generic /servicios/[slug] page is used.
  custom?: Partial<Record<Lang, string>>;
  slug: Record<Lang, string>;
  text: Record<Lang, ServiceText>;
};

export const PILLARS: Record<PillarId, Record<Lang, string>> = {
  ni: { es: "Negocios e inversión", en: "Business and investment", fr: "Affaires et investissement" },
  pp: { es: "Patrimonio y personas", en: "Wealth and individuals", fr: "Patrimoine et personnes" },
  ld: { es: "Litigación y defensa", en: "Litigation and defense", fr: "Contentieux et défense" },
};

export const SERVICES: Service[] = [
  {
    id: "corporativo",
    pillar: "ni",
    img: "/hero-legal.jpg",
    slug: { es: "derecho-corporativo", en: "corporate-law", fr: "droit-des-societes" },
    text: {
      es: {
        title: "Derecho corporativo y societario",
        promise: "Una empresa bien estructurada hoy evita el conflicto entre socios de mañana.",
        what: "Diseñamos la estructura societaria que responde a tu negocio real: quién decide, cómo entra y sale un socio, cómo se protege el patrimonio de cada uno. Luego la mantenemos al día para que tu empresa crezca sin contingencias.",
        steps: ["Diagnóstico de tu negocio y tus socios", "Estructura, estatutos y pactos a la medida", "Acompañamiento corporativo continuo"],
        items: ["Constitución de sociedades (SRL, SA, SAS)", "Pactos de socios y gobierno corporativo", "Contratos comerciales", "Cumplimiento y registros"],
        proof: ["Pactos de socios a la medida", "Asambleas y actas al día", "Atención en 3 idiomas"],
      },
      en: {
        title: "Corporate and company law",
        promise: "A well-structured company today prevents the partner dispute of tomorrow.",
        what: "We design the corporate structure your business actually needs: who decides, how partners come in and leave, how each partner's assets are protected. Then we keep it up to date so your company grows without surprises.",
        steps: ["Review of your business and your partners", "Tailored structure, bylaws and agreements", "Ongoing corporate support"],
        items: ["Company formation (SRL, SA, SAS)", "Shareholder agreements and governance", "Commercial contracts", "Compliance and filings"],
        proof: ["Tailored shareholder agreements", "Meetings and minutes kept current", "Service in 3 languages"],
      },
      fr: {
        title: "Droit des sociétés",
        promise: "Une société bien structurée aujourd'hui évite le conflit entre associés de demain.",
        what: "Nous concevons la structure sociétaire adaptée à votre activité réelle : qui décide, comment un associé entre et sort, comment le patrimoine de chacun est protégé. Puis nous la tenons à jour pour que votre société se développe sans mauvaise surprise.",
        steps: ["Diagnostic de votre activité et de vos associés", "Structure, statuts et pactes sur mesure", "Accompagnement juridique continu"],
        items: ["Constitution de sociétés (SRL, SA, SAS)", "Pactes d'associés et gouvernance", "Contrats commerciaux", "Conformité et formalités"],
        proof: ["Pactes d'associés sur mesure", "Assemblées et procès-verbaux à jour", "Service en 3 langues"],
      },
    },
  },
  {
    id: "fusiones",
    pillar: "ni",
    img: "/hero-legal.jpg",
    custom: { es: "/fusiones-y-adquisiciones" },
    slug: { es: "fusiones-y-adquisiciones", en: "mergers-and-acquisitions", fr: "fusions-et-acquisitions" },
    text: {
      es: {
        title: "Fusiones y adquisiciones",
        promise: "Compra o vende una empresa sabiendo exactamente qué estás firmando.",
        what: "Revisamos a fondo la empresa objetivo, identificamos los riesgos ocultos y los convertimos en precio, garantías o condiciones del contrato. Negociamos a tu lado hasta el cierre y la integración.",
        steps: ["Due diligence legal completo", "Estructura y negociación de la operación", "Cierre e integración"],
        items: ["Due diligence legal", "Estructuración de la operación", "Contratos de compraventa de acciones", "Integración posterior"],
        proof: ["Informe de riesgos claro y priorizado", "Negociación dirigida por un socio", "Trabajo coordinado con tus asesores"],
      },
      en: {
        title: "Mergers and acquisitions",
        promise: "Buy or sell a company knowing exactly what you are signing.",
        what: "We review the target company in depth, identify hidden risks and turn them into price, warranties or contract conditions. We negotiate at your side through closing and integration.",
        steps: ["Full legal due diligence", "Deal structure and negotiation", "Closing and integration"],
        items: ["Legal due diligence", "Deal structuring", "Share purchase agreements", "Post-closing integration"],
        proof: ["Clear, prioritized risk report", "Partner-led negotiation", "Coordinated with your advisers"],
      },
      fr: {
        title: "Fusions et acquisitions",
        promise: "Achetez ou vendez une entreprise en sachant exactement ce que vous signez.",
        what: "Nous examinons en profondeur la société cible, identifions les risques cachés et les traduisons en prix, garanties ou conditions contractuelles. Nous négocions à vos côtés jusqu'au closing et à l'intégration.",
        steps: ["Audit juridique complet", "Structuration et négociation de l'opération", "Closing et intégration"],
        items: ["Audit juridique (due diligence)", "Structuration de l'opération", "Contrats de cession d'actions", "Intégration post-acquisition"],
        proof: ["Rapport de risques clair et hiérarchisé", "Négociation menée par un associé", "Coordination avec vos conseils"],
      },
    },
  },
  {
    id: "inversion",
    pillar: "ni",
    img: "/hero-legal.jpg",
    custom: { es: "/inversion-extranjera", en: "/en/inversion-extranjera", fr: "/fr/inversion-extranjera" },
    slug: { es: "inversion-extranjera", en: "foreign-investment", fr: "investissement-etranger" },
    text: {
      es: {
        title: "Inversión extranjera e inmobiliario",
        promise: "Tu propiedad en República Dominicana, con título limpio y sin sorpresas.",
        what: "Antes de que pagues, verificamos el título, el deslinde, las cargas y los permisos del proyecto, junto con Land Consulting DR. Redactamos y negociamos el contrato, cerramos ante notario y no soltamos el expediente hasta que el nuevo título está a tu nombre.",
        steps: ["Verificación legal y técnica del inmueble", "Contrato que protege tu dinero", "Cierre, impuestos y nuevo título a tu nombre"],
        items: ["Due diligence de título y deslinde", "Contratos y cierre notarial", "Exenciones CONFOTUR", "Registro de la inversión (Ley 16-95)"],
        proof: ["Todo el proceso por poder, sin viajar", "Exenciones CONFOTUR aplicadas", "Español, inglés y francés"],
      },
      en: {
        title: "Foreign investment and real estate",
        promise: "Your property in the Dominican Republic, with clean title and no surprises.",
        what: "Before you pay, we verify the title, survey, liens and project permits together with Land Consulting DR. We draft and negotiate the contract, close before a notary and stay on the file until the new title is issued in your name.",
        steps: ["Legal and technical review of the property", "A contract that protects your money", "Closing, taxes and new title in your name"],
        items: ["Title and survey due diligence", "Contracts and notarial closing", "CONFOTUR exemptions", "Investment registration (Law 16-95)"],
        proof: ["Whole process by power of attorney", "CONFOTUR exemptions applied", "English, Spanish and French"],
      },
      fr: {
        title: "Investissement étranger et immobilier",
        promise: "Votre bien en République dominicaine, avec un titre sain et sans surprise.",
        what: "Avant tout paiement, nous vérifions le titre, le bornage, les charges et les permis du projet avec Land Consulting DR. Nous rédigeons et négocions le contrat, signons devant notaire et suivons le dossier jusqu'à la délivrance du nouveau titre à votre nom.",
        steps: ["Vérification juridique et technique du bien", "Un contrat qui protège votre argent", "Signature, impôts et nouveau titre à votre nom"],
        items: ["Vérification du titre et du bornage", "Contrats et signature notariale", "Exonérations CONFOTUR", "Enregistrement de l'investissement (loi 16-95)"],
        proof: ["Tout le processus par procuration", "Exonérations CONFOTUR appliquées", "Français, anglais et espagnol"],
      },
    },
  },
  {
    id: "energia",
    pillar: "ni",
    img: "/hero-legal.jpg",
    slug: { es: "energia-e-infraestructura", en: "energy-and-infrastructure", fr: "energie-et-infrastructures" },
    text: {
      es: {
        title: "Energía e infraestructura",
        promise: "Tu proyecto energético, con las autorizaciones y contratos que lo hacen financiable.",
        what: "Acompañamos proyectos de generación, en especial renovables, desde la concesión hasta la operación. Estructuramos los contratos de compraventa de energía y el cumplimiento regulatorio que exigen los bancos y los inversionistas.",
        steps: ["Mapa regulatorio y de autorizaciones", "Concesiones y contratos del proyecto", "Cumplimiento durante la operación"],
        items: ["Proyectos de energía renovable", "Concesiones y autorizaciones", "Contratos de compraventa de energía", "Regulación del sector eléctrico"],
        proof: ["Visión regulatoria y contractual", "Coordinación con permisología", "Enfoque en financiamiento"],
      },
      en: {
        title: "Energy and infrastructure",
        promise: "Your energy project, with the permits and contracts that make it bankable.",
        what: "We support generation projects, especially renewables, from concession to operation. We structure power purchase agreements and the regulatory compliance that lenders and investors require.",
        steps: ["Regulatory and permitting map", "Concessions and project contracts", "Compliance during operation"],
        items: ["Renewable energy projects", "Concessions and authorizations", "Power purchase agreements", "Electricity sector regulation"],
        proof: ["Regulatory and contractual view", "Coordinated with permitting", "Focused on financing"],
      },
      fr: {
        title: "Énergie et infrastructures",
        promise: "Votre projet énergétique, avec les autorisations et contrats qui le rendent finançable.",
        what: "Nous accompagnons les projets de production, en particulier renouvelables, de la concession à l'exploitation. Nous structurons les contrats d'achat d'électricité et la conformité réglementaire exigés par les banques et les investisseurs.",
        steps: ["Cartographie réglementaire et des autorisations", "Concessions et contrats du projet", "Conformité pendant l'exploitation"],
        items: ["Projets d'énergie renouvelable", "Concessions et autorisations", "Contrats d'achat d'électricité", "Réglementation du secteur électrique"],
        proof: ["Vision réglementaire et contractuelle", "Coordination avec les permis", "Orienté financement"],
      },
    },
  },
  {
    id: "permisologia",
    pillar: "ni",
    img: "/hero-legal.jpg",
    slug: { es: "permisologia-y-licencias", en: "permits-and-licenses", fr: "permis-et-licences" },
    text: {
      es: {
        title: "Permisología y licencias",
        promise: "Tu proyecto no se detiene por un permiso mal presentado.",
        what: "Identificamos cada permiso y licencia que tu proyecto necesita, preparamos los expedientes completos y damos seguimiento en cada institución hasta obtener la aprobación. Tú te enfocas en construir y operar.",
        steps: ["Mapa de permisos por institución", "Expedientes completos desde el primer depósito", "Seguimiento hasta la aprobación"],
        items: ["Permisos ambientales", "Licencias de construcción y uso de suelo", "Licencias sectoriales", "Renovaciones y cumplimiento"],
        proof: ["Un solo responsable para todos los trámites", "Reportes de avance periódicos", "Menos rechazos y reprocesos"],
      },
      en: {
        title: "Permits and licenses",
        promise: "Your project never stalls because of a badly filed permit.",
        what: "We identify every permit and license your project needs, prepare complete applications and follow up with each agency until approval. You focus on building and operating.",
        steps: ["Permit map by agency", "Complete filings from day one", "Follow-up until approval"],
        items: ["Environmental permits", "Building and land-use licenses", "Sector licenses", "Renewals and compliance"],
        proof: ["One point of contact for every filing", "Regular progress reports", "Fewer rejections and resubmissions"],
      },
      fr: {
        title: "Permis et licences",
        promise: "Votre projet ne s'arrête jamais pour un permis mal déposé.",
        what: "Nous identifions chaque permis et licence nécessaires à votre projet, préparons des dossiers complets et assurons le suivi auprès de chaque institution jusqu'à l'approbation. Vous vous concentrez sur la construction et l'exploitation.",
        steps: ["Cartographie des permis par institution", "Dossiers complets dès le premier dépôt", "Suivi jusqu'à l'approbation"],
        items: ["Permis environnementaux", "Permis de construire et d'usage des sols", "Licences sectorielles", "Renouvellements et conformité"],
        proof: ["Un seul interlocuteur pour toutes les démarches", "Rapports d'avancement réguliers", "Moins de refus et de reprises"],
      },
    },
  },
  {
    id: "patrimonial",
    pillar: "pp",
    img: "/blog-legal.jpg",
    slug: { es: "planificacion-patrimonial-y-sucesoral", en: "estate-planning-and-succession", fr: "planification-patrimoniale-et-successorale" },
    text: {
      es: {
        title: "Planificación patrimonial y sucesoral",
        promise: "Lo que construiste, protegido y en manos de los tuyos, sin conflictos.",
        what: "Diseñamos cómo se protege y se transmite tu patrimonio: testamentos, fideicomisos y estructuras que evitan disputas familiares. Cuando la sucesión ya está abierta, la resolvemos por la vía amigable siempre que es posible y por la judicial cuando hace falta.",
        steps: ["Inventario del patrimonio y de los herederos", "Plan sucesoral o partición a la medida", "Ejecución y registro de cada bien"],
        items: ["Testamentos y planificación", "Determinación de herederos", "Particiones amigables y judiciales", "Fideicomisos y protección patrimonial"],
        proof: ["Enfoque en acuerdos familiares", "Bienes en el país y en el exterior", "Discreción absoluta"],
      },
      en: {
        title: "Estate planning and succession",
        promise: "What you built, protected and in your family's hands, without conflict.",
        what: "We design how your wealth is protected and passed on: wills, trusts and structures that prevent family disputes. When an estate is already open, we settle it amicably whenever possible and in court when necessary.",
        steps: ["Inventory of assets and heirs", "Tailored estate plan or partition", "Execution and registration of each asset"],
        items: ["Wills and planning", "Determination of heirs", "Amicable and judicial partitions", "Trusts and asset protection"],
        proof: ["Focus on family agreements", "Assets in the country and abroad", "Complete discretion"],
      },
      fr: {
        title: "Planification patrimoniale et successorale",
        promise: "Ce que vous avez construit, protégé et transmis aux vôtres, sans conflit.",
        what: "Nous organisons la protection et la transmission de votre patrimoine : testaments, fiducies et structures qui évitent les litiges familiaux. Lorsque la succession est déjà ouverte, nous la réglons à l'amiable chaque fois que possible, et en justice si nécessaire.",
        steps: ["Inventaire du patrimoine et des héritiers", "Plan successoral ou partage sur mesure", "Exécution et inscription de chaque bien"],
        items: ["Testaments et planification", "Détermination des héritiers", "Partages amiables et judiciaires", "Fiducies et protection du patrimoine"],
        proof: ["Priorité aux accords familiaux", "Biens dans le pays et à l'étranger", "Discrétion absolue"],
      },
    },
  },
  {
    id: "residencia",
    pillar: "pp",
    img: "/blog-legal.jpg",
    custom: { es: "/residencia-y-permisos-de-trabajo" },
    slug: { es: "residencia-y-permisos-de-trabajo", en: "residency-and-immigration", fr: "residence-et-immigration" },
    text: {
      es: {
        title: "Residencia y migración",
        promise: "Vive e invierte en República Dominicana con tu estatus en regla.",
        what: "Elegimos contigo la vía de residencia que mejor encaja con tu perfil, preparamos cada documento, apostilla y traducción, y te acompañamos en Migración hasta recibir tu carnet. También gestionamos renovaciones y permisos de trabajo.",
        steps: ["Elección de la vía de residencia", "Expediente completo y apostillado", "Acompañamiento hasta el carnet"],
        items: ["Residencia por inversión", "Rentistas y pensionados", "Permisos de trabajo", "Renovaciones y ciudadanía"],
        proof: ["Inversionista, rentista o pensionado", "Calendario de renovaciones", "Familias incluidas"],
      },
      en: {
        title: "Residency and immigration",
        promise: "Live and invest in the Dominican Republic with your status in order.",
        what: "We choose with you the residency route that best fits your profile, prepare every document, apostille and translation, and accompany you at Migration until you receive your card. We also handle renewals and work permits.",
        steps: ["Choosing the residency route", "Complete, apostilled file", "Support until you get your card"],
        items: ["Residency by investment", "Rentiers and retirees", "Work permits", "Renewals and citizenship"],
        proof: ["Investor, rentier or retiree", "Renewal calendar", "Families included"],
      },
      fr: {
        title: "Résidence et immigration",
        promise: "Vivez et investissez en République dominicaine avec un statut en règle.",
        what: "Nous choisissons avec vous la voie de résidence la plus adaptée à votre profil, préparons chaque document, apostille et traduction, et vous accompagnons aux Migrations jusqu'à la remise de votre carte. Nous gérons aussi les renouvellements et permis de travail.",
        steps: ["Choix de la voie de résidence", "Dossier complet et apostillé", "Accompagnement jusqu'à la carte"],
        items: ["Résidence par investissement", "Rentiers et retraités", "Permis de travail", "Renouvellements et nationalité"],
        proof: ["Investisseur, rentier ou retraité", "Calendrier des renouvellements", "Familles incluses"],
      },
    },
  },
  {
    id: "marcas",
    pillar: "pp",
    img: "/blog-legal.jpg",
    custom: { es: "/registro-de-marcas" },
    slug: { es: "registro-de-marcas", en: "trademarks-and-ip", fr: "marques-et-propriete-intellectuelle" },
    text: {
      es: {
        title: "Propiedad intelectual y marcas",
        promise: "Tu marca es tuya. Nos aseguramos de que nadie más pueda usarla.",
        what: "Antes de registrar, investigamos si tu marca es viable para evitar rechazos y oposiciones. La registramos ante ONAPI, la vigilamos y la defendemos cuando alguien intenta copiarla.",
        steps: ["Búsqueda y estrategia de registro", "Solicitud y seguimiento ante ONAPI", "Vigilancia y defensa"],
        items: ["Búsqueda y registro ante ONAPI", "Oposiciones y defensa", "Nombres comerciales", "Derechos de autor y licencias"],
        proof: ["Análisis de viabilidad previo", "Seguimiento hasta el certificado", "Defensa ante copias"],
      },
      en: {
        title: "Intellectual property and trademarks",
        promise: "Your brand is yours. We make sure no one else can use it.",
        what: "Before filing, we check whether your mark is registrable to avoid refusals and oppositions. We register it with ONAPI, monitor it and defend it when someone tries to copy it.",
        steps: ["Search and filing strategy", "Application and follow-up with ONAPI", "Monitoring and enforcement"],
        items: ["Search and registration with ONAPI", "Oppositions and enforcement", "Trade names", "Copyright and licensing"],
        proof: ["Prior registrability analysis", "Follow-up until the certificate", "Action against copycats"],
      },
      fr: {
        title: "Propriété intellectuelle et marques",
        promise: "Votre marque vous appartient. Nous veillons à ce que personne d'autre ne l'utilise.",
        what: "Avant le dépôt, nous vérifions la disponibilité de votre marque pour éviter refus et oppositions. Nous l'enregistrons auprès de l'ONAPI, la surveillons et la défendons contre toute imitation.",
        steps: ["Recherche et stratégie de dépôt", "Dépôt et suivi auprès de l'ONAPI", "Surveillance et défense"],
        items: ["Recherche et dépôt auprès de l'ONAPI", "Oppositions et défense", "Noms commerciaux", "Droits d'auteur et licences"],
        proof: ["Analyse préalable de disponibilité", "Suivi jusqu'au certificat", "Action contre les imitations"],
      },
    },
  },
  {
    id: "litigacion",
    pillar: "ld",
    img: "/blog-legal.jpg",
    slug: { es: "litigacion-y-defensa-judicial", en: "litigation", fr: "contentieux" },
    text: {
      es: {
        title: "Litigación y defensa judicial",
        promise: "Cuando negociar no basta, una estrategia procesal que defiende tus intereses.",
        what: "Analizamos tu caso con rigor, te decimos con franqueza tus opciones y diseñamos la estrategia procesal más eficaz. Te representamos en todas las instancias, desde el primer grado hasta la Suprema Corte y el Tribunal Constitucional, residas en el país o en el extranjero.",
        steps: ["Evaluación franca del caso", "Estrategia procesal y medidas urgentes", "Representación en todas las instancias"],
        items: ["Litigios civiles y comerciales", "Litigios inmobiliarios", "Laboral y administrativo", "Recursos ante las altas cortes"],
        proof: ["Dirigido por el socio de litigios", "Civil, comercial, inmobiliario y laboral", "Clientes nacionales y extranjeros"],
      },
      en: {
        title: "Litigation and court representation",
        promise: "When negotiation is not enough, a litigation strategy that defends your interests.",
        what: "We analyze your case rigorously, tell you candidly what your options are and design the most effective litigation strategy. We represent you at every level, from first instance to the Supreme Court and the Constitutional Court, whether you live in the country or abroad.",
        steps: ["Candid case assessment", "Litigation strategy and urgent measures", "Representation at every level"],
        items: ["Civil and commercial litigation", "Real estate litigation", "Employment and administrative", "Appeals before the high courts"],
        proof: ["Led by the litigation partner", "Civil, commercial, real estate, employment", "Local and foreign clients"],
      },
      fr: {
        title: "Contentieux et représentation judiciaire",
        promise: "Quand la négociation ne suffit pas, une stratégie contentieuse qui défend vos intérêts.",
        what: "Nous analysons votre dossier avec rigueur, vous exposons franchement vos options et concevons la stratégie contentieuse la plus efficace. Nous vous représentons à tous les degrés, jusqu'à la Cour suprême et au Tribunal constitutionnel, que vous résidiez dans le pays ou à l'étranger.",
        steps: ["Évaluation franche du dossier", "Stratégie contentieuse et mesures urgentes", "Représentation à tous les degrés"],
        items: ["Contentieux civil et commercial", "Contentieux immobilier", "Travail et administratif", "Recours devant les hautes juridictions"],
        proof: ["Dirigé par l'associé contentieux", "Civil, commercial, immobilier, travail", "Clients locaux et étrangers"],
      },
    },
  },
  {
    id: "cobros",
    pillar: "ld",
    img: "/blog-legal.jpg",
    slug: { es: "cobro-y-recuperacion-de-creditos", en: "debt-collection", fr: "recouvrement-de-creances" },
    text: {
      es: {
        title: "Cobro y recuperación de créditos",
        promise: "Lo que te deben, reclamado con firmeza y por la vía más rápida.",
        what: "Evaluamos la deuda y las garantías, intentamos primero un cobro amigable y, si no funciona, pasamos a la vía compulsiva: embargos, ejecución de hipotecas y, cuando corresponde, la acción penal por cheques sin fondos o estafa.",
        steps: ["Evaluación de la deuda y los bienes del deudor", "Cobro amigable con plazo definido", "Embargos y ejecución de garantías"],
        items: ["Cobro amigable y compulsivo", "Embargos y medidas conservatorias", "Ejecución de hipotecas y garantías", "Recuperación de inversiones"],
        proof: ["Medidas conservatorias tempranas", "Coordinación con derecho penal", "Reportes de avance claros"],
      },
      en: {
        title: "Debt collection and credit recovery",
        promise: "What you are owed, pursued firmly and by the fastest route.",
        what: "We assess the debt and any collateral, try amicable collection first and, if that fails, move to enforcement: attachments, mortgage foreclosure and, where appropriate, criminal action for bounced checks or fraud.",
        steps: ["Assessment of the debt and the debtor's assets", "Amicable collection with a set deadline", "Attachments and enforcement of collateral"],
        items: ["Amicable and court-ordered collection", "Attachments and protective measures", "Foreclosure of mortgages and guarantees", "Recovery of investments"],
        proof: ["Early protective measures", "Coordinated with criminal law", "Clear progress reports"],
      },
      fr: {
        title: "Recouvrement de créances",
        promise: "Ce qui vous est dû, réclamé avec fermeté et par la voie la plus rapide.",
        what: "Nous évaluons la créance et les garanties, tentons d'abord un recouvrement amiable puis, si nécessaire, passons à l'exécution forcée : saisies, réalisation d'hypothèques et, le cas échéant, action pénale pour chèques sans provision ou escroquerie.",
        steps: ["Évaluation de la créance et des biens du débiteur", "Recouvrement amiable avec délai fixé", "Saisies et réalisation des garanties"],
        items: ["Recouvrement amiable et judiciaire", "Saisies et mesures conservatoires", "Réalisation d'hypothèques et garanties", "Récupération d'investissements"],
        proof: ["Mesures conservatoires rapides", "Coordination avec le pénal", "Rapports d'avancement clairs"],
      },
    },
  },
  {
    id: "penal",
    pillar: "ld",
    img: "/blog-legal.jpg",
    slug: { es: "derecho-penal", en: "criminal-law", fr: "droit-penal" },
    text: {
      es: {
        title: "Derecho penal",
        promise: "Una defensa técnica y firme cuando tu libertad o tu patrimonio están en juego.",
        what: "Si fuiste víctima de una estafa, un abuso de confianza o cheques sin fondos, presentamos la querella y la sostenemos hasta el final. Si enfrentas una acusación, organizamos tu defensa desde la primera actuación, con estricta confidencialidad.",
        steps: ["Evaluación confidencial del caso", "Querella o estrategia de defensa", "Representación en cada audiencia"],
        items: ["Querellas por estafa y abuso de confianza", "Cheques sin fondos", "Defensa de imputados", "Delitos económicos"],
        proof: ["Énfasis en delitos económicos", "Confidencialidad total", "Disponibilidad en momentos urgentes"],
      },
      en: {
        title: "Criminal law and defense",
        promise: "A firm, technical defense when your freedom or your assets are at stake.",
        what: "If you were the victim of fraud, breach of trust or bounced checks, we file the criminal complaint and pursue it to the end. If you face charges, we organize your defense from the very first step, in strict confidence.",
        steps: ["Confidential case assessment", "Criminal complaint or defense strategy", "Representation at every hearing"],
        items: ["Complaints for fraud and breach of trust", "Bounced checks", "Defense of accused persons", "White-collar crime"],
        proof: ["Focus on economic crime", "Complete confidentiality", "Available when it is urgent"],
      },
      fr: {
        title: "Droit pénal",
        promise: "Une défense technique et ferme lorsque votre liberté ou votre patrimoine sont en jeu.",
        what: "Si vous êtes victime d'escroquerie, d'abus de confiance ou de chèques sans provision, nous déposons la plainte et la soutenons jusqu'au bout. Si vous êtes mis en cause, nous organisons votre défense dès le premier acte, en toute confidentialité.",
        steps: ["Évaluation confidentielle du dossier", "Plainte ou stratégie de défense", "Représentation à chaque audience"],
        items: ["Plaintes pour escroquerie et abus de confiance", "Chèques sans provision", "Défense des personnes mises en cause", "Délits économiques"],
        proof: ["Spécialisation en délits économiques", "Confidentialité totale", "Disponibles en urgence"],
      },
    },
  },
];

export function serviceHref(s: Service, lang: Lang): string {
  if (s.custom?.[lang]) return s.custom[lang] as string;
  const prefix = lang === "es" ? "" : `/${lang}`;
  return `${prefix}/servicios/${s.slug[lang]}`;
}

export function findService(slug: string, lang: Lang): Service | undefined {
  return SERVICES.find((s) => s.slug[lang] === slug);
}

export const CONSULT_HREF: Record<Lang, string> = { es: "/consulta", en: "/en/consulta", fr: "/fr/consulta" };
