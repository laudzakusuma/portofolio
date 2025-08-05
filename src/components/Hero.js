import React from 'react';
import Canvas3D from './Canvas3D';
import { motion } from 'framer-motion';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const Hero = () => {
  const [text] = useTypewriter({
    words: ['Web 3 Enthusiast', 'Smart Contract Developer', 'SUI Developer'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section id="hero" className="hero-section">
      <div className="hero-3d-background">
        <Canvas3D />
      </div>
      <div className="hero-content">
        <h1>
          Hi, Visitor!
        </h1>
        <p>
          Welcome to my Personal Portfolio. I'm Laudza Kusuma, a {' '}
          <span style={{ fontWeight: 'bold', color: 'var(--primary-color)' }}>
            {text}
          </span>
          <span style={{ color: 'var(--accent-color)' }}>
            <Cursor cursorStyle='|' />
          </span>
        </p>
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