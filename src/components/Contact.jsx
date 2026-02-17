import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(""); // "", "sending", "success", "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageStatus("sending");

    emailjs
      .sendForm(
        "service_0v7atn1",   // Service ID
        "template_d3ost3l",  // Template ID
        form.current,
        "HYcenvw6QwpUUg98a"  // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus("success");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessageStatus("error");
        }
      );
  };

  return (
    <motion.section
      className="bg-gray-900 text-center py-16 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-6">Contact</h2>

      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://github.com/MuhammadZeb1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/zeb-undefined-3a8a032b1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition"
        >
          LinkedIn
        </a>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-md mx-auto gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={4}
          className="p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none"
        />
        <button
          type="submit"
          disabled={messageStatus === "sending"}
          className={`bg-blue-600 px-6 py-3 rounded hover:bg-blue-500 transition ${
            messageStatus === "sending" ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {messageStatus === "sending" ? "Sending..." : "Send Message"}
        </button>
      </form>

      <AnimatePresence>
        {messageStatus === "success" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-green-400 font-semibold"
          >
            Message sent successfully!
          </motion.p>
        )}

        {messageStatus === "error" && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 text-red-500 font-semibold"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
