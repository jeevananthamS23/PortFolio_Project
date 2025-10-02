import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Github, Linkedin, Mail, ExternalLink, Award, Code, Briefcase } from 'lucide-react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Certifications from './components/Certifications.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import Footer from './components/Footer.js';
import styles from './App.css'
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="app">
      <Header 
        darkMode={darkMode} 
        toggleTheme={toggleTheme}
        menuOpen={menuOpen}
        toggleMenu={toggleMenu}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Home setActiveSection={setActiveSection} />
      <About />
      <Skills />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

export default App;