import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["React", "Node.js", "MongoDB", "Tailwind", "JavaScript", "Express", "Git", "Stripe"];

  return (
    <section className="bg-gray-900 py-16 px-6 text-center">
      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill}
            className="bg-gray-800 p-6 rounded-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
