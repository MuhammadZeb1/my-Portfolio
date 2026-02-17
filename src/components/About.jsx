import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl mx-auto py-16 px-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <p className="text-gray-400 leading-relaxed">
        I build scalable full-stack applications using React, Node, and MongoDB.
        My focus is clean UI, performance, and real-world problem solving.
      </p>
    </motion.section>
  );
}
