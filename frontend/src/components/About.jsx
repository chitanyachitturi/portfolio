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
    <section id="about" className="py-32 bg-gradient-to-br from-cyan-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl -z-10 blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl -z-10 blur-2xl"></div>
            </div>
          </div>

          {/* Bio and Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cloud Engineer & DevOps Specialist
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin size={20} className="text-blue-600" />
                </div>
                <span className="font-medium">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-blue-600" />
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="font-medium hover:text-blue-600 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-blue-600" />
                </div>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="font-medium hover:text-blue-600 transition-colors"
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
                  <Card key={index} className="p-5 text-center bg-white border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                    <Icon size={28} className="mx-auto mb-3 text-blue-600" />
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
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