import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contatti" className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Parliamo del tuo progetto</h2>
            <p className="mt-3 text-white/70">
              Raccontaci obiettivi e tempistiche: ti proponiamo una strategia su misura e un preventivo chiaro.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /> 351 051 9502</div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /> info@simomarketing.it</div>
              <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Caltanissetta, Sicilia</div>
            </div>
          </div>
          <form onSubmit={(e)=>e.preventDefault()} className="bg-white text-slate-900 rounded-2xl p-6 border border-white/10">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-slate-600">Nome</label>
                <input className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Il tuo nome" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="nome@email.it" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Messaggio</label>
                <textarea rows="4" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Parlaci della tua idea..." />
              </div>
            </div>
            <button className="mt-4 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 w-full">Invia richiesta</button>
            <p className="mt-3 text-xs text-slate-500">Rispondiamo in 24 ore lavorative.</p>
          </form>
        </div>
        <div className="mt-12 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Simo Marketing • Partita IVA su richiesta • Privacy & Cookie
        </div>
      </div>
    </section>
  );
}
