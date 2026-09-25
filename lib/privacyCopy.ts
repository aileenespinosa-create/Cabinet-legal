import type { Lang } from "./services";

type Section = [string, string[]];

export const PRIVACY_COPY: Record<Lang, { metaTitle: string; title: string; updated: string; intro: string; sections: Section[] }> = {
  es: {
    metaTitle: "Política de privacidad",
    title: "Política de privacidad",
    updated: "Última actualización: septiembre de 2026",
    intro:
      "Cabinet Legal protege los datos personales que recibe a través de este sitio web conforme a la Ley Orgánica núm. 172-13 sobre Protección Integral de los Datos Personales de la República Dominicana. Esta política explica qué datos recogemos, para qué los usamos y cuáles son sus derechos.",
    sections: [
      ["Responsable del tratamiento", ["Cabinet Legal, con domicilio en la Av. Pedro Henríquez Ureña núm. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla, Santo Domingo, República Dominicana. Contacto: info@cabinetlegal.com.do."]],
      ["Datos que recogemos", [
        "Los que usted nos facilita en los formularios: nombre, correo electrónico, teléfono, país de residencia, área de interés y el contenido de su mensaje.",
        "En la sección Carreras, además, su currículum y los datos profesionales que incluya.",
        "Datos de navegación agregados, mediante Google Analytics, para conocer cómo se usa el sitio.",
      ]],
      ["Para qué los usamos", [
        "Responder a sus consultas y preparar propuestas de servicios.",
        "Enviarle la guía descargable y, si usted lo aceptó, comunicaciones ocasionales de la firma. Puede darse de baja en cualquier momento desde el enlace incluido en cada correo.",
        "Evaluar su candidatura en los procesos de selección.",
        "Mejorar el funcionamiento y el contenido del sitio.",
      ]],
      ["Base del tratamiento", ["Su consentimiento, otorgado al enviar un formulario, y la necesidad de atender la relación precontractual o profesional que usted mismo inicia."]],
      ["Con quién los compartimos", [
        "No vendemos ni cedemos sus datos. Solo los tratan proveedores que nos prestan servicios técnicos, bajo obligaciones de confidencialidad: Brevo (envío de correos y registro de contactos y candidaturas), Vercel (alojamiento del sitio) y Google (analítica).",
        "Algunos de estos proveedores pueden tratar datos fuera de la República Dominicana, con garantías adecuadas de protección.",
      ]],
      ["Cuánto tiempo los conservamos", ["Mientras dure la relación o la finalidad para la que se recogieron. Los currículos se conservan hasta 12 meses para futuras posiciones, salvo que usted solicite su eliminación antes."]],
      ["Sus derechos", ["Usted puede acceder a sus datos, rectificarlos, cancelarlos u oponerse a su tratamiento, y retirar su consentimiento en cualquier momento, escribiendo a info@cabinetlegal.com.do. Responderemos en los plazos que establece la ley."]],
      ["Secreto profesional", ["La información que usted comparta sobre un asunto legal está protegida además por el secreto profesional del abogado."]],
      ["Cambios", ["Podemos actualizar esta política. La versión vigente es siempre la publicada en esta página."]],
    ],
  },
  en: {
    metaTitle: "Privacy policy",
    title: "Privacy policy",
    updated: "Last updated: September 2026",
    intro:
      "Cabinet Legal protects the personal data it receives through this website in accordance with Dominican Organic Law No. 172-13 on the Comprehensive Protection of Personal Data. This policy explains what data we collect, why we use it and what your rights are.",
    sections: [
      ["Data controller", ["Cabinet Legal, Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla, Santo Domingo, Dominican Republic. Contact: info@cabinetlegal.com.do."]],
      ["Data we collect", [
        "What you give us in our forms: name, email, phone, country of residence, area of interest and the content of your message.",
        "On the Careers page, also your CV and any professional details you include.",
        "Aggregated browsing data, through Google Analytics, to understand how the site is used.",
      ]],
      ["How we use it", [
        "To answer your inquiries and prepare service proposals.",
        "To send you the downloadable guide and, if you agreed, occasional updates from the firm. You can unsubscribe at any time from the link in each email.",
        "To assess your application in recruitment processes.",
        "To improve the site's functionality and content.",
      ]],
      ["Legal basis", ["Your consent, given when you submit a form, and the need to handle the pre-contractual or professional relationship you initiate."]],
      ["Who we share it with", [
        "We do not sell or transfer your data. It is processed only by providers of technical services to us, under confidentiality obligations: Brevo (email delivery and contact and application records), Vercel (website hosting) and Google (analytics).",
        "Some of these providers may process data outside the Dominican Republic, with appropriate safeguards.",
      ]],
      ["How long we keep it", ["For as long as the relationship or purpose lasts. CVs are kept for up to 12 months for future openings, unless you ask us to delete them sooner."]],
      ["Your rights", ["You may access, correct or delete your data, object to its processing and withdraw your consent at any time by writing to info@cabinetlegal.com.do. We will respond within the time limits set by law."]],
      ["Professional secrecy", ["Information you share about a legal matter is also protected by attorney-client privilege."]],
      ["Changes", ["We may update this policy. The version in force is always the one published on this page."]],
    ],
  },
  fr: {
    metaTitle: "Politique de confidentialité",
    title: "Politique de confidentialité",
    updated: "Dernière mise à jour : septembre 2026",
    intro:
      "Cabinet Legal protège les données personnelles reçues par ce site conformément à la loi organique dominicaine n° 172-13 sur la protection intégrale des données personnelles. Cette politique explique quelles données nous collectons, pourquoi nous les utilisons et quels sont vos droits.",
    sections: [
      ["Responsable du traitement", ["Cabinet Legal, Av. Pedro Henríquez Ureña n° 138, Torre Empresarial Reyna II, Suite 203, La Esperilla, Saint-Domingue, République dominicaine. Contact : info@cabinetlegal.com.do."]],
      ["Données collectées", [
        "Celles que vous indiquez dans nos formulaires : nom, courriel, téléphone, pays de résidence, domaine d'intérêt et contenu de votre message.",
        "Sur la page Carrières, également votre CV et vos informations professionnelles.",
        "Des données de navigation agrégées, via Google Analytics, pour comprendre l'usage du site.",
      ]],
      ["Utilisation", [
        "Répondre à vos demandes et préparer des propositions de services.",
        "Vous envoyer le guide téléchargeable et, si vous l'avez accepté, des communications ponctuelles du cabinet. Vous pouvez vous désinscrire à tout moment via le lien de chaque courriel.",
        "Étudier votre candidature lors des recrutements.",
        "Améliorer le fonctionnement et le contenu du site.",
      ]],
      ["Base légale", ["Votre consentement, donné lors de l'envoi d'un formulaire, et la nécessité de gérer la relation précontractuelle ou professionnelle que vous initiez."]],
      ["Destinataires", [
        "Nous ne vendons ni ne cédons vos données. Elles ne sont traitées que par nos prestataires techniques, tenus à la confidentialité : Brevo (envoi de courriels et registre des contacts et candidatures), Vercel (hébergement) et Google (statistiques).",
        "Certains de ces prestataires peuvent traiter des données hors de la République dominicaine, avec des garanties appropriées.",
      ]],
      ["Durée de conservation", ["Pendant la durée de la relation ou de la finalité de la collecte. Les CV sont conservés jusqu'à 12 mois pour de futures opportunités, sauf demande de suppression anticipée."]],
      ["Vos droits", ["Vous pouvez accéder à vos données, les rectifier, les supprimer, vous opposer à leur traitement et retirer votre consentement à tout moment en écrivant à info@cabinetlegal.com.do. Nous répondrons dans les délais légaux."]],
      ["Secret professionnel", ["Les informations que vous partagez sur une affaire juridique sont en outre couvertes par le secret professionnel de l'avocat."]],
      ["Modifications", ["Nous pouvons mettre à jour cette politique. La version en vigueur est toujours celle publiée sur cette page."]],
    ],
  },
};
