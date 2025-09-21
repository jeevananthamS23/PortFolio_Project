import React from "react";
import { Code, Database, Server, Palette } from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript", level: 92 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 80 },
      ],
    },
    {
      icon: <Server size={24} />,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 82 },
        { name: "Python", level: 78 },
        { name: "REST APIs", level: 88 },
        { name: "GraphQL", level: 70 },
        { name: "JWT Auth", level: 85 },
      ],
    },
    {
      icon: <Database size={24} />,
      title: "Database & Cloud",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "Firebase", level: 85 },
        { name: "AWS", level: 70 },
        { name: "Docker", level: 65 },
        { name: "Git", level: 90 },
      ],
    },
    {
      icon: <Palette size={24} />,
      title: "Design & Tools",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Adobe XD", level: 80 },
        { name: "Photoshop", level: 75 },
        { name: "UI/UX Design", level: 82 },
        { name: "Responsive Design", level: 92 },
        { name: "Accessibility", level: 78 },
      ],
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Critical Thinking",
    "Time Management",
    "Leadership",
    "Adaptability",
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        {/* Header */}
        <div className="skills__header">
          <h2 className="skills__title">Skills & Expertise</h2>
          <p className="skills__subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Technical Skills */}
        <div className="skills__technical">
          <h3 className="skills__section-title">Technical Skills</h3>
          <div className="skills__grid">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="skills__category">
                <div className="skills__category-header">
                  <div className="skills__category-icon">{category.icon}</div>
                  <h4 className="skills__category-title">{category.title}</h4>
                </div>
                <div className="skills__list">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skills__item">
                      <div className="skills__item-header">
                        <span className="skills__item-name">{skill.name}</span>
                        <span className="skills__item-level">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="skills__progress">
                        <div
                          className="skills__progress-bar"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="skills__soft">
          <h3 className="skills__section-title">Soft Skills</h3>
          <div className="skills__soft-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="skills__soft-item">
                <span className="skills__soft-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
