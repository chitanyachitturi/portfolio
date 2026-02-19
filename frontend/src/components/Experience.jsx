import React from 'react';
import { Briefcase, MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            My Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            View my professional qualifications and experience as a Cloud Engineer
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-[140px] top-0 bottom-0 w-0.5 bg-blue-600"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={job.id} className="relative flex flex-col md:flex-row gap-8">
                {/* Date Section - Left Side */}
                <div className="md:w-[140px] flex-shrink-0">
                  <div className="md:text-right">
                    <p className="text-lg font-bold text-gray-400">
                      {job.dates}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-[140px] top-2 transform -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full border-4 border-white z-10 shadow-md"></div>

                {/* Content Card - Right Side */}
                <div className="flex-1">
                  <Card className="p-8 bg-white border-2 border-gray-100 hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                    {/* Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-gray-600">
                        <div className="flex items-center gap-2 font-semibold text-blue-600">
                          <Briefcase size={18} />
                          <span>{job.company}</span>
                        </div>
                        <span className="text-gray-400">•</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-500 mt-2">{job.period}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Highlights - Bullet Points */}
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-600">
                          <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;