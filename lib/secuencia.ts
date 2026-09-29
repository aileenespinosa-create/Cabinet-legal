// Follow-up series for people who downloaded the investment guide.
// The guide itself is delivered on day 0 (double opt-in); these three emails
// follow on days 3, 10 and 18. The daily cron in app/api/cron/secuencia sends
// whichever email is due and records progress on the Brevo contact.

import { createHmac, timingSafeEqual } from "crypto";
import type { GuideLang } from "@/lib/guide";
import { esc } from "@/lib/brevo";

export const SITE = "https://cabinetlegal.com.do";
export const SEQ_DAYS = [3, 10, 18];
export const SEQ_DONE = 99; // unsubscribed or finished early

type Block = { t: "p"; text: string } | { t: "ul"; items: string[] } | { t: "cta"; label: string; href: string };
type Email = { subject: string; preheader: string; blocks: Block[] };

type LangCopy = {
  greeting: (name: string) => string;
  closing: string;
  role: string;
  footer: string;
  unsubscribe: string;
  emails: Email[];
};

const BLOG = {
  titulo: {
    es: "/blog/verificar-titulo-inmueble-republica-dominicana",
    en: "/en/blog/verify-property-title-dominican-republic",
    fr: "/fr/blog/verifier-titre-propriete-republique-dominicaine",
  },
  compra: {
    es: "/blog/comprar-propiedad-republica-dominicana-extranjero",
    en: "/en/blog/buying-property-dominican-republic-foreigner",
    fr: "/fr/blog/acheter-bien-immobilier-republique-dominicaine-etranger",
  },
  consulta: { es: "/consulta", en: "/en/consulta", fr: "/fr/consulta" },
};

