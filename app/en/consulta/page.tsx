import Image from "next/image";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Book a Consultation | Cabinet Legal",
  description:
    "Request a consultation with Cabinet Legal to evaluate your case and define the best legal strategy in the Dominican Republic.",
  alternates: {
    canonical: "https://cabinetlegal.com.do/en/consulta",
    languages: {
      "es-DO": "https://cabinetlegal.com.do/consulta",
      en: "https://cabinetlegal.com.do/en/consulta",
    },
  },
};

export default function ConsultaPageEN() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#fcfaf6] pt-[120px]">
      <SiteHeader />

      {/* HERO */}
      <section className="container-legal py-10 md:py-16">
        <div className="card-legal overflow-hidden">
          <div className="relative h-[240px] sm:h-[300px] md:h-[380px]">
            <Image
              src="/hero-legal.jpg"
              alt="Legal consultation with Cabinet Legal"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="hero-image-overlay absolute inset-0" />

            <div className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <div className="eyebrow text-white/80">Cabinet Legal</div>

              <h1 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-5xl">
                Book a legal consultation with a strategic focus
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-white/90 md:text-lg md:leading-7">
                We evaluate your situation, identify risks and guide you on
                the best legal path based on your case, your objectives and
                your context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT + FORM */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal grid gap-6 md:grid-cols-[0.92fr_1.08fr]">
          {/* TEXT */}
          <div className="card-legal p-6 md:p-10">
            <div className="eyebrow">Consultation</div>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#0f2740] md:text-4xl">
              Let&apos;s discuss your case with clarity and legal judgment.
            </h2>

            <p className="mt-5 text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
              If you need legal guidance for your company, a trademark, a
              contract, a transaction or a specific dispute, we can help you
              define a clear, practical and legally sound strategy.
            </p>

            <div className="gold-line mt-6" />

            <div className="mt-8 space-y-4 text-sm leading-7 text-[#5f6b76] md:text-base md:leading-8">
              <p>• Direct, strategic attention</p>
              <p>• Initial evaluation of your situation</p>
              <p>• Identification of risks and priorities</p>
              <p>• Clear recommendation on next steps</p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8dfd0] bg-[#fcfaf6] p-5 md:p-6">
              <h3 className="text-lg font-semibold text-[#0f2740]">
                Prefer to write to us directly?
              </h3>

              <p className="mt-2 text-sm leading-6 text-[#5f6b76] md:text-base md:leading-7">
                You can also reach us on WhatsApp for faster initial
                guidance.
              </p>

              <a
                href="https://wa.me/18494603517?text=Hello%2C%20I%20would%20like%20to%20book%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-full border border-[#d7dce2] bg-white px-6 py-3 text-sm font-semibold text-[#0f2740]"
              >
                Write to us on WhatsApp
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="card-legal p-6 md:p-10">
            <div className="mb-6">
              <div className="eyebrow">Form</div>

              <h2 className="mt-4 text-2xl font-semibold text-[#0f2740] md:text-3xl">
                Request a consultation
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#5f6b76] md:text-base md:leading-7">
                Complete this form and we will get in touch with you to
                evaluate your request.
              </p>
            </div>

            <form
              action="https://formspree.io/f/mlgpavya"
              method="POST"
              className="grid gap-4"
            >
              <input
                type="hidden"
                name="_subject"
                value="New consultation request from Cabinet Legal (EN)"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="idioma" value="EN" />

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Name
                </label>
                <input
                  name="nombre"
                  type="text"
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="you@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Phone
                </label>
                <input
                  name="telefono"
                  type="text"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Country
                </label>
                <input
                  name="pais"
                  type="text"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Where are you writing from?"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Area of interest
                </label>
                <select
                  name="area"
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  defaultValue="Select an option"
                >
                  <option disabled>Select an option</option>
                  <option>Trademark registration</option>
                  <option>Corporate law</option>
                  <option>Intellectual property</option>
                  <option>Litigation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-[#0f2740]">
                  Message
                </label>
                <textarea
                  name="mensaje"
                  rows={6}
                  required
                  className="w-full rounded-2xl border border-[#e8dfd0] bg-white px-4 py-3 text-[#0f2740] outline-none transition focus:border-[#c9a96e]"
                  placeholder="Tell us briefly about your case"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold shadow-sm"
                style={{ backgroundColor: "#0f2740", color: "#ffffff" }}
              >
                Send request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="pb-16 md:pb-20">
        <div className="container-legal card-legal p-6 md:p-12">
          <h2 className="text-3xl font-semibold text-[#0f2740] md:text-4xl">
            Make decisions with legal backing.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-[#5f6b76] md:text-lg md:leading-8">
            A timely consultation can help you avoid mistakes, reduce risk and
            better structure your legal situation from the start.
          </p>
        </div>
      </section>
    </main>
  );
}
