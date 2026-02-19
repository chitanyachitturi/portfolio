import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A track record of building scalable cloud infrastructure and driving operational excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 rounded-full"></div>

          {/* Experience Items */}
          <div className="space-y-16">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="p-8 bg-white border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 group">
                    {/* Company & Role */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-3 justify-start md:justify-start">
                        <Briefcase size={18} />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 justify-start md:justify-start">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{job.dates}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 text-left leading-relaxed">{job.description}</p>

                    {/* Highlights */}
                    <div className="space-y-3 text-left">
                      {job.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight size={18} className="text-blue-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;