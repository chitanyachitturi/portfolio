import React from 'react';
import { Mail, Linkedin, FileText, Github, Send, MapPin, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.socialLinks.linkedin
    },
    {
      icon: FileText,
      label: 'Medium',
      value: 'Read my articles',
      href: personalInfo.socialLinks.medium
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about cloud engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <Card className="p-6 text-center bg-gradient-to-br from-gray-900 to-black border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-orange-500/30">
                      <IconComponent size={24} className="text-orange-500" />
                    </div>
                    <h3 className="font-semibold text-white mb-2 group-hover:text-orange-500 transition-colors">{method.label}</h3>
                    <p className="text-sm text-gray-400 break-words">{method.value}</p>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center gap-3 text-gray-400 justify-center">
              <MapPin size={20} className="text-orange-500" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 justify-center">
              <Phone size={20} className="text-orange-500" />
              <span>{personalInfo.phone}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-400 justify-center">
              <Mail size={20} className="text-orange-500" />
              <span className="text-sm">{personalInfo.email}</span>
            </div>
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/30">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mb-6 shadow-lg shadow-orange-500/50">
                <Send size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Let's Build Something Great Together
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you're looking to optimize your cloud infrastructure, implement DevOps best practices, or need consultation on AWS solutions, I'd love to hear from you.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg shadow-orange-500/50 hover:shadow-orange-500/70"
                onClick={() => window.location.href = `mailto:${personalInfo.email}`}
              >
                <Mail size={20} className="mr-2" />
                Send me an email
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;