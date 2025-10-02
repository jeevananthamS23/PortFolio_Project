import React from "react";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";
import "./Responsive.css";
import Project1 from "../Images/Project1.png";
import Project2 from "../Images/Project2.png";
import Project3 from "../Images/Project3.png";
import Project4 from "../Images/Project4.png";

function Projects() {
  const projects = [
    {
      title: 'GeoTagged Community Issue Tracker',
      description: 'Full-stack MERN app for civic issue reporting with geo-tagging using Leaflet.js and OpenStreetMap. Features image uploads, voting, issue tracking, and an admin resolution panel. Secured with JWT authentication.',
      image: Project1,
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Leaflet.js', 'OpenStreetMap', 'JWT'],
      github: 'https://github.com/jeevananthamS23/Issue_Tracker',
      demo: '#'
    },
    {
      title: 'Habit Tracker',
      description: 'Secure habit tracking platform built with Next.js and MongoDB. Includes full CRUD operations, calendar-based progress tracking, responsive UI, and user authentication.',
      image: Project2,
      tags: ['Next.js', 'React.js', 'MongoDB', 'Mongoose', 'CSS Modules'],
      github: 'https://github.com/jeevananthamS23/Habit_Tracker',
      demo: 'https://habit-tracker-smoky-seven.vercel.app/'
    },
    {
      title: 'Blog Website',
      description: 'A modern blog platform with rich text editing, categories, and comments. Built with MERN stack and designed for fast content publishing with a clean UI.',
      image: Project4,
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
      github: 'https://github.com/jeevananthamS23/Blog_Web',
      demo: 'https://blog-web-sigma-ebon.vercel.app/'
    },
    {
      title: 'Travel Story Platform',
      description: 'A MERN stack travel storytelling app where users can create accounts, share travel experiences with images, descriptions, and locations. Supports full CRUD features (create, update, delete) and provides a personalized dashboard for managing stories.',
      image: Project3,
      tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'CSS'],
      github: 'https://github.com/jeevananthamS23/travel_Story',
      demo: 'https://travel-story-1-5vca.onrender.com'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} className="project-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <Github size={24} />
                  </a>
                  <a href={project.demo} className="project-link" aria-label="Live Demo" target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={24} />
                  </a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
