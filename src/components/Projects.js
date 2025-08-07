import React, { useRef, useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useScroll, useTransform } from 'framer-motion';

const projectData = [
  { title: 'TriUnity', description: 'Triunity is a next-generation blockchain architecture conceptually designed to holistically solve the long-standing Blockchain Trilemma.', tags: ['Rust'], githubUrl: 'https://github.com/laudzakusuma/TriUnity.git', liveUrl: 'https://triunity-ultimate-9n3drl5kv-laudzas-projects.vercel.app/' },
  { title: 'NusaX', description: "NusaX (NSX) is a decentralized digital asset designed to accelerate Indonesia's vibrant digital and creative economy. Built on the high-speed, low-cost SUI blockchain, NusaX provides a robust financial infrastructure for the nation's creators, SMEs (Small and Medium-sized Enterprises), and tech innovators.", tags: ['Solidity', 'Hardhat', 'SUI Network', 'slash'], githubUrl: 'https://github.com/laudzakusuma/nusax_coin.git', liveUrl: 'https://suiscan.xyz/testnet/object/0xc45ff3849c558734d7eec64fa1dbcc481f2bee0b27b31cdda020a1e2709e73b7/tx-blocks' },
  { title: 'Crowdfunding', description: 'A decentralized crowdfunding platform built with React and Solidity on the Sepolia testnet. This dApp allows users to create, fund, and manage campaigns in a fully transparent and secure on-chain environment.', tags: ['Three.js', 'JavaScript', 'React', 'ETH Sepolia', 'Metamask'], githubUrl: 'https://github.com/laudzakusuma/web3', liveUrl: 'https://client-chi-mocha.vercel.app/login' },
  { title: 'Nexus Hub', description: 'Nexus Hub is a decentralized dashboard or control center designed to simplify how users interact with their digital assets on the Polygon network. Functionally, the application acts as an intuitive bridge between the user and the complexities of blockchain technology.', tags: ['React.js', 'Typescript', 'Polygon Amoy'], githubUrl: 'https://github.com/laudzakusuma/polygon-dapp', liveUrl: 'https://nexus-five-ruddy.vercel.app/' },
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