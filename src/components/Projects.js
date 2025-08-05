import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform } from 'framer-motion';

const projectData = [
  { title: 'TriUnity', description: 'Platform analitik data real-time.', imageUrl: 'https://placehold.co/800x600/1e293b/e0e0e0?text=Genesis', tags: ['Rust'], githubUrl: 'https://github.com/laudzakusuma/TriUnity.git', liveUrl: 'https://triunity-ultimate-9n3drl5kv-laudzas-projects.vercel.app/' },
  { title: 'NusaX', description: 'E-commerce imersif dengan visualisasi 3D.', imageUrl: 'https://placehold.co/800x600/1e293b/e0e0e0?text=Aura', tags: ['Solidity', 'Hardhat'], githubUrl: 'https://github.com/laudzakusuma/nusax_coin.git', liveUrl: 'https://suiscan.xyz/testnet/object/0xc45ff3849c558734d7eec64fa1dbcc481f2bee0b27b31cdda020a1e2709e73b7/tx-blocks' },
  { title: 'Neuro-Net Visualizer', description: 'Visualisasi model jaringan saraf.', imageUrl: 'https://placehold.co/800x600/1e293b/e0e0e0?text=NeuroNet', tags: ['Three.js', 'TypeScript'], githubUrl: '#', liveUrl: '#' },
  { title: 'Quantum Leap', description: 'Aplikasi manajemen proyek canggih.', imageUrl: 'https://placehold.co/800x600/1e293b/e0e0e0?text=Quantum', tags: ['Next.js', 'GraphQL', 'Prisma'], githubUrl: '#', liveUrl: '#' },
];

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0.1, 0.95], ["0%", "-75%"]);

  if (isMobile) {
    return (
      <section id="projects" className="projects-section-mobile">
        <div className="projects-header">
          <h2 className="section-title">/proyek-unggulan</h2>
        </div>
        <div className="projects-grid-mobile">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="projects-section">
      <div ref={targetRef} className="projects-horizontal-container">
        <div className="projects-sticky-container">
          <motion.div style={{ x }} className="projects-horizontal-scroll">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;