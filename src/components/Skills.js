import "./Skills.css";
import "./Responsive.css";
function Skills() {
const skills = [
  { name: 'C C++ Java Python', level: 80 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 85 },
  { name: 'React.js', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Express.js', level: 70 },
  { name: 'SQL', level: 80 },
  { name: 'MongoDB', level: 90 },
];


  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                {/* <span className="skill-icon">{skill.icon}</span> */}
                <h3>{skill.name}</h3>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-level">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;