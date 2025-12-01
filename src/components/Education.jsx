import React from 'react';
import data from '../data.json';
import './Education.css';

const Education = () => {
  return (
    <section id="education">
      <h2>Educación</h2>
      <div className="education-timeline">
        {data.education.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3>{item.titulo}</h3>
            <p className="item-institution">{item.institucion}</p>
            <p className="item-periodo">{item.periodo}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
