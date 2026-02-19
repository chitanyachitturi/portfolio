import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { certifications, education } from '../data/mock';

const CertificationsEducation = () => {
  return (
    <section id="certifications" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Certifications Section */}
        <div className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Industry-recognized certifications demonstrating cloud expertise
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <Card
                key={cert.id}
                className="p-6 border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                    <Award size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-2 leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-slate-600">{cert.issuer}</p>
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
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Education
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu) => (
              <Card key={edu.id} className="p-8 border-slate-200 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{edu.degree}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-1">{edu.institution}</p>
                    <p className="text-sm text-slate-600">{edu.location}</p>
                  </div>
                  <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200 w-fit">
                    {edu.period}
                  </Badge>
                </div>
                <p className="text-slate-600 leading-relaxed">{edu.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsEducation;