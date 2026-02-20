import React from 'react';
import { MapPin, Mail, Phone, Briefcase, Award, Code } from 'lucide-react';
import { Card } from './ui/card';
import { personalInfo } from '../data/mock';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const About = () => {
  const stats = [
    { icon: Briefcase, label: 'Years Experience', value: '4+', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, label: 'Certifications', value: '6', color: 'from-purple-500 to-pink-500' },
    { icon: Code, label: 'Projects Deployed', value: '20+', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <section id="about" className="py-16 relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <SectionHeader title="About Me" />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Photo with floating stats */}
          <ScrollReveal direction="left" delay={100}>
            <div className="relative">
              {/* Main photo card */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-white dark:bg-gray-800 p-2 rounded-3xl shadow-2xl">
                  <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </div>
              </div>
              
              {/* Floating stats cards */}
              <div className="absolute -right-4 top-8 space-y-4">
                {stats.slice(0, 2).map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <ScrollReveal key={index} delay={300 + index * 100} direction="right">
                      <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border-2 border-blue-200 dark:border-gray-700 hover:scale-110 transition-transform">
                        <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-2`}>
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
              
              <div className="absolute -left-4 bottom-8">
                <ScrollReveal delay={500} direction="left">
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border-2 border-cyan-200 dark:border-gray-700 hover:scale-110 transition-transform">
                    <div className={`w-10 h-10 bg-gradient-to-br ${stats[2].color} rounded-xl flex items-center justify-center mb-2`}>
                      <Code size={20} className="text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stats[2].value}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stats[2].label}</div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Bio and Contact */}
          <ScrollReveal direction="right" delay={200}>
            <div className="space-y-6">
              {/* Title card */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 rounded-2xl shadow-xl">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Cloud Engineer & DevOps Specialist
                </h3>
                <div className="w-16 h-1 bg-white/50 rounded-full"></div>
              </div>

              {/* Bio card */}
              <div className="mb-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-justify indent-8">
                  {personalInfo.bio}
                </p>
              </div>

              {/* Contact cards grid */}
              <div className="grid grid-cols-1 gap-4">
                <Card className="p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-lg group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Location</div>
                      <div className="text-gray-900 dark:text-white font-semibold">{personalInfo.location}</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-lg group">
                  <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Email</div>
                      <div className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{personalInfo.email}</div>
                    </div>
                  </a>
                </Card>

                <Card className="p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all hover:shadow-lg group">
                  <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Phone</div>
                      <div className="text-gray-900 dark:text-white font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{personalInfo.phone}</div>
                    </div>
                  </a>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;