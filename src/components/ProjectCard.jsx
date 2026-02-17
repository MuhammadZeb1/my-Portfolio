import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech }) {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-3">{desc}</p>
      <p className="text-sm text-blue-400">{tech}</p>
    </motion.div>
  );
}
