export default function Portfolio() {
  const projects = [
    {
      name: "Ecommerce Moda",
      result: "+120% conversioni",
      tag: "Shopify + Meta Ads",
    },
    { name: "Studio Medico", result: "+65% lead", tag: "Sito vetrina + SEO" },
    { name: "Ristorante", result: "+40% prenotazioni", tag: "Instagram + Google" },
    { name: "SaaS B2B", result: "CAC -30%", tag: "Landing + Automazioni" },
  ];
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Portafolio</h1>
        <p className="mt-4 text-slate-600 max-w-3xl">Una selezione di progetti e risultati raggiunti per i nostri clienti.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-36 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400" />
              <div className="mt-4 font-semibold text-slate-900">{p.name}</div>
              <div className="text-sm text-slate-600">{p.tag}</div>
              <div className="mt-2 inline-flex text-xs font-medium px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700">{p.result}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
