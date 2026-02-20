import React, { useRef, useCallback } from 'react';
import { ArrowDown, Linkedin, Github, Rocket } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';
import MagneticButton from './MagneticButton';
import TextScramble from './TextScramble';
import { useEasterEgg } from '../hooks/useEasterEgg';

const Hero = () => {
  const { isTriggered, handleClick, reset } = useEasterEgg(3, 2000);
  const hasTriggeredRef = useRef(false);

  // Trigger easter egg event when activated
  const onNameClick = useCallback(() => {
    handleClick();
  }, [handleClick]);

  // When easter egg triggers, dispatch event
  React.useEffect(() => {
    if (isTriggered && !hasTriggeredRef.current) {
      hasTriggeredRef.current = true;
      window.dispatchEvent(new CustomEvent('easterEggTriggered'));
      reset();
      // Allow re-triggering after a delay
      setTimeout(() => {
        hasTriggeredRef.current = false;
      }, 1000);
    }
  }, [isTriggered, reset]);

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Name with gradient - ONE LINE - EASTER EGG TRIGGER */}
        <h1 
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight easter-egg-trigger"
          onClick={onNameClick}
          data-testid="hero-name"
          title="Click me 3 times for a surprise!"
        >
          <TextScramble 
            text="Chaitanya Chitturi"
            className="bg-gradient-to-r from-gray-900 via-blue-600 to-gray-900 dark:from-gray-100 dark:via-blue-400 dark:to-gray-100 bg-clip-text text-transparent"
          />
        </h1>

        {/* Title Card with Backdrop Blur - Like Hasan's */}
        <div className="inline-block mb-12">
          <div className="relative bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-3">
              <TextScramble text="Cloud Engineer" />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto"></div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* CTA Button and Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <MagneticButton strength={0.2}>
            <Button
              size="lg"
              className="bg-blue-600 text-white hover:bg-blue-700 px-10 py-7 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group font-semibold animate-pulse-glow"
              onClick={() => scrollToSection('#contact')}
              data-testid="hero-cta-btn"
            >
              <Rocket size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
              Let's Connect
            </Button>
          </MagneticButton>

          <div className="flex items-center gap-4">
            <MagneticButton strength={0.4}>
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 group shadow-md"
                aria-label="GitHub"
                data-testid="hero-github-link"
              >
                <Github size={20} className="text-gray-800 dark:text-gray-200 group-hover:text-white" />
              </a>
            </MagneticButton>
            <MagneticButton strength={0.4}>
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-gray-400 dark:border-gray-600 rounded-full hover:bg-blue-600 hover:border-blue-600 dark:hover:bg-blue-600 dark:hover:border-blue-600 transition-all duration-300 hover:scale-110 group shadow-md"
                aria-label="LinkedIn"
                data-testid="hero-linkedin-link"
              >
                <Linkedin size={20} className="text-gray-800 dark:text-gray-200 group-hover:text-white" />
              </a>
            </MagneticButton>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={() => scrollToSection('#about')}
          className="inline-flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
          aria-label="Scroll to about section"
          data-testid="scroll-indicator"
        >
          <span className="text-sm font-medium mb-2">Scroll to explore</span>
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;