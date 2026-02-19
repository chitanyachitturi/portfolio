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
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t-2 border-blue-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-gray-900">{personalInfo.firstName}</span>
              <span className="text-blue-600 ml-2">{personalInfo.lastName}</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Cloud Engineer specializing in AWS infrastructure, DevOps automation, and scalable solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center hover:border-blue-500 hover:bg-blue-50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent size={20} className="text-gray-700" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-sm flex items-center gap-1">
              Built with <Heart size={16} className="text-blue-600" /> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;