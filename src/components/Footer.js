import React from 'react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/alexjohnson',
      label: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/alexjohnson',
      label: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:alex.johnson@email.com',
      label: 'Email'
    }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__main">
            {/* Brand */}
            <div className="footer__brand">
              <h3 className="footer__brand-name">Alex Johnson</h3>
              <p className="footer__brand-tagline">
                Full-Stack Developer crafting digital experiences with passion and precision.
              </p>
              <div className="footer__social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__links-section">
              <h4 className="footer__links-title">Quick Links</h4>
              <nav className="footer__nav">
                <ul className="footer__nav-list">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="footer__nav-item">
                      <a
                        href={link.href}
                        className="footer__nav-link"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="footer__contact-section">
              <h4 className="footer__contact-title">Let's Connect</h4>
              <div className="footer__contact-info">
                <p className="footer__contact-item">
                  <strong>Email:</strong> alex.johnson@email.com
                </p>
                <p className="footer__contact-item">
                  <strong>Location:</strong> New York, NY
                </p>
                <p className="footer__contact-item">
                  <strong>Status:</strong>
                  <span className="footer__status">
                    <span className="footer__status-dot"></span>
                    Available for work
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer__bottom">
            <div className="footer__copyright">
              <p className="footer__copyright-text">
                © {currentYear} Alex Johnson. All rights reserved.
              </p>
              <p className="footer__made-with">
                Made with <Heart size={16} className="footer__heart" /> using React
              </p>
            </div>

            <button
              onClick={handleScrollToTop}
              className="footer__scroll-top"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
