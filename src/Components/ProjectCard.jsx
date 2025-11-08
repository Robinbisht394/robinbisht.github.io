import React from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaCodeBranch,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="bg-secondary-background rounded-xl overflow-hidden shadow-2xl transition-all duration-500 
                       transform hover:scale-[1.03] border border-transparent hover:border-blue-500 cursor-pointer"
    >
      <div className="overflow-hidden h-64">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-poppins text-white mb-3 font-semibold">
          {project.title}
        </h3>
        <p className="text-gray-400 font-inter text-md mb-4">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-400 text-white text-xs font-medium px-3 py-1 rounded-full font-inter"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Call to Action Links */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-700/50">
          <Link
            to={`/projects/${project.id}`}
            className="text-blue-400 font-bold hover:underline transition-colors flex items-center space-x-2"
          >
            <span>View Details</span>
            <FaCodeBranch />
          </Link>
          <div className="flex space-x-4">
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              title="View Code"
              className="text-gray-400 hover:text-white transition-colors text-xl transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
              className="text-gray-400 hover:text-white transition-colors text-xl transform hover:scale-110"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
