import React, { useState, useEffect, createContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import './App.css';

// Buat Context untuk tema
export const ThemeContext = createContext(null);

function App() {
  const [loading, setLoading] = useState(true);
  // State untuk tema, mengambil dari localStorage atau default ke 'dark'
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Efek untuk mengubah kelas pada body dan menyimpan tema ke localStorage
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
              <p>&copy; 2025 Laudza Kusuma. All rights reserved.</p>
            </footer>
          </>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;