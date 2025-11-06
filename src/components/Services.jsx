import { Globe, AppWindow, Share2, Workflow, Bot, Pipeline } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Creazione siti web",
    desc: "Siti moderni, veloci e ottimizzati SEO per convertire visitatori in clienti.",
  },
  {
    icon: AppWindow,
    title: "Sviluppo applicazioni",
    desc: "Web app e PWA personalizzate per processi e servizi su misura.",
  },
  {
    icon: Share2,
    title: "Gestione social",
    desc: "Piani editoriali, contenuti e campagne per aumentare community e vendite.",
  },
  {
    icon: Workflow,
    title: "Gestione CRM",
    desc: "Setup, integrazioni e funnel per gestire lead e clienti in modo efficace.",
  },
  { icon: Bot, title: "Creazione Bot", desc: "Chatbot WhatsApp/Instagram e assistenti IA che rispondono 24/7." },
  {
    icon: Pipeline,
    title: "Automazioni",
    desc: "Integrazioni tra strumenti, Zapier/Make, flussi smart che fanno risparmiare ore.",
  },
];

export default function Services() {
  return (
    <section id="servizi" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Servizi</h2>
          <p className="mt-3 text-slate-600">
            Dal primo contatto alla crescita del tuo brand: copriamo tutto il ciclo digitale.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white">
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-4 font-semibold text-slate-900">{title}</div>
              <div className="mt-1 text-sm text-slate-600">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
