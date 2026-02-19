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
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Name with gradient - ONE LINE */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent">
            Chaitanya Chitturi
          </span>
        </h1>

        {/* Title Card with Backdrop Blur - Like Hasan's */}
        <div className="inline-block mb-12">
          <div className="relative bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500 rounded-2xl p-6 shadow-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              Cloud Engineer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Button and Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <Button
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group font-semibold"
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
              className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 group shadow-md"
              aria-label="GitHub"
            >
              <Github size={20} className="text-gray-800 dark:text-gray-200 group-hover:text-white" />
            </a>
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 group shadow-md"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} className="text-gray-800 dark:text-gray-200 group-hover:text-white" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors animate-bounce"
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