// ContactPage.jsx
import { useState } from "react";
import { FaPaperPlane, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import ContactForm from "../Components/ContactForm";
const ContactPage = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // TODO: Integrate with a backend service (e.g., Formspree, AWS Lambda, or a dedicated API)
    alert(
      "Thank you for your message! (Form submission logic needs to be integrated)"
    );
    setFormData({ name: "", email: "", mobile: "", message: "" }); // Reset form
  };

  // Styling for input fields
  const inputStyle =
    "w-full p-3 bg-deep-space-black text-white border border-gray-700 rounded-lg " +
    "focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all duration-300 font-inter";

  return (
    <div className="bg-deep-space-black min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header Content and Alternative Contact Info */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold font-poppins text-blue-400 mb-4">
            Let's Connect.
          </h1>
          <p className="text-xl text-gray-400 font-inter max-w-3xl mx-auto mb-8">
            Whether you have a project idea, a job opportunity, or just want to
            say hello, my inbox is always open.
          </p>

          {/* Alternative Contact Links */}
          <div className="flex justify-center space-x-8 text-2xl">
            <a
              href="mailto:your.email@example.com"
              className="text-gray-400 hover:text-accent-blue transition-colors flex items-center space-x-2"
            >
              <FaEnvelope />{" "}
              <span className="text-lg font-inter hidden sm:inline">Email</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors flex items-center space-x-2"
            >
              <FaLinkedin />{" "}
              <span className="text-lg font-inter hidden sm:inline">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-blue transition-colors flex items-center space-x-2"
            >
              <FaGithub />{" "}
              <span className="text-lg font-inter hidden sm:inline">
                GitHub
              </span>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-xl mx-auto bg-secondary-background p-8 md:p-10 rounded-xl shadow-2xl shadow-accent-blue/10">
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            inputStyle={inputStyle}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
