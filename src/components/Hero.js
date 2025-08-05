import React from 'react';
import Canvas3D from './Canvas3D';
import { motion } from 'framer-motion';

const Hero = () => {
  const title = "Hi, Visitor!";
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-3d-background">
        <Canvas3D />
      </div>
      <div className="hero-content">
        <motion.h1 variants={sentence} initial="hidden" animate="visible">
          {title.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Arsitek Digital yang Merancang Pengalaman Web Masa Depan.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <a href="#projects" className="cta-button magnetic-link">
            Lihat Karya Saya
            <span className="arrow-icon">&rarr;</span>
          </a>
        </motion.div>
      </div>
      <div className="scroll-down-indicator">
        <span>Scroll</span>
        <div className="mouse-icon">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;