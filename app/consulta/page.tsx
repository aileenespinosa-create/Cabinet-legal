import SiteHeader from "@/components/SiteHeader";

export default function ConsultaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <SiteHeader internal />

      <section className="container-legal py-12 md:py-20">
        <h1 className="text-4xl font-semibold text-[#0f2740] mb-6">
          Consulta
        </h1>

        <form className="grid gap-4 max-w-xl">
          <input
            type="text"
            placeholder="Nombre"
            className="border p-3 rounded-lg"
          />
          <input
            type="email"
            placeholder="Correo"
            className="border p-3 rounded-lg"
          />
          <textarea
            placeholder="Mensaje"
            className="border p-3 rounded-lg"
          />
          <button className="btn-primary-legal">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}