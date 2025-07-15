// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = () => {
//   const computer = useGLTF("./desktop_pc/scene.gltf");

//   return (
//     <mesh>
//       <hemisphereLight intensity={0.15} groundColor="black" />
//       <spotLight
//         position={[-20, 50, 10]}
//         angle={0.12}
//         penumbra={1}
//         intensity={1}
//         castShadow
//         shadow-mapSize={1024}
//       />
//       <pointLight intensity={1} />
//       <primitive
//         object={computer.scene}
//         scale={0.75} // Keep scale normal for desktop
//         position={[0, -3.25, -1.5]}
//         rotation={[-0.01, -0.2, -0.1]}
//       />
//     </mesh>
//   );
// };

// const ComputersCanvas = () => {
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 500px)");
    
//     const handleMediaQueryChange = (event) => {
//       setIsMobile(event.matches);
//     };

//     mediaQuery.addEventListener("change", handleMediaQueryChange);

//     return () => {
//       mediaQuery.removeEventListener("change", handleMediaQueryChange);
//     };
//   }, []);

//   return (
//     !isMobile && ( // Hide on mobile screens
//       <Canvas
//         frameloop="demand"
//         shadows
//         dpr={[1, 2]}
//         camera={{ position: [20, 3, 5], fov: 25 }}
//         gl={{ preserveDrawingBuffer: true }}
//       >
//         <Suspense fallback={<CanvasLoader />}>
//           <OrbitControls
//             enableZoom={false}
//             maxPolarAngle={Math.PI / 2}
//             minPolarAngle={Math.PI / 2}
//           />
//           <Computers />
//         </Suspense>
//         <Preload all />
//       </Canvas>
//     )
//   );
// };

// export default ComputersCanvas;

import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = () => {
  const group = useRef();
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  // Remove the stand/cylinder (based on name)
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.name.toLowerCase().includes("cylinder")) {
        child.visible = false;
      }
    });
  }, [scene]);

  // Slow rotation effect
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.2; // Adjust speed if needed
    }
  });

  return (
    <group ref={group}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    !isMobile && (
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    )
  );
};

export default ComputersCanvas;
