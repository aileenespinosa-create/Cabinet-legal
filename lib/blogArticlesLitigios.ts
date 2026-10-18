import type { Article } from "@/lib/blogTypes";

// Cross-border collection and enforcement articles (October 2026).
export const ARTICLES_LITIGIOS: Article[] = [
  // ---------------------------------------------------------------- Cobro de deudas desde el exterior
  {
    key: "cobro-exterior",
    date: "2026-10-17",
    slug: {
      es: "cobrar-deuda-republica-dominicana-desde-el-exterior",
      en: "collect-debt-dominican-republic-from-abroad",
      fr: "recouvrer-creance-republique-dominicaine-depuis-l-etranger",
    },
    serviceHref: {
      es: "/servicios/cobro-y-recuperacion-de-creditos",
      en: "/en/servicios/debt-collection",
      fr: "/fr/servicios/recouvrement-de-creances",
    },
    text: {
      es: {
        title: "Cómo cobrar una deuda en República Dominicana desde el exterior",
        description:
          "Guía para acreedores extranjeros: intimación de pago, embargos conservatorios, títulos ejecutorios, hipotecas, cheques sin fondos y poder apostillado, sin necesidad de viajar.",
        h1: "Cobrar una deuda en República Dominicana sin viajar: guía para acreedores extranjeros",
        intro: [
          "Un proveedor que no recibió su pago, un préstamo a un socio local que nunca se devolvió, una factura vencida de un cliente dominicano. El acreedor que vive fuera del país suele pensar que recuperar ese dinero exige viajar y litigar en persona. No es así: todo el proceso puede conducirlo un abogado en República Dominicana en virtud de un poder.",
          "La vía adecuada depende de un dato: el documento en que consta la deuda. De él dependen la rapidez del cobro y las medidas que pueden tomarse sobre los bienes del deudor.",
        ],
        sections: [
          {
            h: "1. Primero, el documento que prueba la deuda",
            blocks: [
              { t: "ul", items: [
                "Título ejecutorio: un pagaré notarial, una sentencia firme o un préstamo con hipoteca inscrita. Permite proceder directamente al embargo de los bienes del deudor, previo mandamiento de pago.",
                "Documento privado: facturas aceptadas, contratos firmados, correos o reconocimientos de deuda. Prueban el crédito, pero antes de embargar hay que obtener una sentencia que condene al pago.",
                "Cheque devuelto por falta de fondos: además de la vía civil, la Ley núm. 2859 sobre Cheques abre una vía penal que con frecuencia acelera el pago.",
              ] },
              { t: "p", text: "Conviene reunir desde el inicio toda la correspondencia en la que el deudor reconoce la deuda, aunque sea informal." },
            ],
          },
          {
            h: "2. La intimación de pago",
            blocks: [
              { t: "p", text: "El primer paso formal es intimar al deudor mediante acto de alguacil, otorgándole un plazo para pagar. Muchas deudas se resuelven en esta etapa, porque el deudor comprende que el acreedor tiene representación en el país y que el siguiente paso es judicial. La intimación sirve además como prueba de la reclamación y como punto de partida de los intereses." },
            ],
          },
          {
            h: "3. Medidas para que el deudor no vacíe su patrimonio",
            blocks: [
              { t: "p", text: "Si el crédito luce fundado y existe riesgo de que el deudor disponga de sus bienes, el juez puede autorizar medidas conservatorias antes de la sentencia, conforme al artículo 48 del Código de Procedimiento Civil. Las más útiles son:" },
              { t: "ul", items: [
                "Embargo retentivo sobre cuentas bancarias y sobre sumas que terceros adeuden al deudor.",
                "Embargo conservatorio de bienes muebles, vehículos y mercancías.",
                "Inscripción de hipoteca judicial provisional sobre los inmuebles del deudor.",
              ] },
              { t: "p", text: "Antes de demandar investigamos los bienes registrados a nombre del deudor y de sus sociedades, porque una sentencia sin bienes que embargar tiene poco valor práctico." },
            ],
          },
          {
            h: "4. La demanda en cobro y la ejecución",
            blocks: [
              { t: "p", text: "Si el deudor no paga, se interpone la demanda en cobro, por regla general ante la Cámara Civil y Comercial del Juzgado de Primera Instancia del domicilio del deudor. Obtenida la sentencia, las medidas conservatorias se convierten en ejecutorias: los bienes embargados se venden y los fondos retenidos se entregan al acreedor." },
              { t: "p", text: "Cuando la deuda está garantizada con hipoteca, la Ley núm. 189-11 contempla en muchos casos un procedimiento de embargo inmobiliario abreviado, considerablemente más rápido que el ordinario. Las deudas pactadas en moneda extranjera pueden reclamarse en la moneda convenida." },
            ],
          },
          {
            h: "5. Lo que necesita el acreedor que vive fuera",
            blocks: [
              { t: "ul", items: [
                "Un poder a favor de su abogado, firmado ante notario en su país y apostillado. Explicamos cómo prepararlo en nuestra guía sobre [el poder otorgado desde el exterior](/blog/comprar-inmueble-republica-dominicana-sin-viajar-poder).",
                "Si el acreedor es una sociedad, sus documentos constitutivos y la prueba de la calidad de quien firma, también apostillados.",
                "Traducción al español por intérprete judicial de los documentos redactados en otro idioma.",
                "Prever la fianza del extranjero transeúnte: el artículo 16 del Código Civil permite al demandado exigir al demandante extranjero sin bienes en el país una garantía para las costas y los daños, salvo que un tratado lo dispense.",
              ] },
              { t: "p", text: "Si ya cuenta con una sentencia de un tribunal de su país, primero debe reconocerse aquí. Lo explicamos en nuestra guía sobre [cómo ejecutar una sentencia extranjera](/blog/ejecutar-sentencia-extranjera-republica-dominicana-exequatur)." },
            ],
          },
          {
            h: "6. Cómo lo trabajamos",
            blocks: [
              { t: "ol", items: [
                "Revisamos los documentos de la deuda y le indicamos la vía más rápida y su costo estimado.",
                "Investigamos el patrimonio del deudor en el país.",
                "Intimamos al deudor y, si procede, solicitamos de inmediato las medidas conservatorias.",
                "Llevamos el proceso hasta la sentencia y la ejecución, con reportes periódicos en su idioma.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "¿Debo viajar a República Dominicana para cobrar?", a: "No. Con un poder apostillado su abogado puede intimar, demandar, embargar y recibir los fondos en su nombre." },
          { q: "¿Cuánto tarda el cobro?", a: "Depende del documento y de la reacción del deudor. Un pago tras la intimación puede lograrse en semanas; un proceso judicial completo toma más tiempo, por lo que las medidas conservatorias tempranas son decisivas." },
          { q: "¿Qué ocurre si el deudor no tiene bienes?", a: "Por eso investigamos su patrimonio antes de demandar. Si no hay bienes ni ingresos embargables, se lo diremos con franqueza antes de que usted incurra en costos." },
        ],
        cta: {
          title: "¿Tiene una deuda pendiente de cobro en República Dominicana?",
          text: "Revisamos sus documentos, investigamos los bienes del deudor y conducimos el cobro de principio a fin sin que usted tenga que viajar.",
          service: "Cobro y recuperación de créditos",
        },
      },
      en: {
        title: "How to collect a debt in the Dominican Republic from abroad",
        description:
          "A guide for foreign creditors: formal demand, pre-judgment attachments, enforceable titles, mortgages, bounced cheques and an apostilled power of attorney, with no need to travel.",
        h1: "Collecting a debt in the Dominican Republic without travelling: a guide for foreign creditors",
        intro: [
          "A supplier who was never paid, a loan to a local partner that was never repaid, an overdue invoice from a Dominican customer. Creditors living abroad often assume that recovering the money means travelling and litigating in person. It does not: the whole process can be handled by a lawyer in the Dominican Republic under a power of attorney.",
          "The right route depends on one thing: the document that evidences the debt. It determines how fast the debt can be collected and which measures can be taken against the debtor's assets.",
        ],
        sections: [
          {
            h: "1. First, the document that proves the debt",
            blocks: [
              { t: "ul", items: [
                "Enforceable title: a notarial promissory note, a final judgment or a loan secured by a registered mortgage. It allows the creditor to attach the debtor's assets directly, after a formal order to pay.",
                "Private document: accepted invoices, signed contracts, emails or acknowledgements of debt. They prove the claim, but a judgment ordering payment must be obtained before attaching assets.",
                "Bounced cheque: in addition to the civil route, Cheque Law 2859 opens a criminal route that often speeds up payment.",
              ] },
              { t: "p", text: "It is worth gathering from the outset every message in which the debtor acknowledges the debt, even informally." },
            ],
          },
          {
            h: "2. The formal demand for payment",
            blocks: [
              { t: "p", text: "The first formal step is a demand served on the debtor by a court bailiff, giving a deadline to pay. Many debts are settled at this stage, because the debtor realises the creditor is represented in the country and that the next step is court action. The demand also serves as evidence of the claim and as the starting point for interest." },
            ],
          },
          {
            h: "3. Stopping the debtor from emptying their estate",
            blocks: [
              { t: "p", text: "If the claim appears well founded and there is a risk that the debtor will dispose of assets, the court may authorise protective measures before judgment under article 48 of the Code of Civil Procedure. The most useful are:" },
              { t: "ul", items: [
                "Garnishment of bank accounts and of sums owed to the debtor by third parties.",
                "Protective attachment of movable property, vehicles and goods.",
                "Registration of a provisional judicial mortgage over the debtor's real estate.",
              ] },
              { t: "p", text: "Before filing suit we search for assets registered in the name of the debtor and their companies, because a judgment with nothing to attach is of little practical value." },
            ],
          },
          {
            h: "4. The collection lawsuit and enforcement",
            blocks: [
              { t: "p", text: "If the debtor does not pay, a collection suit is filed, as a rule before the Civil and Commercial Chamber of the Court of First Instance where the debtor is domiciled. Once judgment is obtained, the protective measures become enforceable: attached assets are sold and garnished funds are paid to the creditor." },
              { t: "p", text: "Where the debt is secured by a mortgage, Law 189-11 in many cases provides a shortened foreclosure procedure, considerably faster than the ordinary one. Debts agreed in a foreign currency may be claimed in that currency." },
            ],
          },
          {
            h: "5. What a creditor living abroad needs",
            blocks: [
              { t: "ul", items: [
                "A power of attorney in favour of the lawyer, signed before a notary in the creditor's country and apostilled. We explain how to prepare it in our guide on [granting a power of attorney from abroad](/en/blog/buy-property-dominican-republic-without-travelling-power-of-attorney).",
                "If the creditor is a company, its incorporation documents and proof of the signatory's authority, also apostilled.",
                "A Spanish translation by a court-certified interpreter of any document in another language.",
                "Allowance for the foreign plaintiff's bond: article 16 of the Civil Code lets the defendant require a foreign claimant with no assets in the country to post security for costs and damages, unless a treaty provides otherwise.",
              ] },
              { t: "p", text: "If you already hold a judgment from a court in your country, it must first be recognised here. We explain how in our guide on [enforcing a foreign judgment](/en/blog/enforce-foreign-judgment-dominican-republic-exequatur)." },
            ],
          },
          {
            h: "6. How we work",
            blocks: [
              { t: "ol", items: [
                "We review the debt documents and tell you the fastest route and its estimated cost.",
                "We search for the debtor's assets in the country.",
                "We serve the formal demand and, where appropriate, immediately request protective measures.",
                "We take the case through judgment and enforcement, with regular reports in your language.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Do I need to travel to the Dominican Republic to collect?", a: "No. With an apostilled power of attorney your lawyer can serve the demand, sue, attach assets and receive the funds on your behalf." },
          { q: "How long does collection take?", a: "It depends on the document and on the debtor's response. Payment after the formal demand can come within weeks; a full lawsuit takes longer, which is why early protective measures are decisive." },
          { q: "What if the debtor has no assets?", a: "That is why we search for assets before filing suit. If there are no attachable assets or income, we will tell you plainly before you incur any costs." },
        ],
        cta: {
          title: "Do you have an unpaid debt in the Dominican Republic?",
          text: "We review your documents, search for the debtor's assets and handle collection from start to finish without you having to travel.",
          service: "Debt collection",
        },
      },
      fr: {
        title: "Recouvrer une créance en République dominicaine depuis l'étranger",
        description:
          "Guide pour les créanciers étrangers : mise en demeure, saisies conservatoires, titres exécutoires, hypothèques, chèques sans provision et procuration apostillée, sans avoir à vous déplacer.",
        h1: "Recouvrer une créance en République dominicaine sans vous déplacer : guide pour les créanciers étrangers",
        intro: [
          "Un fournisseur jamais payé, un prêt consenti à un associé local et jamais remboursé, une facture impayée d'un client dominicain. Le créancier qui vit à l'étranger pense souvent que récupérer son argent l'oblige à voyager et à plaider en personne. Ce n'est pas le cas : toute la procédure peut être conduite par un avocat en République dominicaine en vertu d'une procuration.",
          "La bonne voie dépend d'un élément : le document qui constate la dette. C'est lui qui détermine la rapidité du recouvrement et les mesures possibles sur les biens du débiteur.",
        ],
        sections: [
          {
            h: "1. D'abord, le document qui prouve la dette",
            blocks: [
              { t: "ul", items: [
                "Titre exécutoire : un billet à ordre notarié, un jugement définitif ou un prêt garanti par une hypothèque inscrite. Il permet de saisir directement les biens du débiteur, après un commandement de payer.",
                "Acte sous seing privé : factures acceptées, contrats signés, courriels ou reconnaissances de dette. Ils prouvent la créance, mais il faut obtenir un jugement de condamnation avant de saisir.",
                "Chèque sans provision : outre la voie civile, la loi n° 2859 sur les chèques ouvre une voie pénale qui accélère souvent le paiement.",
              ] },
              { t: "p", text: "Il est utile de réunir dès le départ tous les échanges dans lesquels le débiteur reconnaît la dette, même de manière informelle." },
            ],
          },
          {
            h: "2. La mise en demeure",
            blocks: [
              { t: "p", text: "La première étape formelle est une mise en demeure signifiée au débiteur par huissier, avec un délai pour payer. Beaucoup de dettes se règlent à ce stade, car le débiteur comprend que le créancier est représenté dans le pays et que l'étape suivante est judiciaire. La mise en demeure sert aussi de preuve de la réclamation et de point de départ des intérêts." },
            ],
          },
          {
            h: "3. Empêcher le débiteur de vider son patrimoine",
            blocks: [
              { t: "p", text: "Si la créance paraît fondée et qu'il existe un risque que le débiteur dispose de ses biens, le juge peut autoriser des mesures conservatoires avant jugement, conformément à l'article 48 du Code de procédure civile. Les plus utiles sont :" },
              { t: "ul", items: [
                "La saisie-arrêt des comptes bancaires et des sommes dues au débiteur par des tiers.",
                "La saisie conservatoire de biens meubles, véhicules et marchandises.",
                "L'inscription d'une hypothèque judiciaire provisoire sur les immeubles du débiteur.",
              ] },
              { t: "p", text: "Avant d'agir en justice, nous recherchons les biens enregistrés au nom du débiteur et de ses sociétés, car un jugement sans biens à saisir a peu de valeur pratique." },
            ],
          },
          {
            h: "4. L'action en paiement et l'exécution",
            blocks: [
              { t: "p", text: "Si le débiteur ne paie pas, une action en paiement est introduite, en règle générale devant la chambre civile et commerciale du tribunal de première instance du domicile du débiteur. Une fois le jugement obtenu, les mesures conservatoires deviennent exécutoires : les biens saisis sont vendus et les fonds bloqués sont remis au créancier." },
              { t: "p", text: "Lorsque la dette est garantie par une hypothèque, la loi n° 189-11 prévoit dans de nombreux cas une procédure de saisie immobilière abrégée, nettement plus rapide que la procédure ordinaire. Les dettes stipulées en devise étrangère peuvent être réclamées dans la devise convenue." },
            ],
          },
          {
            h: "5. Ce dont a besoin le créancier qui vit à l'étranger",
            blocks: [
              { t: "ul", items: [
                "Une procuration en faveur de son avocat, signée devant notaire dans son pays et apostillée. Nous expliquons comment la préparer dans notre guide sur [la procuration donnée depuis l'étranger](/fr/blog/acheter-bien-republique-dominicaine-sans-se-deplacer-procuration).",
                "Si le créancier est une société, ses statuts et la preuve des pouvoirs du signataire, également apostillés.",
                "La traduction en espagnol par un interprète judiciaire des documents rédigés dans une autre langue.",
                "Prévoir la caution de l'étranger : l'article 16 du Code civil permet au défendeur d'exiger du demandeur étranger sans biens dans le pays une garantie pour les frais et dommages, sauf dispense prévue par un traité.",
              ] },
              { t: "p", text: "Si vous disposez déjà d'un jugement rendu dans votre pays, il doit d'abord être reconnu ici. Nous l'expliquons dans notre guide sur [l'exécution d'un jugement étranger](/fr/blog/executer-jugement-etranger-republique-dominicaine-exequatur)." },
            ],
          },
          {
            h: "6. Notre méthode",
            blocks: [
              { t: "ol", items: [
                "Nous examinons les documents de la dette et vous indiquons la voie la plus rapide et son coût estimé.",
                "Nous recherchons le patrimoine du débiteur dans le pays.",
                "Nous signifions la mise en demeure et, le cas échéant, demandons immédiatement les mesures conservatoires.",
                "Nous menons la procédure jusqu'au jugement et à l'exécution, avec des rapports réguliers dans votre langue.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Dois-je me rendre en République dominicaine pour recouvrer ma créance ?", a: "Non. Avec une procuration apostillée, votre avocat peut mettre en demeure, assigner, saisir et recevoir les fonds en votre nom." },
          { q: "Combien de temps prend le recouvrement ?", a: "Cela dépend du document et de la réaction du débiteur. Un paiement après mise en demeure peut intervenir en quelques semaines ; une procédure judiciaire complète prend plus de temps, d'où l'importance des mesures conservatoires précoces." },
          { q: "Que se passe-t-il si le débiteur n'a pas de biens ?", a: "C'est pourquoi nous recherchons son patrimoine avant d'agir. S'il n'existe ni biens ni revenus saisissables, nous vous le dirons franchement avant que vous n'engagiez des frais." },
        ],
        cta: {
          title: "Vous avez une créance impayée en République dominicaine ?",
          text: "Nous examinons vos documents, recherchons les biens du débiteur et conduisons le recouvrement de bout en bout sans que vous ayez à vous déplacer.",
          service: "Recouvrement de créances",
        },
      },
    },
  },

  // ---------------------------------------------------------------- Exequátur de sentencias extranjeras
  {
    key: "exequatur",
    date: "2026-10-17",
    slug: {
      es: "ejecutar-sentencia-extranjera-republica-dominicana-exequatur",
      en: "enforce-foreign-judgment-dominican-republic-exequatur",
      fr: "executer-jugement-etranger-republique-dominicaine-exequatur",
    },
    serviceHref: {
      es: "/servicios/litigacion-y-defensa-judicial",
      en: "/en/servicios/litigation",
      fr: "/fr/servicios/contentieux",
    },
    text: {
      es: {
        title: "Ejecutar una sentencia extranjera en República Dominicana: el exequátur",
        description:
          "Requisitos y procedimiento para reconocer y ejecutar en República Dominicana una sentencia o un laudo arbitral extranjero conforme a la Ley 544-14 y la Convención de Nueva York.",
        h1: "Cómo ejecutar en República Dominicana una sentencia dictada en el extranjero",
        intro: [
          "Una sentencia obtenida en Estados Unidos, España o cualquier otro país no se ejecuta por sí sola en República Dominicana. Para embargar los bienes del deudor aquí, debe ser reconocida previamente por un tribunal dominicano mediante el procedimiento de exequátur.",
          "El juez dominicano no vuelve a juzgar el caso. Se limita a verificar que la decisión reúne ciertas condiciones y, una vez reconocida, tiene la misma fuerza que una sentencia nacional.",
        ],
        sections: [
          {
            h: "1. El marco legal",
            blocks: [
              { t: "p", text: "El reconocimiento de decisiones extranjeras se rige por la Ley núm. 544-14 de Derecho Internacional Privado, salvo que un tratado disponga otra cosa. Entre los tratados aplicables figura el Código Bustamante, vigente con varios países de América Latina." },
              { t: "p", text: "Los laudos arbitrales extranjeros siguen su propio régimen: la Convención de Nueva York de 1958, de la que República Dominicana es parte desde 2002, y la Ley núm. 489-08 sobre Arbitraje Comercial." },
            ],
          },
          {
            h: "2. Condiciones que verifica el tribunal",
            blocks: [
              { t: "ul", items: [
                "Que el tribunal extranjero era competente para conocer el caso conforme a criterios compatibles con los del derecho dominicano.",
                "Que el demandado fue citado regularmente y tuvo oportunidad de defenderse.",
                "Que la sentencia es firme según la ley del país que la dictó.",
                "Que no es contraria al orden público dominicano.",
                "Que no es incompatible con una decisión dictada en República Dominicana, ni con un proceso iniciado antes en el país entre las mismas partes y con el mismo objeto.",
              ] },
              { t: "p", text: "El juez no examina si el tribunal extranjero apreció correctamente los hechos o aplicó bien el derecho." },
            ],
          },
          {
            h: "3. Documentos necesarios",
            blocks: [
              { t: "ul", items: [
                "Copia certificada de la sentencia.",
                "Certificación de que la sentencia es firme y ejecutoria en el país de origen.",
                "Prueba de la citación del demandado, en particular si la sentencia se dictó en defecto.",
                "Apostilla de cada documento. República Dominicana es parte del Convenio de La Haya sobre la Apostilla desde 2009.",
                "Traducción al español por intérprete judicial.",
              ] },
            ],
          },
          {
            h: "4. El procedimiento",
            blocks: [
              { t: "p", text: "La demanda en exequátur se interpone ante el tribunal de primera instancia competente y se notifica a la parte contra quien se pretende ejecutar la decisión, que puede oponerse alegando que falta alguna de las condiciones. La sentencia que concede o niega el exequátur es susceptible de recurso." },
              { t: "p", text: "Mientras se tramita, puede solicitarse al juez autorización para trabar medidas conservatorias sobre los bienes del deudor, de modo que no pueda traspasarlos antes de la ejecución. Vea nuestra guía sobre [cómo cobrar una deuda desde el exterior](/blog/cobrar-deuda-republica-dominicana-desde-el-exterior)." },
            ],
          },
          {
            h: "5. Después del exequátur",
            blocks: [
              { t: "p", text: "Concedido el exequátur, la decisión extranjera se ejecuta como una sentencia dominicana: embargo de cuentas bancarias, de bienes muebles e inmuebles y de acciones o cuotas sociales. Antes de iniciar el proceso investigamos el patrimonio del deudor en el país, para dirigir las medidas hacia los bienes de mayor valor y liquidez." },
            ],
          },
          {
            h: "6. Cómo lo trabajamos",
            blocks: [
              { t: "ol", items: [
                "Revisamos la sentencia o el laudo y le confirmamos si reúne las condiciones.",
                "Le indicamos qué documentos obtener en su país y coordinamos apostillas y traducciones.",
                "Interponemos el exequátur y solicitamos las medidas conservatorias que correspondan.",
                "Ejecutamos la decisión y le transferimos lo recuperado.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "¿Puede el juez dominicano modificar el monto de la condena?", a: "No revisa el fondo del asunto. Puede, sin embargo, negar el reconocimiento de la parte de la decisión que resulte contraria al orden público." },
          { q: "¿Se puede reconocer una sentencia dictada en defecto?", a: "Sí, siempre que se pruebe que el demandado fue citado regularmente y tuvo oportunidad de defenderse." },
          { q: "¿Qué ocurre con un laudo arbitral?", a: "Se reconoce conforme a la Convención de Nueva York, cuyas causales de denegación son limitadas, lo que suele hacer el trámite más previsible." },
          { q: "¿Debo viajar a República Dominicana?", a: "No. Con un poder apostillado su abogado conduce todo el procedimiento." },
        ],
        cta: {
          title: "¿Tiene una sentencia o un laudo contra un deudor en República Dominicana?",
          text: "Verificamos si su decisión reúne las condiciones, tramitamos el exequátur y ejecutamos sobre los bienes del deudor sin que usted tenga que viajar.",
          service: "Litigación y defensa judicial",
        },
      },
      en: {
        title: "Enforcing a foreign judgment in the Dominican Republic: exequatur",
        description:
          "Requirements and procedure to recognise and enforce a foreign judgment or arbitral award in the Dominican Republic under Law 544-14 and the New York Convention.",
        h1: "How to enforce a foreign judgment in the Dominican Republic",
        intro: [
          "A judgment obtained in the United States, Spain or any other country is not enforceable in the Dominican Republic on its own. To attach the debtor's assets here, it must first be recognised by a Dominican court through the exequatur procedure.",
          "The Dominican court does not retry the case. It only checks that the decision meets certain conditions and, once recognised, the judgment has the same force as a Dominican one.",
        ],
        sections: [
          {
            h: "1. The legal framework",
            blocks: [
              { t: "p", text: "Recognition of foreign decisions is governed by Private International Law 544-14, unless a treaty provides otherwise. Applicable treaties include the Bustamante Code, in force with several Latin American countries." },
              { t: "p", text: "Foreign arbitral awards follow their own regime: the 1958 New York Convention, to which the Dominican Republic has been a party since 2002, and Commercial Arbitration Law 489-08." },
            ],
          },
          {
            h: "2. Conditions the court checks",
            blocks: [
              { t: "ul", items: [
                "That the foreign court had jurisdiction under criteria compatible with Dominican law.",
                "That the defendant was properly served and had the opportunity to defend.",
                "That the judgment is final under the law of the country that issued it.",
                "That it is not contrary to Dominican public policy.",
                "That it does not conflict with a decision issued in the Dominican Republic, or with proceedings started earlier in the country between the same parties and on the same subject.",
              ] },
              { t: "p", text: "The court does not examine whether the foreign court assessed the facts correctly or applied the law properly." },
            ],
          },
          {
            h: "3. Documents required",
            blocks: [
              { t: "ul", items: [
                "A certified copy of the judgment.",
                "A certificate stating that the judgment is final and enforceable in the country of origin.",
                "Proof of service on the defendant, particularly if the judgment was entered by default.",
                "An apostille on each document. The Dominican Republic has been a party to the Hague Apostille Convention since 2009.",
                "A Spanish translation by a court-certified interpreter.",
              ] },
            ],
          },
          {
            h: "4. The procedure",
            blocks: [
              { t: "p", text: "The exequatur claim is filed before the competent court of first instance and served on the party against whom enforcement is sought, who may object on the ground that a condition is not met. The decision granting or refusing exequatur may be appealed." },
              { t: "p", text: "While the case is pending, the court may be asked to authorise protective measures over the debtor's assets so they cannot be transferred before enforcement. See our guide on [collecting a debt from abroad](/en/blog/collect-debt-dominican-republic-from-abroad)." },
            ],
          },
          {
            h: "5. After exequatur",
            blocks: [
              { t: "p", text: "Once exequatur is granted, the foreign decision is enforced like a Dominican judgment: attachment of bank accounts, movable and real property, and shares or company interests. Before starting we search for the debtor's assets in the country, so that measures target the most valuable and liquid ones." },
            ],
          },
          {
            h: "6. How we work",
            blocks: [
              { t: "ol", items: [
                "We review the judgment or award and confirm whether it meets the conditions.",
                "We tell you which documents to obtain in your country and coordinate apostilles and translations.",
                "We file for exequatur and request the appropriate protective measures.",
                "We enforce the decision and transfer the amounts recovered to you.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Can the Dominican court change the amount awarded?", a: "It does not review the merits. It may, however, refuse to recognise any part of the decision that is contrary to public policy." },
          { q: "Can a default judgment be recognised?", a: "Yes, provided it is shown that the defendant was properly served and had the opportunity to defend." },
          { q: "What about an arbitral award?", a: "It is recognised under the New York Convention, whose grounds for refusal are limited, which usually makes the process more predictable." },
          { q: "Do I need to travel to the Dominican Republic?", a: "No. With an apostilled power of attorney your lawyer handles the entire procedure." },
        ],
        cta: {
          title: "Do you hold a judgment or award against a debtor in the Dominican Republic?",
          text: "We check whether your decision meets the conditions, obtain exequatur and enforce against the debtor's assets without you having to travel.",
          service: "Litigation",
        },
      },
      fr: {
        title: "Exécuter un jugement étranger en République dominicaine : l'exequatur",
        description:
          "Conditions et procédure pour faire reconnaître et exécuter en République dominicaine un jugement ou une sentence arbitrale étrangère selon la loi 544-14 et la Convention de New York.",
        h1: "Comment exécuter en République dominicaine un jugement rendu à l'étranger",
        intro: [
          "Un jugement obtenu aux États-Unis, en France ou dans tout autre pays n'est pas exécutoire de plein droit en République dominicaine. Pour saisir les biens du débiteur ici, il doit d'abord être reconnu par un tribunal dominicain au moyen de la procédure d'exequatur.",
          "Le juge dominicain ne rejuge pas l'affaire. Il vérifie seulement que la décision remplit certaines conditions et, une fois reconnue, elle a la même force qu'un jugement dominicain.",
        ],
        sections: [
          {
            h: "1. Le cadre juridique",
            blocks: [
              { t: "p", text: "La reconnaissance des décisions étrangères est régie par la loi n° 544-14 de droit international privé, sauf disposition contraire d'un traité. Parmi les traités applicables figure le Code Bustamante, en vigueur avec plusieurs pays d'Amérique latine." },
              { t: "p", text: "Les sentences arbitrales étrangères suivent leur propre régime : la Convention de New York de 1958, à laquelle la République dominicaine est partie depuis 2002, et la loi n° 489-08 sur l'arbitrage commercial." },
            ],
          },
          {
            h: "2. Les conditions vérifiées par le tribunal",
            blocks: [
              { t: "ul", items: [
                "Que le tribunal étranger était compétent selon des critères compatibles avec ceux du droit dominicain.",
                "Que le défendeur a été régulièrement cité et a pu se défendre.",
                "Que le jugement est définitif selon la loi du pays qui l'a rendu.",
                "Qu'il n'est pas contraire à l'ordre public dominicain.",
                "Qu'il n'est pas incompatible avec une décision rendue en République dominicaine, ni avec une procédure engagée antérieurement dans le pays entre les mêmes parties et ayant le même objet.",
              ] },
              { t: "p", text: "Le juge n'examine pas si le tribunal étranger a correctement apprécié les faits ou appliqué le droit." },
            ],
          },
          {
            h: "3. Les documents nécessaires",
            blocks: [
              { t: "ul", items: [
                "Une copie certifiée conforme du jugement.",
                "Un certificat attestant que le jugement est définitif et exécutoire dans le pays d'origine.",
                "La preuve de la citation du défendeur, en particulier si le jugement a été rendu par défaut.",
                "L'apostille de chaque document. La République dominicaine est partie à la Convention de La Haye sur l'apostille depuis 2009.",
                "La traduction en espagnol par un interprète judiciaire.",
              ] },
            ],
          },
          {
            h: "4. La procédure",
            blocks: [
              { t: "p", text: "La demande d'exequatur est portée devant le tribunal de première instance compétent et signifiée à la partie contre laquelle l'exécution est poursuivie, qui peut s'y opposer en invoquant l'absence d'une condition. La décision qui accorde ou refuse l'exequatur est susceptible de recours." },
              { t: "p", text: "Pendant la procédure, il est possible de demander au juge l'autorisation de pratiquer des mesures conservatoires sur les biens du débiteur, afin qu'il ne puisse pas les transférer avant l'exécution. Voir notre guide sur [le recouvrement d'une créance depuis l'étranger](/fr/blog/recouvrer-creance-republique-dominicaine-depuis-l-etranger)." },
            ],
          },
          {
            h: "5. Après l'exequatur",
            blocks: [
              { t: "p", text: "Une fois l'exequatur accordé, la décision étrangère s'exécute comme un jugement dominicain : saisie des comptes bancaires, des biens meubles et immeubles et des actions ou parts sociales. Avant d'engager la procédure, nous recherchons le patrimoine du débiteur dans le pays afin de cibler les biens les plus importants et les plus liquides." },
            ],
          },
          {
            h: "6. Notre méthode",
            blocks: [
              { t: "ol", items: [
                "Nous examinons le jugement ou la sentence et vous confirmons s'il remplit les conditions.",
                "Nous vous indiquons les documents à obtenir dans votre pays et coordonnons apostilles et traductions.",
                "Nous introduisons la demande d'exequatur et sollicitons les mesures conservatoires appropriées.",
                "Nous exécutons la décision et vous transférons les sommes recouvrées.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Le juge dominicain peut-il modifier le montant de la condamnation ?", a: "Il ne révise pas le fond. Il peut toutefois refuser de reconnaître la partie de la décision contraire à l'ordre public." },
          { q: "Un jugement rendu par défaut peut-il être reconnu ?", a: "Oui, à condition de prouver que le défendeur a été régulièrement cité et a eu la possibilité de se défendre." },
          { q: "Qu'en est-il d'une sentence arbitrale ?", a: "Elle est reconnue selon la Convention de New York, dont les motifs de refus sont limités, ce qui rend généralement la procédure plus prévisible." },
          { q: "Dois-je me rendre en République dominicaine ?", a: "Non. Avec une procuration apostillée, votre avocat conduit toute la procédure." },
        ],
        cta: {
          title: "Vous détenez un jugement ou une sentence contre un débiteur en République dominicaine ?",
          text: "Nous vérifions que votre décision remplit les conditions, obtenons l'exequatur et exécutons sur les biens du débiteur sans que vous ayez à vous déplacer.",
          service: "Contentieux",
        },
      },
    },
  },
];
