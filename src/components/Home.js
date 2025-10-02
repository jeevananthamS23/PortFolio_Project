import "./Home.css";
import "./Responsive.css";
import React from "react";
import img from "../Images/jeeva.jpg";
import { Code, Award } from "lucide-react"; 

function Home({ setActiveSection }) {
  return (
    <section id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hi, I'm <span className="gradient-text">Jeevanantham S</span>
            </h1>
            <h2 className="home-subtitle">🎓 B.Tech (Artificial Intelligence & Data Science) Student | Full-Stack Developer | Problem Solver</h2>
            <p className="home-description">
              I'm a passionate about building innovative web applications 
              and exploring the latest technologies. Welcome to my digital space!
            </p>
            <div className="home-buttons">
            <a 
               href="https://drive.google.com/file/d/11AtzQHrKiHWOQEoWEXMS6UY1sLHyMGT2/view?usp=sharing" 
              download="Jeeveanantham_Resume.pdf" 
              className="btn btn-primary"
              style={{ textDecoration: "none", color: "white" }} >
              View My Resume
            </a>

          <button 
        className="btn btn-secondary"
         onClick={() => {
          document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
         setActiveSection('contact');
         }}
       >
       Contact Me
     </button>
            </div>
          </div>
          <div className="home-image">
            <div className="image-wrapper">
              <div className="image-placeholder">
                <img 
                  src={img} 
                  alt="Profile"
                />
              </div>
              {/* <div className="floating-card card-1">
                <Code size={24} />
                <span>10+ Projects</span>
              </div> */}
              {/* <div className="floating-card card-2">
                <Award size={24} />
                <span>5 Certifications</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;