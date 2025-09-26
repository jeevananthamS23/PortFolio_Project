import React from "react";
import "./About.css";
// import profilePic from "./profile.jpg"; // replace with your image

const About = () => {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        {/* Left - Image */}
        {/* <div className="about-image">
          <img src={profilePic} alt="About" />
        </div> */}

        {/* Right - Text */}
        <div className="about-text">
          <p>
            I’m <span className="highlight">Jeeveanantham</span>, an aspiring <b>Data Scientist</b> 
            and <b>Full Stack Developer</b>. I love working on modern, responsive web 
            applications and building data-driven solutions that make an impact.
          </p>
          <p>
            My goal is to combine analytical thinking with development skills to solve 
            real-world problems while continuously learning new technologies.
          </p>

          <a href="#contact" className="btn">Let’s Connect</a>
        </div>
      </div>
    </section>
  );
};

export default About;
