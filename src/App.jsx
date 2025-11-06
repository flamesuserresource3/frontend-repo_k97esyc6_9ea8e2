import Navbar from "./components/Navbar";
import PageRouter from "./components/PageRouter";

function App() {
  return (
    <div className="font-inter antialiased bg-white text-slate-900 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <PageRouter />
      </div>
    </div>
  );
}

export default App;
