import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { MissionSnapshot } from "./components/sections/MissionSnapshot";
import { ImpactCounter } from "./components/sections/ImpactCounter";
import { ProgramGrid } from "./components/sections/ProgramGrid";
import { Roadmap } from "./components/sections/Roadmap";
import { SDGBar } from "./components/sections/SDGBar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <MissionSnapshot />
        <ImpactCounter />
        <ProgramGrid />
        <Roadmap />
        <SDGBar />
      </main>
      <Footer />
    </div>
  );
}

export default App;
