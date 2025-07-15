import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const NeonBG = () => {
  const canvasRef = useRef(null);
  const whiteDots = useRef([]);
  const animationFrameId = useRef(null);

  const initWhiteDots = (canvas) => {
    const numDots = 200;
    const newDots = [];
    for (let i = 0; i < numDots; i++) {
      newDots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 0.8 + 0.3,
        alpha: Math.random() * 0.7 + 0.3,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      });
    }
    whiteDots.current = newDots;
  };

  const animateWhiteDots = (ctx, canvas) => {
    whiteDots.current.forEach(dot => {
      dot.x += dot.vx;
      dot.y += dot.vy;

      if (dot.x < 0) dot.x = canvas.width;
      if (dot.x > canvas.width) dot.x = 0;
      if (dot.y < 0) dot.y = canvas.height;
      if (dot.y > canvas.height) dot.y = 0;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${dot.alpha})`;
      ctx.fill();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initWhiteDots(canvas);
    };

    setCanvasDimensions();
    initWhiteDots(canvas);

    const renderCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      animateWhiteDots(ctx, canvas);
      animationFrameId.current = requestAnimationFrame(renderCanvas);
    };

    renderCanvas();

    window.addEventListener('resize', setCanvasDimensions);

    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, []);

  const shapeColors = [
    'rgba(168, 85, 247, 0.9)',
    'rgba(236, 72, 153, 0.9)',
    'rgba(59, 130, 246, 0.9)',
    'rgba(6, 182, 212, 0.9)',
    'rgba(16, 185, 129, 0.9)',
    'rgba(255, 200, 0, 0.9)',
    'rgba(255, 100, 200, 0.9)'
  ];

  const generateRandomColor = () => shapeColors[Math.floor(Math.random() * shapeColors.length)];

  return (
    <div
  style={{
    position: "absolute", 
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#000000",
    opacity: 0.3,
    pointerEvents: "none",
  }}
>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '8%',
          left: '8%',
          width: '30px',
          height: '30px',
          border: `1px solid ${generateRandomColor()}`,
          transform: 'rotate(45deg)',
        }}
        animate={{
          rotate: [45, 225, 405],
          scale: [1, 1.05, 1],
          x: ['-5%', '5%', '-5%'],
          y: ['-5%', '5%', '-5%'],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '15%',
          right: '10%',
          width: '25px',
          height: '25px',
          backgroundColor: generateRandomColor(),
          borderRadius: '50%',
        }}
        animate={{
          y: ['-20px', '20px', '-20px'],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '12%',
          width: '25px',
          height: '25px',
          border: `1px solid ${generateRandomColor()}`,
          transform: 'rotate(0deg)',
        }}
        animate={{
          rotate: [0, 360],
          x: ['-10px', '10px', '-10px'],
          y: ['-10px', '10px', '-10px'],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '5%',
          width: '20px',
          height: '20px',
          backgroundColor: generateRandomColor(),
          borderRadius: '50%',
        }}
        animate={{
          scale: [1, 1.15, 0.9, 1],
          x: ['-15px', '15px', '-15px'],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '40%',
          right: '8%',
          width: '35px',
          height: '35px',
          border: `1px solid ${generateRandomColor()}`,
          transform: 'rotate(-30deg)',
        }}
        animate={{
          rotate: [-30, 30, -30],
          y: ['-10px', '10px', '-10px'],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '18%',
          width: '30px',
          height: '30px',
          backgroundColor: generateRandomColor(),
          borderRadius: '50%',
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
          x: ['-10px', '10px', '-10px'],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '20px',
          height: '20px',
          border: `1px solid ${generateRandomColor()}`,
          transform: 'rotate(60deg)',
        }}
        animate={{
          rotate: [60, 240, 60],
          scale: [1, 1.1, 1],
          y: ['-5px', '5px', '-5px'],
        }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '25%',
          right: '30%',
          width: '22px',
          height: '22px',
          backgroundColor: generateRandomColor(),
          borderRadius: '50%',
        }}
        animate={{
          y: ['-10px', '10px', '-10px'],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%) rotate(-15deg)',
          width: '25px',
          height: '25px',
          border: `1px solid ${generateRandomColor()}`,
        }}
        animate={{
          rotate: [-15, 165, -15],
          x: ['-5%', '5%', '-5%'],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '35%',
          left: '25%',
          width: '28px',
          height: '28px',
          backgroundColor: generateRandomColor(),
          borderRadius: '50%',
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.9, 0.7, 0.9],
          x: ['-8px', '8px', '-8px'],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          bottom: '40%',
          right: '20%',
          width: '22px',
          height: '22px',
          border: `1px solid ${generateRandomColor()}`,
          transform: 'rotate(10deg)',
        }}
        animate={{
          rotate: [10, 190, 10],
          y: ['-12px', '12px', '-12px'],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        style={{
          position: 'absolute',
          top: '60%',
          right: '15%',
          width: '20px',
          height: '20px',
          backgroundColor: generateRandomColor(),
          borderRadius: '50%',
        }}
        animate={{
          opacity: [0.8, 1, 0.8],
          x: ['-5px', '5px', '-5px'],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,
          mixBlendMode: 'screen',
          backgroundImage: `
            linear-gradient(rgba(100, 100, 100, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 100, 100, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: 'translateZ(-10px)',
        }}
      />
    </div>
  );
};

export default NeonBG;