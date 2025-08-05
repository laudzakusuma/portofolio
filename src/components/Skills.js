import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillsList = [
  { name: 'React' }, { name: 'JavaScript' }, { name: 'Three.js' }, { name: 'HTML5' },
  { name: 'CSS3' }, { name: 'Node.js' }, { name: 'Figma' }, { name: 'Git' },
  { name: 'Next.js' }, { name: 'TypeScript' }, { name: 'GraphQL' }, { name: 'Prisma' }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', damping: 15, stiffness: 200 } },
  };

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-container">
        <h2 className="section-title">/teknologi-pilihan</h2>
        <motion.div 
          className="skills-orb-container"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillsList.map((skill, index) => (
            <motion.div key={skill.name} className="skill-orb" variants={itemVariants} style={{ animationDelay: `${index * 0.2}s` }}>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;