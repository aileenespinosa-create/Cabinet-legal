import type { Lang } from "./services";

// Search-engine copy and FAQs for each practice area page.
// h2 fills the left column of the page with the area's main keyword.
export type ServiceSeo = {
  seoTitle: string;
  description: string;
  h2: string;
  faq: [string, string][];
};

export const SERVICES_SEO: Record<string, Partial<Record<Lang, ServiceSeo>>> = {
  corporativo: {
    es: {
      seoTitle: "Abogado corporativo en República Dominicana",
      description:
        "Abogado corporativo en Santo Domingo: constitución de sociedades SRL, SA y SAS, pactos de socios, asambleas y contratos comerciales en República Dominicana.",
      h2: "Abogados corporativos en Santo Domingo",
      faq: [
        [
          "¿Qué tipo de sociedad le conviene constituir en República Dominicana?",
          "Depende del número de socios, del capital y de sus planes de inversión. La sociedad de responsabilidad limitada (SRL) es la más usada para empresas de 2 a 50 socios; la sociedad anónima (SA) y la sociedad anónima simplificada (SAS) se ajustan mejor a proyectos que prevén inversionistas o mayor capital. Todas se rigen por la Ley 479-08 de Sociedades Comerciales.",
        ],
        [
          "¿Un extranjero puede ser socio de una empresa dominicana?",
          "Sí. La Ley 16-95 sobre Inversión Extranjera otorga al inversionista extranjero el mismo trato que al nacional, y ser socio o accionista no exige residencia. La constitución puede hacerse por poder, sin viajar al país.",
        ],
        [
          "¿Qué incluye el mantenimiento corporativo de una sociedad?",
          "Celebrar las asambleas ordinarias, aprobar los estados financieros, renovar el Registro Mercantil, inscribir los cambios de socios, gerentes o capital y conservar las actas y los registros en regla. Así la empresa puede operar, financiarse o venderse sin contingencias.",
        ],
      ],
    },
    en: {
      seoTitle: "Corporate Lawyer in the Dominican Republic",
      description:
        "Dominican Republic corporate lawyer in Santo Domingo: forming SRL, SA and SAS companies, shareholder agreements, corporate meetings and commercial contracts.",
      h2: "Corporate lawyers in Santo Domingo",
      faq: [
        [
          "What type of company should you form in the Dominican Republic?",
          "It depends on the number of partners, the capital and your investment plans. The limited liability company (SRL) is the most common choice for businesses with 2 to 50 partners; the corporation (SA) and the simplified corporation (SAS) are better suited to projects that expect investors or larger capital. All are governed by Law 479-08 on Commercial Companies.",
        ],
        [
          "Can a foreigner be a shareholder in a Dominican company?",
          "Yes. Foreign Investment Law 16-95 grants foreign investors the same treatment as Dominican nationals, and being a partner or shareholder does not require residency. The company can be formed through a power of attorney, without traveling to the country.",
        ],
        [
          "What does corporate maintenance involve?",
          "Holding the ordinary shareholders' meetings, approving the financial statements, renewing the Commercial Registry, recording changes of partners, managers or capital, and keeping minutes and records in order. That way the company can operate, obtain financing or be sold without contingencies.",
        ],
      ],
    },
    fr: {
      seoTitle: "Avocat d'affaires en République dominicaine",
      description:
        "Avocat d'affaires à Saint-Domingue : constitution de sociétés SRL, SA et SAS, pactes d'associés, assemblées et contrats commerciaux en République dominicaine.",
      h2: "Avocats d'affaires à Saint-Domingue",
      faq: [
        [
          "Quel type de société constituer en République dominicaine ?",
          "Cela dépend du nombre d'associés, du capital et de vos projets d'investissement. La société à responsabilité limitée (SRL) est la plus utilisée pour les entreprises de 2 à 50 associés ; la société anonyme (SA) et la société anonyme simplifiée (SAS) conviennent mieux aux projets qui prévoient l'entrée d'investisseurs ou un capital plus important. Toutes sont régies par la loi 479-08 sur les sociétés commerciales.",
        ],
        [
          "Un étranger peut-il être associé d'une société dominicaine ?",
          "Oui. La loi 16-95 sur l'investissement étranger accorde à l'investisseur étranger le même traitement qu'à l'investisseur national, et la qualité d'associé ou d'actionnaire n'exige pas la résidence. La constitution peut se faire par procuration, sans vous déplacer dans le pays.",
        ],
        [
          "Que comprend le suivi juridique d'une société ?",
          "Tenir les assemblées ordinaires, approuver les états financiers, renouveler l'inscription au Registre du commerce, inscrire les changements d'associés, de gérants ou de capital et tenir à jour les procès-verbaux et les registres. L'entreprise peut ainsi fonctionner, se financer ou être cédée sans aléas.",
        ],
      ],
    },
  },
  tributario: {
    es: {
      seoTitle: "Abogado tributario en República Dominicana",
      description:
        "Abogado tributario en Santo Domingo: planificación fiscal, impuestos inmobiliarios, CONFOTUR, fiscalizaciones y recursos ante la DGII y el Tribunal Superior Administrativo.",
      h2: "Abogados tributarios ante la DGII",
      faq: [
        [
          "¿Qué debe hacer si la DGII le notifica una fiscalización o un ajuste?",
          "No deje correr los plazos. Contra la determinación de la DGII puede interponerse el recurso de reconsideración ante la propia administración y, luego, el recurso contencioso tributario ante el Tribunal Superior Administrativo. Los plazos son breves, por lo que conviene que un abogado revise el expediente en cuanto recibe la notificación.",
        ],
        [
          "¿Qué impuestos se pagan al comprar un inmueble en República Dominicana?",
          "El comprador paga el impuesto de transferencia inmobiliaria, del 3 %, calculado sobre el mayor valor entre el precio y la tasación de la DGII. Luego, el inmueble puede quedar sujeto al Impuesto al Patrimonio Inmobiliario (IPI), según su valor y la situación del propietario.",
        ],
        [
          "¿Qué beneficios fiscales ofrece CONFOTUR?",
          "La Ley 158-01 permite que los proyectos turísticos clasificados y sus compradores disfruten de exenciones, entre ellas la del impuesto de transferencia y la del IPI, por el plazo que establezca la resolución de clasificación. Verificamos que el proyecto esté clasificado y que la exención se aplique a su compra.",
        ],
      ],
    },
    en: {
      seoTitle: "Tax Lawyer in the Dominican Republic",
      description:
        "Tax lawyer in the Dominican Republic: tax planning, real estate taxes, CONFOTUR, DGII audits and appeals before the Superior Administrative Court.",
      h2: "Tax lawyers before the DGII",
      faq: [
        [
          "What should you do if the DGII notifies you of an audit or a tax assessment?",
          "Don't let the deadlines run. A DGII assessment can be challenged through a request for reconsideration before the tax administration itself and then through a tax appeal before the Superior Administrative Court (Tribunal Superior Administrativo). Deadlines are short, so it is best to have a lawyer review the file as soon as you receive the notice.",
        ],
        [
          "What taxes are paid when buying property in the Dominican Republic?",
          "The buyer pays a 3% real estate transfer tax, calculated on the higher of the purchase price and the DGII appraisal. Afterwards, the property may be subject to the Real Estate Property Tax (IPI), depending on its value and the owner's situation.",
        ],
        [
          "What tax benefits does CONFOTUR offer?",
          "Law 158-01 allows classified tourism projects and their buyers to benefit from exemptions, including from the transfer tax and the IPI, for the period set in the classification resolution. We verify that the project is classified and that the exemption applies to your purchase.",
        ],
      ],
    },
    fr: {
      seoTitle: "Avocat fiscaliste en République dominicaine",
      description:
        "Avocat fiscaliste à Saint-Domingue : planification fiscale, impôts immobiliers, CONFOTUR, contrôles de la DGII et recours au Tribunal supérieur administratif.",
      h2: "Avocats fiscalistes devant la DGII",
      faq: [
        [
          "Que faire si la DGII vous notifie un contrôle ou un redressement ?",
          "Ne laissez pas courir les délais. La décision de la DGII peut faire l'objet d'un recours en reconsidération devant l'administration elle-même, puis d'un recours contentieux fiscal devant le Tribunal supérieur administratif (Tribunal Superior Administrativo). Les délais sont courts : il est préférable qu'un avocat examine le dossier dès réception de la notification.",
        ],
        [
          "Quels impôts paie-t-on lors de l'achat d'un bien immobilier en République dominicaine ?",
          "L'acheteur paie l'impôt de transfert immobilier de 3 %, calculé sur la valeur la plus élevée entre le prix et l'évaluation de la DGII. Le bien peut ensuite être soumis à l'impôt sur le patrimoine immobilier (IPI), selon sa valeur et la situation du propriétaire.",
        ],
        [
          "Quels avantages fiscaux offre CONFOTUR ?",
          "La loi 158-01 permet aux projets touristiques classés et à leurs acquéreurs de bénéficier d'exonérations, notamment de l'impôt de transfert et de l'IPI, pendant la durée fixée par la résolution de classement. Nous vérifions que le projet est classé et que l'exonération s'applique à votre achat.",
        ],
      ],
    },
  },
  fusiones: {
    es: {
      seoTitle: "Fusiones y adquisiciones en República Dominicana",
      description:
        "Abogados de fusiones y adquisiciones en República Dominicana: debida diligencia, estructuración, negociación y cierre de la compraventa de empresas.",
      h2: "Abogados de fusiones y adquisiciones",
      faq: [
        [
          "¿Qué es la debida diligencia en la compra de una empresa?",
          "Es la revisión legal de la empresa objetivo antes de comprarla: sociedad, contratos, activos, empleados, impuestos, litigios y permisos. Sus hallazgos se traducen en ajustes de precio, garantías del vendedor o condiciones para el cierre.",
        ],
        [
          "¿Conviene comprar las acciones o los activos de la empresa?",
          "Comprar acciones transfiere la empresa con todo su historial, incluidas sus deudas y contingencias; comprar activos permite elegir qué se adquiere, pero exige transferir cada bien y contrato. La elección depende de los riesgos detectados y del impacto fiscal de cada opción.",
        ],
        [
          "¿Qué protege al comprador después del cierre?",
          "Las declaraciones y garantías del vendedor, las cláusulas de indemnización, la retención de una parte del precio y, cuando procede, los pactos de no competencia. Los redactamos a la medida de los riesgos encontrados en la debida diligencia.",
        ],
      ],
    },
    en: {
      seoTitle: "M&A Lawyers in the Dominican Republic",
      description:
        "M&A lawyers in the Dominican Republic: legal due diligence, deal structuring, negotiation and closing of company acquisitions and sales for buyers and sellers.",
      h2: "Mergers and acquisitions lawyers",
      faq: [
        [
          "What is due diligence when buying a company?",
          "It is the legal review of the target company before the purchase: corporate records, contracts, assets, employees, taxes, litigation and permits. The findings translate into price adjustments, seller warranties or conditions to closing.",
        ],
        [
          "Should you buy the company's shares or its assets?",
          "Buying shares transfers the company with its entire history, including its debts and contingencies; buying assets lets you choose what you acquire, but each asset and contract must be transferred individually. The choice depends on the risks identified and the tax impact of each option.",
        ],
        [
          "What protects the buyer after closing?",
          "The seller's representations and warranties, indemnification clauses, holding back part of the purchase price and, where appropriate, non-compete covenants. We draft them to fit the risks identified in the due diligence.",
        ],
      ],
    },
    fr: {
      seoTitle: "Fusions et acquisitions en République dominicaine",
      description:
        "Avocats en fusions et acquisitions en République dominicaine : audit juridique, structuration, négociation et closing de l'achat ou de la vente d'entreprises.",
      h2: "Avocats en fusions et acquisitions",
      faq: [
        [
          "Qu'est-ce que l'audit juridique (due diligence) lors du rachat d'une entreprise ?",
          "C'est l'examen juridique de la société cible avant son acquisition : structure sociale, contrats, actifs, salariés, fiscalité, litiges et autorisations. Ses conclusions se traduisent par des ajustements de prix, des garanties du vendeur ou des conditions préalables au closing.",
        ],
        [
          "Vaut-il mieux acheter les actions ou les actifs de l'entreprise ?",
          "L'achat des actions transfère l'entreprise avec tout son historique, y compris ses dettes et ses risques latents ; l'achat des actifs permet de choisir ce que l'on acquiert, mais impose de transférer chaque bien et chaque contrat. Le choix dépend des risques identifiés et de l'incidence fiscale de chaque option.",
        ],
        [
          "Qu'est-ce qui protège l'acheteur après le closing ?",
          "Les déclarations et garanties du vendeur, les clauses d'indemnisation, la rétention d'une partie du prix et, le cas échéant, les engagements de non-concurrence. Nous les rédigeons en fonction des risques relevés lors de l'audit juridique.",
        ],
      ],
    },
  },
  energia: {
    es: {
      seoTitle: "Abogados de energía renovable en República Dominicana",
      description:
        "Abogados de energía en República Dominicana: concesiones, Ley 57-07 de energía renovable, contratos de compraventa de energía (PPA) y regulación ante la CNE y la SIE.",
      h2: "Abogados de energía e infraestructura",
      faq: [
        [
          "¿Qué autorizaciones necesita un proyecto de generación eléctrica?",
          "Por regla general, una concesión para la explotación de obras eléctricas, tramitada ante la Comisión Nacional de Energía y otorgada por el Poder Ejecutivo; la autorización ambiental del Ministerio de Medio Ambiente y Recursos Naturales; y los permisos municipales y de interconexión. Preparamos el mapa completo de autorizaciones desde el inicio.",
        ],
        [
          "¿Qué incentivos ofrece la Ley 57-07 a la energía renovable?",
          "La Ley 57-07 prevé incentivos fiscales para proyectos de fuentes renovables, entre ellos exenciones de impuestos a la importación de equipos, sujetos a la calificación del proyecto por la Comisión Nacional de Energía. Analizamos qué beneficios aplican a su proyecto y cómo conservarlos.",
        ],
        [
          "¿Qué es un contrato de compraventa de energía (PPA)?",
          "Es el contrato por el cual el generador vende su energía a una distribuidora, a un usuario no regulado o a otro agente del mercado, por un plazo y un precio determinados. Es la pieza que los bancos revisan para financiar el proyecto.",
        ],
      ],
    },
    en: {
      seoTitle: "Renewable Energy Lawyers in the Dominican Republic",
      description:
        "Renewable energy lawyers in the Dominican Republic: concessions, Law 57-07 incentives, power purchase agreements and regulatory matters before the CNE and SIE.",
      h2: "Energy and infrastructure lawyers",
      faq: [
        [
          "What authorizations does a power generation project need?",
          "As a general rule, a concession to operate electricity facilities, processed through the National Energy Commission (Comisión Nacional de Energía) and granted by the Executive Branch; an environmental authorization from the Ministry of Environment and Natural Resources; and municipal and interconnection permits. We map out every authorization required from the start.",
        ],
        [
          "What incentives does Law 57-07 offer for renewable energy?",
          "Law 57-07 provides tax incentives for renewable energy projects, including exemptions from import taxes on equipment, subject to the project's qualification by the National Energy Commission. We analyze which benefits apply to your project and how to preserve them.",
        ],
        [
          "What is a power purchase agreement (PPA)?",
          "It is the contract under which the generator sells its energy to a distribution company, a non-regulated user or another market participant, for a set term and price. It is the document banks review to finance the project.",
        ],
      ],
    },
    fr: {
      seoTitle: "Avocats en énergie renouvelable en République dominicaine",
      description:
        "Avocats en énergie renouvelable en République dominicaine : concessions, loi 57-07, contrats d'achat d'électricité (PPA) et démarches devant la CNE et la SIE.",
      h2: "Avocats en énergie et infrastructures",
      faq: [
        [
          "Quelles autorisations un projet de production d'électricité doit-il obtenir ?",
          "En règle générale, une concession d'exploitation d'ouvrages électriques, instruite par la Commission nationale de l'énergie (Comisión Nacional de Energía) et accordée par le pouvoir exécutif ; l'autorisation environnementale du ministère de l'Environnement et des Ressources naturelles ; ainsi que les permis municipaux et d'interconnexion. Nous établissons dès le départ la cartographie complète des autorisations.",
        ],
        [
          "Quelles incitations la loi 57-07 prévoit-elle pour les énergies renouvelables ?",
          "La loi 57-07 prévoit des incitations fiscales pour les projets utilisant des sources renouvelables, notamment des exonérations des droits d'importation sur les équipements, sous réserve de la qualification du projet par la Commission nationale de l'énergie. Nous analysons les avantages applicables à votre projet et la manière de les conserver.",
        ],
        [
          "Qu'est-ce qu'un contrat d'achat d'électricité (PPA) ?",
          "C'est le contrat par lequel le producteur vend son énergie à une société de distribution, à un usager non réglementé ou à un autre agent du marché, pour une durée et un prix déterminés. C'est la pièce que les banques examinent pour financer le projet.",
        ],
      ],
    },
  },
  permisologia: {
    es: {
      seoTitle: "Permisos y licencias de construcción en República Dominicana",
      description:
        "Permisología en República Dominicana: uso de suelo, licencia de construcción del MIVHED, autorizaciones ambientales y licencias sectoriales, con seguimiento hasta la aprobación.",
      h2: "Gestión de permisos y licencias",
      faq: [
        [
          "¿Qué permisos necesita un proyecto de construcción en República Dominicana?",
          "Por lo general, la certificación de uso de suelo del ayuntamiento, la licencia de construcción del Ministerio de la Vivienda, Hábitat y Edificaciones (MIVHED), la autorización ambiental que corresponda al impacto del proyecto y, según el caso, no objeciones de otras instituciones, como el Ministerio de Turismo.",
        ],
        [
          "¿Cuánto tarda la obtención de los permisos?",
          "Depende del tipo de proyecto, de la categoría ambiental y de las instituciones involucradas. Lo que más retrasa un permiso es un expediente incompleto; por eso depositamos cada solicitud completa desde el primer día y le informamos el avance de forma periódica.",
        ],
        [
          "¿Pueden gestionar los permisos si el inversionista vive en el extranjero?",
          "Sí. Con un poder especial, representamos al inversionista o a su empresa ante cada institución y le mantenemos informado en español, inglés o francés.",
        ],
      ],
    },
    en: {
      seoTitle: "Building Permits in the Dominican Republic",
      description:
        "Building permits in the Dominican Republic: land use approval, MIVHED construction license, environmental authorizations and sector licenses, through approval.",
      h2: "Permits and licensing management",
      faq: [
        [
          "What permits does a construction project need in the Dominican Republic?",
          "Generally, a land use certification from the municipality, a construction license from the Ministry of Housing, Habitat and Buildings (MIVHED), the environmental authorization that matches the project's impact and, depending on the case, no-objection letters from other institutions, such as the Ministry of Tourism.",
        ],
        [
          "How long does it take to obtain the permits?",
          "It depends on the type of project, its environmental category and the institutions involved. What delays a permit most is an incomplete file, so we submit every application complete from day one and keep you regularly informed of its progress.",
        ],
        [
          "Can you handle the permits if the investor lives abroad?",
          "Yes. With a special power of attorney, we represent the investor or its company before each institution and keep the investor informed in English, Spanish or French.",
        ],
      ],
    },
    fr: {
      seoTitle: "Permis de construire en République dominicaine",
      description:
        "Permis de construire en République dominicaine : usage du sol, licence du MIVHED, autorisations environnementales et licences sectorielles, avec suivi complet.",
      h2: "Obtention de permis et de licences",
      faq: [
        [
          "Quels permis un projet de construction exige-t-il en République dominicaine ?",
          "En général, le certificat d'usage du sol délivré par la mairie, la licence de construction du ministère du Logement, de l'Habitat et des Édifications (MIVHED), l'autorisation environnementale correspondant à l'impact du projet et, selon le cas, des avis de non-objection d'autres institutions, comme le ministère du Tourisme.",
        ],
        [
          "Combien de temps faut-il pour obtenir les permis ?",
          "Cela dépend du type de projet, de sa catégorie environnementale et des institutions concernées. Ce qui retarde le plus un permis, c'est un dossier incomplet : c'est pourquoi nous déposons chaque demande complète dès le premier jour et vous informons régulièrement de son avancement.",
        ],
        [
          "Pouvez-vous obtenir les permis si l'investisseur réside à l'étranger ?",
          "Oui. Munis d'une procuration spéciale, nous représentons l'investisseur ou sa société auprès de chaque institution et le tenons informé en français, en anglais ou en espagnol.",
        ],
      ],
    },
  },
  patrimonial: {
    es: {
      seoTitle: "Fideicomiso sucesoral y herencias en República Dominicana",
      description:
        "Planificación patrimonial y sucesoral en República Dominicana: fideicomiso sucesoral (Ley 189-11), fundación panameña, testamentos, determinación de herederos y particiones.",
      h2: "Abogados de sucesiones y planificación patrimonial",
      faq: [
        [
          "¿Puede dejar todos sus bienes a un solo hijo en República Dominicana?",
          "No por completo. El Código Civil reserva a los hijos una parte de la herencia: si deja un hijo, puede disponer libremente de la mitad de sus bienes; si deja dos, de un tercio; y si deja tres o más, de un cuarto. La planificación sucesoral se diseña dentro de ese margen.",
        ],
        [
          "¿Qué es el fideicomiso de planificación sucesoral?",
          "Es la figura de la Ley 189-11 mediante la cual usted transfiere bienes a un fiduciario, que los administra como un patrimonio separado y los entrega a sus beneficiarios en el momento y en las condiciones que usted establezca. Permite ordenar la transmisión en vida y evitar disputas, siempre que se respeten los derechos de los herederos reservatarios.",
        ],
        [
          "¿Qué se hace cuando fallece un familiar con bienes en el país?",
          "Se determinan los herederos, se presenta la declaración sucesoral ante la DGII y se paga el impuesto correspondiente, y luego se transfiere cada bien a nombre de los herederos o se realiza la partición, amigable o judicial. Nos encargamos del proceso completo, incluso si los herederos viven en el extranjero.",
        ],
      ],
    },
    en: {
      seoTitle: "Estate Planning in the Dominican Republic",
      description:
        "Estate planning and inheritance lawyer in the Dominican Republic: succession trusts (Law 189-11), Panamanian foundations, wills, heirship and partitions.",
      h2: "Inheritance and estate planning lawyers",
      faq: [
        [
          "Can you leave all your assets to a single child in the Dominican Republic?",
          "Not entirely. The Civil Code reserves a share of the estate for the children: if you leave one child, you may freely dispose of half of your assets; if two, one third; and if three or more, one quarter. Estate planning is designed within that margin.",
        ],
        [
          "What is a succession planning trust?",
          "It is the structure under Law 189-11 through which you transfer assets to a trustee, who manages them as a separate estate and delivers them to your beneficiaries at the time and under the conditions you set. It lets you organize the transfer during your lifetime and avoid disputes, provided the rights of the forced heirs are respected.",
        ],
        [
          "What happens when a family member with assets in the country passes away?",
          "The heirs are determined, the estate tax return is filed with the DGII and the corresponding tax is paid, and then each asset is transferred to the heirs or the estate is partitioned, amicably or through the courts. We handle the entire process, even if the heirs live abroad.",
        ],
      ],
    },
    fr: {
      seoTitle: "Succession et fiducie en République dominicaine",
      description:
        "Succession en République dominicaine : fiducie successorale (loi 189-11), fondation panaméenne, testaments, détermination des héritiers et partages.",
      h2: "Avocats en successions et patrimoine",
      faq: [
        [
          "Pouvez-vous léguer tous vos biens à un seul enfant en République dominicaine ?",
          "Pas en totalité. Le Code civil réserve aux enfants une part de la succession : si vous laissez un enfant, vous pouvez disposer librement de la moitié de vos biens ; deux enfants, d'un tiers ; trois ou plus, d'un quart. La planification successorale s'organise dans cette marge.",
        ],
        [
          "Qu'est-ce que la fiducie de planification successorale ?",
          "C'est le mécanisme prévu par la loi 189-11 par lequel vous transférez des biens à un fiduciaire, qui les administre comme un patrimoine distinct et les remet à vos bénéficiaires au moment et aux conditions que vous fixez. Elle permet d'organiser la transmission de votre vivant et d'éviter les conflits, dans le respect des droits des héritiers réservataires.",
        ],
        [
          "Que faire au décès d'un proche possédant des biens dans le pays ?",
          "On détermine les héritiers, on dépose la déclaration de succession auprès de la DGII et on acquitte l'impôt correspondant, puis on transfère chaque bien au nom des héritiers ou on procède au partage, amiable ou judiciaire. Nous prenons en charge l'ensemble de la procédure, même si les héritiers résident à l'étranger.",
        ],
      ],
    },
  },
  residencia: {
    es: {
      seoTitle: "Residencia dominicana para extranjeros",
      description:
        "Residencia en República Dominicana para extranjeros: residencia por inversión, rentistas, pensionados y permisos de trabajo ante la Dirección General de Migración.",
      h2: "Abogados de migración y residencia",
      faq: [
        [
          "¿Qué vías de residencia existen para un extranjero?",
          "Las más utilizadas son la residencia por inversión, la de rentista, la de pensionado y la vinculada a un contrato de trabajo o a un familiar dominicano. Cada una tiene requisitos propios de ingresos, documentos y plazos; elegimos con usted la que mejor se ajusta a su perfil.",
        ],
        [
          "¿Debe viajar a República Dominicana para obtener la residencia?",
          "Parte del trámite exige su presencia, como los exámenes médicos y la toma de datos biométricos en la Dirección General de Migración. El resto, incluida la preparación del expediente, lo gestionamos nosotros para reducir al mínimo sus viajes.",
        ],
        [
          "¿Puede incluir a su familia en la solicitud?",
          "Sí. El cónyuge y los hijos dependientes pueden solicitar la residencia junto con el titular, cumpliendo los requisitos de documentación y apostilla de cada uno.",
        ],
      ],
    },
    en: {
      seoTitle: "Dominican Residency Lawyer for Foreigners",
      description:
        "Dominican residency lawyer for foreigners: residency by investment, rentistas and pensioners, plus work permits before the General Directorate of Migration.",
      h2: "Immigration and residency lawyers",
      faq: [
        [
          "What residency options are available to foreigners?",
          "The most common are residency by investment, as a rentista (passive income), as a pensioner, and residency tied to an employment contract or to a Dominican family member. Each has its own income, document and timing requirements; we work with you to choose the one that best fits your profile.",
        ],
        [
          "Do you need to travel to the Dominican Republic to obtain residency?",
          "Part of the process requires your presence, such as the medical exams and the biometric data capture at the General Directorate of Migration (Dirección General de Migración). We handle the rest, including preparing the file, to keep your trips to a minimum.",
        ],
        [
          "Can you include your family in the application?",
          "Yes. Your spouse and dependent children can apply for residency together with the main applicant, provided each of them meets the documentation and apostille requirements.",
        ],
      ],
    },
    fr: {
      seoTitle: "Résidence en République dominicaine pour étrangers",
      description:
        "Résidence en République dominicaine pour étrangers : investissement, rentiers, retraités et permis de travail auprès de la Direction générale des migrations.",
      h2: "Avocats en immigration et résidence",
      faq: [
        [
          "Quelles voies de résidence s'offrent à un étranger ?",
          "Les plus utilisées sont la résidence par investissement, celle de rentier, celle de retraité et celle liée à un contrat de travail ou à un membre de la famille dominicain. Chacune a ses propres exigences de revenus, de documents et de délais ; nous choisissons avec vous celle qui correspond le mieux à votre profil.",
        ],
        [
          "Devez-vous vous rendre en République dominicaine pour obtenir la résidence ?",
          "Une partie de la procédure exige votre présence, comme les examens médicaux et la prise des données biométriques à la Direction générale des migrations (Dirección General de Migración). Nous gérons le reste, y compris la préparation du dossier, afin de limiter au maximum vos déplacements.",
        ],
        [
          "Pouvez-vous inclure votre famille dans la demande ?",
          "Oui. Le conjoint et les enfants à charge peuvent demander la résidence en même temps que le titulaire, à condition que chacun remplisse les exigences de documentation et d'apostille.",
        ],
      ],
    },
  },
  marcas: {
    es: {
      seoTitle: "Registro de marca en República Dominicana",
      description:
        "Registro de marca en República Dominicana ante ONAPI: búsqueda previa, solicitud, oposiciones, renovación y defensa de su marca conforme a la Ley 20-00.",
      h2: "Abogados de marcas y propiedad intelectual",
      faq: [
        [
          "¿Por cuánto tiempo protege el registro de una marca?",
          "El registro ante ONAPI otorga protección por diez años contados desde su concesión y puede renovarse por períodos iguales de manera indefinida.",
        ],
        [
          "¿Qué ocurre si otra persona registró su marca antes que usted?",
          "En República Dominicana el derecho exclusivo nace del registro, por lo que conviene registrar antes de lanzar la marca. Si un tercero la registró de mala fe o existe un conflicto con un derecho anterior, se puede presentar una oposición durante el trámite o una acción de nulidad o cancelación.",
        ],
        [
          "¿Qué es la búsqueda previa y por qué hacerla?",
          "Es la revisión de las marcas ya registradas o solicitadas que podrían impedir la suya. Evita pagar una solicitud que termine rechazada u objetada y permite ajustar el nombre o el diseño a tiempo.",
        ],
      ],
    },
    en: {
      seoTitle: "Trademark Registration in the Dominican Republic",
      description:
        "Trademark registration in the Dominican Republic with ONAPI: clearance search, filing, oppositions, renewals and enforcement of your brand under Law 20-00.",
      h2: "Trademark and intellectual property lawyers",
      faq: [
        [
          "How long does a trademark registration last?",
          "Registration with ONAPI grants protection for ten years from the date it is granted and can be renewed indefinitely for successive periods of the same length.",
        ],
        [
          "What if someone else registered your trademark before you did?",
          "In the Dominican Republic, exclusive rights arise from registration, so it is best to register before launching the brand. If a third party registered it in bad faith or it conflicts with an earlier right, you can file an opposition during the application process or bring an action for invalidity or cancellation.",
        ],
        [
          "What is a clearance search and why do one?",
          "It is a review of trademarks already registered or applied for that could block yours. It avoids paying for an application that ends up refused or opposed and lets you adjust the name or design in time.",
        ],
      ],
    },
    fr: {
      seoTitle: "Dépôt de marque en République dominicaine",
      description:
        "Dépôt de marque en République dominicaine auprès de l'ONAPI : recherche d'antériorités, dépôt, oppositions, renouvellement et défense de la marque (loi 20-00).",
      h2: "Avocats en marques et propriété intellectuelle",
      faq: [
        [
          "Combien de temps dure la protection d'une marque enregistrée ?",
          "L'enregistrement auprès de l'ONAPI confère une protection de dix ans à compter de sa délivrance, renouvelable indéfiniment pour des périodes identiques.",
        ],
        [
          "Que se passe-t-il si un tiers a enregistré votre marque avant vous ?",
          "En République dominicaine, le droit exclusif naît de l'enregistrement : il est donc préférable de déposer avant de lancer la marque. Si un tiers l'a enregistrée de mauvaise foi ou s'il existe un conflit avec un droit antérieur, il est possible de former opposition pendant la procédure ou d'engager une action en nullité ou en radiation.",
        ],
        [
          "Qu'est-ce que la recherche d'antériorités et pourquoi la faire ?",
          "C'est l'examen des marques déjà enregistrées ou déposées qui pourraient faire obstacle à la vôtre. Elle évite de payer un dépôt qui serait finalement rejeté ou contesté et permet d'ajuster à temps le nom ou le logo.",
        ],
      ],
    },
  },
  litigacion: {
    es: {
      seoTitle: "Abogado litigante en Santo Domingo",
      description:
        "Abogados litigantes en Santo Domingo: litigios civiles, comerciales, inmobiliarios y laborales, medidas conservatorias y recursos ante la Suprema Corte y el Tribunal Constitucional.",
      h2: "Abogados litigantes en República Dominicana",
      faq: [
        [
          "¿Puede litigar en República Dominicana si vive en el extranjero?",
          "Sí. Con un poder otorgado ante notario o en el consulado dominicano y debidamente apostillado, le representamos en todas las audiencias y le informamos de cada paso en su idioma.",
        ],
        [
          "¿Qué son las medidas conservatorias?",
          "Son medidas que el juez puede autorizar desde el inicio para proteger su crédito o sus derechos mientras se decide el fondo del caso, como el embargo conservatorio de bienes del deudor o la inscripción de una hipoteca judicial provisional.",
        ],
        [
          "¿Hasta qué instancia puede llegar un caso?",
          "Un proceso puede pasar por el primer grado, la corte de apelación y la Suprema Corte de Justicia en casación. Cuando se vulneran derechos fundamentales, también puede llegar al Tribunal Constitucional. Le representamos en todas esas instancias.",
        ],
      ],
    },
    en: {
      seoTitle: "Litigation Lawyer in Santo Domingo",
      description:
        "Litigation lawyers in Santo Domingo: civil, commercial, real estate and labor disputes, interim measures and appeals to the Supreme and Constitutional Courts.",
      h2: "Trial lawyers in the Dominican Republic",
      faq: [
        [
          "Can you litigate in the Dominican Republic if you live abroad?",
          "Yes. With a power of attorney granted before a notary or at a Dominican consulate and duly apostilled, we represent you at every hearing and keep you informed of each step in your language.",
        ],
        [
          "What are conservatory measures?",
          "They are measures a judge can authorize from the outset to protect your claim or your rights while the merits of the case are decided, such as a conservatory attachment of the debtor's assets or the registration of a provisional judicial mortgage.",
        ],
        [
          "How far can a case go?",
          "A case can go through the court of first instance, the court of appeal and the Supreme Court of Justice (Suprema Corte de Justicia) on cassation. When fundamental rights are violated, it can also reach the Constitutional Court (Tribunal Constitucional). We represent you at every one of those levels.",
        ],
      ],
    },
    fr: {
      seoTitle: "Avocat contentieux à Saint-Domingue",
      description:
        "Avocat contentieux à Saint-Domingue : litiges civils, commerciaux, immobiliers et sociaux, mesures conservatoires et recours jusqu'au Tribunal constitutionnel.",
      h2: "Avocats plaidants en République dominicaine",
      faq: [
        [
          "Pouvez-vous plaider en République dominicaine si vous résidez à l'étranger ?",
          "Oui. Grâce à une procuration établie devant notaire ou au consulat dominicain et dûment apostillée, nous vous représentons à toutes les audiences et vous informons de chaque étape dans votre langue.",
        ],
        [
          "Que sont les mesures conservatoires ?",
          "Ce sont des mesures que le juge peut autoriser dès le début pour protéger votre créance ou vos droits pendant que le fond de l'affaire est tranché, comme la saisie conservatoire des biens du débiteur ou l'inscription d'une hypothèque judiciaire provisoire.",
        ],
        [
          "Jusqu'où une affaire peut-elle aller ?",
          "Une procédure peut passer par le premier degré, la cour d'appel et la Cour suprême de justice (Suprema Corte de Justicia) en cassation. En cas d'atteinte aux droits fondamentaux, elle peut également être portée devant le Tribunal constitutionnel. Nous vous représentons à chacun de ces niveaux.",
        ],
      ],
    },
  },
  cobros: {
    es: {
      seoTitle: "Cobro de deudas en República Dominicana",
      description:
        "Cobro de deudas en República Dominicana: cobro amigable, embargos, ejecución de hipotecas y querellas por cheques sin fondos, con reportes de avance claros.",
      h2: "Abogados de cobros en Santo Domingo",
      faq: [
        [
          "¿Qué necesita para cobrar una deuda por la vía judicial?",
          "Si su crédito consta en un título ejecutorio, como un pagaré notarial, una sentencia o una hipoteca, se puede proceder directamente al embargo ejecutivo. Si no, primero se demanda el cobro y, mientras tanto, se puede pedir al juez autorización para un embargo conservatorio.",
        ],
        [
          "¿Qué puede hacer si le entregaron un cheque sin fondos?",
          "Se notifica al emisor mediante acto de alguacil el protesto del cheque y la comprobación de la falta de fondos. Si no paga en el plazo que establece la ley, se puede presentar una querella penal conforme a la Ley de Cheques, además de reclamar el pago.",
        ],
        [
          "¿Conviene intentar primero un cobro amigable?",
          "Sí, casi siempre. Una intimación formal con un plazo definido resuelve muchos casos sin juicio. Si no hay respuesta, pasamos sin demora a la vía compulsiva, y si existe riesgo de que el deudor oculte sus bienes, solicitamos medidas conservatorias desde el inicio.",
        ],
      ],
    },
    en: {
      seoTitle: "Debt Collection in the Dominican Republic",
      description:
        "Debt collection in the Dominican Republic: amicable collection, attachments, mortgage foreclosures and bad check complaints, with clear progress reports.",
      h2: "Debt collection lawyers in Santo Domingo",
      faq: [
        [
          "What do you need to collect a debt through the courts?",
          "If your claim is backed by an enforceable title, such as a notarized promissory note, a judgment or a mortgage, you can proceed directly to an enforcement attachment. If not, you first sue for payment and, in the meantime, can ask the judge to authorize a conservatory attachment.",
        ],
        [
          "What can you do if you were given a bounced check?",
          "The issuer is served, through a bailiff's act, with the protest of the check and the verification of insufficient funds. If the issuer does not pay within the period set by law, a criminal complaint can be filed under the Checks Law, in addition to claiming payment.",
        ],
        [
          "Should you try amicable collection first?",
          "Yes, almost always. A formal demand with a set deadline resolves many cases without going to court. If there is no response, we move promptly to enforcement, and if there is a risk that the debtor will hide assets, we request conservatory measures from the outset.",
        ],
      ],
    },
    fr: {
      seoTitle: "Recouvrement de créances en République dominicaine",
      description:
        "Recouvrement de créances en République dominicaine : voie amiable, saisies, réalisation d'hypothèques et plaintes pour chèques sans provision, avec suivi clair.",
      h2: "Avocats en recouvrement à Saint-Domingue",
      faq: [
        [
          "De quoi avez-vous besoin pour recouvrer une créance en justice ?",
          "Si votre créance est constatée par un titre exécutoire, comme un billet à ordre notarié, un jugement ou une hypothèque, il est possible de procéder directement à la saisie-exécution. À défaut, il faut d'abord assigner en paiement et, dans l'intervalle, demander au juge l'autorisation de pratiquer une saisie conservatoire.",
        ],
        [
          "Que faire si l'on vous a remis un chèque sans provision ?",
          "On fait signifier à l'émetteur, par acte d'huissier, le protêt du chèque et la constatation du défaut de provision. S'il ne paie pas dans le délai prévu par la loi, une plainte pénale peut être déposée en vertu de la loi sur les chèques, en plus de la demande de paiement.",
        ],
        [
          "Faut-il d'abord tenter un recouvrement amiable ?",
          "Oui, presque toujours. Une mise en demeure formelle assortie d'un délai précis règle de nombreux dossiers sans procès. En l'absence de réponse, nous passons sans tarder au recouvrement forcé et, s'il existe un risque que le débiteur dissimule ses biens, nous sollicitons des mesures conservatoires dès le départ.",
        ],
      ],
    },
  },
  penal: {
    es: {
      seoTitle: "Abogado penalista en Santo Domingo",
      description:
        "Abogado penalista en Santo Domingo: querellas por estafa, abuso de confianza y cheques sin fondos, y defensa de imputados en delitos económicos, con total confidencialidad.",
      h2: "Abogados penalistas en República Dominicana",
      faq: [
        [
          "¿Qué debe hacer si fue víctima de una estafa?",
          "Reúna los documentos, comunicaciones y pagos relacionados y consulte a un abogado cuanto antes. Presentamos la querella ante el Ministerio Público con constitución en actor civil, lo que le permite perseguir la sanción penal y, a la vez, reclamar la devolución de lo perdido y la reparación de los daños.",
        ],
        [
          "¿Cuál es la diferencia entre estafa y abuso de confianza?",
          "En la estafa, la víctima entrega bienes o dinero engañada mediante maniobras fraudulentas. En el abuso de confianza, la víctima entregó el bien de forma legítima, para un fin determinado, y quien lo recibió lo distrae o no lo devuelve. La calificación correcta determina la estrategia de la querella.",
        ],
        [
          "¿Qué hacer si le citan o le acusan de un delito?",
          "No declare sin la asistencia de su abogado; usted tiene derecho a guardar silencio y a conocer los cargos. Intervenimos desde la primera actuación ante el Ministerio Público para proteger sus derechos y preparar su defensa, con estricta confidencialidad.",
        ],
      ],
    },
    en: {
      seoTitle: "Criminal Defense Lawyer in Santo Domingo",
      description:
        "Criminal defense lawyer in Santo Domingo: complaints for fraud, breach of trust and bad checks, and defense in financial crime cases, in full confidence.",
      h2: "Criminal lawyers in the Dominican Republic",
      faq: [
        [
          "What should you do if you were the victim of fraud?",
          "Gather the related documents, communications and payments and consult a lawyer as soon as possible. We file the criminal complaint with the Public Prosecutor's Office (Ministerio Público) and join as a civil party, which allows you to seek a criminal penalty while also claiming the return of what you lost and compensation for damages.",
        ],
        [
          "What is the difference between fraud and breach of trust?",
          "In fraud (estafa), the victim hands over property or money after being deceived by fraudulent schemes. In breach of trust (abuso de confianza), the victim handed over the property lawfully, for a specific purpose, and the recipient misappropriates it or fails to return it. The correct legal classification determines the strategy for the complaint.",
        ],
        [
          "What should you do if you are summoned or accused of a crime?",
          "Do not make any statement without your lawyer present; you have the right to remain silent and to know the charges against you. We step in from the very first proceeding before the Public Prosecutor's Office to protect your rights and prepare your defense, in strict confidence.",
        ],
      ],
    },
    fr: {
      seoTitle: "Avocat pénaliste à Saint-Domingue",
      description:
        "Avocat pénaliste à Saint-Domingue : plaintes pour escroquerie, abus de confiance et chèques sans provision, et défense en droit pénal des affaires.",
      h2: "Avocats pénalistes en République dominicaine",
      faq: [
        [
          "Que faire si vous êtes victime d'une escroquerie ?",
          "Rassemblez les documents, échanges et paiements liés à l'affaire et consultez un avocat au plus vite. Nous déposons la plainte auprès du ministère public (Ministerio Público) avec constitution de partie civile, ce qui vous permet de poursuivre la sanction pénale tout en réclamant la restitution de ce que vous avez perdu et la réparation de votre préjudice.",
        ],
        [
          "Quelle est la différence entre l'escroquerie et l'abus de confiance ?",
          "Dans l'escroquerie, la victime remet des biens ou de l'argent après avoir été trompée par des manœuvres frauduleuses. Dans l'abus de confiance, la victime a remis le bien de manière légitime, pour un usage déterminé, et celui qui l'a reçu le détourne ou ne le restitue pas. La qualification exacte détermine la stratégie de la plainte.",
        ],
        [
          "Que faire si vous êtes convoqué ou mis en cause pour une infraction ?",
          "Ne faites aucune déclaration sans l'assistance de votre avocat : vous avez le droit de garder le silence et de connaître les charges retenues contre vous. Nous intervenons dès le premier acte devant le ministère public pour protéger vos droits et préparer votre défense, en toute confidentialité.",
        ],
      ],
    },
  },
};
