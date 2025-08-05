import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className="about-container">
        <motion.div className="about-text" variants={variants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <h2 className="section-title">/tentang-saya</h2>
          <p>
            Saya adalah seorang perancang dan pengembang web yang terobsesi dengan titik temu antara desain yang bersih dan teknologi yang canggih. Saya percaya bahwa setiap baris kode dapat menjadi sebuah sapuan kuas, menciptakan pengalaman digital yang tidak hanya fungsional, tetapi juga berkesan dan intuitif.
          </p>
          <p>
            Dengan pengalaman dalam membangun aplikasi dari awal hingga akhir, saya menikmati setiap tahap proses pengembangan, mulai dari konseptualisasi ide, merancang arsitektur, hingga implementasi akhir yang presisi.
          </p>
        </motion.div>
        <div className="about-graphic-wrapper">
          <motion.div 
            className="about-graphic"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="code-snippet">
              <span className="keyword">const</span> <span className="variable">passion</span> = {'{'}<br />
              &nbsp;&nbsp;<span className="property">design</span>: <span className="string">'intuitive'</span>,<br />
              &nbsp;&nbsp;<span className="property">code</span>: <span className="string">'efficient'</span>,<br />
              &nbsp;&nbsp;<span className="property">experience</span>: <span className="string">'memorable'</span><br />
              {'}'};
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;