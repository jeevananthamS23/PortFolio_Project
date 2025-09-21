import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2024",
      description: "Validates expertise in designing distributed systems on AWS platform with focus on scalability, security, and cost optimization.",
      credentialId: "AWS-SAA-2024-001234",
      verificationUrl: "https://aws.amazon.com/verification",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"],
      logo: "☁️"
    },
    {
      id: 2,
      title: "Meta Front-End Developer",
      issuer: "Meta (Facebook)",
      date: "2023",
      description: "Professional certificate covering React, responsive web design, version control, and user experience principles.",
      credentialId: "META-FED-2023-005678",
      verificationUrl: "https://coursera.org/verification",
      skills: ["React", "JavaScript", "UI/UX Design", "Version Control"],
      logo: "⚛️"
    },
    {
      id: 3,
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      description: "Demonstrates proficiency in building scalable and reliable applications using Google Cloud technologies.",
      credentialId: "GCP-PD-2023-009876",
      verificationUrl: "https://cloud.google.com/certification",
      skills: ["GCP Services", "Kubernetes", "APIs", "DevOps"],
      logo: "🌩️"
    },
    {
      id: 4,
      title: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      date: "2023",
      description: "Validates skills in developing applications using MongoDB database, including data modeling and performance optimization.",
      credentialId: "MDB-DEV-2023-112233",
      verificationUrl: "https://university.mongodb.com/certification",
      skills: ["MongoDB", "NoSQL", "Database Design", "Performance Tuning"],
      logo: "🍃"
    },
    {
      id: 5,
      title: "Certified Scrum Master",
      issuer: "Scrum Alliance",
      date: "2022",
      description: "Certified in Agile and Scrum methodologies for effective project management and team collaboration.",
      credentialId: "CSM-2022-445566",
      verificationUrl: "https://scrumalliance.org/certification",
      skills: ["Agile", "Scrum", "Project Management", "Team Leadership"],
      logo: "🏃"
    },
    {
      id: 6,
      title: "UX Design Certificate",
      issuer: "Google",
      date: "2022",
      description: "Comprehensive program covering user experience design principles, prototyping, and user research methodologies.",
      credentialId: "GOOGLE-UX-2022-778899",
      verificationUrl: "https://coursera.org/verification",
      skills: ["UX Research", "Prototyping", "Figma", "User Testing"],
      logo: "🎨"
    }
  ];

  const handleVerification = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="certifications">
      <div className="certifications__container">
        <div className="certifications__header">
          <h2 className="certifications__title">Certifications & Achievements</h2>
          <p className="certifications__subtitle">
            Professional certifications that validate my expertise and commitment to continuous learning
          </p>
        </div>

        <div className="certifications__grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="certifications__card">
              <div className="certifications__card-header">
                <div className="certifications__logo">
                  <span className="certifications__logo-emoji">{cert.logo}</span>
                </div>
                <div className="certifications__badge">
                  <CheckCircle size={16} />
                  <span>Verified</span>
                </div>
              </div>

              <div className="certifications__content">
                <h3 className="certifications__card-title">{cert.title}</h3>
                <div className="certifications__issuer">
                  <Award size={16} />
                  <span>{cert.issuer}</span>
                </div>
                <div className="certifications__date">
                  <Calendar size={16} />
                  <span>Earned in {cert.date}</span>
                </div>
                
                <p className="certifications__description">{cert.description}</p>

                <div className="certifications__skills">
                  <h4 className="certifications__skills-title">Key Skills:</h4>
                  <div className="certifications__skills-list">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="certifications__skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="certifications__credential">
                  <div className="certifications__credential-info">
                    <span className="certifications__credential-label">Credential ID:</span>
                    <span className="certifications__credential-id">{cert.credentialId}</span>
                  </div>
                </div>
              </div>

              <div className="certifications__footer">
                <button 
                  onClick={() => handleVerification(cert.verificationUrl)}
                  className="certifications__verify-btn"
                >
                  <ExternalLink size={16} />
                  <span>Verify Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="certifications__stats">
          <div className="certifications__stat">
            <span className="certifications__stat-number">{certifications.length}</span>
            <span className="certifications__stat-label">Certifications</span>
          </div>
          <div className="certifications__stat">
            <span className="certifications__stat-number">5</span>
            <span className="certifications__stat-label">Tech Platforms</span>
          </div>
          <div className="certifications__stat">
            <span className="certifications__stat-number">100%</span>
            <span className="certifications__stat-label">Verified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
