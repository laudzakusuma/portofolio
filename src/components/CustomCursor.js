import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    
    const onMouseEnter = (e) => {
      if (e.target.tagName === 'A' || e.target.closest('A')) {
        setIsHovering(true);
      }
    };
    const onMouseLeave = (e) => {
      if (e.target.tagName === 'A' || e.target.closest('A')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseEnter);
    document.addEventListener('mouseout', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseEnter);
      document.removeEventListener('mouseout', onMouseLeave);
    };
  }, []);

  const cursorVariants = {
    default: { scale: 1, backgroundColor: "rgba(244, 114, 182, 0)" },
    hover: { scale: 2.5, backgroundColor: "rgba(244, 114, 182, 0.5)" }
  };

  return (
    <motion.div 
      className="custom-cursor" 
      style={{ left: position.x, top: position.y }}
      variants={cursorVariants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  );
};

export default CustomCursor;