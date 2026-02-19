import React from 'react';
import { ArrowDown, Linkedin, Github, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Name with gradient */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="text-gray-900">Chaitanya</span>
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Chitturi
          </span>
        </h1>

        {/* Title Card with Special Styling */}
        <div className="inline-block mb-8">
          <div className="relative px-8 py-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl"></div>
            <h2 className="relative text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Cloud Engineer
              </span>
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full"></div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Button and Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 group"
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
              className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-200 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-700" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white border-2 border-gray-200 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-700" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors animate-bounce"
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