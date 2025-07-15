import { useEffect, useRef } from "react";
import { techCategories } from "../constants";
import { SectionWrapper } from "../hoc";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import * as LucideIcons from "lucide-react";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as TbIcons from "react-icons/tb";
import * as DiIcons from "react-icons/di";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import * as HiIcons from "react-icons/hi";

const iconLibraries = {
  Fa: FaIcons,
  Si: SiIcons,
  Tb: TbIcons,
  Di: DiIcons,
  Io: IoIcons,
  Bs: BsIcons,
  Fi: FiIcons,
  Ai: AiIcons,
  Hi: HiIcons,
};

import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

const IconComponent = ({ name, className = "", style = {} }) => {
  let Icon = LucideIcons[name];

  if (!Icon) {
    const prefix = name.slice(0, 2);
    const lib = iconLibraries[prefix];
    if (lib && lib[name]) {
      Icon = lib[name];
    }
  }

  if (!Icon) {
    return <span className="text-red-400">⚠️</span>;
  }

  return <Icon className={className} style={style} />;
};

const Skills = () => {
  const headingRef = useRef(null);
  const techCategoryRefs = useRef([]);
  const softSkillRefs = useRef([]);
  const paragraphRef = useRef(null);
  techCategoryRefs.current = [];
  softSkillRefs.current = [];

  const addToTechRefs = (el) => {
    if (el && !techCategoryRefs.current.includes(el)) {
      techCategoryRefs.current.push(el);
    }
  };

  const addToSoftSkillRefs = (el) => {
    if (el && !softSkillRefs.current.includes(el)) {
      softSkillRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Heading Animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: -60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    } 
    
    gsap.fromTo(
          paragraphRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: paragraphRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );

    // Soft Skill Cards Animation
    softSkillRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              const path = el.querySelector(".circular-progress-path");
              const target = parseFloat(path.dataset.target);
              gsap.fromTo(
                path,
                { strokeDasharray: `0, 100` },
                {
                  strokeDasharray: `${target}, 100`,
                  duration: 1.5,
                  ease: "power2.out",
                }
              );
            },
            onLeaveBack: () => {
              const path = el.querySelector(".circular-progress-path");
              gsap.to(path, { strokeDasharray: "0, 100", duration: 0.3 });
            },
          },
        }
      );
    }); 
    
    // Tech Category Cards Animation
    techCategoryRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.utils
                .toArray(card.querySelectorAll(".progress-bar-fill"))
                .forEach((bar) => {
                  const proficiency = bar.dataset.proficiency;
                  gsap.fromTo(
                    bar,
                    { width: "0%" },
                    {
                      width: `${proficiency}%`,
                      duration: 1.5,
                      ease: "power3.out",
                      delay: 0.3,
                    }
                  );
                });
            },
            onLeaveBack: () => {
              gsap.utils
                .toArray(card.querySelectorAll(".progress-bar-fill"))
                .forEach((bar) => {
                  gsap.to(bar, { width: "0%", duration: 0.3 });
                });
            },
          },
        }
      );
    }); 
    
    // Mouse hover animations
    gsap.utils.toArray(".tech-item-wrapper").forEach((item) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          scale: 1.02,
          boxShadow: "0 0 10px rgba(0, 255, 247, 0.4)",
          borderColor: "#00fff7",
          duration: 0.2,
          ease: "power2.out",
        });
        const icon = item.querySelector("svg");
        if (icon) {
          gsap.to(icon, {
            rotation: 10,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
          });
        }
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          scale: 1,
          boxShadow: "none",
          borderColor: "transparent",
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="tech-dashboard px-4 sm:px-8 py-16 text-white overflow-hidden">
      {/* Tech Stack Section */}
      {" "}
      <div className="text-center mb-14">
       {" "}
        <p className={`${styles.sectionSubText} text-[#c4b5fd] animate-pulse`}>
          Skills{" "}
        </p>
       {" "}
        <h2
          ref={headingRef}
          className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500 animate-glow-glitch hover:animate-glow-flash transition duration-500`}
        >
          Technologies{" "}
        </h2>

      <div className="w-full flex justify-center mt-5">
        <p
          ref={paragraphRef}
          className="mt-3 text-secondary text-[18px] max-w-4xl leading-[30px] text-center"
        >
          "I’ve explored, broken, and built with these cutting edge technologies — they’re not just tools, they’re my creative playground."
        </p>
      </div>
      </div>
     {" "}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
       {" "}
        {techCategories
          .filter((cat) => cat.type === "tech")
          .map((category, idx) => (
            <div
              key={idx}
              ref={addToTechRefs}
              className="category-card p-6 rounded-2xl border border-gray-700 bg-gray-800/40 backdrop-blur-md shadow-lg transform transition-all duration-300"
              style={{
                boxShadow: `0 0 25px ${category.color}1A`,
                borderColor: `${category.color}40`,
              }}
            >
             {" "}
              <div className="flex items-center mb-6">
                {" "}
                <IconComponent
                  name={category.icon}
                  type={category.type}
                  className="w-8 h-8 mr-3"
                  style={{
                    color: category.color,
                    filter: `drop-shadow(0 0 8px ${category.color}80)`,
                  }}
                />
                {" "}
                <h3
                  className="text-2xl font-bold uppercase tracking-wide"
                  style={{ color: category.color }}
                >
                   {category.title}{" "}
                </h3>
               {" "}
              </div>
             {" "}
              <div className="space-y-4">
                {" "}
                {category.items.map((tech, i) => (
                  <div
                    key={i}
                    className="tech-item-wrapper flex flex-col p-3 rounded-lg border border-transparent hover:border-cyan-400/50 transition-all duration-200 cursor-pointer relative overflow-hidden bg-gray-900/30"
                    style={{ boxShadow: `inset 0 0 5px ${category.color}1A` }}
                  >
                    {" "}
                    <div className="flex items-center gap-3 mb-1">
                      {" "}
                      <IconComponent
                        name={tech.icon}
                        type={category.type}
                        className="w-5 h-5 icon-animated"
                        style={{
                          color: category.color,
                          filter: `drop-shadow(0 0 5px ${category.color}60)`,
                        }}
                      />
                      {" "}
                      <span className="text-lg font-medium text-white">
                         {tech.name}{" "}
                      </span>
                      {" "}
                    </div>
                    {" "}
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      {" "}
                      <div
                        className="progress-bar-fill h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ backgroundColor: category.color }}
                        data-proficiency={tech.proficiency}
                      ></div>
                      {" "}
                    </div>
                    {" "}
                  </div>
                ))}
               {" "}
              </div>
             {" "}
            </div>
          ))}
       {" "}
      </div>
      {/* Separator Line */}
      <div className="my-12 border-t border-gray-600/50 w-2/3 mx-auto" />

      {/* Soft Skills Section */}
      {" "}
      <div className="text-center mb-14">
       {" "}
        <h2
          className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-blue-400 animate-glow-glitch hover:animate-glow-flash transition duration-500`}
        >
          Soft Skills{" "}
        </h2>
       <div className="w-full flex justify-center mt-5">
        <p
          ref={paragraphRef}
          className="mt-3 text-secondary text-[18px] max-w-4xl leading-[30px] text-center"
        >
         "Beyond code, I bring strong interpersonal skills that shape how I lead, learn, and collaborate in fast-paced environments."
        </p>
      </div>
      </div>
     {" "}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
       {" "}
        {techCategories
          .filter((cat) => cat.type === "soft")
          .flatMap((category) =>
            category.items.map((skill, i) => (
              <div
                key={i}
                ref={addToSoftSkillRefs}
                className="soft-skill-chart-wrapper group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-pink-400 bg-gray-900/40 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#ec4899] transform"
                style={{
                  boxShadow: `0 0 25px ${category.color}40`,
                }}
              >
                 {/* Circular Chart */}
                 {" "}
                <div className="relative w-24 h-24 mb-4">
                  {" "}
                  <svg
                    className="absolute top-0 left-0 rotate-[-90deg]"
                    width="100%"
                    height="100%"
                    viewBox="0 0 36 36"
                  >
                    {" "}
                    <path
                      className="text-gray-700"
                      stroke="currentColor"
                      strokeWidth="3"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {" "}
                    <path
                      className="circular-progress-path"
                      stroke={category.color}
                      strokeWidth="3"
                      fill="none"
                      strokeDasharray="0, 100"
                      data-target={skill.proficiency}
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {" "}
                  </svg>
                  {" "}
                  <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
                     {skill.proficiency}% {" "}
                  </div>
                  {" "}
                </div>
                 {/* Icon + Label */}{" "}
                <div className="flex items-center gap-2">
                  {" "}
                  <IconComponent
                    name={skill.icon}
                    type={category.type}
                    className="w-5 h-5 animate-spin-slow"
                    style={{
                      color: category.color,
                      filter: `drop-shadow(0 0 8px ${category.color}80)`,
                    }}
                  />
                  {" "}
                  <span className="text-md font-medium text-white">
                     {skill.name}{" "}
                  </span>
                  {" "}
                </div>
                {/* Tooltip */}
                {skill.description && (
                  <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full 
                  opacity-0 group-hover:opacity-100 transition duration-300 
                  text-sm font-medium text-white px-1 py-2 rounded-lg 
                  bg-black/80 shadow-lg border border-pink-400
                  before:content-[''] before:absolute before:bottom-[-6px] before:left-1/2 
                  before:-translate-x-1/2 before:border-4 before:border-transparent 
                  before:border-t-pink-400 w-full text-center"
                    style={{
                      boxShadow:
                        "0 0 8px #ec4899AA, 0 0 16px #ec489980, inset 0 0 4px #ec489950",
                      backdropFilter: "blur(6px)",
                      zIndex: 20,
                      pointerEvents: "none",
                    }}
                  >
                    {skill.description}
                  </div>
                )}
               {" "}
              </div>
            ))
          )}
       {" "}
      </div>
     {" "}
    </section>
  );
};

export default SectionWrapper(Skills, "skills");