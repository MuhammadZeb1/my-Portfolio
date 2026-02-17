import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

export default function About() {
  const stats = [
    { label: "Experience", value: "6+ months", icon: <FaCode className="text-blue-500" /> },
    { label: "Projects", value: "4+ Completed", icon: <FaRocket className="text-purple-500" /> },
    { label: "Focus", value: "MERN Stack", icon: <FaLightbulb className="text-yellow-500" /> },
  ];

  return (
    <section className="relative max-w-6xl mx-auto py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10" />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Visual/Experience Cards */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-2xl bg-gray-900/50 border border-white/5 backdrop-blur-sm ${index === 0 ? 'col-span-2' : 'col-span-1'}`}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-500 text-sm tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Right Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium mb-6">
            About Me
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            I transform <span className="text-blue-500 text-gradient">complex ideas</span> into digital reality.
          </h2>

          <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
            <p>
              Hi, I'm <span className="text-white font-medium">Muhammad Zeb</span>. I specialize in building 
              high-performance full-stack applications that don't just work—they provide 
              exceptional user experiences.
            </p>
            <p>
              With a deep focus on the <span className="text-white">MERN Stack</span>, I bridge the gap between 
              robust backend logic and sleek, interactive frontends. My goal is always clean, 
              scalable code and pixel-perfect design.
            </p>
          </div>

          <motion.div 
            className="mt-8 pt-8 border-t border-white/5 flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div>
              <p className="text-white font-bold text-xl">100%</p>
              <p className="text-xs text-gray-500 uppercase">Commitment</p>
            </div>
            <div>
              <p className="text-white font-bold text-xl">24/7</p>
              <p className="text-xs text-gray-500 uppercase">Support</p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}