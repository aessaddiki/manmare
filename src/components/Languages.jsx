import React from 'react';
import data from '../data.json';
import './Languages.css';

const Languages = () => {
  return (
    <section id="languages">
      <h2>Idiomas</h2>
      <ul className="languages-list">
        {data.languages.map((language, index) => (
          <li key={index}>
            <span className="language-name">{language.name}</span> - <span className="language-level">{language.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
