import React from 'react';
import data from '../data.json';
import './Projects.css'; // Importamos el nuevo CSS

const Projects = () => {
  return (
    <section id="projects">
      <h2>Proyectos y Logros</h2>
      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.nombre}</h3>
            <p className="project-subtitle">{project.subtitulo}</p>
            <p>{project.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
