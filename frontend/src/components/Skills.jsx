import React, { useEffect, useRef, useState } from 'react';
import { skills } from '../data/portfolioData';
import {
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiCanva
} from 'react-icons/si';
import { FaCode, FaFileCode } from 'react-icons/fa';

const iconMap = {
  SiPython,
  SiDjango,
  SiHtml5,
  SiCss3: SiCss,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiVisualstudiocode: FaFileCode,
  SiPostman,
  SiCanva,
  FaCode
};

const colorMap = {
  SiPython: '#3776AB',
  SiDjango: '#092E20',
  SiHtml5: '#E34F26',
  SiCss3: '#1572B6',
  SiReact: '#61DAFB',
  SiMysql: '#4479A1',
  SiPostgresql: '#4169E1',
  SiGit: '#F05032',
  SiGithub: '#181717',
  SiVisualstudiocode: '#007ACC',
  SiPostman: '#FF6C37',
  SiCanva: '#00C4CC',
  FaCode: '#666666'
};

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-gray-100 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-300/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-300/30 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-black mb-16 text-center transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className={`bg-white border-2 border-gray-300 rounded-lg p-6 hover:border-black transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: 'perspective(1000px)',
                transformStyle: 'preserve-3d'
              }}
            >
              <h3 className="text-xl font-bold text-black mb-4 border-b-2 border-gray-200 pb-2">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill.icon];
                  const iconColor = colorMap[skill.icon];
                  const skillKey = `${skillGroup.category}-${skill.name}`;
                  const isHovered = hoveredSkill === skillKey;

                  return (
                    <li
                      key={skillIndex}
                      className="text-gray-700 flex items-center group cursor-pointer"
                      onMouseEnter={() => setHoveredSkill(skillKey)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div
                        className="mr-3 transition-all duration-500 ease-out"
                        style={{
                          transform: isHovered
                            ? 'perspective(1000px) translateZ(40px) rotateY(360deg) scale(1.3)'
                            : 'perspective(1000px) translateZ(0px) rotateY(0deg) scale(1)',
                          transformStyle: 'preserve-3d',
                          color: isHovered ? iconColor : '#666666'
                        }}
                      >
                        {IconComponent && <IconComponent size={24} />}
                      </div>
                      <span
                        className={`transition-all duration-300 ${
                          isHovered ? 'font-semibold text-black' : ''
                        }`}
                      >
                        {skill.name}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
