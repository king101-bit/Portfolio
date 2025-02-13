import { useState } from "react";
import { Send } from 'lucide-react';
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("https://formspree.io/f/xzzdaaoq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
      {status === "success" && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-center">Something went wrong. Try again.</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />
<motion.button
  type="submit"
  className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-200"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  disabled={status === "loading"}
>
  {status === "loading" ? "Sending..." : "Send Message"}
  <Send size={20} />
</motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
