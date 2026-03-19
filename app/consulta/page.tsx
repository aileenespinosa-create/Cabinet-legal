"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function ConsultaPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleConsultationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "Nueva consulta - Cabinet Legal");

    try {
      const response = await fetch("https://formspree.io/f/mlgpavya", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setFormSubmitted(true);
        form.reset();
      } else {
        setFormError(
          "No se pudo enviar la solicitud. Verifica tu conexión o la activación del formulario en Formspree."
        );
      }
    } catch {
      setFormError(
        "No se pudo enviar la solicitud. Verifica tu conexión o la activación del formulario en Formspree."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
            <h1 className="mt-4 text-4xl font-serif font-semibold text-[#0A3A5A]">
              Solicitar una consulta
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Compártenos una breve descripción de tu asunto y nuestro equipo se pondrá en contacto
              para coordinar la mejor vía de atención.
            </p>

            <div className="mt-10 rounded-[28px] bg-[#0A3A5A] p-8 text-white shadow-sm">
              <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
              <p className="mt-4 text-sm leading-7 text-slate-200">
                La información enviada será tratada con discreción profesional.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-200">
                <div>info@cabinetlegal.com.do</div>
                <div>809 221 7768</div>
                <div>Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203</div>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-[#FBFBF8] p-8 shadow-sm">
            {formSubmitted ? (
              <div className="flex min-h-[540px] flex-col items-center justify-center text-center">
                <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
                <h2 className="mt-4 text-3xl font-serif font-semibold text-[#0A3A5A]">
                  Solicitar una consulta
                </h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">
                  Tu solicitud fue enviada correctamente. Te contactaremos pronto.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-8 rounded-full bg-[#0A3A5A] px-5 py-3 text-sm font-medium text-white"
                >
                  Nueva consulta
                </button>
              </div>
            ) : (
              <form className="grid gap-6" onSubmit={handleConsultationSubmit}>
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-slate-600">
                    <span>Nombre completo</span>
                    <input
                      name="nombre"
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                      type="text"
                      required
                    />
                  </label>

                  <label className="grid gap-2 text-sm text-slate-600">
                    <span>Correo electrónico</span>
                    <input
                      name="email"
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                      type="email"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="grid gap-2 text-sm text-slate-600">
                    <span>Teléfono</span>
                    <input
                      name="telefono"
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                      type="tel"
                    />
                  </label>

                  <label className="grid gap-2 text-sm text-slate-600">
                    <span>Empresa</span>
                    <input
                      name="empresa"
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                      type="text"
                    />
                  </label>
                </div>

                <label className="grid gap-2 text-sm text-slate-600">
                  <span>Tipo de asunto</span>
                  <input
                    name="asunto"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                    type="text"
                    required
                  />
                </label>

                <label className="grid gap-2 text-sm text-slate-600">
                  <span>Mensaje</span>
                  <textarea
                    name="mensaje"
                    className="min-h-[180px] rounded-2xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-[#0A3A5A]"
                    required
                  />
                </label>

                {formError ? <p className="text-sm text-red-600">{formError}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 inline-flex w-fit rounded-full bg-[#0A3A5A] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}