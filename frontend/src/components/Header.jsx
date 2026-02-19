import React, { useState, useEffect } from 'react';
import { Menu, X, User, Building2, FolderGit2, Code, Camera, BookOpen, Mail, Moon, Sun } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about', icon: User },
    { name: 'Experience', href: '#experience', icon: Building2 },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Blogs', href: '#blogs', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-700' 
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-sm border-b border-gray-200 dark:border-gray-700'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
              {personalInfo.firstName} <span className="text-blue-600">{personalInfo.lastName}</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            <nav className="flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
                  >
                    <Icon size={16} />
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all"
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </a>
              );
            })}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all w-full"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
              <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
