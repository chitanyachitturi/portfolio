import React from 'react';
import { Mail, Linkedin, FileText, MapPin, Send } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'blue'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: personalInfo.socialLinks.linkedin,
      color: 'blue'
    },
    {
      icon: FileText,
      label: 'Medium',
      value: 'Read my articles',
      href: personalInfo.socialLinks.medium,
      color: 'blue'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
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
                  <Card className="p-6 text-center border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group h-full">
                    <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{method.label}</h3>
                    <p className="text-sm text-slate-600 break-words">{method.value}</p>
                  </Card>
                </a>
              );
            })}
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 bg-gradient-to-br from-slate-50 to-blue-50 border-slate-200">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
                <Send size={28} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Let's Build Something Great Together
              </h3>
              <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
                Whether you're looking to optimize your cloud infrastructure, implement DevOps best practices, or need consultation on AWS solutions, I'd love to hear from you.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
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