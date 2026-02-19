import React, { useEffect } from 'react';
import './App.css';
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

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="App bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 min-h-screen">
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
    </div>
  );
}

export default App;