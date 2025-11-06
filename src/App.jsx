import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Process from "./components/Process";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-inter antialiased bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
    </div>
  );
}

export default App;
