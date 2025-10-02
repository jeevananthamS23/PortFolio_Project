import "./Responsive.css";
import React, { useState } from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your visions.
            </p>
            <div className="contact-links">
              <a href="mailto:jeevanantham159@gmail.com" className="contact-link">
                <Mail size={24} />
                <span>jeevanantham159@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/jeevanantham-s-1987b82b9/" className="contact-link">
                <Linkedin size={24} />
                <span>linkedin.com/in/JeevananthamS</span>
              </a>
              <a href="https://github.com/jeevananthamS23" className="contact-link">
                <Github size={24} />
                <span>github.com/JeevananthamS</span>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;