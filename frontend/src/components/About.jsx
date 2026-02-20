import React from 'react';
import { MapPin, Mail, Phone, Briefcase, Award, Code } from 'lucide-react';
import { Card } from './ui/card';
import { personalInfo } from '../data/mock';
import ScrollReveal from './ScrollReveal';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '4+' },
    { icon: Award, label: 'Certifications', value: '6' },
    { icon: Code, label: 'Projects Deployed', value: '20+' }
  ];

  return (
    <section id="about" className="py-32 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <ScrollReveal direction="left" delay={100}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                <div className="w-96 h-96 rounded-3xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-105">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-96 h-96 border-2 border-blue-500/30 rounded-3xl -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              </div>
            </div>
          </ScrollReveal>

          {/* Bio and Contact Info */}
          <ScrollReveal direction="right" delay={200}>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Cloud Engineer & DevOps Specialist
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {personalInfo.bio}
              </p>

              {/* Contact Details */}
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <MapPin size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="font-medium">{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Mail size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 group">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Phone size={20} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <ScrollReveal key={index} delay={300 + index * 100} direction="up">
                      <Card className="p-5 text-center bg-white dark:bg-gray-800 border-blue-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        <Icon size={28} className="mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                        <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                      </Card>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;