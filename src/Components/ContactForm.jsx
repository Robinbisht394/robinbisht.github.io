import React from "react";
import { FaPaperPlane } from "react-icons/fa";
const ContactForm = ({ formData, handleChange, inputStyle, handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputStyle}
            placeholder="Your Name"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputStyle}
            placeholder="name@example.com"
            required
          />
        </div>

        {/* Mobile Number Input */}
        <div>
          <label
            htmlFor="mobile"
            className="block text-sm font-medium text-white mb-2"
          >
            Mobile Number (Optional)
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={inputStyle}
            placeholder="(+91) 123-XXXX"
          />
        </div>

        {/* Message Textarea */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={inputStyle}
            placeholder="Tell me about your project or opportunity..."
            required
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center space-x-2 bg-blue-500 text-white font-bold py-3 px-8 rounded-lg shadow-xl shadow-blue/30 
            hover:shadow-2xl hover:bg-opacity-90 transition-all duration-300 transform hover:scale-[1.01]"
          >
            <FaPaperPlane />
            <span>Send Message</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
