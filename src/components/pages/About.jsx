export default function About() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Chi siamo</h1>
        <p className="mt-4 text-slate-600 max-w-3xl">
          Simo Marketing è un'agenzia con sede a Caltanissetta specializzata in crescita digitale: siti, app, social, CRM, bot e automazioni. Uniamo strategia, design e tecnologia per portare risultati misurabili.
        </p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {["Strategia", "Creatività", "Performance"].map((k) => (
            <div key={k} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-slate-900">{k}</div>
              <div className="mt-1 text-sm text-slate-600">
                Lavoriamo con un metodo chiaro e dati reali per far crescere il tuo brand.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
