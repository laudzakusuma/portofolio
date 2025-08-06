import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform } from 'framer-motion';

const projectData = [
  { title: 'TriUnity', description: 'Platform analitik data real-time.', tags: ['Rust'], githubUrl: 'https://github.com/laudzakusuma/TriUnity.git', liveUrl: 'https://triunity-ultimate-9n3drl5kv-laudzas-projects.vercel.app/' },
  { title: 'NusaX', description: 'E-commerce imersif dengan visualisasi 3D.', tags: ['Solidity', 'Hardhat', 'SUI Network', 'slash'], githubUrl: 'https://github.com/laudzakusuma/nusax_coin.git', liveUrl: 'https://suiscan.xyz/testnet/object/0xc45ff3849c558734d7eec64fa1dbcc481f2bee0b27b31cdda020a1e2709e73b7/tx-blocks' },
  { title: 'Crowdfunding', description: 'Visualisasi model jaringan saraf.', tags: ['Three.js', 'JavaScript', 'React', 'ETH Sepolia', 'Metamask'], githubUrl: 'https://github.com/laudzakusuma/web3', liveUrl: 'https://client-chi-mocha.vercel.app/login' },
  { title: 'Quantum Leap', description: 'Aplikasi manajemen proyek canggih.', tags: ['Next.js', 'GraphQL', 'Prisma'], githubUrl: '#', liveUrl: '#' },
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
          <h2 className="section-title"></h2>
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