import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      className="bg-gray-900 text-center py-16 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>
      <p className="text-gray-400 mb-4">Email: zebafridiuu@gmail.com</p>
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-blue-400">GitHub</a>
        <a href="#" className="hover:text-blue-400">LinkedIn</a>
      </div>
    </motion.section>
  );
}
