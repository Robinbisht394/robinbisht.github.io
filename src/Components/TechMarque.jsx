import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const SkillCard = ({ Icon, name }) => (
  <div
    className="flex items-center space-x-3 bg-secondary-background border border-gray-800 px-6 py-4 rounded-xl 
                  hover:border-accent-blue/50 transition-all duration-300 mx-4 min-w-[160px] group"
  >
    <Icon className="text-3xl text-gray-400 group-hover:text-accent-blue transition-colors" />
    <span className="text-gray-300 group-hover:text-white font-inter font-medium">
      {name}
    </span>
  </div>
);

const TechMarquee = () => {
  const skills = [
    { icon: FaHtml5, name: "HTML5" },
    { icon: FaCss3Alt, name: "CSS3" },
    { icon: FaJs, name: "JavaScript" },
    { icon: FaReact, name: "React" },
    { icon: FaNodeJs, name: "Node.js" },
    { icon: SiExpress, name: "Express" },
    { icon: SiMysql, name: "SQL" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiTypescript, name: "TypeScript" },
  ];

  // We double the array to create a seamless infinite loop
  const doubleSkills = [...skills, ...skills];

  return (
    <section className="py-24 bg-deep-space-black overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-poppins text-white font-bold mb-2">
            My Tech Stack
          </h3>
          <div className="h-1 w-20 bg-accent-blue rounded-full"></div>
        </div>
      </div>

      {/* The Marquee Container */}
      <div className="relative flex overflow-hidden">
        {/* Gradient Overlays for realistic fading effect */}
        <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-deep-space-black to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-deep-space-black to-transparent z-10"></div>

        {/* The Animated Track */}
        <div className="animate-scroll whitespace-nowrap">
          {doubleSkills.map((skill, index) => (
            <SkillCard key={index} Icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
