import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa';  // React Icons for tech logos
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </div>
        <div className="skill">
          <FaCss3Alt className="skill-icon" />
          <p>CSS3</p>
        </div>
        <div className="skill">
          <FaBootstrap className="skill-icon" />
          <p>Bootstrap</p>
        </div>
        <div className="skill">
          <FaJs className="skill-icon" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <FaReact className="skill-icon" />
          <p>React.js</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
