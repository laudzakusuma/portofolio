import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#hero" className="nav-logo">NA.</a>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#about" className="nav-item" onClick={closeMenu}>Tentang</a>
          <a href="#projects" className="nav-item" onClick={closeMenu}>Proyek</a>
          <a href="#skills" className="nav-item" onClick={closeMenu}>Keahlian</a>
          <a href="#contact" className="nav-item" onClick={closeMenu}>Kontak</a>
        </div>
        <div className="nav-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'bar1' : ''}`}></div>
          <div className={`bar ${isOpen ? 'bar2' : ''}`}></div>
          <div className={`bar ${isOpen ? 'bar3' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;