"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";
import { ARTWORKS } from "@/lib/site-data";

function ArtworkCard({
  index,
  total,
  title,
}: {
  index: number;
  total: number;
  title: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const angle = (index / total) * Math.PI * 2;
  const radius = 4.2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.lookAt(0, 0, 0);
    ref.current.position.y = Math.sin(clock.elapsedTime * 0.6 + index) * 0.2;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group position={[x, 0, z]}>
        <mesh ref={ref}>
          <planeGeometry args={[1.6, 2]} />
          <meshStandardMaterial
            color={new THREE.Color().setHSL((index / total), 0.35, 0.35)}
            roughness={0.4}
            metalness={0.1}
          />
        </mesh>
        <Text
          position={[0, -1.25, 0]}
          fontSize={0.14}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>
      </group>
    </Float>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={40} />
      <Environment preset="city" />
      <group ref={groupRef}>
        {ARTWORKS.map((art, i) => (
          <ArtworkCard key={art.id} index={i} total={ARTWORKS.length} title={art.title} />
        ))}
      </group>
    </>
  );
}

export default function VisualUniverse() {
  return (
    <section id="universe" className="relative h-screen w-full bg-neutral-950">
      <div className="absolute left-8 top-8 z-10">
        <span className="text-xs tracking-[0.4em] text-white/50 uppercase">02 — Visual Universe</span>
        <h2 className="mt-2 text-3xl font-semibold text-white sm:text-5xl">
          A gallery in orbit
        </h2>
      </div>

      <Canvas camera={{ position: [0, 0.5, 9], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-white/40 uppercase">
        Drag to look around
      </div>
    </section>
  );
}
