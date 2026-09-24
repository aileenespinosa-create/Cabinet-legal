"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { SERVICES, type Lang } from "@/lib/services";
import { CAREERS_COPY } from "@/lib/careersCopy";

const MAX_BYTES = 4 * 1024 * 1024;
const input =
  "w-full rounded-xl border border-[#e0d6c4] bg-white px-4 py-3 text-[15px] text-[#0f2740] outline-none transition focus:border-[#c8a46a] focus:ring-2 focus:ring-[#efe2c8]";

export default function CareersForm({ lang }: { lang: Lang }) {
  const t = CAREERS_COPY[lang];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const cv = form.get("cv");
    if (!(cv instanceof File) || cv.size === 0 || cv.type !== "application/pdf" || cv.size > MAX_BYTES) {
      setError(t.errFile);
      setStatus("error");
      return;
    }
    form.set("lang", lang);
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/unete", { method: "POST", body: form });
      if (res.ok) {
        setStatus("sent");
        return;
      }
      setError(res.status === 400 ? t.errInvalid : t.errGeneric);
      setStatus("error");
    } catch {
      setError(t.errGeneric);
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-[24px] border border-[#c8a46a] bg-[#fbf6ec] p-8 md:p-11" role="status">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f2740] text-xl text-[#c8a46a]">✓</div>
        <h2 className="pt-5 font-serif text-3xl text-[#0f2740]">{t.sentTitle}</h2>
        <p className="pt-3 leading-7 text-[#5f6b76]">{t.sentText}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4 rounded-[24px] border border-[#e8dfd0] bg-white p-6 shadow-[0_16px_48px_rgba(15,39,64,0.08)] md:p-11">
      <h2 className="font-serif text-3xl text-[#0f2740]">{t.formTitle}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[#0f2740]">
          {t.name}
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[#0f2740]">
          {t.email}
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[#0f2740]">
          {t.phone}
          <input name="phone" type="tel" autoComplete="tel" className={input} />
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[#0f2740]">
          {t.profile}
          <select name="profile" className={input} defaultValue={t.profiles[0][0]}>
            {t.profiles.map(([p]) => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[#0f2740]">
          {t.area}
          <select name="area" className={input}>
            {SERVICES.map((s) => (
              <option key={s.id}>{s.text[lang].title}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm font-medium text-[#0f2740]">
          {t.linkedin}
          <input name="linkedin" type="url" inputMode="url" className={input} />
        </label>
      </div>

      <div className="flex flex-col gap-2 text-sm font-medium text-[#0f2740]">
        <span id="cv-label">{t.cv}</span>
        <label className="flex cursor-pointer items-center gap-4 rounded-2xl border-[1.5px] border-dashed border-[#c8a46a] bg-[#fbf6ec] p-6">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8a6a37" strokeWidth="1.5" aria-hidden="true">
            <path d="M12 16V4M7 9l5-5 5 5M4 20h16" />
          </svg>
          <span className="text-[15px] font-normal text-[#5f6b76]">
            {fileName ? <b className="font-semibold text-[#0f2740]">{fileName}</b> : <>{t.cvHint} <u className="text-[#0f2740]">{t.cvChoose}</u></>}
          </span>
          <input
            type="file"
            name="cv"
            accept="application/pdf"
            required
            aria-labelledby="cv-label"
            className="sr-only"
            onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
          />
        </label>
      </div>

      <label className="flex flex-col gap-1.5 text-sm font-medium text-[#0f2740]">
        {t.why}
        <textarea name="message" rows={3} maxLength={1200} className={`${input} resize-none`} />
      </label>

      {/* Honeypot */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <input name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="flex items-start gap-3 text-[13px] leading-6 text-[#5f6b76]">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-[#0f2740]" />
        <span>
          {t.consent}{" "}
          <Link href={t.privacyHref} className="text-[#0f2740] underline underline-offset-2">
            {t.privacyLabel}
          </Link>
          .
        </span>
      </label>

      {status === "error" && (
        <p className="rounded-xl bg-[#f8ecea] px-4 py-3 text-sm text-[#8a3b2f]" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-1 inline-flex h-[54px] items-center justify-center rounded-full text-[15px] font-semibold disabled:opacity-60"
        style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
      >
        {status === "sending" ? t.sending : t.submit}
      </button>
    </form>
  );
}
