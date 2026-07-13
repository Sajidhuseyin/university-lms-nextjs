 import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Thank you! Your message has been sent.");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Enter your full name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter your email address"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        rows="6"
        placeholder="Write your message..."
        value={formData.message}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="contact-btn"
      >
        Send Message
      </button>

    </form>
  );
}