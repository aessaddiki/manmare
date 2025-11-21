import React from 'react';
import socialLinks from '../data/footer.json';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
            <i className={link.icon}></i>
          </a>
        ))}
      </div>
      <div className="footer-credit">
        <p>Diseñado y construido por Abderrahman Essaddiki</p>
      </div>
    </footer>
  );
};

export default Footer;
