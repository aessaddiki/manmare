import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = ({ about }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <section id="about">
      <h2 class="about-title">Acerca de mí</h2>
        <p>
          Especialista en sistemas críticos y tecnología, con experiencia en sanidad, seguridad y emergencias. He participado en proyectos de alto impacto: radiocomunicaciones para organismos estatales, sistemas hospitalarios y optimización de infraestructuras IT, mejorando la fiabilidad de los servicios y reduciendo incidencias críticas. Me definen la fiabilidad, la resolución de problemas y la capacidad de adaptarme rápido para aportar valor donde la tecnología protege vidas y mejora procesos.
        </p>
      </section>
    </motion.div>
  );
};

export default About;
