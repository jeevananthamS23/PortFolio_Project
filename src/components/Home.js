import React from "react";
import "./Home.css";
import img from "../Images/jeeva.jpg"; // place your profile picture inside src folder

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        {/* Left Side */}
        <div className="home-text">
          <h1>
            Hi, I'm <span>Jeeveanantham</span>
          </h1>
          <h2>Aspiring Data Scientist | Full Stack Developer</h2>
          <p>
            Passionate about turning data into meaningful insights and building
            modern, responsive web applications. I enjoy solving real-world
            problems with technology and continuous learning.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn">View My Work</a>
            <a href="/resume.pdf" download className="btn secondary">Download Resume</a>
          </div>
        </div>

        {/* Right Side */}
        <div className="home-image">
          <img src={img} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
