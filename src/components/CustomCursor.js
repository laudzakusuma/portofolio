import React, { useState, useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const springConfig = { stiffness: 300, damping: 20 };
    const xSpring = useSpring(0, springConfig);
    const ySpring = useSpring(0, springConfig);
    
    const xMagnetic = useSpring(0, springConfig);
    const yMagnetic = useSpring(0, springConfig);

    useEffect(() => {
        const onMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            xSpring.set(e.clientX);
            ySpring.set(e.clientY);

            const magneticLink = e.target.closest('.magnetic-link');
            if (magneticLink) {
                const rect = magneticLink.getBoundingClientRect();
                const dx = e.clientX - (rect.left + rect.width / 2);
                const dy = e.clientY - (rect.top + rect.height / 2);
                xMagnetic.set(dx * 0.2);
                yMagnetic.set(dy * 0.2);
            } else {
                xMagnetic.set(0);
                yMagnetic.set(0);
            }
        };

        const onMouseOver = (e) => {
            if (e.target.closest('a, button, .project-card, .skill-orb')) {
                setIsHovering(true);
            }
        };
        const onMouseOut = (e) => {
            if (e.target.closest('a, button, .project-card, .skill-orb')) {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
        };
    }, [xSpring, ySpring, xMagnetic, yMagnetic]);

    const cursorVariants = {
        default: { scale: 1, backgroundColor: "rgba(244, 114, 182, 0)" },
        hover: { scale: 2.5, backgroundColor: "rgba(244, 114, 182, 0.5)" }
    };

    return (
        <motion.div
            className="custom-cursor-container"
            style={{ x: xMagnetic, y: yMagnetic }}
        >
            <motion.div
                className="custom-cursor-circle"
                style={{ x: xSpring, y: ySpring }}
                variants={cursorVariants}
                animate={isHovering ? "hover" : "default"}
            />
        </motion.div>
    );
};

export default CustomCursor;