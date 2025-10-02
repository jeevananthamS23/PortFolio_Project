import "./Responsive.css";
import "./Header.css";
import React from "react";
import { Code, Sun, Moon, X, Menu } from "lucide-react";

function Header({ darkMode, toggleTheme, menuOpen, toggleMenu, activeSection, setActiveSection }) {
  const navLinks = ['home', 'about', 'skills', 'certifications', 'projects', 'contact'];

  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
      toggleMenu();
    }
  };
 


  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>Creations</span>
        </div>
        
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {navLinks.map(link => (
            <a 
              key={link}
              onClick={() => scrollToSection(link)}
              className={activeSection === link ? 'active' : ''}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;