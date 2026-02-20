import React from 'react';
import { Award, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { certifications, education } from '../data/mock';
import ScrollReveal from './ScrollReveal';

const CertificationsEducation = () => {
  return (
    <section id="certifications" className="py-32 relative bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications Section */}
        <div className="mb-32">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Industry-recognized certifications demonstrating cloud expertise
              </p>
            </div>
          </ScrollReveal>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <ScrollReveal key={cert.id} delay={index * 80} direction="up">
                <Card
                  className="p-6 bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300 group h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-md">
                      <Award size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{cert.issuer}</p>
                      {cert.date && <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{cert.date}</p>}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Education
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
            </div>
          </ScrollReveal>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu, index) => (
              <ScrollReveal key={edu.id} delay={index * 150} direction="left">
                <Card className="p-8 bg-white dark:bg-gray-700 border-2 border-gray-100 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                      <GraduationCap size={32} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                          <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.institution}</p>
                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <MapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 whitespace-nowrap">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{edu.description}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsEducation;