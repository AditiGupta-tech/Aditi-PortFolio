import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Play, ChevronLeft, ChevronRight } from "lucide-react";

const imageFadeVariants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.3 } },
};

const Card = ({ project }) => {
  if (!project || !Array.isArray(project.screenshots)) {
    return (
      <div className="text-red-500 text-center p-6">
        ⚠️ Project data missing or malformed
      </div>
    );
  }

  const screenshots = project.screenshots || [];
  const [currentImg, setCurrentImg] = useState(0);
  const total = screenshots.length;

  const nextImg = () => setCurrentImg((prev) => (prev + 1) % total);
  const prevImg = () => setCurrentImg((prev) => (prev - 1 + total) % total);

  return (
    <motion.div
      className="w-full flex flex-col md:flex-row bg-[#0f0c1a] border border-[#7f00ff4f] rounded-3xl p-6 shadow-[0_0_30px_#ff00c84d] transition-transform duration-300 hover:scale-[1.02]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* LEFT SIDE */}
      <div className="md:w-1/2 flex flex-col gap-4 justify-between z-10">
        <div>
          <h2 className="text-[28px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff00c8] to-[#7f00ff]">
            {project.title}
          </h2>
          <p className="text-white/80 mt-2 text-[15px] leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech?.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r from-[#7f00ff] to-[#ff00c8] hover:scale-105 transition-transform"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-5">
          <div className="flex rounded-lg overflow-hidden border border-white/10 shadow-md divide-x divide-white/10 bg-[#111]">
            {/* GitHub */}
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              title="View source code on GitHub"
              aria-label="View source code on GitHub"
              className="px-4 py-2 flex items-center gap-2 text-white bg-[#111] hover:bg-[#1e1e1e] transition"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* Live Demo */}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              title="Watch the live demo"
              aria-label="Watch the live demo"
              className="px-4 py-2 flex items-center gap-2 text-[#00fff7] bg-[#111] hover:bg-[#00fff72e]  transition"
            >
              <Play className="w-5 h-5" />
            </a>

            {/* Visit Site */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              title="Open the live site"
              aria-label="Visit the live website"
              className="px-4 py-2 flex items-center gap-2 text-[#ff00c8] bg-[#111] hover:bg-[#ff00c82a] transition"
            >
              🌐
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center relative z-10">
        <h3 className="text-white mb-2 self-start font-semibold">
          Glimpses of the Website
        </h3>

        <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-[#ff00c8] via-transparent to-[#7f00ff] rounded-3xl pointer-events-none" />

        {/* Carousel */}
        <div className="relative w-full h-[250px] rounded-xl overflow-hidden border border-white/10 z-10 shadow-[0_0_25px_#ff00c87a] bg-[#ffffff06] backdrop-blur-md">
          <AnimatePresence mode="wait">
            <motion.img
              key={screenshots[currentImg]}
              src={screenshots[currentImg] || fallbackImage}
              alt={`Screenshot ${currentImg}`}
              className="w-full h-full object-cover"
              variants={imageFadeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={prevImg}
            className="absolute left-2 top-1/2 -translate-y-1/2  p-2 rounded-full hover:bg-[#ff00c860] transition z-20"
          >
            <ChevronLeft className="text-[#FF2EC8] hover:text-white font-bold" />
          </button>
          <button
            onClick={nextImg}
            className="absolute right-2 top-1/2 -translate-y-1/2  p-2 rounded-full hover:bg-[#ff00c860] transition z-20"
          >
            <ChevronRight className="text-[#FF2EC8] hover:text-white font-bold" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-3 z-10">
          {screenshots.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentImg(index)}
              className={`w-1 h-1 rounded-full cursor-pointer transition-all ${
                index === currentImg
                  ? "bg-gradient-to-r from-[#ff00c8] to-[#7f00ff] shadow-[0_0_8px_#ff00c8]"
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;