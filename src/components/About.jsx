import { useRef, useEffect } from "react";
import { Tilt } from "react-tilt";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Github, Mail } from "lucide-react";
import profilePic from "../assets/aditi.jpg";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

gsap.registerPlugin(ScrollTrigger);

const useGsap = (elementRef, animation, delay = 0) => {
  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        animation.from,
        {
          ...animation.to,
          delay,
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [elementRef, animation, delay]);
};

const ServiceCard = ({ index, title, icon }) => {
  const cardRef = useRef(null);
  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 100, scale: 0.8 },
      to: { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    },
    index * 0.2
  );

  return (
    <Tilt className="w-full sm:w-[250px]">
      <div
        ref={cardRef}
        className="border-[2px] border-pink-500 hover:border-[#00fff7] bg-white/5 backdrop-blur-sm shadow-neon-lg neon-glow-card p-6 rounded-xl transition-all duration-300 hover:scale-105"
      >
        <div className="flex flex-col items-center text-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain mb-4" />
          <h3 className="text-white text-[20px] font-semibold">{title}</h3>
        </div>
      </div>
    </Tilt>
  );
};

const About = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const button1Ref = useRef(null);
  const button2Ref = useRef(null);
  const button3Ref = useRef(null);

  useGsap(
    headingRef,
    {
      from: { opacity: 0, y: -60 },
      to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    },
    0
  );

  useGsap(
    paragraphRef,
    {
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.3
  );

  useGsap(
    imageRef,
    {
      from: { opacity: 0, scale: 0.7 },
      to: { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" },
    },
    0.3
  );

  useGsap(button1Ref, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  }, 0.2);

  useGsap(button2Ref, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  }, 0.3);

  useGsap(button3Ref, {
    from: { opacity: 0, y: 30 },
    to: { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
  }, 0.4);

  return (
    <>
      <div ref={headingRef} className="text-center">
        <p className={`${styles.sectionSubText} text-[#c4b5fd] animate-pulse`}>
          Intro
        </p>
        <h2
          className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500 animate-glow-glitch hover:animate-glow-flash transition duration-500`}
        >
          About Me
        </h2>
      </div>

      {/* Profile + Paragraph */}
      <div className="mt-12 flex flex-col lg:flex-row items-center gap-10 justify-center text-center lg:text-left px-4">
        <img
          ref={imageRef}
          src={profilePic}
          alt="Aditi Gupta"
          className="w-52 h-52 sm:w-60 sm:h-60 object-cover border-4 border-pink-500 neon-glow
            rounded-full sm:rounded-xl"
        />

        <div className="max-w-2xl">
          <p
            ref={paragraphRef}
            className="text-secondary text-[17px] leading-[30px] tracking-wide"
          >
            👩‍💻 I’m a Computer Science undergrad driven by curiosity and creative chaos. Whether it's building sleek UIs, architecting scalable apps, or battling bugs at 2 AM — I love bringing ideas to life.
            <br /><br />
            ⚡ Hackathons, open-source, and real-world problem-solving excite me. Always up to collaborate, innovate, and ship bold things!
          </p>

          {/* Social Buttons */}
<div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
  <a
    ref={button1Ref}
    href="https://www.linkedin.com/in/aditi-gupta-464024324/"
    target="_blank"
    rel="noopener noreferrer"
    className="neon-btn"
  >
    <Linkedin className="mr-2" size={18} />
    LinkedIn
  </a>
  <a
    ref={button2Ref}
    href="https://github.com/AditiGupta-tech"
    target="_blank"
    rel="noopener noreferrer"
    className="neon-btn"
  >
    <Github className="mr-2" size={18} />
    GitHub
  </a>
  <a
    ref={button3Ref}
    href="mailto:aditig135@gmail.com"
    className="neon-btn"
  >
    <Mail className="mr-2" size={18} />
    Email
  </a>
</div>

        </div>
      </div>

      {/* Skill Cards */}
      <div className="mt-20 px-4 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center max-w-6xl w-full">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");