import React from 'react';
import './Contact.css';
import data from '../data.json';

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contacto</h2>

      <p className="contact-description">
        Puedes contactarme a través de mi email, perfil de LinkedIn o usando el formulario a continuación.
      </p>

      <div className="contact-links">
        <a href={`mailto:${data.personal.email}`}>Email</a>
        <a
          href={data.personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href={data.personal.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href={data.personal.cv}
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar CV
        </a>
      </div>

      <form name="contact" className="contact-form" netlify>
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Tu Nombre"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu Email"
          required
        />
        <textarea
          name="message"
          placeholder="Tu Mensaje"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
