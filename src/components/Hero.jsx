import profileImg from "../assets/image.jpeg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <motion.img
        src={profileImg}
        alt="Profile"
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-blue-600"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      <motion.h1
        className="text-5xl font-bold mb-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Muhammad Zeb
      </motion.h1>

      <motion.p
        className="text-xl text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        MERN Stack Developer building modern web applications
      </motion.p>
    </section>
  );
}
