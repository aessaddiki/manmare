import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import data from '../data.json';

const Projects = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
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
    </motion.section>
  );
};

export default Projects;
