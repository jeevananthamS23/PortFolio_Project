import React from "react";
import { ArrowRight, Download } from "lucide-react";
import "./Home.css";

const Home = () => {
  const handleViewProjects = () => {
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Alex_Johnson_CV.pdf";
    link.click();
  };

  return (
    <section id="home" className="home">
      <div className="home__container">
        <div className="home__content">
          {/* Left Section */}
          <div className="home__text">
            <div className="home__greeting">
              <span className="home__greeting-text">Hello, I'm</span>
            </div>
            <h1 className="home__title">
              <span className="home__name">Alex Johnson</span>
              <span className="home__subtitle">Full-Stack Developer</span>
            </h1>
            <p className="home__description">
              Passionate computer science student specializing in modern web
              technologies. I create innovative digital solutions with clean code
              and beautiful user experiences.
            </p>

            {/* CTA Buttons */}
            <div className="home__actions">
              <button onClick={handleViewProjects} className="home__cta-primary">
                <span>View Projects</span>
                <ArrowRight size={20} />
              </button>
              <button onClick={handleDownloadCV} className="home__cta-secondary">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>

            {/* Stats */}
            <div className="home__stats">
              <div className="home__stat">
                <span className="home__stat-number">20+</span>
                <span className="home__stat-label">Projects</span>
              </div>
              <div className="home__stat">
                <span className="home__stat-number">3+</span>
                <span className="home__stat-label">Years Experience</span>
              </div>
              <div className="home__stat">
                <span className="home__stat-number">15+</span>
                <span className="home__stat-label">Technologies</span>
              </div>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="home__image">
            <div className="home__image-container">
              <img
                // src={" "}
                alt="Alex Johnson - Full-Stack Developer"
                className="home__profile-image"
              />
              <div className="home__image-decoration"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="home__scroll-indicator">
          <div className="home__scroll-line"></div>
          <span className="home__scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Home;
