import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const orbitRef = useRef();
  const [isInteracting, setInteracting] = useState(false);

  // Function to smoothly reset the camera view
  const resetCameraView = () => {
    const controls = orbitRef.current;
    if (!controls) return;

    controls.reset();
  };

  useEffect(() => {
    const controls = orbitRef.current;
    if (controls) {
      const startCallback = () => setInteracting(true);
      const endCallback = () => {
        setInteracting(false);
        resetCameraView(); // Call reset on end of interaction
      };

      controls.addEventListener("start", startCallback);
      controls.addEventListener("end", endCallback);

      return () => {
        controls.removeEventListener("start", startCallback);
        controls.removeEventListener("end", endCallback);
      };
    }
  }, [orbitRef, setInteracting]);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "150px", height: "150px" }} // Set the canvas size
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls ref={orbitRef} enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
