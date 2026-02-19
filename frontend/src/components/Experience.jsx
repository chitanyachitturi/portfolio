import React from 'react';
import { MapPin } from 'lucide-react';
import { Card } from './ui/card';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Experience & Projects
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Highlights of my career and key projects showcasing my skills & impact.
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-16">
          {experience.map((job) => (
            <div key={job.id} className="flex flex-col md:flex-row gap-8 items-start">
              {/* Date Section - Left Side (Large Gray Text) */}
              <div className="md:w-48 flex-shrink-0">
                <p className="text-4xl md:text-5xl font-bold text-white/40 leading-tight">
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
                  {/* Company Logo Placeholder */}
                  <div className="w-16 h-16 flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-lg border-2 border-white/30 flex items-center justify-center shadow-sm">
                    <span className="text-2xl font-bold text-white">
                      {job.company.charAt(0)}
                    </span>
                  </div>

                  {/* Job Details */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {job.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-white/80 mb-2">
                      <span className="font-semibold text-white">{job.company}</span>
                      <span className="text-white/50">•</span>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-sm mb-4">{job.period}</p>

                    {/* Description */}
                    <p className="text-white/90 mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {job.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-white/80">
                          <span className="text-white mt-1 text-lg">•</span>
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