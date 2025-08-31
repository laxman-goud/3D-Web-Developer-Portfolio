import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float
      speed={isMobile ? 1.2 : 1.75}
      rotationIntensity={isMobile ? 0.5 : 1}
      floatIntensity={isMobile ? 1 : 2}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} />

      <mesh castShadow receiveShadow scale={isMobile ? 1.8 : 2.75}>
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <meshStandardMaterial color="#fff8eb" flatShading />

        {decal && (
          <Decal
            position={[0, 0, 1]}
            rotation={[0, 0, 0]}
            scale={1.2}
            map={decal}
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icons = [] }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lazy-load more balls every 500ms (only on mobile)
  useEffect(() => {
    if (isMobile && visibleCount < icons.length) {
      const interval = setInterval(() => {
        setVisibleCount((prev) => Math.min(prev + 1, icons.length));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isMobile, visibleCount, icons.length]);

  // ✅ Handle case when a single icon is passed
  const iconsArray = Array.isArray(icons) ? icons : [icons];

  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        {iconsArray
          .slice(0, isMobile ? visibleCount : iconsArray.length)
          .map((icon, index) => (
            <Ball key={index} imgUrl={icon} isMobile={isMobile} />
          ))}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
