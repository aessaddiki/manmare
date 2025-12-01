import React, { useEffect } from 'react';
import './Hero.css';

export default function Hero({ personal }) {
  useEffect(() => {
    const texts = ["Hola, soy Abderrahman", "Bienvenido a mi porfolio"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 120; 
    const deletingSpeed = 60;
    const delayBetweenTexts = 2000;

    const element = document.getElementById('welcome-text');
    const cursor = document.querySelector('.cursor');

    if (!element || !cursor) return;

    function type() {
      const currentText = texts[textIndex];
      let newText;

      if (isDeleting) {
        newText = currentText.substring(0, charIndex - 1);
        charIndex--;
      } else {
        newText = currentText.substring(0, charIndex + 1);
        charIndex++;
      }

      element.textContent = newText;

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => isDeleting = true, delayBetweenTexts);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
      
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      setTimeout(type, speed);
    }

    setTimeout(type, 250);

  }, []);

  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-welcome">
      <img src={personal.foto} alt={personal.nombre} className="hero-avatar" />
      <h1 className="hero-line">
        <span id="welcome-text"></span>
        <span className="cursor">|</span>
      </h1>
      <div className="hero-buttons-wrapper">
        <div className="hero-button-row">
          <button onClick={() => handleScroll('about')} className="hero-cta">
            Acerca de mí
          </button>
          <button onClick={() => handleScroll('experience')} className="hero-cta">
            Explorar mi trabajo
          </button>
          <button onClick={() => handleScroll('projects')} className="hero-cta">
            Proyectos
          </button>
        </div>
        <div className="hero-button-row">
          <button onClick={() => handleScroll('skills')} className="hero-cta">
            Principales aptitudes
          </button>
          <button onClick={() => handleScroll('languages')} className="hero-cta">
            Idiomas
          </button>
          <button onClick={() => handleScroll('certifications')} className="hero-cta">
            Certificaciones y Formación
          </button>
        </div>
      </div>
    </section>
  );
}
