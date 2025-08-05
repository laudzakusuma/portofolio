import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // <-- PERBAIKAN: Impor AnimatePresence
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>
      {!loading && (
        <>
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
        </>
      )}
    </div>
  );
}

export default App;