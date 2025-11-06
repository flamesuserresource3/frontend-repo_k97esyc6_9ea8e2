import { Phone, MapPin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 shadow-sm" />
          <div className="leading-tight">
            <div className="font-semibold tracking-tight text-slate-900 group-hover:text-indigo-700 transition-colors">
              Simo Marketing
            </div>
            <div className="text-xs text-slate-500">Agenzia di marketing</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#servizi" className="text-slate-700 hover:text-slate-900">Servizi</a>
          <a href="#processo" className="text-slate-700 hover:text-slate-900">Metodo</a>
          <a href="#contatti" className="text-slate-700 hover:text-slate-900">Contatti</a>
        </nav>
        <a href="tel:3510519502" className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800">
          <Phone className="h-4 w-4" /> 351 051 9502
        </a>
      </div>
      <div className="hidden md:block bg-gradient-to-r from-indigo-500/10 via-fuchsia-500/10 to-amber-400/10 text-[11px] text-slate-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex items-center gap-3">
          <MapPin className="h-3.5 w-3.5 text-slate-500" />
          Caltanissetta, Sicilia • Soluzioni digitali su misura per aziende ambiziose
        </div>
      </div>
    </header>
  );
}
