import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import './App.css';

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <div className="noise-background"></div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>&copy; 2024 Nama Anda. Didesain & Dikembangkan dengan Semangat.</p>
      </footer>
    </div>
  );
}

export default App;