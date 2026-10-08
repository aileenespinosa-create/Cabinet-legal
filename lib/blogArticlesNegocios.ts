import type { Article } from "@/lib/blogTypes";

// Business law articles (October 2026). Kept in a separate file to ease review.
export const ARTICLES_NEGOCIOS: Article[] = [
  // ---------------------------------------------------------------- Registro de la inversión extranjera (Ley 16-95)
  {
    key: "registro-inversion",
    date: "2026-10-07",
    slug: {
      es: "registro-inversion-extranjera-republica-dominicana",
      en: "foreign-investment-registration-dominican-republic",
      fr: "enregistrement-investissement-etranger-republique-dominicaine",
    },
    serviceHref: { es: "/inversion-extranjera", en: "/en/inversion-extranjera", fr: "/fr/inversion-extranjera" },
    text: {
      es: {
        title: "Registro de la inversión extranjera en República Dominicana: guía de la Ley 16-95",
        description:
          "Cómo registrar su inversión extranjera ante ProDominicana: qué protege la Ley 16-95, plazos, documentos, la Ventanilla Única de Inversión y por qué el certificado le conviene.",
        h1: "Registro de la inversión extranjera en República Dominicana: lo que debe saber",
        intro: [
          "La Ley núm. 16-95 sobre Inversión Extranjera garantiza al inversionista extranjero el mismo trato que al nacional y el derecho a remesar al exterior su capital y sus dividendos. Para hacer valer esas garantías con facilidad, la inversión debe estar registrada y contar con su certificado.",
          "Este registro es uno de los trámites que más se omiten al llegar al país, y su ausencia suele aparecer después, cuando el inversionista quiere repatriar utilidades, solicitar la residencia o vender su participación.",
        ],
        sections: [
          {
            h: "1. Qué protege la Ley 16-95",
            blocks: [
              { t: "ul", items: [
                "Trato nacional: el inversionista extranjero tiene los mismos derechos y obligaciones que el dominicano, salvo lo que disponga una ley especial (art. 6).",
                "Libre remesa: puede enviar al exterior el capital invertido y los dividendos declarados, en moneda libremente convertible y sin autorización previa, una vez pagado el impuesto sobre la renta (art. 7).",
                "Formas de aportar: divisas canalizadas por bancos autorizados, bienes como maquinaria y equipos, y tecnología, incluidas marcas y conocimientos técnicos (art. 2).",
                "Sectores excluidos: disposición de desechos tóxicos, actividades que afecten la salud pública o el medio ambiente y, salvo autorización del Poder Ejecutivo, materiales de defensa y seguridad (art. 5).",
              ] },
            ],
          },
          {
            h: "2. Ante quién y en qué plazo",
            blocks: [
              { t: "p", text: "La función de registro corresponde hoy a ProDominicana, el Centro de Exportación e Inversión de la República Dominicana. El reglamento de aplicación establece un plazo de 180 días calendario contados desde la entrada de la inversión. Las empresas de zonas francas tienen su propio régimen ante el Consejo Nacional de Zonas Francas de Exportación." },
              { t: "p", text: "Desde 2021 el registro se tramita en línea y sin costo, y desde 2023 forma parte de la Ventanilla Única de Inversión (VUI), la plataforma que reúne en un solo lugar los trámites de varias instituciones." },
            ],
          },
          {
            h: "3. Documentos que suelen requerirse",
            blocks: [
              { t: "ul", items: [
                "Identificación del inversionista: pasaporte si es persona física, o documentos constitutivos apostillados si es una sociedad extranjera.",
                "Documentos de la sociedad dominicana que recibe la inversión: registro mercantil, RNC y lista de socios o accionistas actualizada.",
                "Prueba del ingreso del capital: constancia bancaria de la transferencia de divisas o, si el aporte es en bienes, la documentación de importación y su valoración.",
                "Monto, sector y descripción del proyecto, y la certificación ambiental cuando la actividad la exija.",
              ] },
              { t: "p", text: "La lista exacta puede variar según el tipo de inversión, por lo que conviene revisarla en la VUI antes de reunir el expediente." },
            ],
          },
          {
            h: "4. Por qué le conviene el certificado",
            blocks: [
              { t: "ul", items: [
                "Documenta el origen del capital ante bancos, auditores y la administración tributaria.",
                "Facilita la repatriación del capital y de los dividendos.",
                "Es requisito para solicitar la residencia por inversión, cuyo monto mínimo es de US$200,000 y que también se tramita a través de la VUI.",
                "Da respaldo al inversionista frente a sus socios locales en una venta, una fusión o un conflicto.",
              ] },
            ],
          },
          {
            h: "5. Cómo lo trabajamos",
            blocks: [
              { t: "ol", items: [
                "Revisamos la estructura de la inversión antes de transferir los fondos, para que la operación quede bien documentada desde el inicio.",
                "Constituimos o adecuamos la sociedad dominicana que recibirá el capital. Vea [cómo abrir una empresa siendo extranjero](/blog/abrir-empresa-republica-dominicana-extranjero).",
                "Preparamos el expediente y lo depositamos en la VUI dentro del plazo.",
                "Le entregamos el certificado y, si lo desea, iniciamos la solicitud de residencia por inversión.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "¿Puedo registrar una inversión que hice hace años?", a: "Conviene revisarlo caso por caso. Si el plazo venció, analizamos la documentación disponible y la mejor forma de regularizar la situación." },
          { q: "¿El registro tiene costo?", a: "El trámite ante ProDominicana es gratuito desde 2021. Los costos están en la preparación de los documentos, las apostillas y las traducciones." },
          { q: "¿Necesito vivir en el país para registrar mi inversión?", a: "No. Todo el trámite puede hacerse a distancia, por medio de su abogado y de la plataforma en línea." },
        ],
        cta: {
          title: "¿Va a invertir en República Dominicana?",
          text: "Estructuramos su inversión, constituimos la sociedad y registramos el capital para que pueda repatriar utilidades y solicitar la residencia sin contratiempos.",
          service: "Inversión extranjera",
        },
      },
      en: {
        title: "Registering a foreign investment in the Dominican Republic: a guide to Law 16-95",
        description:
          "How to register your foreign investment with ProDominicana: what Law 16-95 protects, deadlines, documents, the Single Investment Window and why the certificate matters.",
        h1: "Registering a foreign investment in the Dominican Republic: what you need to know",
        intro: [
          "Foreign Investment Law 16-95 guarantees foreign investors the same treatment as Dominican nationals and the right to send their capital and dividends abroad. To rely on those guarantees easily, the investment should be registered and backed by its certificate.",
          "It is one of the steps most often skipped on arrival, and the gap usually shows up later, when the investor wants to repatriate profits, apply for residency or sell their stake.",
        ],
        sections: [
          {
            h: "1. What Law 16-95 protects",
            blocks: [
              { t: "ul", items: [
                "National treatment: foreign investors have the same rights and obligations as Dominicans, unless a special law provides otherwise (art. 6).",
                "Free remittance: invested capital and declared dividends may be sent abroad in freely convertible currency, without prior authorisation, once income tax has been paid (art. 7).",
                "Forms of contribution: foreign currency channelled through authorised banks, goods such as machinery and equipment, and technology, including trademarks and know-how (art. 2).",
                "Excluded sectors: toxic waste disposal, activities harmful to public health or the environment and, unless the Executive authorises it, defence and security materials (art. 5).",
              ] },
            ],
          },
          {
            h: "2. Where and when to register",
            blocks: [
              { t: "p", text: "Registration is handled today by ProDominicana, the Dominican Republic's export and investment agency. The implementing regulation sets a deadline of 180 calendar days from the date the investment enters the country. Free zone companies follow their own procedure before the National Free Zones Council." },
              { t: "p", text: "Since 2021 the registration is filed online and free of charge, and since 2023 it is part of the Single Investment Window (VUI), a platform that brings together procedures from several government agencies." },
            ],
          },
          {
            h: "3. Documents usually required",
            blocks: [
              { t: "ul", items: [
                "Investor identification: a passport for individuals, or apostilled incorporation documents for a foreign company.",
                "Documents of the Dominican company receiving the investment: commercial registration, tax ID (RNC) and an updated list of partners or shareholders.",
                "Proof that the capital entered the country: the bank record of the currency transfer or, for contributions in kind, the import documents and their valuation.",
                "Amount, sector and description of the project, and an environmental certificate where the activity requires one.",
              ] },
              { t: "p", text: "The exact list may vary with the type of investment, so it is worth checking on the VUI before putting the file together." },
            ],
          },
          {
            h: "4. Why the certificate matters",
            blocks: [
              { t: "ul", items: [
                "It documents the origin of the capital for banks, auditors and the tax authority.",
                "It makes repatriating capital and dividends easier.",
                "It is required to apply for residency by investment, which has a minimum of US$200,000 and is also processed through the VUI.",
                "It protects the investor in dealings with local partners in a sale, a merger or a dispute.",
              ] },
            ],
          },
          {
            h: "5. How we handle it",
            blocks: [
              { t: "ol", items: [
                "We review the investment structure before the funds are transferred, so the transaction is properly documented from day one.",
                "We incorporate or adapt the Dominican company that will receive the capital. See [how to open a company as a foreigner](/en/blog/open-company-dominican-republic-foreigner).",
                "We prepare the file and submit it through the VUI within the deadline.",
                "We deliver the certificate and, if you wish, start your residency-by-investment application.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Can I register an investment I made years ago?", a: "It needs to be reviewed case by case. If the deadline has passed, we look at the available documents and the best way to regularise the situation." },
          { q: "Is there a fee for registration?", a: "Filing with ProDominicana has been free since 2021. The costs lie in preparing documents, apostilles and translations." },
          { q: "Do I need to live in the Dominican Republic to register?", a: "No. The whole process can be handled remotely through your lawyer and the online platform." },
        ],
        cta: {
          title: "Planning to invest in the Dominican Republic?",
          text: "We structure your investment, incorporate the company and register the capital, so you can repatriate profits and apply for residency without setbacks.",
          service: "Foreign investment",
        },
      },
      fr: {
        title: "Enregistrer un investissement étranger en République dominicaine : guide de la loi 16-95",
        description:
          "Comment enregistrer votre investissement étranger auprès de ProDominicana : ce que protège la loi 16-95, délais, documents, guichet unique et intérêt du certificat.",
        h1: "Enregistrer un investissement étranger en République dominicaine : l'essentiel",
        intro: [
          "La loi n° 16-95 sur l'investissement étranger garantit à l'investisseur étranger le même traitement qu'au national et le droit de transférer à l'étranger son capital et ses dividendes. Pour faire valoir ces garanties sans difficulté, l'investissement doit être enregistré et accompagné de son certificat.",
          "C'est l'une des démarches les plus souvent oubliées à l'arrivée, et cet oubli se révèle plus tard, lorsque l'investisseur veut rapatrier ses bénéfices, demander la résidence ou céder sa participation.",
        ],
        sections: [
          {
            h: "1. Ce que protège la loi 16-95",
            blocks: [
              { t: "ul", items: [
                "Traitement national : l'investisseur étranger a les mêmes droits et obligations que le Dominicain, sauf disposition d'une loi spéciale (art. 6).",
                "Libre transfert : le capital investi et les dividendes déclarés peuvent être transférés à l'étranger en devise librement convertible, sans autorisation préalable, une fois l'impôt sur le revenu acquitté (art. 7).",
                "Formes d'apport : devises acheminées par des banques agréées, biens tels que machines et équipements, et technologie, y compris marques et savoir-faire (art. 2).",
                "Secteurs exclus : élimination de déchets toxiques, activités nuisibles à la santé publique ou à l'environnement et, sauf autorisation de l'Exécutif, matériels de défense et de sécurité (art. 5).",
              ] },
            ],
          },
          {
            h: "2. Auprès de qui et dans quel délai",
            blocks: [
              { t: "p", text: "L'enregistrement relève aujourd'hui de ProDominicana, l'agence dominicaine d'exportation et d'investissement. Le règlement d'application fixe un délai de 180 jours calendaires à compter de l'entrée de l'investissement. Les entreprises de zone franche suivent leur propre procédure auprès du Conseil national des zones franches." },
              { t: "p", text: "Depuis 2021, la démarche se fait en ligne et gratuitement, et depuis 2023 elle fait partie du Guichet unique de l'investissement (VUI), qui réunit les procédures de plusieurs administrations." },
            ],
          },
          {
            h: "3. Documents généralement demandés",
            blocks: [
              { t: "ul", items: [
                "Identification de l'investisseur : passeport pour une personne physique, ou statuts apostillés pour une société étrangère.",
                "Documents de la société dominicaine qui reçoit l'investissement : immatriculation au registre du commerce, numéro fiscal (RNC) et liste à jour des associés.",
                "Preuve de l'entrée du capital : justificatif bancaire du virement de devises ou, pour un apport en nature, les documents d'importation et leur évaluation.",
                "Montant, secteur et description du projet, et certificat environnemental lorsque l'activité l'exige.",
              ] },
              { t: "p", text: "La liste exacte peut varier selon le type d'investissement : mieux vaut la vérifier sur le VUI avant de constituer le dossier." },
            ],
          },
          {
            h: "4. Pourquoi le certificat est utile",
            blocks: [
              { t: "ul", items: [
                "Il justifie l'origine des fonds auprès des banques, des auditeurs et de l'administration fiscale.",
                "Il facilite le rapatriement du capital et des dividendes.",
                "Il est exigé pour la résidence par investissement, dont le seuil minimum est de 200 000 dollars US et qui se demande aussi via le VUI.",
                "Il protège l'investisseur face à ses associés locaux en cas de cession, de fusion ou de litige.",
              ] },
            ],
          },
          {
            h: "5. Notre méthode",
            blocks: [
              { t: "ol", items: [
                "Nous examinons la structure de l'investissement avant le virement des fonds, pour que l'opération soit bien documentée dès le départ.",
                "Nous créons ou adaptons la société dominicaine qui recevra le capital. Voir [créer une société en tant qu'étranger](/fr/blog/creer-societe-republique-dominicaine-etranger).",
                "Nous préparons le dossier et le déposons sur le VUI dans le délai.",
                "Nous vous remettons le certificat et, si vous le souhaitez, lançons votre demande de résidence par investissement.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Puis-je enregistrer un investissement réalisé il y a plusieurs années ?", a: "Cela s'examine au cas par cas. Si le délai est dépassé, nous analysons les documents disponibles et la meilleure façon de régulariser la situation." },
          { q: "L'enregistrement est-il payant ?", a: "La démarche auprès de ProDominicana est gratuite depuis 2021. Les frais concernent la préparation des documents, les apostilles et les traductions." },
          { q: "Dois-je résider en République dominicaine ?", a: "Non. Toute la procédure peut être menée à distance, par l'intermédiaire de votre avocat et de la plateforme en ligne." },
        ],
        cta: {
          title: "Vous projetez d'investir en République dominicaine ?",
          text: "Nous structurons votre investissement, créons la société et enregistrons le capital pour que vous puissiez rapatrier vos bénéfices et demander la résidence sans difficulté.",
          service: "Investissement étranger",
        },
      },
    },
  },

  // ---------------------------------------------------------------- Pacto de socios
  {
    key: "pacto-socios",
    date: "2026-10-07",
    slug: {
      es: "pacto-de-socios-republica-dominicana-inversionista-extranjero",
      en: "shareholders-agreement-dominican-republic-foreign-investor",
      fr: "pacte-d-associes-republique-dominicaine-investisseur-etranger",
    },
    serviceHref: { es: "/servicios/derecho-corporativo", en: "/en/servicios/corporate-law", fr: "/fr/servicios/droit-des-societes" },
    text: {
      es: {
        title: "Pacto de socios en República Dominicana: cláusulas que protegen al inversionista extranjero",
        description:
          "Qué debe contener un pacto de socios o de accionistas en República Dominicana para proteger al socio extranjero: cesión de cuotas, preferencia, información, bloqueo, salida y arbitraje.",
        h1: "Pacto de socios: cómo protege su inversión en una sociedad dominicana",
        intro: [
          "Buena parte de los conflictos societarios que llegan a nuestro despacho comienzan igual: un inversionista extranjero entra como socio de una empresa dominicana con unos estatutos genéricos y sin un acuerdo que regule la relación con sus socios locales.",
          "La Ley núm. 479-08 sobre Sociedades Comerciales, modificada por la Ley núm. 31-11, ofrece protecciones mínimas. El pacto de socios, junto con unos estatutos bien redactados, es lo que las convierte en reglas claras para su caso concreto.",
        ],
        sections: [
          {
            h: "1. Lo que la ley ya le garantiza",
            blocks: [
              { t: "ul", items: [
                "Información: el socio con al menos el 5 % del capital puede conocer en todo momento la situación económica y las cuentas de la sociedad (art. 36).",
                "En la SRL, la cesión de cuotas a terceros requiere el consentimiento de socios que representen al menos tres cuartas partes de las cuotas (art. 97).",
                "Derecho preferente a suscribir las nuevas cuotas o acciones en proporción a su participación cuando se aumenta el capital.",
                "En la SRL, los socios con una décima parte del capital pueden pedir al juez la designación de un comisario de cuentas (art. 130), y en la SA los accionistas con una décima parte del capital suscrito y pagado pueden convocar la asamblea.",
              ] },
              { t: "p", text: "Son protecciones valiosas, pero pensadas para cualquier sociedad. Un socio minoritario extranjero necesita reglas hechas a la medida de su inversión." },
            ],
          },
          {
            h: "2. Las cláusulas que recomendamos",
            blocks: [
              { t: "ul", items: [
                "Materias reservadas: lista de decisiones que exigen su voto favorable, como endeudarse por encima de cierto monto, vender activos esenciales, contratar con partes vinculadas o cambiar el objeto social.",
                "Información reforzada: estados financieros trimestrales, acceso a los extractos bancarios y derecho a una auditoría independiente anual.",
                "Restricciones a la transmisión: derecho de preferencia y, en su caso, aprobación previa antes de que un socio venda a un tercero.",
                "Acompañamiento (tag along): si el socio mayoritario vende, usted puede vender en las mismas condiciones.",
                "Arrastre (drag along): si existe una buena oferta por el 100 % de la empresa, se pacta cómo y con qué mayoría se obliga a todos a vender.",
                "Bloqueo: un mecanismo para salir de un empate en decisiones clave, como la mediación, un tercero que decide o una opción de compra entre socios.",
                "Salida: opciones de compra y de venta, y una fórmula de valoración acordada de antemano.",
                "No competencia y confidencialidad de los socios que gestionan el negocio.",
              ] },
            ],
          },
          {
            h: "3. Pacto y estatutos deben decir lo mismo",
            blocks: [
              { t: "p", text: "El pacto obliga a quienes lo firman. Los estatutos, en cambio, rigen la vida de la sociedad y se oponen a terceros. Por eso las protecciones más importantes, como las restricciones a la cesión, las mayorías reforzadas y las materias reservadas, conviene llevarlas también a los estatutos. Si ambos documentos se contradicen, el conflicto está servido." },
              { t: "p", text: "La sociedad anónima simplificada (SAS) da mayor libertad para organizar estos mecanismos en sus estatutos, lo que la hace atractiva cuando entra capital extranjero." },
            ],
          },
          {
            h: "4. Cómo resolver los conflictos",
            blocks: [
              { t: "p", text: "Un pacto bien redactado prevé el arbitraje. La Ley núm. 489-08 sobre Arbitraje Comercial admite el arbitraje en las materias de libre disposición, y cuando existe un convenio arbitral el tribunal ordinario debe declararse incompetente. Para el inversionista extranjero, el arbitraje ofrece rapidez, confidencialidad y la posibilidad de litigar en inglés." },
            ],
          },
          {
            h: "5. Cómo lo trabajamos",
            blocks: [
              { t: "ol", items: [
                "Entendemos su posición: cuánto aporta, qué controla y cuál es su plan de salida.",
                "Revisamos los estatutos vigentes y el historial de la sociedad.",
                "Redactamos el pacto y la reforma estatutaria necesaria, en español y con versión en inglés o francés si lo desea.",
                "Acompañamos la firma, la asamblea y su inscripción en el Registro Mercantil.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "¿Puedo firmar un pacto de socios si la sociedad ya existe?", a: "Sí. Se puede firmar en cualquier momento, aunque es más fácil negociarlo antes de aportar el capital." },
          { q: "¿El pacto se inscribe en el Registro Mercantil?", a: "El pacto en sí es un contrato privado. Lo que se inscribe es la reforma de los estatutos que recoge las protecciones principales." },
          { q: "¿Puede redactarse en inglés?", a: "Sí, en versión bilingüe. Para efectos ante autoridades dominicanas se utiliza la versión en español." },
        ],
        cta: {
          title: "¿Va a entrar como socio en una empresa dominicana?",
          text: "Redactamos su pacto de socios y adecuamos los estatutos para que su inversión quede protegida desde el primer día.",
          service: "Derecho corporativo",
        },
      },
      en: {
        title: "Shareholders' agreements in the Dominican Republic: clauses that protect foreign investors",
        description:
          "What a shareholders' agreement in the Dominican Republic should include to protect a foreign partner: transfer restrictions, pre-emption, information rights, deadlock, exit and arbitration.",
        h1: "Shareholders' agreements: how to protect your investment in a Dominican company",
        intro: [
          "Many of the corporate disputes that reach our firm start the same way: a foreign investor becomes a partner in a Dominican company with generic bylaws and no agreement governing the relationship with the local partners.",
          "Commercial Companies Law 479-08, as amended by Law 31-11, provides minimum protections. A shareholders' agreement, together with well-drafted bylaws, turns them into clear rules for your specific situation.",
        ],
        sections: [
          {
            h: "1. What the law already guarantees",
            blocks: [
              { t: "ul", items: [
                "Information: a partner holding at least 5% of the capital may review the company's financial position and accounts at any time (art. 36).",
                "In an SRL (limited liability company), transferring quotas to third parties requires the consent of partners holding at least three quarters of the quotas (art. 97).",
                "Pre-emptive right to subscribe new quotas or shares in proportion to your holding when capital is increased.",
                "In an SRL, partners holding one tenth of the capital may ask the court to appoint a statutory auditor (art. 130), and in an SA shareholders with one tenth of the subscribed and paid-in capital may call a meeting.",
              ] },
              { t: "p", text: "These protections are valuable, but they are designed for any company. A foreign minority partner needs rules tailored to the investment." },
            ],
          },
          {
            h: "2. The clauses we recommend",
            blocks: [
              { t: "ul", items: [
                "Reserved matters: decisions that require your approval, such as borrowing above a set amount, selling key assets, related-party contracts or changing the corporate purpose.",
                "Enhanced information: quarterly financial statements, access to bank statements and the right to an annual independent audit.",
                "Transfer restrictions: right of first refusal and, where appropriate, prior approval before a partner sells to a third party.",
                "Tag-along: if the majority partner sells, you can sell on the same terms.",
                "Drag-along: if there is a good offer for 100% of the company, the agreement sets how and by what majority all partners are required to sell.",
                "Deadlock: a way out of a tie on key decisions, such as mediation, an independent tie-breaker or a buy-sell option between partners.",
                "Exit: call and put options, and a valuation formula agreed in advance.",
                "Non-compete and confidentiality obligations for the partners who run the business.",
              ] },
            ],
          },
          {
            h: "3. The agreement and the bylaws must say the same thing",
            blocks: [
              { t: "p", text: "The agreement binds those who sign it, while the bylaws govern the company and can be relied on against third parties. That is why the key protections, such as transfer restrictions, qualified majorities and reserved matters, should also be written into the bylaws. If the two documents contradict each other, a dispute is almost guaranteed." },
              { t: "p", text: "The simplified joint-stock company (SAS) allows more freedom to build these mechanisms into its bylaws, which makes it attractive when foreign capital comes in." },
            ],
          },
          {
            h: "4. How disputes are resolved",
            blocks: [
              { t: "p", text: "A well-drafted agreement provides for arbitration. Commercial Arbitration Law 489-08 allows arbitration of matters that the parties may freely dispose of, and where there is an arbitration agreement the ordinary courts must decline jurisdiction. For a foreign investor, arbitration offers speed, confidentiality and the option to proceed in English." },
            ],
          },
          {
            h: "5. How we handle it",
            blocks: [
              { t: "ol", items: [
                "We understand your position: what you contribute, what you control and how you plan to exit.",
                "We review the current bylaws and the company's history.",
                "We draft the agreement and the required amendments to the bylaws, in Spanish with an English or French version if you wish.",
                "We handle the signing, the shareholders' meeting and the filing with the Commercial Registry.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Can I sign a shareholders' agreement if the company already exists?", a: "Yes. It can be signed at any time, although it is easier to negotiate before you contribute the capital." },
          { q: "Is the agreement filed with the Commercial Registry?", a: "The agreement itself is a private contract. What is filed is the amendment to the bylaws that reflects the main protections." },
          { q: "Can it be drafted in English?", a: "Yes, as a bilingual document. The Spanish version is used before Dominican authorities." },
        ],
        cta: {
          title: "Joining a Dominican company as a partner?",
          text: "We draft your shareholders' agreement and adapt the bylaws so your investment is protected from day one.",
          service: "Corporate law",
        },
      },
      fr: {
        title: "Pacte d'associés en République dominicaine : les clauses qui protègent l'investisseur étranger",
        description:
          "Ce que doit contenir un pacte d'associés en République dominicaine pour protéger l'associé étranger : cession, préemption, information, blocage, sortie et arbitrage.",
        h1: "Pacte d'associés : protéger votre investissement dans une société dominicaine",
        intro: [
          "Une grande partie des litiges entre associés qui arrivent à notre cabinet commencent de la même façon : un investisseur étranger entre au capital d'une société dominicaine avec des statuts standards et sans accord encadrant sa relation avec les associés locaux.",
          "La loi n° 479-08 sur les sociétés commerciales, modifiée par la loi n° 31-11, prévoit des protections minimales. Le pacte d'associés, accompagné de statuts bien rédigés, les transforme en règles claires adaptées à votre situation.",
        ],
        sections: [
          {
            h: "1. Ce que la loi garantit déjà",
            blocks: [
              { t: "ul", items: [
                "Information : l'associé détenant au moins 5 % du capital peut à tout moment prendre connaissance de la situation financière et des comptes de la société (art. 36).",
                "Dans la SRL, la cession de parts à un tiers requiert l'accord d'associés représentant au moins les trois quarts des parts (art. 97).",
                "Droit préférentiel de souscription aux nouvelles parts ou actions, en proportion de votre participation, en cas d'augmentation de capital.",
                "Dans la SRL, les associés détenant un dixième du capital peuvent demander au juge la désignation d'un commissaire aux comptes (art. 130), et dans la SA les actionnaires détenant un dixième du capital souscrit et libéré peuvent convoquer l'assemblée.",
              ] },
              { t: "p", text: "Ces protections sont utiles, mais conçues pour toutes les sociétés. Un associé minoritaire étranger a besoin de règles adaptées à son investissement." },
            ],
          },
          {
            h: "2. Les clauses que nous recommandons",
            blocks: [
              { t: "ul", items: [
                "Décisions réservées : liste des décisions soumises à votre accord, comme un endettement au-delà d'un certain montant, la vente d'actifs essentiels, les conventions avec des parties liées ou le changement d'objet social.",
                "Information renforcée : états financiers trimestriels, accès aux relevés bancaires et droit à un audit indépendant annuel.",
                "Restrictions à la cession : droit de préemption et, le cas échéant, agrément préalable avant toute vente à un tiers.",
                "Sortie conjointe (tag along) : si l'associé majoritaire vend, vous pouvez vendre aux mêmes conditions.",
                "Sortie forcée (drag along) : en cas d'offre intéressante portant sur 100 % de la société, le pacte prévoit comment et à quelle majorité tous les associés sont tenus de vendre.",
                "Blocage : un mécanisme pour sortir d'une impasse sur les décisions clés, comme la médiation, un tiers départiteur ou une option d'achat croisée.",
                "Sortie : promesses d'achat et de vente, et une formule de valorisation convenue à l'avance.",
                "Non-concurrence et confidentialité pour les associés qui dirigent l'entreprise.",
              ] },
            ],
          },
          {
            h: "3. Pacte et statuts doivent concorder",
            blocks: [
              { t: "p", text: "Le pacte engage ceux qui le signent, tandis que les statuts régissent la société et sont opposables aux tiers. C'est pourquoi les protections essentielles, comme les restrictions à la cession, les majorités renforcées et les décisions réservées, doivent aussi figurer dans les statuts. Si les deux documents se contredisent, le litige est presque assuré." },
              { t: "p", text: "La société anonyme simplifiée (SAS) laisse plus de liberté pour organiser ces mécanismes dans les statuts, ce qui la rend intéressante lorsqu'un capital étranger entre dans la société." },
            ],
          },
          {
            h: "4. Comment régler les différends",
            blocks: [
              { t: "p", text: "Un pacte bien rédigé prévoit l'arbitrage. La loi n° 489-08 sur l'arbitrage commercial admet l'arbitrage pour les matières dont les parties ont la libre disposition, et en présence d'une convention d'arbitrage le juge ordinaire doit se déclarer incompétent. Pour l'investisseur étranger, l'arbitrage offre rapidité, confidentialité et la possibilité de plaider en français ou en anglais." },
            ],
          },
          {
            h: "5. Notre méthode",
            blocks: [
              { t: "ol", items: [
                "Nous comprenons votre position : votre apport, ce que vous contrôlez et votre stratégie de sortie.",
                "Nous examinons les statuts en vigueur et l'historique de la société.",
                "Nous rédigeons le pacte et la modification des statuts, en espagnol avec une version française ou anglaise si vous le souhaitez.",
                "Nous accompagnons la signature, l'assemblée et l'inscription au registre du commerce.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Puis-je signer un pacte si la société existe déjà ?", a: "Oui. Il peut être signé à tout moment, même s'il est plus facile de le négocier avant d'apporter le capital." },
          { q: "Le pacte est-il inscrit au registre du commerce ?", a: "Le pacte lui-même est un contrat privé. C'est la modification des statuts reprenant les protections principales qui est inscrite." },
          { q: "Peut-il être rédigé en français ?", a: "Oui, sous forme bilingue. La version espagnole est celle utilisée devant les autorités dominicaines." },
        ],
        cta: {
          title: "Vous entrez au capital d'une société dominicaine ?",
          text: "Nous rédigeons votre pacte d'associés et adaptons les statuts pour que votre investissement soit protégé dès le premier jour.",
          service: "Droit des sociétés",
        },
      },
    },
  },
];
