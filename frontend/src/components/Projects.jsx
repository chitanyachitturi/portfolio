import React from 'react';
import { Cpu, Code2, TrendingDown, ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { projects } from '../data/mock';

const Projects = () => {
  const projectIcons = {
    1: Cpu,
    2: Code2,
    3: TrendingDown
  };

  const projectGradients = {
    1: 'from-orange-500/20 to-red-500/20',
    2: 'from-orange-500/20 to-yellow-500/20',
    3: 'from-orange-500/20 to-orange-600/20'
  };

  return (
    <section id="projects" className="py-20 md:py-32 bg-black relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Key initiatives showcasing cloud engineering expertise and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = projectIcons[project.id];
            const gradientClass = projectGradients[project.id];
            return (
              <Card
                key={project.id}
                className="group p-6 bg-gradient-to-br from-gray-900 to-black border-orange-500/20 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 flex flex-col"
              >
                {/* Gradient Header */}
                <div className={`mb-6 p-6 rounded-xl bg-gradient-to-br ${gradientClass} border border-orange-500/20`}>
                  <IconComponent size={40} className="text-orange-500" />
                </div>

                {/* Category Badge */}
                <Badge className="mb-3 w-fit bg-orange-500/10 text-orange-500 border border-orange-500/30 hover:bg-orange-500/20">
                  {project.category}
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-4 flex-grow leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 bg-white/5 text-gray-400 rounded-full border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Impact */}
                <div className="pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-400">
                    <span className="text-orange-500 font-semibold">Impact:</span> {project.impact}
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