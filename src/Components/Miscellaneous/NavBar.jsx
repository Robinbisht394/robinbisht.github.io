import { useState } from "react";
import { NavLink } from "react-router-dom"; // Changed from 'Link' to 'NavLink'
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Base style for all links (desktop and mobile)
  const baseLinkStyle =
    "relative text-gray-300 font-inter text-lg transition-colors duration-300";

  // Hover effect for desktop links (underline)
  const desktopHoverEffect =
    "hover:text-accent-blue after:content-[''] after:absolute after:bottom-0 after:left-0 " +
    "after:w-0 after:h-0.5 after:bg-accent-blue after:transition-all after:duration-300 " +
    "hover:after:w-full";

  // Function to determine link class based on active status (NavLink prop)
  const getNavLinkClass = ({ isActive }) => {
    // If active, apply accent color + bold. If not active, apply base style + hover effect.
    return isActive
      ? `${baseLinkStyle} text-accent-blue after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-blue font-bold`
      : `${baseLinkStyle} ${desktopHoverEffect}`;
  };

  return (
    <nav className="bg-deep-space-black p-4 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo/Name - Uses Link for simple navigation */}
        <NavLink
          to="/"
          className="text-white font-bold text-3xl font-poppins tracking-wider hover:text-accent-blue transition-colors"
        >
          Robin Singh
        </NavLink>

        {/* Desktop Navigation Links (Hidden on small screens) */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              // Uses the function to apply dynamic class
              className={getNavLinkClass}
              end={link.path === "/"} // 'end' ensures exact match for the Home path ('/')
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Hamburger Menu Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl hover:text-accent-blue transition-colors"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Sliding Sidebar) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-deep-space-black transform transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col items-start p-6 space-y-4 pt-20">
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white text-3xl hover:text-accent-blue"
          >
            <FaTimes />
          </button>

          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={toggleMenu} // Close menu on click
              end={link.path === "/"}
              className={({ isActive }) =>
                // Mobile active style: accent background with white text
                isActive
                  ? "text-white font-poppins text-xl bg-accent-blue w-full p-3 rounded-lg"
                  : "text-white font-poppins text-xl hover:bg-accent-blue/20 transition-all duration-200 w-full p-3 rounded-lg"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
