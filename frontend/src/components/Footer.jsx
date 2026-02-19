import React from 'react';
import { Heart, Linkedin, FileText, Github } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: personalInfo.socialLinks.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: FileText,
      href: personalInfo.socialLinks.medium,
      label: 'Medium'
    },
    {
      icon: Github,
      href: personalInfo.socialLinks.github,
      label: 'GitHub'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-black border-t border-orange-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">{personalInfo.firstName}</span>
              <span className="text-orange-500 ml-2">{personalInfo.lastName}</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Cloud Engineer specializing in AWS infrastructure, DevOps automation, and scalable solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/5 border border-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} className="text-gray-400 hover:text-orange-500" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center gap-1">
              Built with <Heart size={16} className="text-orange-500" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;