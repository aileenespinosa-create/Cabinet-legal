import type { Article } from "@/lib/blogTypes";
import { ARTICLES_NEGOCIOS } from "@/lib/blogArticlesNegocios";

const LAND = "[Land Consulting DR](https://landconsultingdr.com)";

export const ARTICLES: Article[] = [
  // ---------------------------------------------------------------- Power of attorney from abroad (3 languages)
  {
    key: "poder",
    date: "2026-09-29",
    slug: {
      es: "comprar-inmueble-republica-dominicana-sin-viajar-poder",
      en: "buy-property-dominican-republic-without-travelling-power-of-attorney",
      fr: "acheter-bien-republique-dominicaine-sans-se-deplacer-procuration",
    },
    serviceHref: { es: "/inversion-extranjera", en: "/en/inversion-extranjera", fr: "/fr/inversion-extranjera" },
    text: {
      es: {
        title: "Comprar o vender un inmueble en República Dominicana sin viajar: el poder desde el exterior",
        description:
          "Cómo otorgar desde el extranjero un poder especial para comprar o vender un inmueble en República Dominicana: apostilla, consulado, traducción, requisitos del Registro de Títulos e impuestos.",
        h1: "Comprar o vender un inmueble en República Dominicana sin viajar: el poder desde el exterior",
        intro: [
          "Buena parte de nuestros clientes que residen fuera del país compra, vende o hereda inmuebles en República Dominicana sin necesidad de viajar. La herramienta es el poder especial: el documento mediante el cual usted autoriza a una persona de su confianza, por lo general su abogado, a firmar y tramitar en su nombre.",
          "Para que el Registro de Títulos y la Dirección General de Impuestos Internos (DGII) lo acepten, el poder debe cumplir requisitos de forma y de contenido. Estos son los que revisamos en cada caso.",
        ],
        sections: [
          {
            h: "1. Un poder especial, no uno general",
            blocks: [
              { t: "p", text: "El Reglamento General de Registro de Títulos (Resolución núm. 788-2022) dispone que las inscripciones se solicitan por el propietario o por su representante con poder especial. Un poder general puede servir para otros actos, pero para transferir un inmueble conviene otorgar uno específico para la operación." },
              { t: "ul", items: [
                "Identificación completa de quien otorga el poder y del apoderado. Si usted es extranjero no residente, su pasaporte o documento oficial de identidad.",
                "Descripción del inmueble por su designación catastral, municipio, provincia y matrícula, tal como figura en el certificado de título.",
                "Los actos autorizados, con precisión: firmar el contrato, recibir o pagar el precio, pagar impuestos, depositar el expediente y retirar el nuevo certificado de título.",
                "Si usted está casado, la intervención de su cónyuge cuando el inmueble forme parte de la comunidad o constituya la vivienda familiar.",
              ] },
            ],
          },
          {
            h: "2. Dónde firmarlo: tres vías",
            blocks: [
              { t: "ul", items: [
                "Ante un notario de su país, con apostilla. República Dominicana es parte del Convenio de La Haya sobre la Apostilla desde el 30 de agosto de 2009, de modo que el poder otorgado en otro país miembro solo necesita la apostilla de ese país. La excepción es Alemania: la apostilla no se acepta entre ambos países y el documento debe legalizarse por la vía consular.",
                "En un país que no forma parte del Convenio: el poder debe legalizarse por la vía consular y ser visado por el Ministerio de Relaciones Exteriores, conforme al artículo 21 de la Ley núm. 140-15 del Notariado.",
                "Ante el cónsul dominicano. Los cónsules ejercen funciones notariales para actos que deban ejecutarse en territorio dominicano (Ley núm. 716 de 1944 y Ley núm. 140-15). Suelen requerir su identificación, los datos del apoderado, una copia del título y testigos.",
              ] },
            ],
          },
          {
            h: "3. Traducción al español",
            blocks: [
              { t: "p", text: "Todo documento redactado en un idioma distinto del español debe traducirse por un intérprete competente para surtir efecto ante el Registro Inmobiliario. En la práctica, la traducción la realiza un intérprete judicial en República Dominicana, y el poder se presenta junto con su traducción." },
            ],
          },
          {
            h: "4. Lo que exige la DGII y los impuestos de la operación",
            blocks: [
              { t: "ul", items: [
                "Si el vendedor es no residente y actúa mediante apoderado, la DGII exige un poder debidamente apostillado (Norma General núm. 03-2024).",
                "El contrato de venta debe llevar las firmas legalizadas por notario, y la firma del notario certificada por la Procuraduría General de la República.",
                "El comprador paga el impuesto de transferencia del 3 % del valor del inmueble (Ley núm. 173-07). La DGII toma el mayor entre el valor que tiene registrado y el precio del contrato, y el pago debe hacerse dentro de los seis meses siguientes a la transferencia para evitar recargos.",
                "El vendedor debe estar al día con el Impuesto al Patrimonio Inmobiliario (IPI). En 2026 están exentas las personas físicas cuyo patrimonio inmobiliario total no supere RD$10,695,494.",
              ] },
            ],
          },
          {
            h: "5. Cómo trabajamos un cierre a distancia",
            blocks: [
              { t: "ol", items: [
                "Verificamos el título y el estado jurídico del inmueble antes de cualquier pago. Vea [cómo verificar el título de un inmueble](/blog/verificar-titulo-inmueble-republica-dominicana).",
                "Redactamos el poder a la medida del inmueble y de la operación, y le indicamos dónde y cómo firmarlo según su país.",
                "Usted lo firma, lo apostilla o lo legaliza, y nos envía el original por mensajería.",
                "Firmamos el contrato en su nombre con las firmas legalizadas.",
                "Pagamos los impuestos y depositamos el expediente ante el Registro de Títulos.",
                "Le remitimos el nuevo certificado de título a su nombre.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "¿Puede mi abogado ser el apoderado?", a: "Sí. Es la práctica más frecuente, porque el abogado que conduce la operación puede firmar y tramitar sin intermediarios." },
          { q: "¿El poder tiene fecha de vencimiento?", a: "La normativa registral no fija un plazo máximo, pero algunas entidades pueden pedir un poder reciente. Por eso recomendamos otorgarlo cuando la operación esté próxima." },
          { q: "¿Me sirve un poder general que ya otorgué?", a: "Para inscribir una transferencia, el Reglamento exige poder especial. Un poder general puede servir para otros actos, pero conviene otorgar uno específico para la venta o la compra." },
        ],
        cta: {
          title: "¿Necesita comprar, vender o heredar sin viajar?",
          text: "Redactamos su poder a la medida de la operación, le indicamos dónde firmarlo y nos encargamos del resto hasta que el título quede a su nombre.",
          service: "Inversión extranjera",
        },
      },
      en: {
        title: "How to buy or sell property in the Dominican Republic without travelling: power of attorney from abroad",
        description:
          "How to grant a special power of attorney from abroad to buy or sell property in the Dominican Republic: apostille, consulate, translation, Title Registry requirements and taxes.",
        h1: "How to buy or sell property in the Dominican Republic without travelling",
        intro: [
          "Many of our clients who live abroad buy, sell or inherit property in the Dominican Republic without ever travelling. The tool is a special power of attorney: a document by which you authorise someone you trust, usually your lawyer, to sign and handle the process on your behalf.",
          "For the Title Registry and the tax authority (DGII) to accept it, the power must meet requirements of form and content. These are the points we review in every case.",
        ],
        sections: [
          {
            h: "1. A special power, not a general one",
            blocks: [
              { t: "p", text: "The General Regulation of Title Registries (Resolution 788-2022) provides that registrations are requested by the owner or by a representative holding a special power of attorney. A general power may work for other acts, but a property transfer calls for a power drafted for that specific transaction." },
              { t: "ul", items: [
                "Full identification of the grantor and of the attorney-in-fact. For a non-resident foreigner, your passport or official identity document.",
                "Description of the property by its cadastral designation, municipality, province and registration number, exactly as shown on the certificate of title.",
                "The authorised acts, stated precisely: signing the contract, receiving or paying the price, paying taxes, filing the transfer and collecting the new certificate of title.",
                "If you are married, your spouse's participation when the property is marital property or the family home.",
              ] },
            ],
          },
          {
            h: "2. Where to sign it: three options",
            blocks: [
              { t: "ul", items: [
                "Before a notary in your country, with an apostille. The Dominican Republic has been a party to the Hague Apostille Convention since 30 August 2009, so a power granted in another member country only needs that country's apostille. The exception is Germany: the apostille is not accepted between the two countries, and the document must be legalised through the consulate.",
                "In a country that is not a party to the Convention: the power must be legalised through the consulate and endorsed by the Dominican Ministry of Foreign Affairs, under article 21 of Notary Law 140-15.",
                "Before a Dominican consul. Dominican consuls act as notaries for acts to be carried out in the Dominican Republic (Law 716 of 1944 and Law 140-15). They usually ask for your ID, the details of your attorney-in-fact, a copy of the title and witnesses.",
              ] },
            ],
          },
          {
            h: "3. Translation into Spanish",
            blocks: [
              { t: "p", text: "Any document in a language other than Spanish must be translated by a competent interpreter to be valid before the Property Registry. In practice, the translation is done by a court-certified interpreter (intérprete judicial) in the Dominican Republic, and the power is filed together with its translation." },
            ],
          },
          {
            h: "4. Tax authority requirements and transaction taxes",
            blocks: [
              { t: "ul", items: [
                "If the seller is a non-resident acting through an attorney-in-fact, the DGII requires a duly apostilled power (General Rule 03-2024).",
                "The sale contract must bear signatures certified by a notary, and the notary's signature must be certified by the Attorney General's Office.",
                "The buyer pays the 3% transfer tax on the property value (Law 173-07). The DGII uses the higher of its recorded value and the contract price, and payment must be made within six months of the transfer to avoid surcharges.",
                "The seller must be current on the annual property tax (IPI). In 2026, individuals whose total real estate holdings do not exceed RD$10,695,494 are exempt.",
              ] },
            ],
          },
          {
            h: "5. How we handle a remote closing",
            blocks: [
              { t: "ol", items: [
                "We verify the title and the legal status of the property before any payment. See [how to verify a property title](/en/blog/verify-property-title-dominican-republic).",
                "We draft the power for the specific property and transaction, and tell you where and how to sign it in your country.",
                "You sign it, have it apostilled or legalised, and courier the original to us.",
                "We sign the contract on your behalf with certified signatures.",
                "We pay the taxes and file the transfer with the Title Registry.",
                "We send you the new certificate of title in your name.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Can my lawyer be my attorney-in-fact?", a: "Yes. It is the most common practice, because the lawyer handling the transaction can sign and file without intermediaries." },
          { q: "Does the power of attorney expire?", a: "The registry rules set no maximum age, but some institutions may ask for a recent power. We therefore recommend granting it when the transaction is close." },
          { q: "Can I use a general power of attorney I already have?", a: "To register a transfer, the Regulation requires a special power. A general power may work for other acts, but a specific one for the sale or purchase is advisable." },
        ],
        cta: {
          title: "Need to buy, sell or inherit without travelling?",
          text: "We draft your power of attorney for the specific transaction, tell you where to sign it and handle everything else until the title is in your name.",
          service: "Foreign investment services",
        },
      },
      fr: {
        title: "Acheter ou vendre un bien en République dominicaine sans se déplacer : la procuration depuis l'étranger",
        description:
          "Comment établir depuis l'étranger une procuration spéciale pour acheter ou vendre un bien en République dominicaine : apostille, consulat, traduction, exigences du Registre des titres et impôts.",
        h1: "Acheter ou vendre un bien en République dominicaine sans se déplacer",
        intro: [
          "Beaucoup de nos clients qui vivent à l'étranger achètent, vendent ou héritent d'un bien en République dominicaine sans jamais se déplacer. L'outil est la procuration spéciale : l'acte par lequel vous autorisez une personne de confiance, le plus souvent votre avocat, à signer et à mener les démarches en votre nom.",
          "Pour que le Registre des titres et l'administration fiscale (DGII) l'acceptent, la procuration doit respecter des exigences de forme et de fond. Voici les points que nous vérifions dans chaque dossier.",
        ],
        sections: [
          {
            h: "1. Une procuration spéciale, pas générale",
            blocks: [
              { t: "p", text: "Le Règlement général des Registres des titres (Résolution 788-2022) prévoit que les inscriptions sont demandées par le propriétaire ou par son représentant muni d'une procuration spéciale. Une procuration générale peut servir à d'autres actes, mais un transfert immobilier exige une procuration rédigée pour l'opération concernée." },
              { t: "ul", items: [
                "L'identification complète du mandant et du mandataire. Pour un étranger non résident, son passeport ou document officiel d'identité.",
                "La description du bien par sa désignation cadastrale, sa commune, sa province et son numéro d'inscription, tels qu'ils figurent sur le certificat de titre.",
                "Les actes autorisés, précisément énumérés : signer le contrat, recevoir ou payer le prix, payer les impôts, déposer le dossier et retirer le nouveau certificat de titre.",
                "Si vous êtes marié, l'intervention de votre conjoint lorsque le bien est commun ou constitue le logement familial.",
              ] },
            ],
          },
          {
            h: "2. Où la signer : trois options",
            blocks: [
              { t: "ul", items: [
                "Devant un notaire de votre pays, avec apostille. La République dominicaine est partie à la Convention de La Haye sur l'apostille depuis le 30 août 2009 : une procuration établie dans un autre État membre n'a besoin que de l'apostille de cet État. Exception : l'Allemagne, où l'apostille n'est pas acceptée entre les deux pays et le document doit être légalisé par la voie consulaire.",
                "Dans un pays non partie à la Convention : la procuration doit être légalisée par la voie consulaire et visée par le ministère dominicain des Affaires étrangères, conformément à l'article 21 de la loi 140-15 sur le notariat.",
                "Devant le consul dominicain. Les consuls exercent des fonctions notariales pour les actes destinés à être exécutés en République dominicaine (loi 716 de 1944 et loi 140-15). Ils demandent en général votre pièce d'identité, les coordonnées du mandataire, une copie du titre et des témoins.",
              ] },
            ],
          },
          {
            h: "3. La traduction en espagnol",
            blocks: [
              { t: "p", text: "Tout document rédigé dans une autre langue que l'espagnol doit être traduit par un interprète compétent pour produire effet devant le Registre immobilier. En pratique, la traduction est faite par un interprète judiciaire en République dominicaine, et la procuration est déposée avec sa traduction." },
            ],
          },
          {
            h: "4. Les exigences de la DGII et les impôts de l'opération",
            blocks: [
              { t: "ul", items: [
                "Si le vendeur est non résident et agit par mandataire, la DGII exige une procuration dûment apostillée (Norme générale 03-2024).",
                "Le contrat de vente doit porter des signatures légalisées par un notaire, et la signature du notaire doit être certifiée par le Parquet général (Procuraduría General de la República).",
                "L'acheteur paie l'impôt de mutation de 3 % de la valeur du bien (loi 173-07). La DGII retient la plus élevée entre la valeur qu'elle a enregistrée et le prix du contrat, et le paiement doit intervenir dans les six mois suivant le transfert pour éviter des majorations.",
                "Le vendeur doit être à jour de l'impôt sur le patrimoine immobilier (IPI). En 2026, les personnes physiques dont le patrimoine immobilier total ne dépasse pas 10 695 494 RD$ en sont exonérées.",
              ] },
            ],
          },
          {
            h: "5. Comment nous menons une signature à distance",
            blocks: [
              { t: "ol", items: [
                "Nous vérifions le titre et la situation juridique du bien avant tout paiement. Voir [comment vérifier le titre d'un bien](/fr/blog/verifier-titre-propriete-republique-dominicaine).",
                "Nous rédigeons la procuration pour le bien et l'opération concernés, et vous indiquons où et comment la signer dans votre pays.",
                "Vous la signez, la faites apostiller ou légaliser, et nous envoyez l'original par messagerie.",
                "Nous signons le contrat en votre nom, avec des signatures légalisées.",
                "Nous payons les impôts et déposons le dossier au Registre des titres.",
                "Nous vous adressons le nouveau certificat de titre à votre nom.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Mon avocat peut-il être mon mandataire ?", a: "Oui. C'est la pratique la plus courante, car l'avocat qui conduit l'opération peut signer et déposer le dossier sans intermédiaire." },
          { q: "La procuration a-t-elle une date d'expiration ?", a: "La réglementation du registre ne fixe pas de durée maximale, mais certaines institutions peuvent demander une procuration récente. Nous recommandons donc de l'établir lorsque l'opération est proche." },
          { q: "Puis-je utiliser une procuration générale que j'ai déjà ?", a: "Pour inscrire un transfert, le Règlement exige une procuration spéciale. Une procuration générale peut servir à d'autres actes, mais il est préférable d'en établir une spécifique à la vente ou à l'achat." },
        ],
        cta: {
          title: "Vous devez acheter, vendre ou hériter sans vous déplacer ?",
          text: "Nous rédigeons votre procuration pour l'opération concernée, vous indiquons où la signer et nous occupons du reste jusqu'à ce que le titre soit à votre nom.",
          service: "Investissement étranger",
        },
      },
    },
  },

  // ---------------------------------------------------------------- Title check (new, 3 languages)
  {
    key: "titulo",
    date: "2026-09-27",
    slug: {
      es: "verificar-titulo-inmueble-republica-dominicana",
      en: "verify-property-title-dominican-republic",
      fr: "verifier-titre-propriete-republique-dominicaine",
    },
    serviceHref: { es: "/inversion-extranjera", en: "/en/inversion-extranjera", fr: "/fr/inversion-extranjera" },
    text: {
      es: {
        title: "Cómo verificar el título de un inmueble antes de comprar en República Dominicana",
        description:
          "Qué revisar antes de comprar un inmueble en República Dominicana: certificación del estado jurídico, deslinde, capacidad del vendedor, impuestos y protección del pago.",
        h1: "Cómo verificar el título de un inmueble antes de comprar en República Dominicana",
        intro: [
          "En República Dominicana la propiedad inmobiliaria registrada se acredita con el certificado de título que expide el Registro de Títulos, conforme a la Ley núm. 108-05 de Registro Inmobiliario. Ese documento es la base de toda compra segura, pero la copia que entrega el vendedor o el agente no basta para comprar con tranquilidad.",
          "Estos son los pasos que seguimos en Cabinet Legal antes de que un cliente comprometa un solo peso.",
        ],
        sections: [
          {
            h: "1. Solicitar la certificación del estado jurídico del inmueble",
            blocks: [
              { t: "p", text: "La emite el Registro de Títulos y acredita la vigencia del duplicado del certificado de título y los asientos que constan en el registro a la fecha de su expedición: hipotecas, embargos, oposiciones, anotaciones preventivas y cualquier otra carga. Una copia del título, en cambio, solo muestra la situación del día en que se imprimió." },
              { t: "p", text: "Puede solicitarse de forma presencial o por los canales digitales de la Jurisdicción Inmobiliaria. Conviene pedirla al inicio de la negociación y actualizarla lo más cerca posible del cierre." },
            ],
          },
          {
            h: "2. Confirmar que el inmueble está deslindado",
            blocks: [
              { t: "p", text: "Un inmueble deslindado tiene designación catastral propia y linderos individualizados. Cuando lo que se ofrece es una constancia anotada, el vendedor tiene derechos sobre una porción de una parcela mayor, pero esa porción no está ubicada ni delimitada de forma definitiva." },
              { t: "p", text: "Comprar con constancia anotada no está prohibido, pero implica riesgos de ubicación y linderos, y obliga a prever el deslinde ante la Jurisdicción Inmobiliaria. El precio y el contrato deben reflejarlo." },
            ],
          },
          {
            h: "3. Verificar que quien vende puede vender",
            blocks: [
              { t: "ul", items: [
                "Persona física: identidad del titular registrado y estado civil. Si el inmueble forma parte de la comunidad de bienes o es la vivienda familiar, se requiere el consentimiento del cónyuge.",
                "Sociedad: existencia y vigencia de la empresa, acta del órgano competente que autoriza la venta y poderes de quien firma.",
                "Sucesión: determinación de herederos y transferencia a nombre de los herederos antes de la venta, o su participación en el acto.",
                "Apoderado: poder vigente, específico para la operación y debidamente legalizado o apostillado si se otorgó en el extranjero.",
              ] },
            ],
          },
          {
            h: "4. Revisar impuestos y deudas del inmueble",
            blocks: [
              { t: "p", text: "El vendedor debe estar al día con el Impuesto al Patrimonio Inmobiliario (IPI) ante la DGII, porque la transferencia no se inscribe con deudas pendientes. En condominios, se solicita el estado de cuenta de las cuotas de mantenimiento. El comprador, por su parte, debe presupuestar el impuesto de transferencia inmobiliaria, del 3 % del valor, salvo exención aplicable como la de CONFOTUR." },
            ],
          },
          {
            h: "5. Comparar el papel con el terreno",
            blocks: [
              { t: "p", text: `El título puede estar en orden y el inmueble no coincidir con él: área distinta, linderos invadidos, ocupantes o construcciones sin permiso. Por eso la revisión documental se complementa con una verificación técnica en el terreno, que realizamos junto a ${LAND}.` },
            ],
          },
          {
            h: "6. Proteger el dinero hasta el cierre",
            blocks: [
              { t: "ul", items: [
                "Contrato de promesa de venta con condición suspensiva vinculada al resultado de la debida diligencia.",
                "Depósito protegido, con reglas claras de devolución si la operación no se concreta.",
                "Pago del precio contra la entrega de los documentos necesarios para inscribir la transferencia.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "¿Basta con la copia del certificado de título que entrega el vendedor?", a: "No. La copia no acredita las cargas vigentes. Debe solicitarse la certificación del estado jurídico del inmueble al Registro de Títulos." },
          { q: "¿Puedo verificar un inmueble sin viajar a República Dominicana?", a: "Sí. Su abogado puede realizar la debida diligencia completa y, mediante poder, representarle en la firma y el cierre." },
        ],
        cta: {
          title: "¿Evalúa un inmueble en República Dominicana?",
          text: "Verificamos el título, el terreno y el contrato antes de que usted firme, para que decida con información comprobada y no con lo que afirma el vendedor.",
          service: "Ver servicio de inversión extranjera",
        },
      },
      en: {
        title: "How to verify a property title before buying in the Dominican Republic",
        description:
          "What to check before buying property in the Dominican Republic: official title status certificate, survey, seller's capacity, taxes and how to protect your deposit.",
        h1: "How to verify a property title before buying in the Dominican Republic",
        intro: [
          "In the Dominican Republic, registered real estate is evidenced by a certificate of title issued by the Title Registry under Law 108-05 on Real Estate Registration. That certificate is the foundation of any safe purchase, but the copy handed over by the seller or the agent is not enough to buy with peace of mind.",
          "These are the steps we follow at Cabinet Legal before a client commits a single dollar.",
        ],
        sections: [
          {
            h: "1. Obtain the official certificate of the property's legal status",
            blocks: [
              { t: "p", text: "Issued by the Title Registry, the certificación del estado jurídico confirms that the duplicate certificate of title is valid and lists every entry on record as of its date: mortgages, liens, attachments, objections and any other encumbrance. A copy of the title only shows the situation on the day it was printed." },
              { t: "p", text: "It can be requested in person or through the Real Estate Jurisdiction's online channels. Ask for it early in the negotiation and update it as close to closing as possible." },
            ],
          },
          {
            h: "2. Confirm the property has been individually surveyed (deslinde)",
            blocks: [
              { t: "p", text: "A surveyed property has its own cadastral designation and defined boundaries. When the seller holds a constancia anotada instead, he owns rights over a portion of a larger parcel, but that portion has not been definitively located or delimited." },
              { t: "p", text: "Buying under a constancia anotada is not prohibited, but it carries location and boundary risks and requires planning the survey process before the Real Estate Jurisdiction. The price and the contract should reflect that." },
            ],
          },
          {
            h: "3. Make sure the seller is entitled to sell",
            blocks: [
              { t: "ul", items: [
                "Individual owner: identity of the registered owner and marital status. If the property is marital community property or the family home, the spouse's consent is required.",
                "Company: existence and good standing, a resolution of the competent body authorizing the sale, and the signatory's powers.",
                "Estate: a court determination of heirs and transfer to the heirs before the sale, or their participation in the deed.",
                "Attorney-in-fact: a valid power of attorney, specific to the transaction and legalized or apostilled if granted abroad.",
              ] },
            ],
          },
          {
            h: "4. Check property taxes and outstanding debts",
            blocks: [
              { t: "p", text: "The seller must be current on the annual property tax (IPI) with the tax authority (DGII), since the transfer cannot be registered with pending debts. For condominiums, request a statement of maintenance fees. As buyer, budget for the 3% real estate transfer tax, unless an exemption such as CONFOTUR applies." },
            ],
          },
          {
            h: "5. Compare the paperwork with the land",
            blocks: [
              { t: "p", text: `The title may be in order while the property does not match it: a different area, encroached boundaries, occupants or unpermitted construction. That is why the document review is complemented by an on-site technical verification, which we carry out with ${LAND}.` },
            ],
          },
          {
            h: "6. Protect your money until closing",
            blocks: [
              { t: "ul", items: [
                "A purchase promise agreement subject to a condition precedent tied to the due diligence results.",
                "A protected deposit, with clear refund rules if the transaction does not close.",
                "Payment of the price against delivery of every document needed to register the transfer.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Is the copy of the title provided by the seller enough?", a: "No. A copy does not prove the current encumbrances. You need the certificate of legal status issued by the Title Registry." },
          { q: "Can I verify a property without traveling to the Dominican Republic?", a: "Yes. Your lawyer can carry out the full due diligence and, under a power of attorney, represent you at signing and closing." },
        ],
        cta: {
          title: "Considering a property in the Dominican Republic?",
          text: "We verify the title, the land and the contract before you sign, so you decide on verified facts rather than on what the seller says.",
          service: "Foreign investment services",
        },
      },
      fr: {
        title: "Comment vérifier le titre d'un bien avant d'acheter en République dominicaine",
        description:
          "Ce qu'il faut vérifier avant d'acheter un bien en République dominicaine : certificat de situation juridique, bornage, capacité du vendeur, impôts et protection de l'acompte.",
        h1: "Comment vérifier le titre d'un bien avant d'acheter en République dominicaine",
        intro: [
          "En République dominicaine, la propriété immobilière enregistrée est prouvée par le certificat de titre délivré par le Registre des titres, conformément à la loi 108-05 sur l'enregistrement immobilier. Ce document est la base de tout achat sûr, mais la copie remise par le vendeur ou l'agent ne suffit pas pour acheter en toute sérénité.",
          "Voici les étapes que nous suivons chez Cabinet Legal avant qu'un client n'engage le moindre dollar.",
        ],
        sections: [
          {
            h: "1. Demander le certificat de situation juridique du bien",
            blocks: [
              { t: "p", text: "Délivrée par le Registre des titres, la certificación del estado jurídico atteste la validité du duplicata du certificat de titre et reprend toutes les inscriptions en vigueur à sa date : hypothèques, saisies, oppositions, inscriptions provisoires et toute autre charge. Une copie du titre ne montre que la situation au jour de son impression." },
              { t: "p", text: "Elle se demande en personne ou par les canaux numériques de la Juridiction immobilière. Il convient de la solliciter dès le début de la négociation et de l'actualiser au plus près de la signature." },
            ],
          },
          {
            h: "2. Confirmer que le bien a fait l'objet d'un bornage (deslinde)",
            blocks: [
              { t: "p", text: "Un bien borné dispose de sa propre désignation cadastrale et de limites individualisées. Lorsque le vendeur détient une constancia anotada, il possède des droits sur une portion d'une parcelle plus grande, sans que cette portion soit localisée ni délimitée de façon définitive." },
              { t: "p", text: "Acheter sur constancia anotada n'est pas interdit, mais cela comporte des risques de localisation et de limites et impose de prévoir le bornage devant la Juridiction immobilière. Le prix et le contrat doivent en tenir compte." },
            ],
          },
          {
            h: "3. Vérifier que le vendeur peut vendre",
            blocks: [
              { t: "ul", items: [
                "Personne physique : identité du propriétaire inscrit et situation matrimoniale. Si le bien relève de la communauté ou constitue le logement familial, le consentement du conjoint est requis.",
                "Société : existence et régularité de la société, décision de l'organe compétent autorisant la vente et pouvoirs du signataire.",
                "Succession : détermination des héritiers et transfert à leur nom avant la vente, ou leur intervention à l'acte.",
                "Mandataire : procuration en vigueur, spécifique à l'opération, légalisée ou apostillée si elle a été établie à l'étranger.",
              ] },
            ],
          },
          {
            h: "4. Contrôler les impôts et les dettes du bien",
            blocks: [
              { t: "p", text: "Le vendeur doit être à jour de l'impôt sur le patrimoine immobilier (IPI) auprès de l'administration fiscale (DGII), faute de quoi le transfert ne peut être inscrit. En copropriété, il faut obtenir l'état des charges. L'acheteur, de son côté, doit prévoir l'impôt de mutation de 3 % de la valeur, sauf exonération applicable comme celle de CONFOTUR." },
            ],
          },
          {
            h: "5. Confronter les documents au terrain",
            blocks: [
              { t: "p", text: `Le titre peut être en règle sans que le bien y corresponde : surface différente, limites empiétées, occupants ou constructions sans permis. C'est pourquoi l'examen documentaire est complété par une vérification technique sur place, que nous réalisons avec ${LAND}.` },
            ],
          },
          {
            h: "6. Protéger les fonds jusqu'à la signature",
            blocks: [
              { t: "ul", items: [
                "Une promesse de vente assortie d'une condition suspensive liée au résultat de l'audit juridique.",
                "Un acompte protégé, avec des règles claires de restitution si l'opération n'aboutit pas.",
                "Le paiement du prix contre remise de tous les documents nécessaires à l'inscription du transfert.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "La copie du titre remise par le vendeur suffit-elle ?", a: "Non. Une copie ne prouve pas les charges en vigueur. Il faut obtenir le certificat de situation juridique délivré par le Registre des titres." },
          { q: "Puis-je faire vérifier un bien sans me rendre en République dominicaine ?", a: "Oui. Votre avocat peut mener l'audit complet et, par procuration, vous représenter à la signature." },
        ],
        cta: {
          title: "Vous envisagez un bien en République dominicaine ?",
          text: "Nous vérifions le titre, le terrain et le contrat avant votre signature, pour que vous décidiez sur des faits vérifiés et non sur les affirmations du vendeur.",
          service: "Investissement étranger",
        },
      },
    },
  },

  // ---------------------------------------------------------------- Buying property
  {
    key: "propiedad",
    date: "2026-06-01",
    slug: {
      es: "comprar-propiedad-republica-dominicana-extranjero",
      en: "buying-property-dominican-republic-foreigner",
      fr: "acheter-bien-immobilier-republique-dominicaine-etranger",
    },
    serviceHref: { es: "/inversion-extranjera", en: "/en/inversion-extranjera", fr: "/fr/inversion-extranjera" },
    text: {
      en: {
        title: "Buying property in the Dominican Republic as a foreigner",
        description:
          "Buying property in the Dominican Republic as a foreigner: requirements, title due diligence, notarial closing, CONFOTUR and the mistakes to avoid.",
        h1: "How to buy property in the Dominican Republic as a foreigner",
        intro: [
          "The Dominican Republic is one of the most active real estate markets in the Caribbean for foreign buyers, and the law requires neither residency nor a Dominican partner to acquire property. Being allowed to buy, however, does not mean buying without legal protection. This guide covers what every foreign buyer should know before signing.",
        ],
        sections: [
          {
            h: "1. No residency required, but due diligence is essential",
            blocks: [
              { t: "p", text: "Law 16-95 on Foreign Investment grants foreign investment the same treatment as domestic investment. You may buy, hold and sell real estate on the same terms as any Dominican. What the law does not do for you is confirm that the seller is the registered owner, that the property is free of mortgages and liens, and that the boundaries match the certificate of title. That is established through title due diligence before the Real Estate Jurisdiction, before you commit a single dollar." },
              { t: "p", text: "We explain each step in our guide on [how to verify a property title](/en/blog/verify-property-title-dominican-republic)." },
            ],
          },
          {
            h: "2. The process at a glance",
            blocks: [
              { t: "p", text: "It starts with an offer or letter of intent, followed by a purchase promise agreement setting the price, timeline and conditions. While due diligence is completed, we confirm the seller is current on the property tax (IPI). Closing takes place before a notary, in person or through a power of attorney if you cannot travel. The 3% transfer tax is then paid, unless an exemption applies, and the new title is registered in your name." },
            ],
          },
          {
            h: "3. CONFOTUR can reduce your tax burden",
            blocks: [
              { t: "p", text: "If the property belongs to a project with a valid CONFOTUR classification under Law 158-01 on Tourism Development, you may qualify for an exemption from the transfer tax on the first acquisition and from the IPI, on the terms set by the law, its amendments and the project's classification resolution, for a period that can reach 15 years. Not every project marketed as \"CONFOTUR\" holds a valid approval that applies to your specific unit: verify it before you buy, not after." },
            ],
          },
          {
            h: "4. Common mistakes we see among foreign buyers",
            blocks: [
              { t: "ul", items: [
                "Signing a purchase promise without a condition precedent tied to the due diligence results.",
                "Paying a deposit that is not contractually protected if the deal falls through.",
                "Assuming a project enjoys CONFOTUR benefits because the developer says so, without independent verification.",
                "Closing without your own lawyer, relying only on the lawyer or notary appointed by the seller or the agency.",
              ] },
            ],
          },
          {
            h: "5. Technical verification and legal structuring",
            blocks: [
              { t: "p", text: `Two different jobs should be separated before signing: confirming the land or property is exactly what is promised (boundaries, permits, project feasibility) and structuring the purchase legally (contract, closing, registration). We work with ${LAND} on the technical side, while Cabinet Legal structures, negotiates and executes the purchase.` },
            ],
          },
        ],
        faq: [
          { q: "Do I need to be a resident to buy property in the Dominican Republic?", a: "No. Law 16-95 on Foreign Investment allows non-resident foreigners to buy, hold and sell real estate on the same terms as Dominicans." },
          { q: "Can I buy without traveling to the Dominican Republic?", a: "Yes, through a special power of attorney granted to your lawyer, who represents you during due diligence, signing and the notarial closing." },
        ],
        cta: {
          title: "Considering a property purchase in the Dominican Republic?",
          text: "We review the title, the contract and the structure of the purchase before you sign, so you decide on verified information rather than on the seller's word.",
          service: "Foreign investment services",
        },
      },
      fr: {
        title: "Acheter un bien immobilier en République dominicaine en tant qu'étranger",
        description:
          "Acheter un bien en République dominicaine en tant qu'étranger : conditions, audit du titre, signature notariée, CONFOTUR et erreurs à éviter.",
        h1: "Acheter un bien immobilier en République dominicaine en tant qu'étranger",
        intro: [
          "La République dominicaine est l'un des marchés immobiliers les plus actifs des Caraïbes pour les acheteurs étrangers, et la loi n'exige ni résidence ni associé dominicain pour acquérir un bien. Pouvoir acheter ne signifie pas pour autant acheter sans protection juridique. Ce guide résume ce que tout acheteur étranger doit savoir avant de signer.",
        ],
        sections: [
          {
            h: "1. Pas de résidence exigée, mais un audit indispensable",
            blocks: [
              { t: "p", text: "La loi 16-95 sur l'investissement étranger accorde à l'investissement étranger le même traitement qu'à l'investissement national. Vous pouvez acheter, détenir et vendre un bien dans les mêmes conditions qu'un Dominicain. En revanche, la loi ne vérifie pas pour vous que le vendeur est bien le propriétaire inscrit, que le bien est libre d'hypothèques et de saisies et que ses limites correspondent au certificat de titre. Cela se confirme par un audit du titre auprès de la Juridiction immobilière, avant d'engager le moindre dollar." },
              { t: "p", text: "Nous détaillons chaque étape dans notre article sur [la vérification du titre de propriété](/fr/blog/verifier-titre-propriete-republique-dominicaine)." },
            ],
          },
          {
            h: "2. Le déroulement en bref",
            blocks: [
              { t: "p", text: "Tout commence par une offre ou une lettre d'intention, suivie d'une promesse de vente qui fixe le prix, les délais et les conditions. Pendant l'audit, on vérifie que le vendeur est à jour de l'impôt sur le patrimoine immobilier (IPI). La signature a lieu devant notaire, en personne ou par procuration si vous ne pouvez pas vous déplacer. L'impôt de mutation de 3 % est ensuite acquitté, sauf exonération, et le nouveau titre est inscrit à votre nom." },
            ],
          },
          {
            h: "3. CONFOTUR peut alléger votre fiscalité",
            blocks: [
              { t: "p", text: "Si le bien fait partie d'un projet bénéficiant d'une classification CONFOTUR en vigueur, au titre de la loi 158-01 sur le développement touristique, vous pouvez être exonéré de l'impôt de mutation lors de la première acquisition et de l'IPI, dans les conditions prévues par la loi, ses modifications et la résolution de classification du projet, pour une durée pouvant atteindre 15 ans. Tous les projets présentés comme « CONFOTUR » ne disposent pas d'une approbation en vigueur applicable à votre lot : vérifiez-le avant d'acheter, pas après." },
            ],
          },
          {
            h: "4. Les erreurs fréquentes des acheteurs étrangers",
            blocks: [
              { t: "ul", items: [
                "Signer une promesse de vente sans condition suspensive liée au résultat de l'audit.",
                "Verser un acompte qui n'est pas protégé contractuellement si l'opération n'aboutit pas.",
                "Supposer qu'un projet bénéficie de CONFOTUR parce que le promoteur l'affirme, sans vérification indépendante.",
                "Signer sans avocat propre, en se fiant uniquement à l'avocat ou au notaire désigné par le vendeur ou l'agence.",
              ] },
            ],
          },
          {
            h: "5. Vérification technique et structuration juridique",
            blocks: [
              { t: "p", text: `Avant de signer, il faut distinguer deux missions : vérifier que le terrain ou le bien correspond exactement à ce qui est promis (limites, permis, faisabilité du projet) et structurer juridiquement l'achat (contrat, signature, inscription). Nous travaillons avec ${LAND} pour la partie technique, tandis que Cabinet Legal structure, négocie et exécute l'achat.` },
            ],
          },
        ],
        faq: [
          { q: "Faut-il être résident pour acheter un bien en République dominicaine ?", a: "Non. La loi 16-95 sur l'investissement étranger permet à un étranger non résident d'acheter, détenir et vendre un bien dans les mêmes conditions qu'un Dominicain." },
          { q: "Puis-je acheter sans me rendre en République dominicaine ?", a: "Oui, au moyen d'une procuration spéciale donnée à votre avocat, qui vous représente pendant l'audit, la signature et l'acte notarié." },
        ],
        cta: {
          title: "Vous envisagez un achat immobilier en République dominicaine ?",
          text: "Nous examinons le titre, le contrat et la structure de l'achat avant votre signature, pour que vous décidiez sur des informations vérifiées et non sur la parole du vendeur.",
          service: "Investissement étranger",
        },
      },
    },
  },

  // ---------------------------------------------------------------- Residency
  {
    key: "residencia",
    date: "2026-06-01",
    slug: {
      es: "residencia-por-inversion-republica-dominicana",
      en: "residency-by-investment-dominican-republic",
      fr: "residence-par-investissement-republique-dominicaine",
    },
    serviceHref: { es: "/residencia-y-permisos-de-trabajo", en: "/en/servicios/residency-and-immigration", fr: "/fr/servicios/residence-et-immigration" },
    text: {
      en: {
        title: "Residency by investment in the Dominican Republic: 2026 guide",
        description:
          "Residency by investment in the Dominican Republic: the available routes (real estate, business or financial), requirements, realistic timelines and common mistakes.",
        h1: "Residency by investment in the Dominican Republic: 2026 guide",
        intro: [
          "Many foreign property buyers and investors discover, well into the purchase or the business, that they may also qualify for legal residency in the Dominican Republic. This guide summarizes the available routes and what you can expect from the process.",
        ],
        sections: [
          {
            h: "The three most common routes",
            blocks: [
              { t: "p", text: "Residency by investment is available to those who invest in real estate, in a business established in the country or in a fixed-term deposit with a local financial institution, for the minimum amount required by current regulations. Residency for retirees and persons of independent means is aimed at those with fixed, verifiable income from abroad. Residency through employment or family ties applies to those hired by a Dominican company, who manage a local company, or who are married to or related to a Dominican national or resident." },
            ],
          },
          {
            h: "Realistic timelines",
            blocks: [
              { t: "p", text: "The process starts with a residency visa at a Dominican consulate. Once in the country, with a complete file, the General Directorate of Migration usually decides within two to three months. Temporary residency is renewed annually and, after five years, permanent residency may be requested; an investor who meets the requirements can apply directly for permanent residency." },
              { t: "p", text: "Longer timelines are almost always caused by incorrectly apostilled documents or by choosing the wrong immigration route from the outset, not by the procedure itself." },
            ],
          },
          {
            h: "Documents that often cause delays",
            blocks: [
              { t: "ul", items: [
                "Criminal record certificate from the country of origin that is not apostilled or whose apostille has expired.",
                "Medical certificate that does not follow the format required by the General Directorate of Migration.",
                "Proof of income or investment that does not exactly match the immigration route requested.",
              ] },
            ],
          },
          {
            h: "Residency is not the same as a work permit",
            blocks: [
              { t: "p", text: "Legal residency is the prerequisite for working or managing a company in the Dominican Republic, but the employer must also complete the labor registrations with the Ministry of Labor to formalize the hiring of a foreign national. If you plan to work in or run a company in the country, both processes should be handled in parallel from the start." },
            ],
          },
        ],
        faq: [
          { q: "Which investments qualify for residency by investment in the Dominican Republic?", a: "Real estate, a business established in the country or a fixed-term deposit with a local financial institution, for the minimum amount set by current regulations." },
          { q: "Does residency by investment require me to live in the Dominican Republic?", a: "It does not require permanent physical presence, but you must meet the renewal and presence requirements of the corresponding immigration category." },
        ],
        cta: {
          title: "Want to know which residency route fits your case?",
          text: "We assess your situation (investment, pension, employment or family ties) and tell you precisely which documents you need and how long the process may take.",
          service: "Residency services",
        },
      },
      fr: {
        title: "Résidence par investissement en République dominicaine : guide 2026",
        description:
          "Résidence par investissement en République dominicaine : les voies possibles (immobilier, entreprise ou placement), conditions, délais réalistes et erreurs fréquentes.",
        h1: "Résidence par investissement en République dominicaine : guide 2026",
        intro: [
          "De nombreux acheteurs et investisseurs étrangers découvrent, une fois l'achat ou le projet bien avancé, qu'ils peuvent aussi prétendre à la résidence légale en République dominicaine. Ce guide présente les voies disponibles et ce que vous pouvez attendre de la procédure.",
        ],
        sections: [
          {
            h: "Les trois voies les plus courantes",
            blocks: [
              { t: "p", text: "La résidence par investissement est ouverte à ceux qui investissent dans l'immobilier, dans une entreprise établie dans le pays ou dans un dépôt à terme auprès d'un établissement financier local, pour le montant minimum exigé par la réglementation en vigueur. La résidence pour retraités et rentiers s'adresse aux personnes disposant de revenus fixes et vérifiables provenant de l'étranger. La résidence pour motif professionnel ou familial concerne ceux qui sont embauchés par une entreprise dominicaine, qui dirigent une société locale ou qui ont un lien matrimonial ou familial avec un Dominicain ou un résident." },
            ],
          },
          {
            h: "Des délais réalistes",
            blocks: [
              { t: "p", text: "La procédure commence par un visa de résidence au consulat dominicain. Une fois dans le pays, avec un dossier complet, la Direction générale des migrations statue généralement en deux à trois mois. La résidence temporaire se renouvelle chaque année et, après cinq ans, la résidence permanente peut être demandée ; l'investisseur qui remplit les conditions peut accéder directement à la résidence permanente." },
              { t: "p", text: "Les délais plus longs tiennent presque toujours à des documents mal apostillés ou au choix d'une mauvaise voie migratoire dès le départ, et non à la procédure elle-même." },
            ],
          },
          {
            h: "Les documents qui retardent le plus souvent",
            blocks: [
              { t: "ul", items: [
                "Extrait de casier judiciaire du pays d'origine non apostillé ou dont l'apostille a expiré.",
                "Certificat médical qui ne respecte pas le format exigé par la Direction générale des migrations.",
                "Justificatif de revenus ou d'investissement qui ne correspond pas exactement à la voie demandée.",
              ] },
            ],
          },
          {
            h: "Résidence et permis de travail ne sont pas la même chose",
            blocks: [
              { t: "p", text: "La résidence légale est la condition préalable pour travailler ou diriger une entreprise en République dominicaine, mais l'employeur doit aussi effectuer les formalités auprès du ministère du Travail pour régulariser l'embauche d'un étranger. Si vous prévoyez de travailler ou de diriger une société dans le pays, il convient de mener les deux procédures en parallèle dès le départ." },
            ],
          },
        ],
        faq: [
          { q: "Quels investissements permettent d'obtenir la résidence en République dominicaine ?", a: "L'immobilier, une entreprise établie dans le pays ou un dépôt à terme dans un établissement financier local, pour le montant minimum fixé par la réglementation en vigueur." },
          { q: "La résidence par investissement oblige-t-elle à vivre en République dominicaine ?", a: "Elle n'exige pas de présence physique permanente, mais il faut respecter les conditions de renouvellement et de présence de la catégorie migratoire concernée." },
        ],
        cta: {
          title: "Quelle voie de résidence correspond à votre situation ?",
          text: "Nous analysons votre situation (investissement, retraite, emploi ou lien familial) et vous indiquons précisément les documents nécessaires et la durée probable de la procédure.",
          service: "Résidence et immigration",
        },
      },
    },
  },

  // ---------------------------------------------------------------- Company formation
  {
    key: "empresa",
    date: "2026-06-01",
    slug: {
      es: "abrir-empresa-republica-dominicana-extranjero",
      en: "open-company-dominican-republic-foreigner",
      fr: "creer-societe-republique-dominicaine-etranger",
    },
    serviceHref: { es: "/formacion-de-empresas", en: "/en/servicios/corporate-law", fr: "/fr/servicios/droit-des-societes" },
    text: {
      en: {
        title: "How to open a company in the Dominican Republic as a foreigner",
        description:
          "Opening a company in the Dominican Republic as a foreigner: choosing between SRL and SA, commercial registration, tax ID (RNC) and realistic timelines.",
        h1: "How to open a company in the Dominican Republic as a foreigner",
        intro: [
          "Neither residency nor Dominican nationality is required to incorporate a company in the Dominican Republic. What separates a well-structured business from one that causes problems years later is choosing the right corporate form from the outset.",
        ],
        sections: [
          {
            h: "SRL or SA: the first decision",
            blocks: [
              { t: "p", text: "The limited liability company (SRL) is the usual vehicle for small and medium-sized businesses: at least two partners, modest share capital and simple management by one or more managers instead of a board of directors." },
              { t: "p", text: "The corporation (SA) requires at least two shareholders and a board of directors, with more formal corporate governance. It is the recommended structure for larger businesses or those planning to bring in additional investors." },
            ],
          },
          {
            h: "The process, step by step",
            blocks: [
              { t: "ol", items: [
                "Trade name reservation with the National Industrial Property Office (ONAPI).",
                "Bylaws drafted for the actual business, not a generic template.",
                "Commercial registration with the relevant Chamber of Commerce.",
                "Tax ID (RNC) with the tax authority (DGII).",
                "Corporate bank account, the step whose timing varies most depending on the bank.",
              ] },
              { t: "p", text: "With documents in order, incorporation and commercial registration usually take two to four weeks, not counting the bank account opening." },
            ],
          },
          {
            h: "A minority partner does not mean losing control",
            blocks: [
              { t: "p", text: "Because the SRL requires at least two partners, some foreign investors assume they need a Dominican partner with a real stake. They do not: you can hold the majority and manage the company directly or through an attorney-in-fact, and no law requires management to be in the hands of a resident." },
            ],
          },
          {
            h: "Mistakes that become expensive later",
            blocks: [
              { t: "p", text: "The most common problems appear not at incorporation but months or years later: generic bylaws that do not provide for resolving disagreements between partners, no shareholders' agreement governing exits and pre-emption rights, or a structure chosen without considering how the business will be financed or sold." },
            ],
          },
        ],
        faq: [
          { q: "Can I incorporate a company in the Dominican Republic without traveling?", a: "Yes. The process can be carried out through a power of attorney granted abroad. Residency or Dominican nationality is not required to be a partner or shareholder." },
          { q: "Should I choose an SRL or an SA for my Dominican company?", a: "The SRL is the simplest and most common option for small and medium-sized businesses; the SA is recommended for larger companies or those planning to admit several investors." },
        ],
        cta: {
          title: "Planning to set up a company in the Dominican Republic?",
          text: "We assess your operation and your partners before recommending a structure, and we draft bylaws tailored to your business, not standard forms.",
          service: "Corporate law services",
        },
      },
      fr: {
        title: "Créer une société en République dominicaine en tant qu'étranger",
        description:
          "Créer une société en République dominicaine en tant qu'étranger : choisir entre SRL et SA, registre du commerce, identifiant fiscal (RNC) et délais réels.",
        h1: "Créer une société en République dominicaine en tant qu'étranger",
        intro: [
          "Ni la résidence ni la nationalité dominicaine ne sont exigées pour constituer une société en République dominicaine. Ce qui distingue une entreprise bien structurée d'une entreprise qui pose problème des années plus tard, c'est le choix de la bonne forme sociale dès le départ.",
        ],
        sections: [
          {
            h: "SRL ou SA : la première décision",
            blocks: [
              { t: "p", text: "La société à responsabilité limitée (SRL) est la forme habituelle des petites et moyennes entreprises : deux associés au minimum, un capital modeste et une gestion simple, confiée à un ou plusieurs gérants plutôt qu'à un conseil d'administration." },
              { t: "p", text: "La société anonyme (SA) exige au moins deux actionnaires et un conseil d'administration, avec une gouvernance plus formelle. C'est la structure recommandée pour les entreprises de plus grande taille ou qui prévoient d'accueillir d'autres investisseurs." },
            ],
          },
          {
            h: "Les étapes",
            blocks: [
              { t: "ol", items: [
                "Réservation du nom commercial auprès de l'Office national de la propriété industrielle (ONAPI).",
                "Rédaction de statuts adaptés à l'activité réelle, et non d'un modèle générique.",
                "Immatriculation au registre du commerce de la Chambre de commerce compétente.",
                "Obtention de l'identifiant fiscal (RNC) auprès de l'administration fiscale (DGII).",
                "Ouverture du compte bancaire de la société, l'étape dont la durée varie le plus selon la banque.",
              ] },
              { t: "p", text: "Avec un dossier complet, la constitution et l'immatriculation prennent généralement de deux à quatre semaines, sans compter l'ouverture du compte bancaire." },
            ],
          },
          {
            h: "Un associé minoritaire ne signifie pas perdre le contrôle",
            blocks: [
              { t: "p", text: "Comme la SRL exige au moins deux associés, certains investisseurs étrangers pensent avoir besoin d'un associé dominicain détenant une participation réelle. Ce n'est pas le cas : vous pouvez être majoritaire et diriger la société directement ou par mandataire, aucune loi n'imposant que la gérance soit confiée à un résident." },
            ],
          },
          {
            h: "Les erreurs qui coûtent cher ensuite",
            blocks: [
              { t: "p", text: "Les problèmes les plus fréquents n'apparaissent pas à la constitution, mais des mois ou des années plus tard : statuts génériques qui ne prévoient pas le règlement des désaccords entre associés, absence de pacte d'associés régissant les sorties et les droits de préemption, ou structure choisie sans anticiper le financement ou la cession de l'entreprise." },
            ],
          },
        ],
        faq: [
          { q: "Puis-je constituer une société en République dominicaine sans me déplacer ?", a: "Oui, la procédure peut être menée par procuration établie à l'étranger. Ni la résidence ni la nationalité dominicaine ne sont requises pour être associé ou actionnaire." },
          { q: "Faut-il choisir une SRL ou une SA ?", a: "La SRL est l'option la plus simple et la plus courante pour les PME ; la SA est recommandée pour les entreprises plus importantes ou qui prévoient d'accueillir plusieurs investisseurs." },
        ],
        cta: {
          title: "Vous prévoyez de créer une société en République dominicaine ?",
          text: "Nous analysons votre projet et vos associés avant de recommander une structure, et nous rédigeons des statuts adaptés à votre activité, non des formulaires types.",
          service: "Droit des sociétés",
        },
      },
    },
  },

  // ---------------------------------------------------------------- Trademarks (ES has two articles; EN/FR merge them)
  {
    key: "marca",
    date: "2026-06-01",
    slug: {
      es: "como-registrar-una-marca-republica-dominicana",
      en: "register-trademark-dominican-republic",
      fr: "deposer-marque-republique-dominicaine",
    },
    serviceHref: { es: "/registro-de-marcas", en: "/en/servicios/trademarks-and-ip", fr: "/fr/servicios/marques-et-propriete-intellectuelle" },
    text: {
      en: {
        title: "How to register a trademark in the Dominican Republic: process and costs",
        description:
          "Registering a trademark in the Dominican Republic with ONAPI: requirements, step-by-step process, timelines, what drives the cost and common mistakes.",
        h1: "How to register a trademark in the Dominican Republic",
        intro: [
          "If you sell products or services in the Dominican Republic, or plan to, registering your trademark is what prevents third parties from using your name, your identity or your reputation. Many businesses operate unprotected and discover the problem when it is too late.",
        ],
        sections: [
          {
            h: "Where trademarks are registered",
            blocks: [
              { t: "p", text: "Applications are filed with the National Industrial Property Office (ONAPI), under Law 20-00 on Industrial Property. Registration grants exclusive rights of use in the Dominican Republic and allows you to stop third parties from using similar signs." },
            ],
          },
          {
            h: "The process, step by step",
            blocks: [
              { t: "ol", items: [
                "Availability search.",
                "Filing of the application with ONAPI.",
                "Formal examination: ONAPI checks that the application is complete.",
                "Substantive examination: ONAPI assesses distinctiveness and conflicts with prior rights (articles 73 and 74 of Law 20-00).",
                "Response to any objections raised by ONAPI.",
                "Publication in the official gazette, followed by a 45-day opposition period.",
                "Issue of the registration certificate, valid for ten years and renewable.",
              ] },
              { t: "p", text: "Without objections or oppositions, the whole process usually takes three to four months." },
            ],
          },
          {
            h: "What drives the cost",
            blocks: [
              { t: "ul", items: [
                "Type of mark: word, combined (word and logo) or figurative.",
                "Number of classes: each additional class carries its own fees.",
                "Business activity: correct classification determines the scope of protection.",
                "Complexity: oppositions or ONAPI requirements can add costs.",
              ] },
              { t: "p", text: "ONAPI sets official fees for filing, publication and issue of the certificate. The total cost depends on how the application is structured, which is why it should be assessed before filing." },
            ],
          },
          {
            h: "Common mistakes",
            blocks: [
              { t: "ul", items: [
                "Filing without checking availability first.",
                "Choosing the wrong classes.",
                "Missing ONAPI's deadlines to respond to requirements.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "How long does trademark registration take in the Dominican Republic?", a: "Without objections or oppositions, usually three to four months from filing with ONAPI." },
          { q: "What does the cost of registering a trademark depend on?", a: "On the type of mark, the number of classes, the business activity and the complexity of the case, including any oppositions or ONAPI requirements." },
        ],
        cta: {
          title: "Want to register your trademark correctly from the start?",
          text: "We check availability, define the right classes and handle the process with ONAPI so your brand is protected with a clear strategy.",
          service: "Trademark services",
        },
      },
      fr: {
        title: "Déposer une marque en République dominicaine : procédure et coûts",
        description:
          "Déposer une marque en République dominicaine auprès de l'ONAPI : conditions, étapes, délais, ce qui détermine le coût et erreurs fréquentes.",
        h1: "Déposer une marque en République dominicaine",
        intro: [
          "Si vous vendez ou prévoyez de vendre des produits ou des services en République dominicaine, l'enregistrement de votre marque est ce qui empêche des tiers d'utiliser votre nom, votre identité ou votre réputation. Beaucoup d'entreprises exercent sans protection et découvrent le problème trop tard.",
        ],
        sections: [
          {
            h: "Où déposer une marque",
            blocks: [
              { t: "p", text: "Le dépôt s'effectue auprès de l'Office national de la propriété industrielle (ONAPI), en application de la loi 20-00 sur la propriété industrielle. L'enregistrement confère un droit exclusif d'usage en République dominicaine et permet de s'opposer à l'usage de signes similaires par des tiers." },
            ],
          },
          {
            h: "Les étapes",
            blocks: [
              { t: "ol", items: [
                "Recherche de disponibilité.",
                "Dépôt de la demande auprès de l'ONAPI.",
                "Examen de forme : l'ONAPI vérifie que la demande est complète.",
                "Examen de fond : l'ONAPI apprécie le caractère distinctif et les conflits avec des droits antérieurs (articles 73 et 74 de la loi 20-00).",
                "Réponse aux éventuelles objections de l'ONAPI.",
                "Publication au bulletin officiel, suivie d'un délai d'opposition de 45 jours.",
                "Délivrance du certificat d'enregistrement, valable dix ans et renouvelable.",
              ] },
              { t: "p", text: "Sans objection ni opposition, la procédure prend généralement trois à quatre mois." },
            ],
          },
          {
            h: "Ce qui détermine le coût",
            blocks: [
              { t: "ul", items: [
                "Type de marque : verbale, semi-figurative ou figurative.",
                "Nombre de classes : chaque classe supplémentaire entraîne des taxes propres.",
                "Activité : une classification correcte détermine l'étendue de la protection.",
                "Complexité : oppositions ou exigences de l'ONAPI peuvent générer des frais supplémentaires.",
              ] },
              { t: "p", text: "L'ONAPI fixe des taxes officielles pour le dépôt, la publication et la délivrance du certificat. Le coût total dépend de la structure de la demande, d'où l'intérêt d'une analyse préalable." },
            ],
          },
          {
            h: "Les erreurs fréquentes",
            blocks: [
              { t: "ul", items: [
                "Déposer sans vérifier la disponibilité.",
                "Choisir des classes inadaptées.",
                "Laisser passer les délais pour répondre aux exigences de l'ONAPI.",
              ] },
            ],
          },
        ],
        faq: [
          { q: "Combien de temps prend l'enregistrement d'une marque en République dominicaine ?", a: "Sans objection ni opposition, généralement trois à quatre mois à compter du dépôt auprès de l'ONAPI." },
          { q: "De quoi dépend le coût du dépôt d'une marque ?", a: "Du type de marque, du nombre de classes, de l'activité et de la complexité du dossier, notamment en cas d'opposition ou d'exigences de l'ONAPI." },
        ],
        cta: {
          title: "Vous souhaitez protéger votre marque dès le départ ?",
          text: "Nous vérifions la disponibilité, définissons les bonnes classes et suivons la procédure auprès de l'ONAPI pour que votre marque soit protégée avec une stratégie claire.",
          service: "Marques et propriété intellectuelle",
        },
      },
    },
  },
  ...ARTICLES_NEGOCIOS,
];

export function articleByKey(key: string) {
  return ARTICLES.find((a) => a.key === key);
}
