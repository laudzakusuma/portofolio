import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const ProjectCard = ({ title, description, imageUrl, tags, link }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="project-card-wrapper"
    >
      <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="project-card-link">
          <div className="project-card">
              <div className="card-image-container">
                <img src={imageUrl} alt={title} className="project-image" />
              </div>
              <div className="project-info">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <div className="project-tags">
                    {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                  </div>
              </div>
          </div>
      </a>
    </motion.div>
  );
};

export default ProjectCard;