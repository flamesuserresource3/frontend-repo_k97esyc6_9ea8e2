import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Analisi & Strategia",
    desc: "Capire obiettivi e target per definire un piano chiaro e misurabile.",
  },
  { title: "Design & Sviluppo", desc: "Creiamo esperienze rapide, belle e orientate alla conversione." },
  { title: "Lancio & Ottimizzazione", desc: "Monitoriamo KPI e ottimizziamo campagne e funnel." },
];

export default function Process() {
  return (
    <section id="processo" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Il nostro metodo</h2>
          <p className="mt-3 text-slate-600">
            Un percorso chiaro e trasparente, dalla prima chiamata ai risultati concreti.
          </p>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                {s.title}
              </div>
              <div className="mt-2 text-slate-600 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
