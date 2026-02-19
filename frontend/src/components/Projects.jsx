import React from 'react';
import { ExternalLink, Code2, TrendingDown, Cpu } from 'lucide-react';
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
    <section id="projects" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
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
                className="group p-6 hover:shadow-xl transition-all duration-300 border-slate-200 hover:border-blue-300 flex flex-col"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <IconComponent size={28} className="text-blue-600" />
                  </div>
                </div>

                {/* Category Badge */}
                <Badge className="mb-3 w-fit bg-slate-100 text-slate-700 hover:bg-slate-200">
                  {project.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-slate-50 text-slate-600 rounded-full border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-sm font-medium text-slate-700">
                    <span className="text-blue-600">Impact:</span> {project.impact}
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