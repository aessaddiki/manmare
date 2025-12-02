import React from 'react';
import data from '../data.json';
import './About.css';

const About = () => {
  return (
    <section id="about">
      <h2>Acerca de mí</h2>
      <p>{data.about}</p>
    </section>
  );
};

export default About;
