import React from 'react';
import { ArrowDown, Linkedin, FileText, Github } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="text-white">{personalInfo.firstName}</span>
          <br />
          <span className="text-orange-500">{personalInfo.lastName}</span>
        </h1>

        {/* Title Card */}
        <div className="inline-block mb-8">
          <div className="px-8 py-4 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border-2 border-orange-500/30 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-orange-500">
              {personalInfo.title}
            </h2>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Button and Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70 hover:scale-105"
            onClick={() => scrollToSection('#contact')}
          >
            Let's Connect
          </Button>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-gray-700 rounded-full hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-300" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-gray-700 rounded-full hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-300" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex flex-col items-center text-gray-500 hover:text-orange-500 transition-colors animate-bounce"
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