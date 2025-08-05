import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform } from 'framer-motion';

const projectData = [
  { title: 'Proyek Genesis', description: 'Platform analitik data real-time.', imageUrl: 'https://placehold.co/800x600/1e293b/e0e0e0?text=Genesis', tags: ['React', 'D3.js', 'Node.js'] },
  { title: 'Aura Commerce', description: 'E-commerce imersif dengan visualisasi 3D.', imageUrl: 'https://placehold.co/800x600/1e293b/e0e0e0?text=Aura', tags: ['React', 'Three.js', 'Firebase'] },
  { title: 'Neuro-Net Visualizer', description: 'Visualisasi model jaringan saraf.', imageUrl: 'https://placehold.co/800x600/1e293b/e0e0e0?text=NeuroNet', tags: ['Three.js', 'TypeScript'] },
  { title: 'Quantum Leap', description: 'Aplikasi manajemen proyek canggih.', imageUrl: 'https://placehold.co/800x600/1e293b/e0e0e0?text=Quantum', tags: ['Next.js', 'GraphQL', 'Prisma'] },
];

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section id="projects" ref={targetRef} className="projects-section">
      <div className="projects-sticky-container">
        <div className="projects-header">
          <h2 className="section-title">/proyek-unggulan</h2>
          <p>Geser untuk menjelajahi karya saya.</p>
        </div>
        <motion.div style={{ x }} className="projects-horizontal-scroll">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;