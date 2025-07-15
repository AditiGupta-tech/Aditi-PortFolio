import { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, HeartHandshake, Users } from "lucide-react";
import { experiences } from "../constants";
import { styles } from "../styles";

gsap.registerPlugin(ScrollTrigger);

// ExperienceCard Component
const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  index,
  type,
}) => {
  const cardRef = useRef(null);

  const Icon =
    type === "volunteer" ? HeartHandshake : type === "societies" ? Users : Briefcase;

  return (
    <div
      ref={cardRef}
      className="relative group transform-style-3d transition-all duration-300"
    >
      <div className="absolute -top-5 left-5 z-10 w-10 h-10 rounded-full bg-[#f72585] text-black flex items-center justify-center shadow-[0_0_12px_#f72585] group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-white group-hover:animate-spin-slow" />
      </div>

      <div className="bg-[#1f1f2e]/60 backdrop-blur-md border border-[#f72585] rounded-2xl p-6 pl-16 shadow-[0_0_15px_#f72585] hover:shadow-[0_0_30px_#f72585] group-hover:scale-[1.035] group-hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-10 blur-xl animate-glow-shine pointer-events-none" />

        <h3 className="text-white text-xl font-semibold mb-1">{title}</h3>
        <p className="text-neon-blue text-sm">{company}</p>
        <p className="text-gray-400 text-sm italic mb-3">{duration}</p>
        <p className="text-white text-sm leading-relaxed z-10 relative">
          {description}
        </p>
      </div>
    </div>
  );
};

// ExperienceSection Component
const ExperienceSection = ({ heading, data, type }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      gsap.utils.toArray(sectionRef.current.children),
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-center text-gradient mb-8 bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-widest">
        {heading}
      </h3>
      <div
        ref={sectionRef}
        className="flex flex-col w-full max-w-4xl mx-auto gap-10"
      >
        {data.map((exp, index) => (
          <ExperienceCard key={index} index={index} {...exp} type={type} />
        ))}
      </div>
    </div>
  );
};

// Main Experiences Component
const Experiences = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    // Heading animation
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
    
    // Paragraph animation
    if (paragraphRef.current) {
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
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="mt-16 px-6 sm:px-10 overflow-hidden">
      <div className="text-center mb-14">
        <p className={`${styles.sectionSubText} text-[#c4b5fd] animate-pulse`}>
          Work, Internships & Community
        </p>
        <h2
          ref={headingRef}
          className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500 animate-glow-glitch hover:animate-glow-flash transition duration-500`}
        >
          Experiences
        </h2>
        <div className="w-full flex justify-center mt-5">
          <p
            ref={paragraphRef}
            className="mt-3 text-secondary text-[18px] max-w-4xl leading-[30px] text-center"
          >
            "Beyond the code, these experiences gave me a taste of real-world
            collaboration, leadership, and impact — and showed me how powerful
            tech becomes when it meets people and purpose."
          </p>
        </div>
      </div>

      <ExperienceSection
        heading="Professional"
        data={experiences.professional}
        type="professional"
      />
      <ExperienceSection
        heading="Volunteer"
        data={experiences.volunteer}
        type="volunteer"
      />
      <ExperienceSection
        heading="Societies & Clubs"
        data={experiences.societies}
        type="societies"
      />
    </section>
  );
};

export default SectionWrapper(Experiences, "experiences");