export const COPY: Record<GuideLang, LangCopy> = {
  es: {
    greeting: (n) => (n ? `Estimado(a) ${n}:` : "Estimado(a) lector(a):"),
    closing: "Atentamente,",
    role: "Socio, Cabinet Legal",
    footer:
      "Recibe este correo porque solicitó nuestra guía para invertir en la República Dominicana. Cabinet Legal, Av. Pedro Henríquez Ureña núm. 138, Torre Empresarial Reyna II, Suite 203, Santo Domingo.",
    unsubscribe: "No deseo recibir más correos de esta serie",
    emails: [
      {
        subject: "El error que más vemos antes de una compra",
        preheader: "Firmar o entregar el depósito antes de verificar el título.",
        blocks: [
          { t: "p", text: "Hace unos días descargó nuestra guía para invertir en la República Dominicana. Quisiera detenerme en el error que con más frecuencia encontramos en los expedientes que llegan a la firma: firmar el contrato, o entregar el depósito, antes de verificar el estado jurídico del inmueble." },
          { t: "p", text: "El certificado de título que muestra el vendedor acredita quién figura como propietario, pero no lo dice todo. Antes de comprometer un solo peso conviene:" },
          { t: "ul", items: [
            "Solicitar al Registro de Títulos la certificación del estado jurídico del inmueble, que revela hipotecas, embargos, oposiciones y demás anotaciones vigentes.",
            "Comprobar que el inmueble cuenta con deslinde aprobado y no con una simple constancia anotada.",
            "Confirmar que el vendedor está al día con el Impuesto al Patrimonio Inmobiliario (IPI).",
            "Si el vendedor está casado, obtener el consentimiento de su cónyuge.",
          ] },
          { t: "p", text: "Nada de esto toma mucho tiempo cuando se hace antes de firmar. Corregirlo después puede tomar años." },
          { t: "cta", label: "Leer: cómo verificar un título antes de comprar", href: BLOG.titulo.es },
        ],
      },
      {
        subject: "Cómo se compra un inmueble sin viajar a la República Dominicana",
        preheader: "Un caso típico, paso a paso, desde el exterior.",
        blocks: [
          { t: "p", text: "Muchos de nuestros clientes viven fuera del país. Le comparto cómo se desarrolla un caso típico, construido a partir de situaciones que atendemos con frecuencia." },
          { t: "p", text: "Un comprador residente en Canadá encuentra un apartamento en Santo Domingo a través de un agente inmobiliario. Antes de enviar cualquier suma, nos remite la información del inmueble y el borrador de contrato. En pocos días verificamos el título, el estado jurídico, el deslinde y los impuestos, y encontramos una hipoteca que el vendedor no había mencionado." },
          { t: "p", text: "Con esa información, el contrato se redacta de nuevo: el pago queda sujeto a la cancelación de la hipoteca y el depósito se retiene hasta que el Registro de Títulos confirme el levantamiento. El comprador otorga un poder ante notario en su país, lo apostilla y nos lo envía. Firmamos en su nombre, pagamos el impuesto de transferencia del 3 % y depositamos el expediente. El nuevo certificado de título sale a su nombre." },
          { t: "p", text: "El comprador no viajó una sola vez. Lo que marcó la diferencia fue verificar antes de firmar y que un socio respondiera por el asunto de principio a fin." },
          { t: "cta", label: "Leer: comprar como extranjero, paso a paso", href: BLOG.compra.es },
        ],
      },
      {
        subject: "¿Conversamos sobre su proyecto?",
        preheader: "Una hora con un socio, presencial o por videollamada.",
        blocks: [
          { t: "p", text: "En estas semanas le hemos compartido lo que conviene revisar antes de invertir en la República Dominicana. Si está evaluando una compra, una sociedad, su residencia o la protección de su patrimonio en el país, el paso siguiente es una consulta con uno de nuestros socios." },
          { t: "ul", items: [
            "Una hora de trabajo con un socio, en nuestra oficina de Santo Domingo o por videollamada.",
            "Revisamos con antelación los documentos que usted nos remita.",
            "En un plazo de 48 horas le entregamos por escrito la estrategia recomendada, con alcance, plazos y honorarios.",
          ] },
          { t: "p", text: "Al agendar la consulta le remitiremos sus condiciones por escrito. También puede responder directamente a este correo con una breve descripción de su caso." },
          { t: "cta", label: "Solicitar una consulta", href: BLOG.consulta.es },
        ],
      },
    ],
  },
  en: {
    greeting: (n) => (n ? `Dear ${n},` : "Dear reader,"),
    closing: "Kind regards,",
    role: "Partner, Cabinet Legal",
    footer:
      "You are receiving this email because you requested our guide to investing in the Dominican Republic. Cabinet Legal, Av. Pedro Henríquez Ureña 138, Torre Empresarial Reyna II, Suite 203, Santo Domingo.",
    unsubscribe: "Stop receiving this series",
    emails: [
      {
        subject: "The mistake we see most often before a purchase",
        preheader: "Signing or paying a deposit before the title is verified.",
        blocks: [
          { t: "p", text: "A few days ago you downloaded our guide to investing in the Dominican Republic. I would like to focus on the mistake we find most often in the files that reach our firm: signing the contract, or paying the deposit, before the legal status of the property has been verified." },
          { t: "p", text: "The certificate of title the seller shows you proves who is registered as owner, but it does not tell the whole story. Before committing any money, you should:" },
          { t: "ul", items: [
            "Obtain from the Title Registry a certificate of the property's legal status, which reveals mortgages, liens, objections and other active annotations.",
            "Confirm the property has an approved survey (deslinde) and not merely an annotated share of a larger parcel (constancia anotada).",
            "Check that the seller is current on the property tax (IPI).",
            "If the seller is married, obtain the spouse's consent.",
          ] },
          { t: "p", text: "None of this takes long when it is done before signing. Fixing it afterwards can take years." },
          { t: "cta", label: "Read: how to verify a title before buying", href: BLOG.titulo.en },
        ],
      },
      {
        subject: "How to buy property in the Dominican Republic without travelling",
        preheader: "A typical case, step by step, from abroad.",
        blocks: [
          { t: "p", text: "Many of our clients live outside the country. Here is how a typical case unfolds, drawn from situations we handle regularly." },
          { t: "p", text: "A buyer living in Canada finds an apartment in Santo Domingo through a real estate agent. Before sending any money, they send us the property details and the draft contract. Within a few days we verify the title, its legal status, the survey and the taxes, and find a mortgage the seller had not mentioned." },
          { t: "p", text: "With that information the contract is redrafted: payment is conditional on the mortgage being cancelled, and the deposit is held until the Title Registry confirms the release. The buyer signs a power of attorney before a notary at home, has it apostilled and sends it to us. We sign on their behalf, pay the 3% transfer tax and file the transfer. The new certificate of title is issued in the buyer's name." },
          { t: "p", text: "The buyer never travelled. What made the difference was verifying before signing, and having a partner responsible for the matter from start to finish." },
          { t: "cta", label: "Read: buying as a foreigner, step by step", href: BLOG.compra.en },
        ],
      },
      {
        subject: "Shall we talk about your project?",
        preheader: "One hour with a partner, in person or by video call.",
        blocks: [
          { t: "p", text: "Over the past weeks we have shared what to review before investing in the Dominican Republic. If you are considering a purchase, a company, residency or protecting your assets in the country, the next step is a consultation with one of our partners." },
          { t: "ul", items: [
            "One hour with a partner, at our Santo Domingo office or by video call.",
            "We review the documents you send us in advance.",
            "Within 48 hours you receive our recommended strategy in writing, with scope, timeline and fees.",
          ] },
          { t: "p", text: "When you book, we will send you the terms of the consultation in writing. You can also reply to this email with a short description of your matter." },
          { t: "cta", label: "Request a consultation", href: BLOG.consulta.en },
        ],
      },
    ],
  },
  fr: {
    greeting: (n) => (n ? `Bonjour ${n},` : "Bonjour,"),
    closing: "Bien cordialement,",
    role: "Associé, Cabinet Legal",
    footer:
      "Vous recevez ce courriel parce que vous avez demandé notre guide pour investir en République dominicaine. Cabinet Legal, Av. Pedro Henríquez Ureña 138, Torre Empresarial Reyna II, Suite 203, Saint-Domingue.",
    unsubscribe: "Ne plus recevoir cette série",
    emails: [
      {
        subject: "L'erreur que nous voyons le plus souvent avant un achat",
        preheader: "Signer ou verser un acompte avant de vérifier le titre.",
        blocks: [
          { t: "p", text: "Il y a quelques jours, vous avez téléchargé notre guide pour investir en République dominicaine. J'aimerais m'arrêter sur l'erreur que nous rencontrons le plus souvent dans les dossiers qui nous parviennent : signer le contrat, ou verser l'acompte, avant d'avoir vérifié la situation juridique du bien." },
          { t: "p", text: "Le certificat de titre présenté par le vendeur indique qui est inscrit comme propriétaire, mais il ne dit pas tout. Avant d'engager la moindre somme, il convient de :" },
          { t: "ul", items: [
            "Demander au Registre des titres une certification de la situation juridique du bien, qui révèle hypothèques, saisies, oppositions et autres inscriptions en vigueur.",
            "Vérifier que le bien dispose d'un bornage approuvé (deslinde) et non d'une simple quote-part inscrite (constancia anotada).",
            "Confirmer que le vendeur est à jour de l'impôt foncier (IPI).",
            "Si le vendeur est marié, obtenir le consentement de son conjoint.",
          ] },
          { t: "p", text: "Rien de cela ne prend longtemps lorsque c'est fait avant la signature. Le corriger ensuite peut prendre des années." },
          { t: "cta", label: "Lire : vérifier un titre avant d'acheter", href: BLOG.titulo.fr },
        ],
      },
      {
        subject: "Acheter un bien en République dominicaine sans vous déplacer",
        preheader: "Un cas type, étape par étape, depuis l'étranger.",
        blocks: [
          { t: "p", text: "Beaucoup de nos clients vivent hors du pays. Voici comment se déroule un cas type, inspiré de situations que nous traitons régulièrement." },
          { t: "p", text: "Un acheteur résidant au Québec trouve un appartement à Saint-Domingue par l'intermédiaire d'un agent immobilier. Avant d'envoyer le moindre montant, il nous transmet les informations sur le bien et le projet de contrat. En quelques jours, nous vérifions le titre, sa situation juridique, le bornage et les impôts, et découvrons une hypothèque que le vendeur n'avait pas mentionnée." },
          { t: "p", text: "Le contrat est alors réécrit : le paiement est subordonné à la mainlevée de l'hypothèque et l'acompte est retenu jusqu'à ce que le Registre des titres la confirme. L'acheteur signe une procuration devant notaire dans son pays, la fait apostiller et nous l'envoie. Nous signons en son nom, réglons l'impôt de mutation de 3 % et déposons le dossier. Le nouveau certificat de titre est délivré à son nom." },
          { t: "p", text: "L'acheteur ne s'est jamais déplacé. Ce qui a fait la différence, c'est de vérifier avant de signer et qu'un associé réponde du dossier du début à la fin." },
          { t: "cta", label: "Lire : acheter en tant qu'étranger", href: BLOG.compra.fr },
        ],
      },
      {
        subject: "Parlons-nous de votre projet ?",
        preheader: "Une heure avec un associé, au cabinet ou en visioconférence.",
        blocks: [
          { t: "p", text: "Ces dernières semaines, nous vous avons présenté ce qu'il faut vérifier avant d'investir en République dominicaine. Si vous envisagez un achat, une société, une résidence ou la protection de votre patrimoine dans le pays, l'étape suivante est une consultation avec l'un de nos associés." },
          { t: "ul", items: [
            "Une heure avec un associé, à notre bureau de Saint-Domingue ou en visioconférence.",
            "Nous examinons à l'avance les documents que vous nous transmettez.",
            "Sous 48 heures, vous recevez par écrit la stratégie recommandée, avec périmètre, délais et honoraires.",
          ] },
          { t: "p", text: "Lors de la prise de rendez-vous, nous vous adresserons les conditions de la consultation par écrit. Vous pouvez aussi répondre directement à ce courriel en décrivant brièvement votre situation." },
          { t: "cta", label: "Demander une consultation", href: BLOG.consulta.fr },
        ],
      },
    ],
  },
};

