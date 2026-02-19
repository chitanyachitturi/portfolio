import React from 'react';
import { MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Highlights of my career and key projects showcasing my skills & impact.
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-16">
          {experience.map((job) => (
            <div key={job.id} className="flex flex-col md:flex-row gap-8 items-start">
              {/* Date Section - Left Side (Large Gray Text) */}
              <div className="md:w-48 flex-shrink-0">
                <p className="text-3xl md:text-4xl font-bold text-gray-300 leading-tight">
                  {job.dates.split(' - ')[0]}
                  <br />
                  <span className="text-3xl md:text-4xl">-</span>
                  <br />
                  {job.dates.split(' - ')[1]}
                </p>
              </div>

              {/* Content Section - Right Side */}
              <div className="flex-1">
                <div className="flex gap-6 items-start mb-6">
                  {/* Company Logo */}
                  <div className="w-16 h-16 flex-shrink-0 bg-transparent rounded-lg border-2 border-gray-200 flex items-center justify-center shadow-sm overflow-hidden">
                    {job.logo ? (
                      <img 
                        src={job.logo} 
                        alt={`${job.company} logo`}
                        className={`w-full h-full object-contain ${
                          job.company === 'Virginia Tech' ? 'p-1.5' : 'p-2'
                        }`}
                      />
                    ) : (
                      <span className={`text-2xl font-bold ${
                        job.company === 'Data Stratics' ? 'text-green-600' : 'text-blue-600'
                      }`}>
                        {job.company === 'Data Stratics' ? 'DS' : job.company.charAt(0)}
                      </span>
                    )}
                  </div>

                  {/* Job Details */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-gray-600 mb-2">
                      <span className="font-semibold text-gray-900">{job.company}</span>
                      <span className="text-gray-400">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">{job.period}</p>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-700">
                          <span className="text-blue-600 mt-1 text-lg">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;