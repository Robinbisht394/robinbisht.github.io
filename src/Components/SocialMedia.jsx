import { FaGithub, FaLinkedinIn } from "react-icons/fa";
const SocialLinksWidget = () => {
  return (
    <div className="inline-flex items-center space-x-6 bg-secondary-background border border-gray-800 px-8 py-4 rounded-full shadow-lg ml-20">
      <span className="text-gray-500 font-inter text-sm uppercase tracking-widest mr-2 border-r border-gray-700 pr-4">
        Follow Me
      </span>

      <a
        href="#"
        className="text-gray-400 hover:text-accent-blue text-2xl transition-all hover:scale-120"
      >
        <FaGithub />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-accent-blue text-2xl transition-all hover:scale-120"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="#"
        className="text-gray-400 hover:text-accent-blue text-2xl transition-all hover:scale-120"
      >
        {/* <FaXTwitter /> */}
      </a>
    </div>
  );
};
export default SocialLinksWidget;
