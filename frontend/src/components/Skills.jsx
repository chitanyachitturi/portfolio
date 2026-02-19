import React from 'react';
import { Cloud, Code, Database, Wrench, Server, Network } from 'lucide-react';
import { Card } from './ui/card';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: skills.cloud,
      color: 'blue'
    },
    {
      title: 'DevOps & IaC',
      icon: Server,
      skills: skills.devops,
      color: 'blue'
    },
    {
      title: 'Programming',
      icon: Code,
      skills: skills.programming,
      color: 'blue'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: skills.databases,
      color: 'blue'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: skills.tools,
      color: 'blue'
    },
    {
      title: 'Networking',
      icon: Network,
      skills: skills.networking,
      color: 'blue'
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Comprehensive expertise across cloud platforms, DevOps tools, and modern technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={index}
                className="p-6 border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <IconComponent size={20} className="text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="text-sm px-3 py-1.5 bg-slate-50 text-slate-700 rounded-md border border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;