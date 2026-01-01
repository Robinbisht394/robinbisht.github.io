import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import ProjectCard from "../Components/ProjectCard";
import avalonCart from "../assets/avalonCart.png";
import chat from "../assets/chat.png";
import Redbelly from "../assets/Redbelly.png";
import todo from "../assets/todo-list.png";
const projectData = [
  {
    id: 1,
    title: "Avalon Cart",
    tags: ["React", "tailwind", "Frontend"],
    description:
      "A Simple E-commerce frontend app with product listing and personal cart feature and filter for products",
    imageUrl: avalonCart,
    demoLink: "https://avaloncart.onrender.com",
    repoLink: "https://github.com/Robinbisht394/AvalonCart.git",
  },
  {
    id: 2,
    title: "Chatly",
    tags: ["React", "Frontend", "Full stack "],
    description:
      "A real-time messaging application built using express and react and socket.io for instant data synchronization.",
    imageUrl: chat,
    demoLink: "https://chatly-zos8.onrender.com",
    repoLink: "https://github.com/Robinbisht394/Chat-App-chatly-.git",
  },
  {
    id: 3,
    title: "redBelly",
    tags: [],
    description:
      "A Zomato-like app which list restaurants and menus and manage the product cart efficiently",
    imageUrl: Redbelly,
    demoLink: "https://redbelly.onrender.com",
    repoLink: "https://github.com/Robinbisht394/RedBelly.git",
  },
  {
    id: 4,
    title: "MeetNest",
    tags: [],
    description:
      "A Zomato-like app which list restaurants and menus and manage the product cart efficiently",
    imageUrl: "Meetnest",
    demoLink: "",
    repoLink: "https://github.com/Robinbisht394/MeetNest.git",
  },
  {
    id: 5,
    title: "Restaurant_management_api",
    tags: [],
    description:
      "A Zomato-like app which list restaurants and menus and manage the product cart efficiently",
    imageUrl: "placeholder-chat.jpg",
    demoLink: "#",
    repoLink: "https://github.com/Robinbisht394/Restaurant_Management_API.git",
  },
  {
    id: 6,
    title: "To-do App",
    tags: [],
    description:
      "A simple to-do app built with pure Html Css and javascript, to help you to manage and achieve your daily task and goals",
    imageUrl: todo,
    demoLink: "",
    repoLink: "https://github.com/Robinbisht394/todo.git",
  },
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const allTags = ["All", ...new Set(projectData.flatMap((p) => p.tags))];

  const filteredProjects = projectData.filter((project) => {
    const matchesFilter =
      activeFilter === "All" || project.tags.includes(activeFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filterButtonStyle = (tag) =>
    `px-4 py-2 rounded-full font-inter text-sm transition-all duration-300 ${
      activeFilter === tag
        ? "bg-blue-400 text-white font-bold shadow-md shadow-accent-blue/30"
        : "bg-secondary-background text-gray-400 hover:bg-gray-700/50"
    }`;

  return (
    <div className="bg-deep-space-black min-h-screen py-16">
      <div className="container mx-auto px-6">
        {/* Header and Filtering */}
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold font-poppins text-white mb-4">
            My Work: Where Ideas Meet Code
          </h1>
          <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto">
            A curated collection of my most challenging and rewarding
            development projects.
          </p>
        </header>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-4 md:space-y-0">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={filterButtonStyle(tag)}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 bg-secondary-background text-white border border-gray-700 rounded-full focus:outline-none focus:ring-2 focus:ring-accent-blue font-inter"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500 font-poppins">
              No projects found matching your criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
