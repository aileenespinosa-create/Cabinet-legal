import type { Lang } from "./services";

export const CAREERS_COPY: Record<
  Lang,
  {
    metaTitle: string;
    metaDesc: string;
    kicker: string;
    title: string;
    intro: string;
    reasons: [string, string][];
    profilesTitle: string;
    profiles: [string, string][];
    noOpening: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    profile: string;
    area: string;
    linkedin: string;
    cv: string;
    cvHint: string;
    cvChoose: string;
    why: string;
    consent: string;
    privacyLabel: string;
    privacyHref: string;
    submit: string;
    sending: string;
    sentTitle: string;
    sentText: string;
    errInvalid: string;
    errFile: string;
    errGeneric: string;
  }
> = {
  es: {
    metaTitle: "Únete a Cabinet Legal: empleo para abogados y pasantes",
    metaDesc: "Trabaja en Cabinet Legal, firma de abogados en Santo Domingo. Buscamos abogados asociados, pasantes de Derecho y personal paralegal. Envía tu CV.",
    kicker: "Únete a Cabinet Legal",
    title: "Construye tu carrera junto a los socios, no a distancia de ellos.",
    intro: "Buscamos abogados, estudiantes de Derecho y profesionales que quieran trabajar en asuntos de alto impacto, con clientes de varios países y en tres idiomas.",
    reasons: [
      ["Mentoría directa", "Trabajas cada asunto con un socio, que revisa tu trabajo y te da criterio real."],
      ["Asuntos de alto impacto", "Operaciones inmobiliarias, corporativas y litigios que exigen rigor técnico."],
      ["Clientes internacionales", "Inversionistas de América del Norte y Europa, atendidos en español, inglés y francés."],
      ["Crecimiento por área", "Doce áreas de práctica para especializarte donde está tu vocación."],
    ],
    profilesTitle: "Perfiles que buscamos",
    profiles: [
      ["Abogados asociados", "Con exequátur y experiencia en alguna de nuestras áreas."],
      ["Pasantes de Derecho", "Estudiantes de los últimos años con ganas de aprender en la práctica."],
      ["Equipo administrativo y paralegal", "Gestión de expedientes, trámites y atención al cliente."],
    ],
    noOpening: "¿No ves una vacante abierta? Envíanos tu CV igualmente; lo tendremos en cuenta para futuras posiciones.",
    formTitle: "Envía tu candidatura",
    name: "Nombre completo",
    email: "Correo electrónico",
    phone: "Teléfono",
    profile: "Perfil",
    area: "Área de interés",
    linkedin: "LinkedIn (opcional)",
    cv: "Currículum (PDF, máximo 4 MB)",
    cvHint: "Arrastra tu CV aquí o",
    cvChoose: "selecciona un archivo",
    why: "¿Por qué quieres unirte? (breve)",
    consent: "Autorizo a Cabinet Legal a tratar mis datos para este proceso de selección, conforme a su",
    privacyLabel: "política de privacidad",
    privacyHref: "/privacidad",
    submit: "Enviar candidatura",
    sending: "Enviando...",
    sentTitle: "Recibimos tu candidatura",
    sentText: "Gracias por tu interés en Cabinet Legal. Revisaremos tu perfil y te contactaremos si encaja con una posición abierta o futura.",
    errInvalid: "Revisa tu nombre, tu correo, el CV y la casilla de autorización.",
    errFile: "El CV debe ser un PDF de 4 MB como máximo.",
    errGeneric: "No pudimos enviar tu candidatura en este momento. Inténtalo de nuevo o escríbenos a info@cabinetlegal.com.do.",
  },
  en: {
    metaTitle: "Careers at Cabinet Legal: jobs for lawyers and interns",
    metaDesc: "Work at Cabinet Legal, a law firm in Santo Domingo. We are looking for associate lawyers, law interns and paralegal staff. Send your CV.",
    kicker: "Careers at Cabinet Legal",
    title: "Build your career alongside the partners, not at a distance from them.",
    intro: "We are looking for lawyers, law students and professionals who want to work on high-impact matters, with clients from several countries and in three languages.",
    reasons: [
      ["Direct mentoring", "You work every matter with a partner who reviews your work and sharpens your judgment."],
      ["High-impact matters", "Real estate, corporate and litigation work that demands technical rigor."],
      ["International clients", "Investors from North America and Europe, served in Spanish, English and French."],
      ["Growth by practice area", "Twelve practice areas to specialize where your interests lie."],
    ],
    profilesTitle: "Who we are looking for",
    profiles: [
      ["Associate lawyers", "Admitted to practice, with experience in one of our areas."],
      ["Law interns", "Students in their final years, eager to learn in practice."],
      ["Administrative and paralegal staff", "File management, filings and client service."],
    ],
    noOpening: "Don't see an open position? Send us your CV anyway and we will consider it for future openings.",
    formTitle: "Send your application",
    name: "Full name",
    email: "Email",
    phone: "Phone",
    profile: "Profile",
    area: "Area of interest",
    linkedin: "LinkedIn (optional)",
    cv: "CV (PDF, 4 MB max.)",
    cvHint: "Drag your CV here or",
    cvChoose: "choose a file",
    why: "Why do you want to join? (short)",
    consent: "I authorize Cabinet Legal to process my data for this recruitment process, in accordance with its",
    privacyLabel: "privacy policy",
    privacyHref: "/en/privacidad",
    submit: "Send application",
    sending: "Sending...",
    sentTitle: "We received your application",
    sentText: "Thank you for your interest in Cabinet Legal. We will review your profile and contact you if it matches a current or future position.",
    errInvalid: "Please check your name, email, CV and the authorization box.",
    errFile: "Your CV must be a PDF of 4 MB or less.",
    errGeneric: "We couldn't send your application right now. Please try again or write to info@cabinetlegal.com.do.",
  },
  fr: {
    metaTitle: "Carrières chez Cabinet Legal : avocats et stagiaires",
    metaDesc: "Rejoignez Cabinet Legal, cabinet d'avocats à Saint-Domingue. Nous recherchons des avocats collaborateurs, des stagiaires en droit et du personnel juridique. Envoyez votre CV.",
    kicker: "Carrières chez Cabinet Legal",
    title: "Construisez votre carrière aux côtés des associés, pas à distance.",
    intro: "Nous recherchons des avocats, des étudiants en droit et des professionnels désireux de travailler sur des dossiers à fort enjeu, avec des clients de plusieurs pays et en trois langues.",
    reasons: [
      ["Mentorat direct", "Vous travaillez chaque dossier avec un associé qui relit votre travail et forge votre jugement."],
      ["Dossiers à fort enjeu", "Immobilier, droit des sociétés et contentieux exigeant une grande rigueur."],
      ["Clientèle internationale", "Des investisseurs d'Amérique du Nord et d'Europe, en espagnol, anglais et français."],
      ["Évolution par domaine", "Douze domaines d'expertise pour vous spécialiser selon votre vocation."],
    ],
    profilesTitle: "Profils recherchés",
    profiles: [
      ["Avocats collaborateurs", "Inscrits au barreau, avec une expérience dans l'un de nos domaines."],
      ["Stagiaires en droit", "Étudiants en fin de cursus, désireux d'apprendre sur le terrain."],
      ["Équipe administrative et juridique", "Gestion des dossiers, formalités et relation client."],
    ],
    noOpening: "Aucun poste ouvert ne vous correspond ? Envoyez-nous tout de même votre CV pour de futures opportunités.",
    formTitle: "Envoyez votre candidature",
    name: "Nom complet",
    email: "Courriel",
    phone: "Téléphone",
    profile: "Profil",
    area: "Domaine d'intérêt",
    linkedin: "LinkedIn (facultatif)",
    cv: "CV (PDF, 4 Mo maximum)",
    cvHint: "Déposez votre CV ici ou",
    cvChoose: "choisissez un fichier",
    why: "Pourquoi souhaitez-vous nous rejoindre ? (bref)",
    consent: "J'autorise Cabinet Legal à traiter mes données pour ce recrutement, conformément à sa",
    privacyLabel: "politique de confidentialité",
    privacyHref: "/fr/privacidad",
    submit: "Envoyer ma candidature",
    sending: "Envoi...",
    sentTitle: "Nous avons bien reçu votre candidature",
    sentText: "Merci de votre intérêt pour Cabinet Legal. Nous étudierons votre profil et vous contacterons s'il correspond à un poste actuel ou futur.",
    errInvalid: "Vérifiez votre nom, votre courriel, le CV et la case d'autorisation.",
    errFile: "Le CV doit être un PDF de 4 Mo maximum.",
    errGeneric: "Nous n'avons pas pu envoyer votre candidature. Réessayez ou écrivez à info@cabinetlegal.com.do.",
  },
};
