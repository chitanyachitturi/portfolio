import React from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card } from './ui/card';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A track record of building scalable cloud infrastructure and driving operational excellence
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-300"></div>

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
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-slate-200">
                    {/* Company & Role */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {job.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold mb-2 justify-start md:justify-start">
                        <Briefcase size={18} />
                        <span>{job.company}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-slate-600 justify-start md:justify-start">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-700 mb-4 text-left">{job.description}</p>

                    {/* Highlights */}
                    <div className="space-y-2 text-left">
                      {job.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <ChevronRight size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600">{highlight}</span>
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