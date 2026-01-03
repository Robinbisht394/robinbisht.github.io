// AboutPage.jsx

import {
  FaCode,
  FaServer,
  FaTools,
  FaDownload,
  FaBrain,
  FaPuzzlePiece,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import SkillSet from "../Components/SkillSet";
import profile from "../assets/profile.jpg";
import resume from "../../public/resume.pdf";
const AboutPage = () => {
  return (
    <div className="bg-deep-space-black min-h-screen">
      {/* 1. Hero Section: The Narrative */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content (Left) */}
          <div className="md:w-3/5">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins text-blue-400 mb-6">
              Turning Complex Challenges Into Elegant Code.
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed font-inter mb-6">
              I'm Robin Singh, a passionate software Developer with a focus on
              building robust, scalable, and user-centric applications. My
              journey started with a fascination for how software interacts with
              the real world, and I've been hooked on solving intricate problems
              ever since.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed font-inter">
              I believe good software development is about more than just
              writing code; it's about crafting reliable systems and maintaining
              high standards for performance and readability. I thrive in
              environments that value continuous learning and technical
              excellence.
            </p>
          </div>

          {/* Image Placeholder (Right) */}
          <div className="md:w-2/5 flex justify-center">
            <div className="w-64 h-64 rounded-xl bg-gray-700 shadow-2xl shadow-accent-blue/30 overflow-hidden transform hover:scale-[1.05] transition-transform duration-500">
              {/* Placeholder for professional headshot */}
              <span className="flex items-center justify-center h-full text-white text-xl">
                <img
                  src={profile}
                  alt="Engineer profile"
                  className="size-full bg-cover bg-center"
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Skills & Expertise: The Toolkit */}
      <section className="py-20 bg-secondary-background">
        <div className="container mx-auto px-6">
          <h3 className="text-4xl font-poppins text-white text-center mb-16 font-bold">
            My Structured Toolkit
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <SkillSet
              title="Frontend"
              icon={FaCode}
              skills={[
                "React / Redux",
                "JavaScript (ES6+)",
                "Tailwind CSS",
                "Responsive Design",
              ]}
            />
            <SkillSet
              title="Backend"
              icon={FaServer}
              skills={[
                "Node.js / Express",
                "REST APIs",
                "Authentication and Authorization (JWT)",
                "SQl(RDBMS) / MongoDB(NOSQL)",
              ]}
            />
            <SkillSet
              title="Tools"
              icon={FaTools}
              skills={["Git & GitHub", "Postman", "Vercel / Netlify"]}
            />
          </div>

          {/* Resume Download CTA */}
          <div className="text-center mt-12">
            <a
              href={resume}
              download="robin_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-accent-blue text-white font-bold py-3 px-8 rounded-lg shadow-xl shadow-accent-blue/30 hover:shadow-2xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <FaDownload />
              <span>Download My Full Resume</span>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Personal & Growth: Developer Traits */}
      <section className="py-16 bg-deep-space-black">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Future Focus Card */}
          <div className="p-6 bg-secondary-background rounded-xl border border-transparent hover:border-accent-blue transition-all duration-300">
            <FaBrain className="text-3xl text-blue-500 mb-4" />
            <h4 className="text-2xl font-poppins text-white mb-3">
              Future Focus & Learning
            </h4>
            <ul className="text-gray-400 font-inter list-disc list-inside space-y-1">
              <li>Deep dive into System Design principles.</li>
              <li>Exploring the workings of widely used application.</li>
            </ul>
          </div>
          {/* Interests Card (Relevant to Dev Traits) */}
          <div className="p-6 bg-secondary-background rounded-xl border border-transparent hover:border-accent-blue transition-all duration-300">
            <FaPuzzlePiece className="text-3xl text-blue-500 mb-4" />
            <h4 className="text-2xl font-poppins text-white mb-3">
              Relevant Interests
            </h4>
            <ul className="text-gray-400 font-inter list-disc list-inside space-y-1">
              <li>Sharpening analytical and forward-thinking skills.</li>
              <li>Understanding systems and optimization.</li>
              <li>Applying structured logic and grammar to complex systems.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
