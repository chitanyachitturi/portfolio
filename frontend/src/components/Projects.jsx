import React from 'react';
import { Cpu, Code2, TrendingDown } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { projects } from '../data/mock';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const projectIcons = {
    1: Cpu,
    2: Code2,
    3: TrendingDown
  };

  return (
    <section id="projects" className="py-32 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Key initiatives showcasing cloud engineering expertise and innovative solutions
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = projectIcons[project.id];
            return (
              <ScrollReveal key={project.id} delay={index * 100} direction="up">
                <Card
                  className="group p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-2 h-full"
                  data-testid={`project-card-${project.id}`}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg border border-blue-200 dark:border-blue-700">
                      <IconComponent size={32} className="text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <Badge className="mb-4 w-fit bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 border-blue-200 dark:border-blue-700 font-semibold">
                    {project.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-bold text-gray-900 dark:text-white">Impact:</span> {project.impact}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;