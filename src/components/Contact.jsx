import React from 'react';
import './Contact.css';
import data from '../data.json';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>
      <p>Puedes contactarme a través de mi email, perfil de LinkedIn o usando el formulario a continuación.</p>
      <div className="contact-links">
        <a href={`mailto:${data.personal.email}`} className="btn-contact">Email</a>
        <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" className="btn-contact">LinkedIn</a>
        <a href={data.personal.github} target="_blank" rel="noopener noreferrer" className="btn-contact">GitHub</a>
        <a href={data.personal.cv} target="_blank" rel="noopener noreferrer" className="btn-contact">Descargar CV</a>
      </div>
      <form name="contact" className="contact-form" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-grid">
          <input type="text" id="name" name="name" placeholder="Tu Nombre" required />
          <input type="email" id="email" name="email" placeholder="Tu Email" required />
        </div>
        <textarea id="message" name="message" placeholder="Tu Mensaje" required></textarea>
        <button type="submit" className="btn-submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
