import { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Floating particles background
function StarField() {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random positions for particles
  const particles = new Float32Array(2000 * 3);
  for (let i = 0; i < 2000; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 10;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 10; 
    particles[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 10) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime / 15) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00d4ff"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

// Animated geometric shapes
function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime / 2) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial 
        color="#4785ff" 
        transparent 
        opacity={0.6}
        wireframe
      />
    </mesh>
  );
}

function FloatingTorus() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 3) * 0.2;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime / 2) * 0.3;
      meshRef.current.position.y = Math.cos(state.clock.elapsedTime / 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[-2, 0, 0]}>
      <torusGeometry args={[0.2, 0.1, 16, 100]} />
      <meshStandardMaterial 
        color="#00d4ff" 
        transparent 
        opacity={0.7}
        wireframe
      />
    </mesh>
  );
}

// Main Three.js Scene Component
export function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 60,
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#4785ff" intensity={0.5} />
        <pointLight position={[-10, -10, -5]} color="#00d4ff" intensity={0.3} />
        
        <StarField />
        <FloatingCube />
        <FloatingTorus />
      </Canvas>
    </div>
  );
}