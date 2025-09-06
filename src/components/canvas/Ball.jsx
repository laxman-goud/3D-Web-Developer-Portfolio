/**
 * Ball.jsx
 * ---------------------------
 * A reusable 3D Ball component with a decal (texture) applied.
 * Uses @react-three/fiber and @react-three/drei for rendering,
 * supports mobile optimizations (smaller scale & slower rotation).
 *
 * Props:
 * - imgUrl (string): The texture image to apply on the ball.
 * - isMobile (boolean): Whether the view is mobile (affects scale & rotation).
 */

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

/** Single Ball Mesh with floating & decal */
const Ball = ({ imgUrl, isMobile }) => {
  const [decal] = useTexture([imgUrl]); // Load decal texture

  return (
    <Float
      speed={isMobile ? 1.2 : 1.75}           // Floating speed
      rotationIntensity={isMobile ? 0.5 : 1} // Rotation strength
      floatIntensity={isMobile ? 1 : 2}      // Floating height
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 1]} />

      <mesh castShadow receiveShadow scale={isMobile ? 1.8 : 2.75}>
        {/* Icosahedron geometry for a rounded shape */}
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <meshStandardMaterial color="#fff8eb" flatShading />

        {/* Apply decal texture */}
        {decal && (
          <Decal position={[0, 0, 1]} rotation={[0, 0, 0]} scale={1.2} map={decal} />
        )}
      </mesh>
    </Float>
  );
};

/** BallCanvas renders multiple Ball components inside a Canvas */
const BallCanvas = ({ icons = [] }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);

  // Detect mobile viewport
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lazy-load more balls on mobile for performance
  useEffect(() => {
    if (isMobile && visibleCount < icons.length) {
      const interval = setInterval(() => {
        setVisibleCount((prev) => Math.min(prev + 1, icons.length));
      }, 500);
      return () => clearInterval(interval);
    }
  }, [isMobile, visibleCount, icons.length]);

  // Ensure icons is always an array
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
