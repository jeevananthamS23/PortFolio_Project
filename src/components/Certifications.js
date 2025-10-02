import "./Certifications.css";
import "./Responsive.css";
import img1 from "../Images/certificate1.jpg";
import img2 from "../Images/certificate2.png";
import img3 from "../Images/certificate3.png";
import img4 from "../Images/certificate4.jpg";
import img5 from "../Images/certificate5.jpg";
import img6 from "../Images/certificate6.png";

function Certifications() {
  const certifications = [
    {
      title: 'Mastering Data Structures & Algorithms Using C/C++',
      issuer: 'Udemy',
      date: 'July 2024',
      src: img1
    },
    {
      title: 'Problem Solving in Leetcode',
      issuer: 'Leetcode',
      date: 'Ongoing',
      src: img3
    },
    {
      title: 'Code LEE',
      issuer: '@SECE',
      date: 'SEP 2024',
      src: img4
    },
    {
      title: 'Java Programming',
      issuer: 'Udemy',
      date: 'December 2024',
      src: img5
    }
    ,
        {
      title: 'Mern Intern @ G-soft',
      issuer: 'G - SOFT',
      date: 'JAN 2025',
      src: img2
    },
    ,
    {
      title: 'Problem Solving in Skill Rack',
      issuer: 'Skill Rack',
      date: 'Ongoing',
      src: img6
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <h2 className="section-title">My Certifications & Achievements</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="cert-icon">
                <img src={cert.src} alt={cert.title} />
              </div>
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <span className="cert-date">{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
