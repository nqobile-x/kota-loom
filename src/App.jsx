import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import LoomProcess from "./components/LoomProcess.jsx";
import Menu from "./components/Menu.jsx";
import Story from "./components/Story.jsx";
import Franchise from "./components/Franchise.jsx";
import Visit from "./components/Visit.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-[100dvh] bg-ink">
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
