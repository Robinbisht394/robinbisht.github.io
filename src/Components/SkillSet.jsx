import React from "react";

const SkillSet = ({ title, icon: Icon, skills }) => {
  return (
    <div className="bg-secondary-background p-8 rounded-xl h-full shadow-lg">
      <Icon className="text-4xl text-blue-400 mb-4" />
      <h4 className="text-2xl font-poppins text-white mb-4 font-semibold">
        {title}
      </h4>
      <ul className="space-y-2 text-gray-400 font-inter">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-accent-blue mr-3"></span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillSet;
