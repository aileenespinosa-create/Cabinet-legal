import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo registrar una marca en República Dominicana (2026) | Cabinet Legal",
  description:
    "Guía completa para registrar una marca en República Dominicana: requisitos, proceso en ONAPI, tiempos y costos.",
};

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />

      <article className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl font-serif font-semibold text-[#0A3A5A]">
          Cómo registrar una marca en República Dominicana (2026)
        </h1>

        <p className="mt-6 text-lg text-slate-600">
          Registrar una marca en República Dominicana es un paso esencial para proteger
          tu negocio, tu identidad comercial y tu posicionamiento en el mercado.
        </p>

        <div className="mt-10 space-y-6 text-slate-700 leading-8">
          <h2 className="text-2xl font-semibold text-[#0A3A5A]">
            ¿Qué es una marca registrada?
          </h2>
          <p>
            Una marca es cualquier signo distintivo que identifica productos o servicios
            en el mercado. Puede ser un nombre, logo, combinación de palabras, o incluso
            elementos gráficos.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A3A5A]">
            ¿Dónde se registra una marca?
          </h2>
          <p>
            En República Dominicana, el registro se realiza ante la Oficina Nacional de
            la Propiedad Industrial (ONAPI).
          </p>

          <h2 className="text-2xl font-semibold text-[#0A3A5A]">
            Requisitos para registrar una marca
          </h2>
          <ul className="list-disc pl-6">
            <li>Nombre o signo distintivo</li>
            <li>Clasificación de productos o servicios</li>
            <li>Datos del titular</li>
            <li>Pago de tasas oficiales</li>
          </ul>

          <h2 className="text-2xl font-semibold text-[#0A3A5A]">
            Proceso de registro
          </h2>
          <ol className="list-decimal pl-6">
            <li>Búsqueda de disponibilidad</li>
            <li>Solicitud ante ONAPI</li>
            <li>Examen formal</li>
            <li>Publicación</li>
            <li>Oposición (si aplica)</li>
            <li>Concesión del registro</li>
          </ol>

          <h2 className="text-2xl font-semibold text-[#0A3A5A]">
            ¿Cuánto tiempo tarda?
          </h2>
          <p>
            El proceso puede tardar entre 4 y 6 meses, dependiendo de si existen
            oposiciones o requerimientos.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A3A5A]">
            Importancia de una asesoría legal
          </h2>
          <p>
            Un registro mal realizado puede ser rechazado o impugnado. Contar con
            asesoría legal reduce riesgos y asegura una protección efectiva.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[#0A3A5A] p-8 text-white">
          <h3 className="text-xl font-semibold">
            ¿Necesitas registrar tu marca?
          </h3>
          <p className="mt-2 text-slate-200">
            Nuestro equipo puede ayudarte durante todo el proceso.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/registro-de-marcas"
              className="rounded-full bg-white px-5 py-2 text-sm font-medium text-[#0A3A5A]"
            >
              Ver servicio
            </Link>

            <Link
              href="/consulta"
              className="rounded-full border border-white px-5 py-2 text-sm font-medium text-white"
            >
              Solicitar consulta
            </Link>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}