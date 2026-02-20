import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { skillsWithLogos } from '../data/mock';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skillsWithLogos : skillsWithLogos.slice(0, 12);

  return (
    <section id="skills" className="py-16 relative bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 bg-purple-400/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <SectionHeader 
            title="Technical Skills" 
            subtitle="A curated selection of my expertise in Cloud Computing and DevOps"
          />
        </ScrollReveal>

        {/* Skills Grid with staggered layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {displayedSkills.map((skill, index) => {
            const gradients = [
              'from-blue-500 to-cyan-500',
              'from-purple-500 to-pink-500',
              'from-orange-500 to-red-500',
              'from-green-500 to-emerald-500',
              'from-indigo-500 to-purple-500',
              'from-yellow-500 to-orange-500'
            ];
            const gradient = gradients[index % gradients.length];
            
            return (
              <ScrollReveal key={index} delay={index * 30} direction="up">
                <div className="group relative">
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  
                  <Card
                    className="relative p-6 flex flex-col items-center justify-center gap-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer h-full"
                    data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {/* Gradient border on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                    <div className="absolute inset-[2px] bg-white dark:bg-gray-800 rounded-2xl -z-10"></div>
                    
                    <div className="w-14 h-14 flex items-center justify-center rounded-xl p-2 group-hover:scale-110 transition-transform">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`w-full h-full object-contain ${
                          skill.name === 'GitLab' ? 'scale-125' : ''
                        }`}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-14 h-14 bg-white dark:bg-gray-900 rounded-lg items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                        {skill.name.charAt(0)}
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all text-center">
                      {skill.name}
                    </span>
                  </Card>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {skillsWithLogos.length > 12 && (
          <ScrollReveal delay={400}>
            <div className="text-center">
              <MagneticButton strength={0.15}>
                <Button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
                  data-testid="show-more-skills-btn"
                >
                  {showAll ? (
                    <>
                      <ChevronUp size={20} className="mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={20} className="mr-2" />
                      Show All ({skillsWithLogos.length})
                    </>
                  )}
                </Button>
              </MagneticButton>
            </div>
          </ScrollReveal>
        )}

        {/* Additional Info */}
        <ScrollReveal delay={500}>
          <p className="text-center text-gray-500 dark:text-gray-500 mt-8 italic">
            ...and plenty more technologies I'm exploring & mastering every day.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;