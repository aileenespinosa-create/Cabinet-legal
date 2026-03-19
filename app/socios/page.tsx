import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { ImageWithFallback, PortraitFallback } from "@/components/ImageWithFallback";

const AILEEN_IMAGE = "/aileen-profesional.jpg";
const ELLIS_IMAGE = "/ellis-profesional.jpg";

export const metadata: Metadata = {
  title: "Socios | Cabinet Legal",
  description:
    "Conoce a los socios de Cabinet Legal, firma boutique enfocada en corporativo, litigios y estrategia legal.",
};

export default function SociosPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
          <div className="group text-center">
            <ImageWithFallback
              src={AILEEN_IMAGE}
              alt="Aileen Espinosa"
              className="mx-auto aspect-[4/5] w-full max-w-[320px] rounded-[28px] object-cover grayscale shadow-lg transition duration-500 group-hover:grayscale-0"
              fallback={<PortraitFallback label="No se encontró /public/aileen-profesional.jpg" />}
            />
            <h1 className="mt-6 text-2xl font-semibold text-[#0A3A5A]">Aileen Espinosa</h1>
            <div className="mx-auto mt-3 h-[2px] w-12 bg-[#D9BE3F]" />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#D9BE3F]">
              Managing Partner
            </p>
            <p className="mx-auto mt-5 max-w-md leading-8 text-slate-600">
              Abogada enfocada en asesoría corporativa, estructuración de negocios y estrategia legal
              empresarial.
            </p>
          </div>

          <div className="group text-center">
            <ImageWithFallback
              src={ELLIS_IMAGE}
              alt="Ellis Beato"
              className="mx-auto aspect-[4/5] w-full max-w-[320px] rounded-[28px] object-cover grayscale shadow-lg transition duration-500 group-hover:grayscale-0"
              fallback={<PortraitFallback label="No se encontró /public/ellis-profesional.jpg" />}
            />
            <h2 className="mt-6 text-2xl font-semibold text-[#0A3A5A]">Ellis Beato</h2>
            <div className="mx-auto mt-3 h-[2px] w-12 bg-[#D9BE3F]" />
            <p className="mt-3 text-xs uppercase tracking-[0.25em] text-[#D9BE3F]">
              Founder Partner
            </p>
            <p className="mx-auto mt-5 max-w-md leading-8 text-slate-600">
              Abogado con experiencia en litigios, negociación y resolución de conflictos.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}