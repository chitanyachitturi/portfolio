import React from 'react';
import { Cpu, Code2, TrendingDown } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { projects } from '../data/mock';

const Projects = () => {
  const projectIcons = {
    1: Cpu,
    2: Code2,
    3: TrendingDown
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Key initiatives showcasing cloud engineering expertise and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = projectIcons[project.id];
            return (
              <Card
                key={project.id}
                className="group p-8 bg-white border-2 border-gray-100 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 flex flex-col hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <Badge className="mb-4 w-fit bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 font-semibold">
                  {project.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full border border-gray-200 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <span className="font-bold text-blue-600">Impact:</span> {project.impact}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;