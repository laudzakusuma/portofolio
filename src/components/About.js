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
          <h2 className="section-title">/About-me</h2>
          <TextReveal>
            Saya adalah seorang perancang dan pengembang web yang terobsesi dengan titik temu antara desain yang bersih dan teknologi yang canggih. Saya percaya bahwa setiap baris kode dapat menjadi sebuah sapuan kuas, menciptakan pengalaman digital yang tidak hanya fungsional, tetapi juga berkesan dan intuitif.
          </TextReveal>
          <TextReveal>
            Dengan pengalaman dalam membangun aplikasi dari awal hingga akhir, saya menikmati setiap tahap proses pengembangan, mulai dari konseptualisasi ide, merancang arsitektur, hingga implementasi akhir yang presisi.
          </TextReveal>
        </div>
        <div className="about-graphic-wrapper">
          <div className="about-image-container">
            <motion.img 
                src="/Laujaa.jpg" 
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