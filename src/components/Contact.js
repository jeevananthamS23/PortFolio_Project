import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "alex.johnson@email.com",
      link: "mailto:alex.johnson@email.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "New York, NY, USA",
      link: "https://maps.google.com/?q=New+York,NY"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/alexjohnson",
      username: "@alexjohnson"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      url: "https://github.com/alexjohnson",
      username: "@alexjohnson"
    },
    {
      icon: <MessageCircle size={24} />,
      label: "Twitter",
      url: "https://twitter.com/alexjohnson",
      username: "@alexjohnson_dev"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-section">
              <h3 className="contact__info-title">Contact Information</h3>
              <div className="contact__info-list">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="contact__info-item"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="contact__info-icon">
                      {info.icon}
                    </div>
                    <div className="contact__info-details">
                      <span className="contact__info-label">{info.label}</span>
                      <span className="contact__info-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact__social-section">
              <h3 className="contact__social-title">Follow Me</h3>
              <div className="contact__social-list">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-item"
                  >
                    <div className="contact__social-icon">
                      {social.icon}
                    </div>
                    <div className="contact__social-details">
                      <span className="contact__social-label">{social.label}</span>
                      <span className="contact__social-username">{social.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact__availability">
              <div className="contact__availability-indicator">
                <div className="contact__status-dot"></div>
                <span className="contact__status-text">Available for new opportunities</span>
              </div>
              <p className="contact__availability-text">
                Currently open to full-time positions, freelance projects, and exciting collaborations.
              </p>
            </div>
          </div>

          <div className="contact__form-container">
            <form onSubmit={handleSubmit} className="contact__form">
              <div className="contact__form-header">
                <h3 className="contact__form-title">Send a Message</h3>
                <p className="contact__form-subtitle">
                  Fill out the form below and I'll get back to you within 24 hours.
                </p>
              </div>

              <div className="contact__form-grid">
                <div className="contact__form-group">
                  <label htmlFor="name" className="contact__form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="contact__form-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="contact__form-group">
                  <label htmlFor="email" className="contact__form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="contact__form-input"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="contact__form-group">
                <label htmlFor="subject" className="contact__form-label">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="contact__form-input"
                  placeholder="What's this about?"
                />
              </div>

              <div className="contact__form-group">
                <label htmlFor="message" className="contact__form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="contact__form-textarea"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`contact__form-submit ${isSubmitting ? 'contact__form-submit--loading' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="contact__spinner"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="contact__form-success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact__form-error">
                  ❌ Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
