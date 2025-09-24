import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        <div className="project-card">
          <h3>GeoTagged Community Issue Tracker</h3>
          <p>A web platform for reporting local issues with real-time tracking.</p>
        </div>
        <div className="project-card">
          <h3>Retail Sales Forecasting</h3>
          <p>Used LSTM to predict future retail sales trends.</p>
        </div>
        <div className="project-card">
          <h3>AI-Powered Code Review</h3>
          <p>Built an intelligent code analysis tool using AI models.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
