import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Registro de marcas | Cabinet Legal",
};

export default function RegistroPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader internal />

      <section className="container-legal py-12 md:py-20">
        <h1 className="text-4xl font-semibold text-[#0f2740] mb-6">
          Registro de marcas
        </h1>

        <p className="text-[#5f6b76] leading-8 max-w-2xl">
          Te acompañamos en todo el proceso de registro de marca en República
          Dominicana, desde la evaluación hasta la aprobación.
        </p>
      </section>
    </main>
  );
}