import { useState } from "react";
import Preloader from "./components/Preloader.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LoomProcess from "./components/LoomProcess.jsx";
import Menu from "./components/Menu.jsx";
import Story from "./components/Story.jsx";
import Franchise from "./components/Franchise.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  // Show the intro once per browser session (returning visitors skip it).
  const [showIntro, setShowIntro] = useState(() => {
    try {
      return !sessionStorage.getItem("kl_intro_seen");
    } catch {
      return true;
    }
  });

  return (
    <div className="min-h-[100dvh] bg-ink">
      {showIntro && <Preloader onDone={() => setShowIntro(false)} />}
      <Navbar />
      <main>
        <Hero />
        <LoomProcess />
        <Menu />
        <Story />
        <Franchise />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}
