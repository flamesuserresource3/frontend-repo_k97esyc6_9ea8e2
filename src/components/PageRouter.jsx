import { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import ServicesPage from "./pages/ServicesPage";
import Consulting from "./pages/Consulting";
import Portfolio from "./pages/Portfolio";
import Contact from "./Contact";

function normalize(hash) {
  const h = (hash || "#home").toLowerCase();
  if (h === "#" || h === "#/" || h === "") return "#home";
  return h;
}

export default function PageRouter() {
  const [route, setRoute] = useState(normalize(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setRoute(normalize(window.location.hash));
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  switch (route) {
    case "#home":
      return <Home />;
    case "#chi-siamo":
      return <About />;
    case "#servizi":
      return <ServicesPage />;
    case "#consulenza":
      return <Consulting />;
    case "#portafolio":
    case "#portfolio":
      return <Portfolio />;
    case "#contatti":
      return <Contact />;
    default:
      return <Home />;
  }
}
