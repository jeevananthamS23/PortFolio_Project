import React from "react";
import { ExternalLink, Github, Eye } from "lucide-react";
// If you want to add images later, uncomment these imports:
// import project1Image from "../../assets/project-1.jpg";
// import project2Image from "../../assets/project-2.jpg";
// import project3Image from "../../assets/project-3.jpg";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with user authentication, shopping cart, payment integration, and admin dashboard. Built with modern technologies for optimal performance.",
      // image: project1Image, // Uncomment when you add image
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/alexjohnson/ecommerce",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team collaboration features, and intuitive drag-and-drop interface for productivity enhancement.",
      // image: project2Image, // Uncomment when you add image
      techStack: ["React Native", "Firebase", "TypeScript", "Socket.io"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/alexjohnson/taskapp",
      featured: true,
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "A comprehensive data visualization dashboard with interactive charts, real-time data processing, and customizable reporting features for business intelligence.",
      // image: project3Image, // Uncomment when you add image
      techStack: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/alexjohnson/analytics",
      featured: false,
    },
  ];

  const handleLiveDemo = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleGithubLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        {/* Header */}
        <div className="projects__header">
          <h2 className="projects__title">Featured Projects</h2>
          <p className="projects__subtitle">
            A showcase of my recent work and technical achievements
          </p>
        </div>

        {/* Project Cards */}
        <div className="projects__grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`projects__card ${
                project.featured ? "projects__card--featured" : ""
              }`}
            >
              {/* Image + Overlay */}
              <div className="projects__image-container">
                {/* Uncomment when images are ready */}
                {/* <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="projects__image"
                /> */}
                <div className="projects__overlay">
                  <div className="projects__actions">
                    <button
                      onClick={() => handleLiveDemo(project.liveUrl)}
                      className="projects__action-btn projects__action-btn--primary"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <Eye size={20} />
                      <span>Live Demo</span>
                    </button>
                    <button
                      onClick={() => handleGithubLink(project.githubUrl)}
                      className="projects__action-btn projects__action-btn--secondary"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </button>
                  </div>
                </div>
                {project.featured && (
                  <div className="projects__featured-badge">⭐ Featured</div>
                )}
              </div>

              {/* Project Info */}
              <div className="projects__content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>

                {/* Tech Stack */}
                <div className="projects__tech-stack">
                  <h4 className="projects__tech-title">Technologies Used:</h4>
                  <div className="projects__tech-list">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="projects__tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="projects__links">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link projects__link--primary"
                  >
                    <ExternalLink size={16} />
                    <span>Live Site</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__link projects__link--secondary"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="projects__cta">
          <p className="projects__cta-text">Want to see more of my work?</p>
          <a
            href="https://github.com/alexjohnson"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__cta-button"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
