import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { skillsWithLogos } from '../data/mock';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll ? skillsWithLogos : skillsWithLogos.slice(0, 12);

  return (
    <section id="skills" className="py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A curated selection of my expertise in Cloud Computing and DevOps
          </p>
        </div>

        {/* Skills Grid - Like Hasan's Portfolio with COLOR by default */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8">
          {displayedSkills.map((skill, index) => (
            <Card
              key={index}
              className="group p-6 flex flex-col items-center justify-center gap-4 bg-white-50 border-gray-200 hover:bg-white hover:border-blue-300 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-lg p-2">
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
                <div className="hidden w-16 h-16 bg-white rounded-lg items-center justify-center text-blue-600 font-bold text-xl">
                  {skill.name.charAt(0)}
                </div>
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors text-center">
                {skill.name}
              </span>
            </Card>
          ))}
        </div>

        {/* Show More/Less Button */}
        {skillsWithLogos.length > 12 && (
          <div className="text-center">
            <Button
              onClick={() => setShowAll(!showAll)}
              className="bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
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
          </div>
        )}

        {/* Additional Info */}
        <p className="text-center text-gray-500 mt-8 italic">
          ...and plenty more technologies I'm exploring & mastering every day.
        </p>
      </div>
    </section>
  );
};

export default Skills;