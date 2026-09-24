"use client";

import { useState, type FormEvent } from "react";
import type { GuideLang } from "@/lib/guide";
import { GUIDE_COPY } from "@/lib/guideCopy";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-xl border border-[#e0d6c4] bg-white px-4 py-3 text-[15px] text-[#0f2740] outline-none transition placeholder:text-[#9aa3ab] focus:border-[#c8a46a] focus:ring-2 focus:ring-[#efe2c8]";

export default function GuideLeadForm({ lang }: { lang: GuideLang }) {
  const t = GUIDE_COPY[lang];
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("sending");
    setError("");

    try {
      const res = await fetch("/api/guia", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          country: form.get("country"),
          interest: form.get("interest"),
          consent: form.get("consent") === "on",
          company: form.get("company"),
          lang,
        }),
      });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      setError(res.status === 400 ? t.errorInvalid : t.errorGeneric);
      setStatus("error");
    } catch {
      setError(t.errorGeneric);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-[#c8a46a] bg-[#fbf6ec] p-6 md:p-8" role="status">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2740] text-xl text-[#c8a46a]">
          ✓
        </div>
        <h3 className="pt-5 text-2xl font-light text-[#0f2740]">{t.sentTitle}</h3>
        <p className="pt-3 leading-7 text-[#5f6b76]">{t.sentText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="guide-name" className="mb-1.5 block text-sm font-medium text-[#0f2740]">
          {t.name}
        </label>
        <input id="guide-name" name="name" required autoComplete="given-name" className={inputClass} />
      </div>
      <div>
        <label htmlFor="guide-email" className="mb-1.5 block text-sm font-medium text-[#0f2740]">
          {t.email}
        </label>
        <input
          id="guide-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          className={inputClass}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="guide-country" className="mb-1.5 block text-sm font-medium text-[#0f2740]">
            {t.country}
          </label>
          <input id="guide-country" name="country" autoComplete="country-name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="guide-interest" className="mb-1.5 block text-sm font-medium text-[#0f2740]">
            {t.interest}
          </label>
          <select id="guide-interest" name="interest" className={inputClass} defaultValue={t.interestOptions[0]}>
            {t.interestOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Honeypot: hidden from people, visible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="guide-company">Company</label>
        <input id="guide-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#5f6b76]">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 accent-[#0f2740]"
        />
        <span>{t.consent}</span>
      </label>

      {status === "error" && (
        <p className="rounded-xl bg-[#f8ecea] px-4 py-3 text-sm text-[#8a3b2f]" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold shadow-sm transition hover:opacity-95 disabled:opacity-60"
        style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
      >
        {status === "sending" ? t.sending : t.submit}
      </button>
      <p className="text-center text-xs text-[#8a939b]">{t.privacy}</p>
    </form>
  );
}
