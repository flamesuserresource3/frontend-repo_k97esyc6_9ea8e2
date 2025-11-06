import { Rocket, Sparkles } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/3M5qKj2U0Nzz9WT2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/70 to-white pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-medium px-2.5 py-1.5 rounded-full bg-slate-900 text-white">
            <Sparkles className="h-3.5 w-3.5" /> Agenzia full-service
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
            Cresci il tuo business con soluzioni digitali su misura
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Siti web ad alte prestazioni, app moderne, gestione social, CRM, bot e automazioni: tutto ciò che serve per far brillare il tuo brand.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#contatti" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800">
              <Rocket className="h-4 w-4" /> Inizia ora
            </a>
            <a href="#servizi" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 text-slate-900 font-medium hover:bg-slate-50">
              Scopri i servizi
            </a>
          </div>
          <div className="mt-8 text-xs text-slate-500">
            Sede a Caltanissetta • Operiamo in tutta Italia
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            { title: "Siti & App", desc: "Design moderno, performance top" },
            { title: "Social & Ads", desc: "Strategie per crescere davvero" },
            { title: "CRM & Funnel", desc: "Gestisci lead e vendite" },
            { title: "Bot & Automazioni", desc: "Risparmia tempo, scala il business" },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{c.title}</div>
              <div className="text-sm text-slate-600">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
