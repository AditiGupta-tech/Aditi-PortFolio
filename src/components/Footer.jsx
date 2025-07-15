import { Github, Linkedin, Mail } from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

const Footer = () => {
  const links = [
    {
      href: "https://github.com/AditiGupta-tech",
      icon: <Github className="icon-glow" size={28} />,
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/aditi-gupta-464024324/",
      icon: <Linkedin className="icon-glow" size={28} />,
      label: "LinkedIn",
    },
    {
      href: "mailto:aditig135@gmail.com",
      icon: <Mail className="icon-glow" size={28} />,
      label: "Email",
    },
  ];

  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        type: "spring",
        stiffness: 60,
      },
    }),
  };

  return (
    <footer
      ref={ref}
      className="w-full py-3 mt-10 flex justify-center gap-8 mb-2"
    >
      {links.map(({ href, icon, label }, index) => (
        <motion.a
          key={index}
          custom={index}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="neon-border hover:scale-110 transition duration-300"
        >
          {icon}
        </motion.a>
      ))}
    </footer>
  );
};

export default Footer;