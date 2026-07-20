"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { HEADSHOTS } from "@/lib/site-data";

function ArtworkCard({
  index,
  total,
  texture,
  onRef,
}: {
  index: number;
  total: number;
  texture: THREE.Texture;
  onRef: (el: THREE.Group | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const angle = (index / total) * Math.PI * 2;
  const radius = 4.2;
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    meshRef.current.lookAt(0, 0, 0);
    meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.6 + index) * 0.2;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={onRef} position={[x, 0, z]}>
        <mesh ref={meshRef}>
          <planeGeometry args={[1.6, 2.4]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.5}
            metalness={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const cardRefs = useRef<(THREE.Group | null)[]>([]);
  const { camera } = useThree();
  const worldPos = useRef(new THREE.Vector3()).current;
  const targetScale = useRef(new THREE.Vector3()).current;

  const textures = useTexture([...HEADSHOTS]);
  textures.forEach((t) => {
    t.colorSpace = THREE.SRGBColorSpace;
  });

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.08;
    }

    let closestIndex = -1;
    let closestDist = Infinity;
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      el.getWorldPosition(worldPos);
      const dist = worldPos.distanceTo(camera.position);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = i;
      }
    });

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const scale = i === closestIndex ? 1.4 : 1;
      targetScale.set(scale, scale, scale);
      el.scale.lerp(targetScale, delta * 5);
    });
  });

  return (
    <>
      <ambientLight intensity={0.7} />
      <pointLight position={[5, 5, 5]} intensity={40} />
      <Environment preset="city" />
      <group ref={groupRef}>
        {HEADSHOTS.map((src, i) => (
          <ArtworkCard
            key={src}
            index={i}
            total={HEADSHOTS.length}
            texture={textures[i]}
            onRef={(el) => {
              cardRefs.current[i] = el;
            }}
          />
        ))}
      </group>
    </>
  );
}

export default function VisualUniverse() {
  return (
    <section id="universe" className="relative h-screen w-full bg-umber-2">
      <div className="absolute left-8 top-8 z-10">
        <span className="text-xs tracking-[0.4em] text-ochre uppercase">02 — Visual Universe</span>
        <h2 className="mt-2 text-3xl font-semibold text-sand sm:text-5xl">
          A gallery in orbit
        </h2>
      </div>

      <Canvas camera={{ position: [0, 0.5, 9], fov: 50 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>

      <div className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-sand/40 uppercase">
        Drag to look around
      </div>
    </section>
  );
}
