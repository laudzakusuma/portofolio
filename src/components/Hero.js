import React from 'react';
import Canvas3D from './Canvas3D';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Nama Anda</h1>
          <p>Frontend Developer & 3D Enthusiast</p>
          <a href="#contact" className="cta-button">Hubungi Saya</a>
        </div>
        <div className="hero-3d">
          <Canvas3D />
        </div>
      </div>
    </section>
  );
};

export default Hero;