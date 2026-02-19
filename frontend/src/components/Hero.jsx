import React from 'react';
import { ArrowDown, Linkedin, FileText } from 'lucide-react';
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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <div className="inline-block mb-4 px-4 py-2 bg-blue-50 rounded-full">
            <span className="text-sm font-medium text-blue-600">Welcome to my portfolio</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700 mb-3">
              {personalInfo.title}
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Specializing in AWS infrastructure optimization, DevOps automation, and scalable cloud solutions
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 text-lg rounded-lg transition-all duration-200"
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a
              href={personalInfo.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <span className="text-slate-300">|</span>
            <a
              href={personalInfo.socialLinks.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              <FileText size={20} />
              <span className="text-sm font-medium">Medium</span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={() => scrollToSection('#about')}
            className="inline-flex flex-col items-center text-slate-400 hover:text-blue-600 transition-colors animate-bounce"
            aria-label="Scroll to about section"
          >
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;