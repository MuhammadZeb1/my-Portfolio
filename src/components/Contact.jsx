import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(""); // "", "sending", "success", "error"

  const contactMethods = [
    {
      label: "Phone",
      value: "+92 332 9610945",
      href: "tel:+923329610945",
      icon: <FaPhoneAlt className="text-blue-400" />,
    },
    {
      label: "Email",
      value: "zebafridiuu@gmail.com",
      href: "mailto:zebafridiuu@gmail.com",
      icon: <FaEnvelope className="text-blue-400" />,
    },
    {
      label: "WhatsApp",
      value: "Message on WhatsApp",
      href: "https://wa.me/923329610945?text=Hello%20Muhammad%2C%20I%20want%20to%20discuss%20a%20project.",
      icon: <FaWhatsapp className="text-green-400" />,
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setMessageStatus("sending");

    emailjs
      .sendForm(
        "service_0v7atn1",
        "template_d3ost3l",
        form.current,
        "HYcenvw6QwpUUg98a"
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
      className="bg-gray-900 py-20 px-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-block px-4 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-400 text-sm font-medium mb-4">
            Contact Me
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Let’s build something impactful.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Available for freelance work, product development, and full-stack projects. I’d love to hear about your idea.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group rounded-2xl border border-white/10 bg-gray-800/60 p-5 text-left transition hover:border-blue-500/50 hover:bg-gray-800"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">{method.icon}</div>
                <span className="text-sm uppercase tracking-[0.2em] text-gray-400">{method.label}</span>
              </div>
              <p className="text-lg font-medium text-white group-hover:text-blue-400 transition">{method.value}</p>
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-400">
          <a
            href="https://github.com/MuhammadZeb1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/zeb-undefined-3a8a032b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-blue-400 transition"
          >
            <FaLinkedin /> LinkedIn
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
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="p-3 rounded-xl bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            disabled={messageStatus === "sending"}
            className={`bg-blue-600 px-6 py-3 rounded-xl font-medium hover:bg-blue-500 transition ${
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
              className="mt-4 text-center text-green-400 font-semibold"
            >
              Message sent successfully!
            </motion.p>
          )}

          {messageStatus === "error" && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-center text-red-500 font-semibold"
            >
              Something went wrong. Please try again.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
