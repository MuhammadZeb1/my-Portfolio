import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-950 text-white font-sans">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      <footer className="border-t border-white/10 bg-gray-950/80">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">
          <p>© {currentYear} Muhammad Zeb. All rights reserved.</p>
          <p className="text-center md:text-right">Full-Stack Developer • 1+ Year Experience</p>
        </div>
      </footer>
    </div>
  );
}
