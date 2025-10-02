import React from "react";
import { Briefcase } from "lucide-react";  
import "./About.css";
import "./Responsive.css";
function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a motivated and curious Computer Science enthusiast pursuing B.Tech in Artificial Intelligence and Data Science (2023–2027) at Sri Eshwar College of Engineering. With a strong foundation in C, C++, Python, Java, and JavaScript, I enjoy full-stack development and exploring core CS concepts like Data Structures, OOPS, and DBMS.
            </p>
            <p>
              I have hands-on experience with modern web technologies such as React.js, Node.js, Express.js, Next.js, and MongoDB, and I love working on projects that combine creativity with problem-solving.
            </p>
            <p>
              Beyond academics, I actively practice problem-solving on platforms like LeetCode, CodeChef, and HackerRank, having solved 2000+ coding problems overall.
            </p>
            {/* <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5</h3>
                <p>Certifications</p>
              </div>
            </div> */}
          </div>
          <div className="about-image">
            <div className="experience-card">
              <Briefcase size={32} />
              <h3>Education</h3>
              <p>B.Tech Artificial Intelligence And DataScience</p>
              <span>Sri Eshwar College Of Engineering Coimbatore</span>
              <span className="year">2023 - 2027</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;