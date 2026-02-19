import React from 'react';
import { Cloud, Code, Database, Wrench, Server } from 'lucide-react';
import { Card } from './ui/card';
import { skills } from '../data/mock';
import * as LucideIcons from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: skills.cloud,
      gradient: 'from-orange-500/20 to-red-500/20'
    },
    {
      title: 'DevOps & IaC',
      icon: Server,
      skills: skills.devops,
      gradient: 'from-orange-500/20 to-yellow-500/20'
    },
    {
      title: 'Programming',
      icon: Code,
      skills: skills.programming,
      gradient: 'from-orange-500/20 to-orange-600/20'
    },
    {
      title: 'Databases',
      icon: Database,
      skills: skills.databases,
      gradient: 'from-red-500/20 to-orange-500/20'
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: skills.tools,
      gradient: 'from-yellow-500/20 to-orange-500/20'
    }
  ];

  const getIconComponent = (iconName) => {
    const IconComponent = LucideIcons[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())];
    return IconComponent || LucideIcons.Box;
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-gray-900 to-black relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
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
                className="p-6 bg-gradient-to-br from-gray-900 to-black border-orange-500/20 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-800">
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-lg flex items-center justify-center border border-orange-500/20`}>
                    <IconComponent size={24} className="text-orange-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = typeof skill === 'object' ? getIconComponent(skill.icon) : null;
                    const skillName = typeof skill === 'object' ? skill.name : skill;
                    return (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-3 px-3 py-2 bg-white/5 rounded-lg border border-gray-800 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-200"
                      >
                        {SkillIcon && <SkillIcon size={16} className="text-orange-500" />}
                        <span className="text-sm text-gray-300">{skillName}</span>
                      </div>
                    );
                  })}
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