// ---- unsubscribe token -----------------------------------------------------

function key() {
  const s = process.env.GUIA_SECRET;
  if (!s || s.length < 16) throw new Error("GUIA_SECRET is not configured");
  return s;
}

export function unsubscribeToken(email: string, lang: GuideLang) {
  const payload = Buffer.from(JSON.stringify({ e: email, l: lang })).toString("base64url");
  const sig = createHmac("sha256", key()).update(`baja:${payload}`).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifyUnsubscribe(token: string | null): { email: string; lang: GuideLang } | null {
  if (!token) return null;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return null;
  const expected = createHmac("sha256", key()).update(`baja:${payload}`).digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    if (typeof data.e !== "string" || !["es", "en", "fr"].includes(data.l)) return null;
    return { email: data.e, lang: data.l };
  } catch {
    return null;
  }
}

// ---- HTML ------------------------------------------------------------------

const NAVY = "#0f2740";
const GOLD = "#8a6d3b";

function block(b: Block) {
  if (b.t === "p") {
    return `<p style="margin:0 0 16px;font-size:16px;line-height:1.65;color:#1f2a36;">${esc(b.text)}</p>`;
  }
  if (b.t === "ul") {
    const li = b.items
      .map((i) => `<li style="margin:0 0 8px;font-size:16px;line-height:1.6;color:#1f2a36;">${esc(i)}</li>`)
      .join("");
    return `<ul style="margin:0 0 16px;padding-left:22px;">${li}</ul>`;
  }
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:8px 0 24px;"><tr><td style="background:${NAVY};border-radius:999px;">
<a href="${SITE}${b.href}" style="display:inline-block;padding:12px 24px;font-family:Arial,sans-serif;font-size:15px;font-weight:bold;color:#ffffff;text-decoration:none;">${esc(b.label)}</a>
</td></tr></table>`;
}

export function renderEmail(lang: GuideLang, index: number, name: string, email: string) {
  const c = COPY[lang];
  const e = c.emails[index];
  const unsub = `${SITE}/api/baja?t=${encodeURIComponent(unsubscribeToken(email, lang))}`;
  const body = e.blocks.map(block).join("\n");
  const html = `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(e.subject)}</title></head>
