import React from 'react';
import data from '../data.json';
import './Skills.css'; // Importamos el nuevo CSS

const Skills = () => {
  return (
    <section id="skills">
      <h2>Principales aptitudes</h2>
      <ul className="skills-list">
        {data.skills.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
