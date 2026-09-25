"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";

// Wraps the consultation form fields. Sends to our own API (which records the
// request and emails the firm). If our server cannot be reached, the same form
// is submitted to Formspree as a fallback so no request is ever lost.

const FALLBACK_ACTION = "https://formspree.io/f/mlgpavya";

const COPY = {
  es: {
    sending: "Enviando…",
    doneTitle: "Solicitud recibida",
    doneText: "Gracias. Un socio revisará su caso y le responderá en menos de 24 horas hábiles.",
    error: "Revise su nombre, su correo y su mensaje e intente de nuevo.",
    privacy: "Al enviar acepta nuestra",
    privacyLink: "política de privacidad",
    privacyHref: "/privacidad",
  },
  en: {
    sending: "Sending…",
    doneTitle: "Request received",
    doneText: "Thank you. A partner will review your case and reply within 24 business hours.",
    error: "Please check your name, email and message and try again.",
    privacy: "By sending you accept our",
    privacyLink: "privacy policy",
    privacyHref: "/en/privacidad",
  },
  fr: {
    sending: "Envoi…",
    doneTitle: "Demande reçue",
    doneText: "Merci. Un associé étudiera votre dossier et vous répondra sous 24 heures ouvrables.",
    error: "Vérifiez votre nom, votre e-mail et votre message, puis réessayez.",
    privacy: "En envoyant, vous acceptez notre",
    privacyLink: "politique de confidentialité",
    privacyHref: "/fr/privacidad",
  },
} as const;

export default function ConsultaForm({
  lang,
  className,
  children,
}: {
  lang: "es" | "en" | "fr";
  className?: string;
  children: ReactNode;
}) {
  const t = COPY[lang];
  const ref = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!data.get("idioma")) data.set("idioma", lang.toUpperCase());
    setStatus("sending");
    try {
      const res = await fetch("/api/consulta", { method: "POST", body: data });
      if (res.ok) {
        setStatus("done");
        return;
      }
      if (res.status === 400) {
        setStatus("error");
        return;
      }
      throw new Error(String(res.status));
    } catch {
      // Our server is unavailable: hand the request to Formspree instead.
      form.action = FALLBACK_ACTION;
      form.method = "POST";
      form.submit();
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-3xl border border-[#e8dfd0] bg-white p-8 text-center" role="status">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2740] text-xl text-[#c8a46a]">
          ✓
        </div>
        <h3 className="mt-5 text-2xl text-[#0f2740]">{t.doneTitle}</h3>
        <p className="mt-3 text-[#5f6b76]">{t.doneText}</p>
      </div>
    );
  }

  return (
    <form ref={ref} onSubmit={onSubmit} className={className} noValidate={false}>
      {/* Honeypot, hidden from people. */}
      <input
        type="text"
        name="empresa_web"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />
      <fieldset disabled={status === "sending"} className="contents">
        {children}
      </fieldset>
      {status === "sending" && <p className="text-center text-sm text-[#5f6b76]">{t.sending}</p>}
      {status === "error" && (
        <p className="text-center text-sm text-[#b42318]" role="alert">
          {t.error}
        </p>
      )}
      <p className="text-center text-xs text-[#8a9099]">
        {t.privacy}{" "}
        <a href={t.privacyHref} className="underline">
          {t.privacyLink}
        </a>
        .
      </p>
    </form>
  );
}
