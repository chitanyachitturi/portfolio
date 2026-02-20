import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { skillsWithLogos } from '../data/mock';
import { ChevronDown, ChevronUp } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skillsWithLogos : skillsWithLogos.slice(0, 12);

  return (
    <section id="skills" className="py-32 bg-white dark:bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A curated selection of my expertise in Cloud Computing and DevOps
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid - Like Hasan's Portfolio with COLOR by default */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {displayedSkills.map((skill, index) => (
            <ScrollReveal key={index} delay={index * 50} direction="up">
              <Card
                className="group p-6 flex flex-col items-center justify-center gap-4 bg-white-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer animate-wiggle"
                data-testid={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white dark:bg-gray-900 rounded-lg p-2">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className={`w-full h-full object-contain transition-all duration-300 group-hover:scale-110 ${
                      skill.name === 'GitLab' ? 'scale-125' : ''
                    }`}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-16 h-16 bg-white dark:bg-gray-900 rounded-lg items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl">
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-center">
                  {skill.name}
                </span>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Show More/Less Button */}
        {skillsWithLogos.length > 12 && (
          <ScrollReveal delay={600}>
            <div className="text-center">
              <MagneticButton strength={0.15}>
                <Button
                  onClick={() => setShowAll(!showAll)}
                  className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
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
        <ScrollReveal delay={700}>
          <p className="text-center text-gray-500 dark:text-gray-500 mt-8 italic">
            ...and plenty more technologies I'm exploring & mastering every day.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Skills;