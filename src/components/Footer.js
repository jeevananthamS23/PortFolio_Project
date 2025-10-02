import React from "react";
import { Github, Linkedin, Mail } from "lucide-react"; 
import "./Footer.css";
import "./Responsive.css";
function Footer() {
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Jeevanantham S</h3>
            <p>Full Stack Developer <br></br> AI And Data Engineer</p>
            <div className="footer-social">
              <a href="https://github.com/jeevananthamS23" aria-label="GitHub"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/jeevanantham-s-1987b82b9/" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="mailto:sjeevanantham159@gmail.com" aria-label="Email"><Mail size={20} /></a>
            </div>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('about')}>About</a>
            <a onClick={() => scrollToSection('projects')}>Projects</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>sjeevanantham159@gmail.com</p>
            <p>Available for opportunities</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Jeevanantham S . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;