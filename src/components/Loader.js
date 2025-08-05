import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = () => {
    const text = "Membangun Jaringan Neural...";
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
        exit: { opacity: 0, transition: { duration: 0.5, delay: 0.5 } }
    };
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div 
            className="loader-container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.h1 className="loader-text">
                {text.split("").map((char, index) => (
                    <motion.span key={index} variants={letterVariants}>
                        {char}
                    </motion.span>
                ))}
            </motion.h1>
            <div className="loader-bar-container">
                <motion.div 
                    className="loader-bar"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                />
            </div>
        </motion.div>
    );
};

export default Loader;