import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const skillsList = [
  'React', 'JavaScript', 'Three.js', 'HTML5', 'CSS3', 'Node.js', 
  'Figma', 'Git', 'Next.js', 'TypeScript', 'GraphQL', 'Prisma'
];

function SkillOrb({ position, text }) {
    return (
        <group position={position}>
            <mesh>
                <sphereGeometry args={[0.7, 32, 32]} />
                <meshStandardMaterial color="#0f172a" roughness={0.5} metalness={0.1} />
            </mesh>
            <Text
                fontSize={0.25}
                color="white"
                anchorX="center"
                anchorY="middle"
            >
                {text}
            </Text>
        </group>
    );
}

function PhysicsScene() {
    const orbs = React.useMemo(() => skillsList.map((skill, i) => ({
        position: new THREE.Vector3(Math.random() * 8 - 4, Math.random() * 8 - 4, Math.random() * 8 - 4),
        velocity: new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.5),
        text: skill
    })), []);

    useFrame((state, delta) => {
        const bounds = new THREE.Vector3(5, 5, 5);
        orbs.forEach(orb => {
            orb.position.add(orb.velocity.clone().multiplyScalar(delta * 2));

            if (Math.abs(orb.position.x) > bounds.x) orb.velocity.x *= -1;
            if (Math.abs(orb.position.y) > bounds.y) orb.velocity.y *= -1;
            if (Math.abs(orb.position.z) > bounds.z) orb.velocity.z *= -1;
        });
        // This is a simplified physics simulation. A real one would handle collisions between orbs.
    });
    
    return (
        <>
            {orbs.map((orb, i) => <SkillOrb key={i} position={orb.position} text={orb.text} />)}
        </>
    );
}

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">/teknologi-pilihan</h2>
        <div className="skills-canvas-container">
            <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 10]} intensity={1.5} />
                <PhysicsScene />
            </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Skills;