import React from 'react';
import { MapPin, Mail, Phone, Briefcase, Award, Code } from 'lucide-react';
import { Card } from './ui/card';
import { personalInfo } from '../data/mock';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '4+' },
    { icon: Award, label: 'Certifications', value: '6' },
    { icon: Code, label: 'Projects Deployed', value: '20+' }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: 'center 20%',
                    filter: 'brightness(1.05) contrast(1.05)'
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-slate-100 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Bio and Contact Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Cloud Engineer & DevOps Specialist
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>

            {/* Contact Details */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin size={20} className="text-blue-600 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Mail size={20} className="text-blue-600 flex-shrink-0" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Phone size={20} className="text-blue-600 flex-shrink-0" />
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-blue-600 transition-colors"
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
                  <Card key={index} className="p-4 text-center border-slate-200 hover:border-blue-300 transition-colors">
                    <Icon size={24} className="mx-auto mb-2 text-blue-600" />
                    <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-slate-600">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;