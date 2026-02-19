import React from 'react';
import { ArrowDown, Linkedin, Github, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import InteractiveParticles from './InteractiveParticles';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 overflow-hidden">
      {/* Interactive Particle Background */}
      <InteractiveParticles />
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center" style={{ zIndex: 2 }}>
        {/* Name with gradient - ONE LINE */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Chaitanya Chitturi
          </span>
        </h1>

        {/* Title Card with Backdrop Blur - Like Hasan's */}
        <div className="inline-block mb-8">
          <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-3">
              Cloud Engineer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Button and Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group font-semibold"
            onClick={() => scrollToSection('#contact')}
          >
            <Rocket size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
            Let's Connect
          </Button>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white hover:border-white transition-all duration-300 hover:scale-110 group"
              aria-label="GitHub"
            >
              <Github size={20} className="text-white group-hover:text-blue-600" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-full hover:bg-white hover:border-white transition-all duration-300 hover:scale-110 group"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-white group-hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex flex-col items-center text-white/70 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;