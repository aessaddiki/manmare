import React from 'react';
import data from '../data.json';
import './Certifications.css'; // Importamos el nuevo CSS

const Certifications = () => {
  return (
    <section id="certifications">
      <h2>Certificaciones y Formación</h2>
      <div className="certifications-list">
        {data.certifications.map((certification, index) => (
          <div key={index} className="certification-item">
            {certification.titulo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
