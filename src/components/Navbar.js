import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
  // Animasi saat menu tersembunyi (sebelumnya x: '100%')
  hidden: { 
    opacity: 0,
    transition: { 
      duration: 0.2, // Percepat transisi keluar
      when: "afterChildren" // Tunggu anak-anak hilang dulu
    } 
  },
  // Animasi saat menu terlihat
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.3, // Perlambat transisi masuk
      when: "beforeChildren", // Tampilkan parent dulu, baru anak
      staggerChildren: 0.1 // Beri jeda antar animasi anak
    }
  },
};

  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#hero" className="nav-logo magnetic-link">L7</a>
          <div className="desktop-nav-menu">
            <a href="#about" className="nav-item magnetic-link">/About</a>
            <a href="#projects" className="nav-item magnetic-link">/Projects</a>
            <a href="#events" className="nav-item magnetic-link">/events</a>
            <a href="#skills" className="nav-item magnetic-link">/Skills</a>
            <a href="#contact" className="nav-item magnetic-link">/Contact</a>
            <ThemeToggle />
          </div>
          <div className="nav-icon magnetic-link" onClick={toggleMenu}>
            <div className={`bar bar1 ${isOpen ? 'active' : ''}`}></div>
            <div className={`bar bar2 ${isOpen ? 'active' : ''}`}></div>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav-menu"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.div variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
              <motion.a href="#about" className="mobile-nav-item" onClick={closeMenu} variants={navItemVariants}>About</motion.a>
              <motion.a href="#projects" className="mobile-nav-item" onClick={closeMenu} variants={navItemVariants}>Projects</motion.a>
              <motion.a href="#events" className="mobile-nav-item" onClick={closeMenu} variants={navItemVariants}>Events</motion.a>
              <motion.a href="#skills" className="mobile-nav-item" onClick={closeMenu} variants={navItemVariants}>Skills</motion.a>
              <motion.a href="#contact" className="mobile-nav-item" onClick={closeMenu} variants={navItemVariants}>Contact</motion.a>
              <div className="mobile-theme-toggle">
                <ThemeToggle />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;