<body style="margin:0;padding:0;background:#f4f1ea;">
<span style="display:none;max-height:0;overflow:hidden;opacity:0;">${esc(e.preheader)}</span>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f1ea;"><tr><td align="center" style="padding:24px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;">
<tr><td style="padding:24px 32px;border-bottom:2px solid #c8a46a;"><img src="${SITE}/firma/logo-firma.jpg" alt="Cabinet Legal" width="150" style="display:block;border:0;"></td></tr>
<tr><td style="padding:32px;font-family:Georgia,'Times New Roman',serif;">
<p style="margin:0 0 20px;font-size:16px;line-height:1.6;color:#1f2a36;">${esc(c.greeting(name))}</p>
${body}
<p style="margin:24px 0 4px;font-size:16px;color:#1f2a36;">${esc(c.closing)}</p>
<img src="${SITE}/firma/rubrica-ellis-beato.png" alt="" width="140" style="display:block;border:0;margin:4px 0;">
<p style="margin:0;font-size:16px;font-weight:bold;color:${NAVY};">Ellis Beato</p>
<p style="margin:0;font-size:14px;color:${GOLD};">${esc(c.role)}</p>
</td></tr>
<tr><td style="padding:20px 32px;background:#faf8f3;font-family:Arial,sans-serif;font-size:12px;line-height:1.5;color:#6b7680;">
${esc(c.footer)}<br><a href="${unsub}" style="color:#6b7680;">${esc(c.unsubscribe)}</a>
</td></tr>
</table></td></tr></table></body></html>`;
  return { subject: e.subject, html, unsub };
}
