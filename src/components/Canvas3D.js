import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function NeuralNetwork() {
  const group = useRef();
  const particles = useRef();

  const { nodes, lines } = useMemo(() => {
    const numNodes = 50;
    const nodes = Array.from({ length: numNodes }, () => new THREE.Vector3(
      THREE.MathUtils.randFloatSpread(5),
      THREE.MathUtils.randFloatSpread(5),
      THREE.MathUtils.randFloatSpread(5)
    ));

    const linePositions = [];
    nodes.forEach(p1 => {
        nodes.forEach(p2 => {
            if (p1.distanceTo(p2) < 1.5) {
                linePositions.push(p1.x, p1.y, p1.z, p2.x, p2.y, p2.z);
            }
        });
    });

    return { nodes, lines: new Float32Array(linePositions) };
  }, []);

  useFrame((state, delta) => {
    const { pointer, clock } = state;
    group.current.rotation.y += delta * 0.1;
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, pointer.x * 0.3, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, pointer.y * 0.3, 0.05);
    if (particles.current) {
        particles.current.material.uniforms.time.value = clock.elapsedTime;
    }
  });
  
  const lineMaterial = new THREE.LineBasicMaterial({
    color: '#38bdf8', transparent: true, opacity: 0.15
  });
  
  const particleShaderMaterial = new THREE.ShaderMaterial({
      uniforms: { time: { value: 0.0 }, color: { value: new THREE.Color('#f472b6') }},
      vertexShader: `
        uniform float time; void main() {
          vec3 p = position; p.y += sin(p.x * 2.0 + time) * 0.1;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0); gl_PointSize = 5.0;
        }`,
      fragmentShader: `
        uniform vec3 color; void main() {
            float r = dot(2.0 * gl_PointCoord - 1.0, 2.0 * gl_PointCoord - 1.0);
            if (r > 1.0) discard;
            gl_FragColor = vec4(color, 1.0 - r);
        }`,
      transparent: true,
  });

  return (
    <group ref={group}>
        <points ref={particles} material={particleShaderMaterial}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={nodes.length} array={new Float32Array(nodes.flatMap(p => [p.x, p.y, p.z]))} itemSize={3}/>
            </bufferGeometry>
        </points>
        <lineSegments material={lineMaterial}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={lines.length / 3} array={lines} itemSize={3}/>
            </bufferGeometry>
        </lineSegments>
    </group>
  );
}

const Canvas3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#38bdf8" intensity={2} />
      <NeuralNetwork />
    </Canvas>
  );
};

export default Canvas3D;