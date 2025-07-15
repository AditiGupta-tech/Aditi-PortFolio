import { useEffect, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  NeonInteractiveBG,
  About,
  Contact,
  Projects,
  Hero,
  Navbar,
  Skills,
  Achievements,
  Experiences,
  Footer,
} from "./components";

const App = () => {
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const particleContainerRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      createParticle(mouseX, mouseY);
    };

    const animate = () => {
      trailX += (mouseX - trailX) * 0.15;
      trailY += (mouseY - trailY) * 0.15;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailX}px, ${trailY}px)`;
      }

      requestAnimationFrame(animate);
    };

    const createParticle = (x, y) => {
      const particle = document.createElement("div");
      particle.className = "cursor-particle";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particleContainerRef.current.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 500);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter>
  <div className="relative">
    <div className="fixed top-0 left-0 right-0 h-full -z-50 w-full">
      <NeonInteractiveBG />
    </div>

    {/* Mouse Cursor Effects */}
    <div className="pointer-events-none fixed inset-0 z-[100]">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={trailRef} className="cursor-trail" />
      <div ref={particleContainerRef} className="cursor-particles-container" />
    </div>

    {/* Main Content */}
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Experiences />

      <div className="relative z-10">
        <Contact />
        <Footer />
      </div>
    </div>
  </div>
</BrowserRouter>

  );
};

export default App;