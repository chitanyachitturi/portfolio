import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import CertificationsEducation from './components/CertificationsEducation';
import Photography from './components/Photography';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TicTacToe from './components/TicTacToe';

function App() {
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Listen for custom event from Hero component
  useEffect(() => {
    const handleEasterEgg = () => setShowGame(true);
    window.addEventListener('easterEggTriggered', handleEasterEgg);
    return () => window.removeEventListener('easterEggTriggered', handleEasterEgg);
  }, []);

  return (
    <ThemeProvider>
      <div className="App bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <CertificationsEducation />
          <Photography />
          <Blogs />
          <Contact />
        </main>
        <Footer />
        {showGame && <TicTacToe onClose={() => setShowGame(false)} />}
      </div>
    </ThemeProvider>
  );
}

export default App;