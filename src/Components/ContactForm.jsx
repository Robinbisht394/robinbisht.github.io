import React, { useRef } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactForm = ({ formData, handleChange, inputStyle, setFormData }) => {
  const formRef = useRef();

  const publicKey = "2gBzCQGnU6yrTS3TF";
  const serviceKey = "service_z0g2t53";
  const templateKey = "template_0lafyx3";

  const sendForm = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceKey, templateKey, formRef.current, publicKey).then(
      () => {
        alert("Message sent successfully ✅");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
        });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message ❌");
      }
    );
  };

  return (
    <form ref={formRef} onSubmit={sendForm} className="space-y-6">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* Mobile */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Mobile (Optional)
        </label>
        <input
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className={inputStyle}
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-white mb-2">
          Message
        </label>
        <textarea
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className={inputStyle}
          required
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white font-bold py-3 rounded-lg"
      >
        <FaPaperPlane />
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
