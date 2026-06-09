"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 2000, mouse }: { count?: number; mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const mesh = useRef<THREE.Points>(null);
  const hoverRef = useRef(0);

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = (Math.random() - 0.5) * 20;
      sizes[i] = Math.random() * 2 + 0.5;

      // Gold/green color palette
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        colors[i3] = 0.79; colors[i3 + 1] = 0.64; colors[i3 + 2] = 0.16; // Gold
      } else if (colorChoice < 0.6) {
        colors[i3] = 0.18; colors[i3 + 1] = 0.35; colors[i3 + 2] = 0.15; // Green
      } else {
        colors[i3] = 0.96; colors[i3 + 1] = 0.94; colors[i3 + 2] = 0.90; // Cream
      }
    }

    return { positions, sizes, colors };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = positions[i3];
      const y = positions[i3 + 1];
      const z = positions[i3 + 2];

      // DNA helix-like motion
      const t = time * 0.2 + i * 0.01;
      positions[i3] = x + Math.sin(t) * 0.002;
      positions[i3 + 1] = y + Math.cos(t * 0.7) * 0.002;
      positions[i3 + 2] = z + Math.sin(t * 0.5) * 0.002;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;
    mesh.current.rotation.y = time * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingLines() {
  const group = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const lineData = [];
    for (let i = 0; i < 20; i++) {
      const points = [];
      for (let j = 0; j < 50; j++) {
        points.push(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        );
      }
      lineData.push(new Float32Array(points));
    }
    return lineData;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.02;
    group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
  });

  return (
    <group ref={group}>
      {lines.map((points, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={points.length / 3}
              array={points}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#c9a227" transparent opacity={0.15} />
        </line>
      ))}
    </group>
  );
}

export default function ParticleField() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles mouse={mouse} count={1500} />
        <FloatingLines />
      </Canvas>
    </div>
  );
}
