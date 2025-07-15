import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "transparent",
      }}
    >
      {/* Neon Ring Loader */}
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-cyan-400 opacity-20 animate-ping"></div>
        <div className="w-full h-full border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <p className="mt-6 text-cyan-400 text-sm font-bold tracking-wider" style={{ textShadow: "0 0 8px #00FFFF" }}>
  {progress.toFixed(2)}%
</p>
    </Html>
  );
};

export default CanvasLoader;