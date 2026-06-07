import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NeuralNetwork = () => {
  const groupRef = useRef<THREE.Group>(null);
  const count = 40;

  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < count; i++) {
      p.push(new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ));
    }
    return p;
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((point, i) => (
        <mesh key={i} position={point}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#915EFF" />
        </mesh>
      ))}
      {/* Draw lines between close points */}
      {points.map((p1, i) =>
        points.slice(i + 1).map((p2, j) => {
          if (p1.distanceTo(p2) < 3) {
            const linePoints = [p1, p2];
            const lineGeometry = new THREE.BufferGeometry().setFromPoints(linePoints);
            return (
              /* @ts-ignore */
              <line key={`${i}-${j}`} geometry={lineGeometry}>
                <lineBasicMaterial color="#915EFF" transparent opacity={0.2} />
              </line>
            );
          }
          return null;
        })
      )}
    </group>
  );
};

export const NeuralNetworkCanvas = () => (
  <div className="absolute inset-0 z-[-1] opacity-50">
    <Canvas camera={{ position: [0, 0, 15] }}>
      <NeuralNetwork />
    </Canvas>
  </div>
);
