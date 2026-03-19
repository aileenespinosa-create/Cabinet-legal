import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Servicios Legales | Cabinet Legal",
  description:
    "Servicios legales en derecho corporativo, inmobiliario, litigios, propiedad intelectual y servicios empresariales en República Dominicana.",
};

export default function ServiciosPage() {
  const services = [
    {
      title: "Derecho Corporativo",
      text: "Asesoría legal para empresas, estructuración societaria, gobierno corporativo y decisiones estratégicas.",
    },
    {
      title: "Derecho Inmobiliario",
      text: "Acompañamiento en compraventas, due diligence, inversiones inmobiliarias y conflictos relacionados con bienes inmuebles.",
    },
    {
      title: "Litigios Civiles y Comerciales",
      text: "Representación legal en controversias civiles, comerciales y empresariales con enfoque estratégico.",
    },
    {
      title: "Propiedad Intelectual",
      text: "Registro de marcas, oposiciones, cancelaciones y defensa de derechos ante ONAPI.",
    },
    {
      title: "Servicios Empresariales",
      text: "Constitución de sociedades, soporte legal continuo y acompañamiento a empresas locales e internacionales.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs uppercase tracking-[0.28em] text-[#D9BE3F]">Cabinet Legal</div>
              <h1 className="mt-4 text-4xl font-serif font-semibold text-[#0A3A5A]">Servicios</h1>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-slate-600">
              Atendemos asuntos corporativos, contenciosos y consultivos con participación directa de los socios
              y criterios orientados a resultados.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-[#D9BE3F] transition-all duration-300 group-hover:w-20" />
                <h2 className="mb-3 text-lg font-semibold text-[#0A3A5A]">{service.title}</h2>
                <p className="leading-7 text-slate-600">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}