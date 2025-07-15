import { useRef, useEffect } from "react";
import Card from "./Card";
import { styles } from "../styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "../constants"; 

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

const Projects = () => {
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const paragraphRef = useRef(null);
  const cardRef = useRef(null);

  useGsap(
    headingRef,
    {
      from: { opacity: 0, y: -60 },
      to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    },
    0
  );

  useGsap(
    subheadingRef,
    {
      from: { opacity: 0, y: -40 },
      to: { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
    },
    0.2
  );

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

  useGsap(
    cardRef,
    {
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    },
    0.3
  );

  return (
    <section id="projects" className="px-4 sm:px-6 md:px-8 py-16 max-w-7xl mx-auto">
      <div ref={headingRef} className="text-center">
        <p
          ref={subheadingRef}
          className={`${styles.sectionSubText} text-[#c4b5fd] animate-pulse`}
        >
          Projects
        </p>
        <h2
          className={`${styles.sectionHeadText} text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-500 animate-glow-glitch hover:animate-glow-flash transition duration-500`}
        >
          What I have made so far
        </h2>
        <div className="w-full flex justify-center mt-5">
        <p
          ref={paragraphRef}
          className="mt-3 text-secondary text-[18px] max-w-4xl leading-[30px] text-center"
        >
         "These projects reflect my drive to engineer smart, real-world solutions using technology as a tool for innovation and accessibility — not just code, but impact."
        </p>
      </div>
      </div>

      <div
        ref={cardRef}
        className="mt-12 flex flex-col sm:flex-col md:flex-row justify-center items-center gap-6 flex-wrap"
      >
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;