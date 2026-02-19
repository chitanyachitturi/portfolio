import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A track record of building scalable cloud infrastructure and driving operational excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-orange-500/50 to-orange-500/10"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-black shadow-lg shadow-orange-500/50 z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="p-6 bg-gradient-to-br from-gray-900 to-black border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
                    {/* Company & Role */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-orange-500 font-semibold mb-2 justify-start md:justify-start">
                        <Briefcase size={18} />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 justify-start md:justify-start">
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
                    <p className="text-gray-300 mb-4 text-left">{job.description}</p>

                    {/* Highlights */}
                    <div className="space-y-2 text-left">
                      {job.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-400">{highlight}</span>
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