import React from 'react';
import projects from '../data/projects.json';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.repo} target="_blank" rel="noopener noreferrer">Repositorio</a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">Ver en vivo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
