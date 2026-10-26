// Google Ads conversion tracking (account AW-18537019511).
export const ADS_ID = "AW-18537019511";

export const ADS_LABELS = {
  lead: "7jlZCOLh1KkdEPfwkYdF",
  whatsapp: "-GSCCLL0gKodEPfwkYdF",
  email: "XfmUCLX0gKodEPfwkYdF",
} as const;

type GtagWindow = Window & { gtag?: (...args: unknown[]) => void };

export function trackLead(form: string) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  if (typeof w.gtag !== "function") return;
  w.gtag("event", "conversion", { send_to: `${ADS_ID}/${ADS_LABELS.lead}` });
  w.gtag("event", "generate_lead", { form_name: form });
}
