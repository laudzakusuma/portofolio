import React from 'react';

// Anda bisa mengganti ini dengan ikon SVG jika diinginkan
const skillsList = [
  'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 
  'Three.js', 'Figma', 'Git', 'MongoDB', 'Python'
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>Keahlian</h2>
      <div className="skills-grid">
        {skillsList.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;