import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Specific icon for X

const SocialSidebar = () => {
  const socials = [
    {
      id: 1,
      icon: <FaGithub />,
      link: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: <FaXTwitter />,
      link: "https://x.com/yourusername",
      label: "X (Twitter)",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col fixed bottom-0 left-10 z-50">
      <div className="flex flex-col space-y-6 items-center">
        {socials.map((social) => (
          <a
            key={social.id}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="text-gray-400 text-2xl hover:text-accent-blue hover:-translate-y-1 transition-all duration-300 transform hover:shadow-[0_0_15px_rgba(88,166,255,0.4)]"
          >
            {social.icon}
          </a>
        ))}
        {/* The "Realistic" Design Touch: The Vertical Line */}
        <div className="w-[1px] h-32 bg-gray-600 mt-4"></div>
      </div>
    </div>
  );
};

export default SocialSidebar;
