// HomePage.jsx
import { FaArrowRight, FaReact, FaNodeJs, FaHtml5, FaJs } from "react-icons/fa";
import { Link } from "react-router-dom";
import SkillCard from "../Components/SkillCard";
import profile from "../assets/profile.jpg";
const Home = () => {
  return (
    <div className="bg-deep-space-black min-h-screen">
      {/* 1. Hero Section */}
      <section className="container mx-auto px-6 py-20 min-h-[80vh] flex items-center">
        <div className="flex flex-col md:flex-row items-center justify-between w-full">
          {/* Text Content */}
          <div className="md:w-1/2 mb-10 md:mb-0 animate-slideInLeft">
            <p className="text-lg text-blue-400 font-inter mb-2">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-poppins text-white font-bold leading-tight">
              Robin Singh
            </h1>
            <h2 className="text-3xl md:text-5xl font-poppins text-blue-400 mt-2">
              Software Developer
            </h2>
            <p className="text-lg text-gray-400 max-w-xl my-8 font-inter">
              Building scalable, modern, and high-performance web applications.
              Let's create something impactful.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-gray-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-2xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <span>View My Work</span>
              <FaArrowRight />
            </Link>
          </div>

          {/* Image Placeholder */}
          <div className="md:w-1/3 relative flex justify-center animate-fadeIn">
            {/* Placeholder for a cool profile photo */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-700 rounded-full border-4 border-accent-blue/50 border-blue-400 shadow-2xl overflow-hidden flex items-center justify-center">
              {/* In production, replace with an actual image, styled to fit the dark theme */}
              <span className="text-white text-xl">
                <img src={profile} alt="dev profile" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Skills & Expertise Section */}
      <section className="py-20 bg-secondary-background">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-poppins text-white text-center mb-16 font-bold">
            My Tech Stack
          </h3>
          <div className=" overflow-x-scroll flex justify-evenly items-center  gap-10 w-[100%] h-[12vh] pt-2 rounded-md">
            <SkillCard Icon={FaHtml5} name="HTML5" />
            <SkillCard Icon={FaHtml5} name="CSS3" />
            <SkillCard Icon={FaJs} name="Javascript" />
            <SkillCard Icon={FaReact} name="React" />
            <SkillCard Icon={FaNodeJs} name="Node.js" />
            <SkillCard Icon={FaArrowRight} name="Express.js" />{" "}
            <SkillCard Icon={FaArrowRight} name="SQL" />{" "}
            <SkillCard Icon={FaArrowRight} name="MongoDB" />{" "}
          </div>
        </div>
      </section>

      {/* 3. Featured Projects Snippet - Placeholder for brevity */}
      <section className="py-20 bg-deep-space-black">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-poppins text-white text-center mb-10 font-bold">
            Featured Projects
          </h3>
          {/* ... Project Cards Component will go here ... */}
          <div className=" flex justify-between items-center text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-gray-700 text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <span>View All Projects</span>
              <FaArrowRight />
            </Link>
            <button className="bg-gray-700 text-white font-bold py-3 rounded-lg hover:bg-gray-600 px-6">
              Download CV
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
