import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { div } from "framer-motion/client";
import Props from "./pratice/Props";

export default function App() {
  const greeting = (data)=>{
    alert(`helo world${data}`)
  }
  return (
    // <div className="bg-gray-950 text-white font-sans">
    //   {/* <Hero />
    //   <About />
    //   <Skills />
    //   <Projects />
    //   <Contact /> */}
    // </div>
    <div>
    <Props />
    
    </div>
  );
}
