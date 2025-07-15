import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { achievements } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AchievementBlock = ({
  name,
  description,
  tags,
  image,
}) => {
  const blockRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const tagRefs = useRef([]);

  useEffect(() => {
    if (blockRef.current) {
      gsap.fromTo(
        blockRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blockRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    tagRefs.current.forEach((tag, i) => {
      gsap.fromTo(
        tag,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          delay: 0.5 + i * 0.05,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tag,
            start: "top 95%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={blockRef}
      className="relative flex flex-col md:flex-row gap-6 w-full
                 rounded-xl md:rounded-3xl
                 p-6 md:p-8
                 group perspective"
    >
      <div className="absolute inset-0 rounded-xl md:rounded-3xl
                      border border-pink-500/50
                      bg-black bg-opacity-20 backdrop-filter backdrop-blur-sm
                      shadow-[0_0_10px_rgba(255,0,255,0.4),_0_0_20px_rgba(0,255,255,0.2)]
                      transition-all duration-300 transform-gpu
                      group-hover:scale-[1.02]
                      group-hover:shadow-[0_0_15px_rgba(255,0,255,0.6),_0_0_30px_rgba(0,255,255,0.4)]
                      group-hover:-translate-y-1 group-hover:rotate-x-1 group-hover:rotate-y-1"></div>
                      
      <div className="relative z-10 w-full md:w-1/2 overflow-hidden rounded-lg md:rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-[220px] object-cover shadow-lg rounded-lg md:rounded-xl"
        />
      </div>

      {/* Content Section */}
      <div
        ref={contentRef}
        className="relative z-10 w-full md:w-1/2 text-center md:text-left space-y-4 md:space-y-5"
      >
        <h3 className="text-white text-[22px] font-bold tracking-wide">
          {name}
        </h3>
       <div className="text-gray-200 text-[15px] leading-relaxed space-y-1">
  {description}
</div>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-2">
          {tags.map((tag, i) => (
            <span
              key={`${name}-${tag.name}`}
              ref={(el) => (tagRefs.current[i] = el)}
              className={`px-3 py-1 rounded-full text-xs font-semibold
                          border border-current
                          ${tag.color}
                          bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm
                          shadow-sm transition-all duration-200`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Achievements = () => {
  const subheadingRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      subheadingRef.current,
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: subheadingRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: -20 },
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

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <>
      <div className="text-center">
        <p
          ref={subheadingRef}
          className={`${styles.sectionSubText} text-[#c4b5fd] animate-pulse`}
        >
          What I've Done So Far
        </p>
        <h2
          ref={headingRef}
          className={`${styles.sectionHeadText} text-transparent bg-clip-text
          bg-gradient-to-br from-pink-500 to-blue-500 animate-glow-glitch hover:animate-glow-flash
          transition duration-500`}
        >
          Achievements.
        </h2>
      </div>

      <div className="w-full flex justify-center mt-5">
        <p
          ref={paragraphRef}
          className="mt-3 text-secondary text-[18px] max-w-4xl leading-[30px] text-center"
        >
          “Until the spotlight hits, I’m building, learning, and showing up. The wins will come — I’m here for the long haul."
        </p>
      </div>

      <div className="achievements-container mt-16 flex flex-col gap-12">
  {achievements.map((achievement, index) => (
    <AchievementBlock key={`achievement-${index}`} {...achievement} />
  ))}
</div>
    </>
  );
};

export default SectionWrapper(Achievements, "achievements");