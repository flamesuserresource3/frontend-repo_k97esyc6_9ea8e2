export default function Consulting() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">Consulenza</h1>
        <p className="mt-4 text-slate-600 max-w-3xl">
          Offriamo sessioni di consulenza strategica per definire obiettivi, priorità e un piano d'azione concreto. Ideale per PMI e professionisti che vogliono sbloccare risultati in tempi rapidi.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { t: "Audit iniziale", d: "Analizziamo sito, canali, funnel e KPI." },
            { t: "Roadmap 90 giorni", d: "Azioni chiare e scadenze condivise." },
            { t: "Supporto operativo", d: "Ti aiutiamo nell'implementazione." },
          ].map((s) => (
            <div key={s.t} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="font-semibold text-slate-900">{s.t}</div>
              <div className="mt-1 text-sm text-slate-600">{s.d}</div>
            </div>
          ))}
        </div>
        <a href="#contatti" className="mt-10 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800">
          Prenota una call
        </a>
      </div>
    </section>
  );
}
