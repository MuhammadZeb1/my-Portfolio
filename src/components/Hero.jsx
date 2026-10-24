import profileImg from "../assets/image.jpeg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center py-20 px-6 overflow-hidden">
      
      {/* Background Decorative Blob (Optional/Advanced look) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-600/20 blur-[120px] rounded-full -z-10" />

      {/* Profile Image with Hover Effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ rotate: 5, scale: 1.05 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <img
          src={profileImg}
          alt="Muhammad Zeb"
          className="relative w-44 h-44 rounded-full mx-auto mb-8 object-cover border-2 border-white/10 shadow-2xl"
        />
      </motion.div>

      {/* Animated Heading with Gradient */}
      <motion.h1
        className="text-6xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-400 to-gray-500"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Muhammad Zeb
      </motion.h1>

      {/* Subheading with Staggered Text */}
      <motion.p
        className="text-lg md:text-2xl text-gray-400 max-w-3xl mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Full-Stack Developer and product strategist building <span className="text-blue-500 font-mono">AI-powered</span>, scalable web experiences with TypeScript, Next.js, SQL, and modern cloud architecture.
        I also lead digital product delivery at <span className="text-white font-medium">Koyzom</span>, transforming business ideas into polished, high-impact solutions.
      </motion.p>

      {/* Advanced Call to Action Buttons */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors"
        >
          View Projects
        </motion.button>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
        >
          Contact Me
        </motion.button>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-gray-500 text-sm flex flex-col items-center gap-2"
      >
        <span>Scroll Down</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-600 to-transparent" />
      </motion.div>

    </section>
  );
}