export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-black/5 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold text-slate-900">Simo Marketing</div>
          <p className="mt-2 text-sm text-slate-600">
            Soluzioni digitali su misura: siti, app, social, CRM, bot e automazioni.
          </p>
        </div>
        <div className="text-sm">
          <div className="font-medium text-slate-900">Link rapidi</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li><a href="#home" className="hover:text-slate-900">Home</a></li>
            <li><a href="#chi-siamo" className="hover:text-slate-900">Chi siamo</a></li>
            <li><a href="#servizi" className="hover:text-slate-900">Servizi</a></li>
            <li><a href="#consulenza" className="hover:text-slate-900">Consulenza</a></li>
            <li><a href="#portafolio" className="hover:text-slate-900">Portafolio</a></li>
            <li><a href="#contatti" className="hover:text-slate-900">Contatti</a></li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="font-medium text-slate-900">Contatti</div>
          <ul className="mt-2 space-y-1 text-slate-600">
            <li>Telefono: <a href="tel:3510519502" className="hover:text-slate-900 font-medium">351 051 9502</a></li>
            <li>Email: <a href="mailto:info@simomarketing.it" className="hover:text-slate-900">info@simomarketing.it</a></li>
            <li>Caltanissetta, Sicilia</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-4 text-center text-[12px] text-slate-500">
        © {year} Simo Marketing — Tutti i diritti riservati
      </div>
    </footer>
  );
}
