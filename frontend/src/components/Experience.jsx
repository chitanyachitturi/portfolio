import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { experience } from '../data/mock';
import ScrollReveal from './ScrollReveal';
import SectionHeader from './SectionHeader';

const Experience = () => {
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500'
  ];

  return (
    <section id="experience" className="py-16 relative bg-gradient-to-br from-cyan-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <SectionHeader 
            title="Experience" 
            subtitle="Highlights of my career and key projects showcasing my skills & impact."
          />
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-purple-500 rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((job, index) => {
              const isEven = index % 2 === 0;
              const gradient = gradients[index % gradients.length];
              
              return (
                <ScrollReveal key={job.id} delay={index * 100} direction={isEven ? 'left' : 'right'}>
                  <div className={`flex flex-col md:flex-row gap-8 items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <div className="group relative">
                        {/* Glow effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                        
                        <Card className="relative p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-2xl">
                          {/* Gradient border on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                          <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-3xl -z-10"></div>
                          
                          <div className="flex gap-4 items-start mb-4">
                            {/* Company Logo */}
                            <div className={`w-16 h-16 flex-shrink-0 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg overflow-hidden p-0.5`}>
                              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl flex items-center justify-center">
                                {job.logo ? (
                                  <img 
                                    src={job.logo} 
                                    alt={`${job.company} logo`}
                                    className={`w-full h-full object-contain ${
                                      job.company === 'Virginia Tech' ? 'p-1.5' : 'p-2'
                                    }`}
                                  />
                                ) : (
                                  <span className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                                    {job.company === 'Data Stratics' ? 'DS' : job.company.charAt(0)}
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Job Details */}
                            <div className="flex-1">
                              <h3 className={`text-xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-2`}>
                                {job.role}
                              </h3>
                              <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                                <span className="font-semibold text-gray-900 dark:text-white">{job.company}</span>
                                <span className="text-gray-400 dark:text-gray-600">•</span>
                                <div className="flex items-center gap-1">
                                  <MapPin size={14} />
                                  <span>{job.location}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 mb-4">
                                <Calendar size={14} />
                                <span>{job.dates}</span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                            {job.description}
                          </p>

                          {/* Highlights */}
                          <ul className="space-y-2">
                            {job.highlights.map((highlight, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                <span className={`mt-1 text-lg bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold`}>•</span>
                                <span className="text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </Card>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900 relative z-10`}>
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                    </div>

                    {/* Empty space for alternating layout */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;