import React from 'react';
import { Code, Lightbulb, Target, Award } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: "Technical Excellence",
      description: "Proficient in modern web technologies with a focus on clean, maintainable code."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Creative Problem Solving",
      description: "Innovative approach to challenges with user-centered design thinking."
    },
    {
      icon: <Target size={24} />,
      title: "Goal-Oriented",
      description: "Dedicated to delivering high-quality solutions that exceed expectations."
    },
    {
      icon: <Award size={24} />,
      title: "Continuous Learning",
      description: "Always staying updated with latest industry trends and best practices."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">
        <div className="about__header">
          <h2 className="about__title">About Me</h2>
          <p className="about__subtitle">
            Passionate developer crafting digital experiences
          </p>
        </div>

        <div className="about__content">
          <div className="about__story">
            <div className="about__story-text">
              <p className="about__paragraph">
                I'm a dedicated Computer Science student at <strong>University of Technology</strong> 
                with a passion for creating innovative web applications. My journey in software development 
                began three years ago, and I've been fascinated by the endless possibilities of technology 
                ever since.
              </p>
              
              <p className="about__paragraph">
                Currently in my final year, I specialize in <strong>full-stack development</strong> with 
                expertise in React, Node.js, and modern cloud technologies. I love tackling complex problems 
                and turning ideas into beautiful, functional applications that make a real impact.
              </p>

              <p className="about__paragraph">
                My goal is to become a <strong>Senior Software Engineer</strong> at a tech company where I 
                can contribute to meaningful projects, mentor other developers, and continue learning from 
                the best in the industry. I'm particularly interested in fintech, healthcare technology, 
                and sustainable development solutions.
              </p>

              <div className="about__education">
                <h3 className="about__education-title">Education</h3>
                <div className="about__education-item">
                  <h4>Bachelor of Science in Computer Science</h4>
                  <p>University of Technology • 2022-2026 • GPA: 3.8/4.0</p>
                  <p>Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Web Development</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about__highlights">
            <h3 className="about__highlights-title">What I Bring</h3>
            <div className="about__highlights-grid">
              {highlights.map((highlight, index) => (
                <div key={index} className="about__highlight-card">
                  <div className="about__highlight-icon">
                    {highlight.icon}
                  </div>
                  <h4 className="about__highlight-title">{highlight.title}</h4>
                  <p className="about__highlight-description">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
