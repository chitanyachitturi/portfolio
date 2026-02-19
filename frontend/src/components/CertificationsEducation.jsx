import React from 'react';
import { Award, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { certifications, education } from '../data/mock';

const CertificationsEducation = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-black relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications Section */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Industry-recognized certifications demonstrating cloud expertise
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="p-6 bg-gradient-to-br from-gray-900 to-black border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform border border-orange-500/30">
                    <Award size={24} className="text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-2 leading-tight group-hover:text-orange-500 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-400 mb-1">{cert.issuer}</p>
                    {cert.date && <p className="text-xs text-orange-500">{cert.date}</p>}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="p-8 bg-gradient-to-br from-gray-900 to-black border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange-500/30">
                    <GraduationCap size={32} className="text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                        <p className="text-lg text-orange-500 font-semibold mb-1">{edu.institution}</p>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400 whitespace-nowrap">
                        <Calendar size={14} />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsEducation;