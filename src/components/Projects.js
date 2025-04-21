import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 1" className="project-image" />
          <h3 className="project-title">Project 1</h3>
          <p className="project-description">This is a brief description of the project, the tech used, and its purpose.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
          <img src="https://via.placeholder.com/300" alt="Project 2" className="project-image" />
          <h3 className="project-title">Project 2</h3>
          <p className="project-description">This is a brief description of the project, the tech used, and its purpose.</p>
          <a href="#" className="project-link">View Project</a>
        </div>
        {/* Add more project cards here */}
      </div>
    </section>
  );
};

export default Projects;
