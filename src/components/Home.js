import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Jeeveanantham</span></h1>
        <p>Aspiring Data Scientist | Full Stack Developer</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
};

export default Home;
