import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TextReveal = ({ children }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
    return <motion.p ref={ref} style={{ opacity }}>{children}</motion.p>
}

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section id="about" className="about-section" ref={containerRef}>
      <div className="about-container">
        <div className="about-text">
          <h2 className="section-title">/About</h2>
          <TextReveal>
            Hello! I'm Laudza. I view Web3 as more than just a technological evolution; it's a foundational shift towards a more equitable and user-owned digital world. This vision of empowering individuals through decentralization is what drives me every day, pushing me beyond simple curiosity and into active participation and creation.
          </TextReveal>
          <TextReveal>
            To help turn this vision into reality, I have cultivated an intermediate skill set focused on the core components of the ecosystem. I possess practical experience in developing and deploying smart contracts on EVM chains using Solidity and have built dApp front-ends that interact with them. My projects demonstrate a solid grasp of token standards like ERC-721, wallet integration, and decentralized storage. I am now eager to apply my skills to more complex challenges and contribute to a team that is building impactful, real-world solutions.
          </TextReveal>
        </div>
        <div className="about-graphic-wrapper">
          <div className="about-image-container">
            <motion.img 
                src="Laujaa.jpg" 
                alt="Foto profil" 
                style={{ y: imageY }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;