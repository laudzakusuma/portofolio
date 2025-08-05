import React from 'react';
import { motion } from 'framer-motion';

const skillsList = [
  { name: 'React' }, { name: 'JavaScript' }, { name: 'Three.js' }, { name: 'Metamask' },
  { name: 'Smart-contracts' }, { name: 'Node.js' }, { name: 'Solidity' }, { name: 'Git' },
  { name: 'Next.js' }, { name: 'TypeScript' }, { name: 'Hardhat' }, { name: 'Ethers.js' }, { name: 'SUI Network' },
  { name: 'Polygon Amoy' }, { name: 'ETH Sepolia' }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="section-title">/teknologi-pilihan</h2>
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillsList.map((skill) => (
            <motion.div key={skill.name} className="skill-item" variants={itemVariants}>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;