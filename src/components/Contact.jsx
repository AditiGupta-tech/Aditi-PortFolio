import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aditi Gupta",
          from_email: form.email,
          to_email: "your.email@example.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setEmailSent(true); 
          setForm({ name: "", email: "", message: "" });

          setTimeout(() => {
            setEmailSent(false);
          }, 4000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops, something went wrong.");
        }
      );
  };

  return (
    <div className="flex flex-col xl:flex-row justify-center items-center gap-14 px-6 md:px-16 xl:px-28 mt-16 relative z-10">
      {/* FORM SECTION */}
      <motion.div
        variants={slideIn("left", "tween", 0, 0.5)}
        className="flex-[0.6] w-full max-w-[500px] bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-neon-lg"
      >
        <h2
          className="text-3xl md:text-4xl font-extrabold glitch pink-text-gradient mb-3"
          data-text="Let's Build Something That Matters."
        >
          Let’s Build Something That Matters.
        </h2>

        <p className="text-sm text-secondary mb-8 leading-relaxed">
          Great things happen when ideas meet action. If you’re looking for someone to build, learn, or grow with, count me in!
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Eg. John Doe"
            required
            className="neon-underline-input"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Eg. you@gmail.com"
            required
            className="neon-underline-input"
          />
          <textarea
            rows="3"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Got something innovative, fresh, or even a little crazy? Or a simple hi? Drop it below!"
            required
            className="neon-underline-input resize-none pt-2 pb-1"
          />

          <div className="flex items-center gap-3 mt-2">
            <button
              type="submit"
              className="neon-send-btn flex items-center justify-center"
              aria-label="Send message"
            >
              <Send size={18} />
            </button>

            {loading ? (
  <p className="text-xs text-pink-400 italic">Sending...</p>
) : emailSent ? (
  <div className="flex items-center gap-2 text-green-500 font-medium text-sm animate-fade-in">
    <div
      className="w-5 h-5 rounded-full border-2 border-green-500 flex items-center justify-center"
    >
      <svg
        className="w-3 h-3"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
    Email sent, Thank you!.
  </div>
) : (
  <p className="text-xs text-secondary italic">
    This message will land in my inbox.
  </p>
)}

          </div>
        </form>
      </motion.div>

      {/* EARTH SECTION */}
      <motion.div
        variants={slideIn("right", "tween", 0, 0.5)}
        className="flex-1 w-full max-w-[500px] h-[300px] md:h-[500px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");