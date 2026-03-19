export default function SiteFooter() {
  return (
    <>
      <section className="bg-[#FAFAF7] py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-serif font-semibold text-[#0A3A5A]">Contacto</h2>
          <p className="mt-6 text-lg text-slate-800">info@cabinetlegal.com.do</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
            Av. Pedro Henríquez Ureña No. 138, Torre Empresarial Reyna II, Suite 203, La Esperilla,
            Santo Domingo de Guzmán, Distrito Nacional, República Dominicana
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.2em] text-[#D9BE3F]">
            Atención únicamente con cita previa
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold tracking-[0.28em] text-[#0A3A5A]">
              CABINET LEGAL
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.22em] text-slate-400">
              Attorneys at law
            </div>
          </div>
          <div className="text-center text-xs tracking-[0.2em] text-slate-500 md:text-right">
            © 2026 Cabinet Legal
          </div>
        </div>
      </footer>
    </>
  );
}