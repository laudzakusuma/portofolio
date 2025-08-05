import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle'; // Impor saklar tema

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
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
    exit: { x: '100%', transition: { duration: 0.3 } }
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
            <a href="#about" className="nav-item magnetic-link">/tentang</a>
            <a href="#projects" className="nav-item magnetic-link">/proyek</a>
            <a href="#skills" className="nav-item magnetic-link">/keahlian</a>
            <a href="#contact" className="nav-item magnetic-link">/kontak</a>
            <ThemeToggle /> {/* Tambahkan saklar tema di sini */}
          </div>
          <div className="nav-icon magnetic-link" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? 'bar1' : ''}`}></div>
            <div className={`bar ${isOpen ? 'bar2' : ''}`}></div>
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
              <motion.a href="#about" className="mobile-nav-item" onClick={closeMenu} variants={navItemVariants}>Tentang</motion.a>
              <motion.a href="#projects" className="mobile-nav-item" onClick={closeMenu} variants={navItemVariants}>Proyek</motion.a>
              <motion.a href="#skills" className="mobile-nav-item" onClick={closeMenu} variants={navItemVariants}>Keahlian</motion.a>
              <motion.a href="#contact" className="mobile-nav-item" onClick={closeMenu} variants={navItemVariants}>Kontak</motion.a>
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