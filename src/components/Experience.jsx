import React from 'react';
import './Experience.css';
import { motion } from 'framer-motion';

const Experience = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section 
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <h2>Experiencia Profesional</h2>
      <div className="experience-timeline">
        <div className="timeline-item">
          <h3>Técnico de redes</h3>
          <p className="job-company">Ayuntamiento de Las Rozas de Madrid | oct 2025 - actualidad</p>
          <p>Servicio de soporte técnico presencial.</p>
        </div>
        <div className="timeline-item">
          <h3>Técnico de puesta en servicio de sistemas de RF / Mantenimiento de Comunicaciones Críticas</h3>
          <p className="job-company">Grupo Amper | may 2024 - ago 2025</p>
          <ul>
            <li>Soporte técnico 24/7 y mantenimiento de sistemas de comunicaciones críticas (Policía, SAMUR, 112, Guardia Civil).</li>
            <li>Instalación y configuración de TETRA, UHF, VHF y sistemas analógicos.</li>
            <li>Integración con plataformas GEMYC y Emersys; creación de paquetes EXE y scripts batch.</li>
            <li>Etiquetado técnico (Petrel) y monitorización GPS.</li>
            <li>Gestión y depuración de BBDD (Oracle, MariaDB, MySQL) usando SQL.</li>
          </ul>
          <div className="tags">
            <span className="tag">TETRA</span>
            <span className="tag">RF</span>
            <span className="tag">Microsoft Azure</span>
            <span className="tag">Motorola</span>
            <span className="tag">Oracle</span>
            <span className="tag">MySQL</span>
          </div>
        </div>
        <div className="timeline-item">
          <h3>Ingeniero de soporte de TI</h3>
          <p className="job-company">Cegid | ene 2023 - may 2024</p>
          <ul>
            <li>Administración de entornos Windows y Windows Server.</li>
            <li>Soporte e integración de PeopleNet y E-MIND, migración de dominios y scripting (PowerShell).</li>
            <li>Virtualización (VMware ESXi v7, VirtualBox, Hyper-V).</li>
            <li>Auditoría de logs y resolución de incidencias (100+ casos).</li>
          </ul>
          <div className="tags">
            <span className="tag">PowerShell</span>
            <span className="tag">VMware</span>
            <span className="tag">PeopleNet</span>
            <span className="tag">SQL</span>
            <span className="tag">Windows Server</span>
          </div>
        </div>
        <div className="timeline-item">
          <h3>Técnico en Administración de Sistemas Informáticos en Red</h3>
          <p className="job-company">HORUS HARDWARE, S.A. | mar 2021 - ene 2023</p>
          <ul>
            <li>Instalación y mantenimiento de servidores Windows y Linux (CentOS).</li>
            <li>Gestión de PostgreSQL, Apache, Mirth Connect y VPNs (Draytek).</li>
            <li>Soporte a aplicaciones clínicas y formación a usuarios.</li>
          </ul>
          <div className="tags">
            <span className="tag">Linux</span>
            <span className="tag">PostgreSQL</span>
            <span className="tag">Apache</span>
            <span className="tag">VPN</span>
          </div>
        </div>
        <div className="timeline-item">
          <h3>Fundador</h3>
          <p className="job-company">MANMUSICMAD | ene 2019 - ago 2024</p>
          <p>Dirección creativa, gestión de lanzamientos mensuales, marketing, contenidos y eventos.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
