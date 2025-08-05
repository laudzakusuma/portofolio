import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="theme-toggle magnetic-link" onClick={toggleTheme} title="Ganti Tema">
            <motion.div
                className="toggle-handle"
                animate={{ x: theme === 'light' ? 0 : 24 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
                <motion.div
                    animate={{ rotate: theme === 'light' ? 0 : 180 }}
                    transition={{ duration: 0.5 }}
                >
                    {theme === 'light' ? '☀️' : '🌙'}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ThemeToggle;