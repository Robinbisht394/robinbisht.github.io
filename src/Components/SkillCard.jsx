import React from "react";

const SkillCard = ({ Icon, name }) => {
  return (
    <div
      className="bg-secondary-background p-6 rounded-md text-center 
                          hover:shadow-2xl hover:shadow-blue-400
                          transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
    >
      <Icon className="text-3xl text-blue-400 mx-auto mb-2" />
      <p className="text-white font-inter text-md">{name}</p>
    </div>
  );
};

export default SkillCard;
