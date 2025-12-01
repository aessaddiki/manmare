import React from 'react';

const ProjectsGrid = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1.',
      image: '/project1.png'
    },
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
