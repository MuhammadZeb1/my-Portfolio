import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech, liveLink, githubLink }) {
  return (
    <motion.div
      className="bg-gray-900 p-6 rounded-xl hover:scale-105 transition flex flex-col justify-between"
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-3">{desc}</p>
        <p className="text-sm text-blue-400 mb-4">{tech}</p>
      </div>

      <div className="mt-auto flex gap-4">
        {/* {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-500 transition text-sm"
          >
            Live Demo
          </a> */}
        {/* )} */}
        {/* {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 px-4 py-2 rounded hover:border-white transition text-sm"
          >
            GitHub
          </a>
        )} */}
      </div>
    </motion.div>
  );
}
