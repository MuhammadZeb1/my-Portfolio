import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaJsSquare, FaGitAlt, FaDatabase 
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiStripe } from "react-icons/si";

const skillList = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Stripe", icon: <SiStripe className="text-indigo-500" /> },
];

export default function Skills() {
  return (
    <section className="bg-[#0b1120] py-24 px-6 relative overflow-hidden">
      {/* Subtle Background Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-5 text-9xl font-bold select-none whitespace-nowrap">
        TECH STACK
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skillList.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative bg-gray-800/40 border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-gray-800/60 hover:border-blue-500/50 transition-all"
            >
              {/* Icon Animation */}
              <div className="text-5xl mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              
              <h3 className="text-gray-200 font-medium text-lg tracking-wide">
                {skill.name}
              </h3>

              {/* Decorative Glow */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}