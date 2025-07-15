import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { ChevronDown } from "lucide-react";

const typingText = "Building with Logic ⚙️, Styling with Spark ⚡";
const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

const Hero = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [glitchName, setGlitchName] = useState("Aditi Gupta");

  useEffect(() => {
    if (charIndex < typingText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + typingText[charIndex]);
        setCharIndex(charIndex + 1);
      }, 70);
      return () => clearTimeout(timeout);
    }
  }, [charIndex]);

  useEffect(() => {
    const base = "Aditi Gupta";
    const interval = setInterval(() => {
      const shuffled = base
        .split("")
        .map((char) =>
          Math.random() > 0.7
            ? matrixChars[Math.floor(Math.random() * matrixChars.length)]
            : char
        )
        .join("");
      setGlitchName(shuffled);
    }, 90);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setGlitchName(base);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center mx-auto px-5 sm:px-10 pt-20 pb-10">
      <div className="max-w-7xl w-full flex flex-col gap-6 items-start">
        <div className="flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center mt-2">
            <div className="w-4 h-4 rounded-full neon-pulse-dot" />
            <div className="w-1 sm:h-52 h-28 violet-gradient animate-pulse-slow" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm{" "}
              <span className="relative inline-block group text-pink-500 hover:text-white duration-300 transition-all cursor-pointer">
                <span className="bolt-strike-hover z-10 relative">{glitchName}</span>
                <svg
                  className="absolute top-full left-0 w-full h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  viewBox="0 0 100 10"
                >
                  <path
                    d="M0 5 L20 0 L40 10 L60 0 L80 10 L100 5"
                    stroke="#ff00aa"
                    strokeWidth="1.5"
                    fill="transparent"
                  />
                </svg>
              </span>
            </h1>

            <div className="h-[2px] w-[120px] mt-2 bg-gradient-to-r from-pink-500 to-cyan-400 animate-glow" />

            <div className="flex gap-3 flex-wrap mt-6">
              <span className="text-xs md:text-sm text-white px-4 py-1 rounded-full bg-pink-600/10 border border-pink-500 glow-border backdrop-blur-sm">
                👩‍💻 B.Tech, Computer Science
              </span>
              <span className="text-xs md:text-sm text-white px-4 py-1 rounded-full bg-cyan-600/10 border border-cyan-400 glow-border backdrop-blur-sm">
                🏛️ University: IGDTUW
              </span>
              <span className="text-xs md:text-sm text-white px-4 py-1 rounded-full bg-cyan-600/10 border border-cyan-400 glow-border backdrop-blur-sm">
                🎓 Batch: 2028
              </span>
              <span className="text-xs md:text-sm text-white px-4 py-1 rounded-full bg-green-600/10 border border-green-400 glow-border backdrop-blur-sm">
                📈 CGPA: 9.24
              </span>
            </div>

            <p className="mt-4 text-pink-400 font-mono text-sm md:text-base glow-text typing-blink typing-cursor">
              {displayedText}
            </p>
          </motion.div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-5">
        <div className="p-2 rounded-full border-2 border-pink-500 shadow-neonPink animate-pulse hover:scale-105 transition-all cursor-pointer">
          <ChevronDown className="w-6 h-6 text-pink-400" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
