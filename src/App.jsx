import React from 'react';
import './App.css';
import CustomCursor from './components/CustomCursor';
import TopNav from './components/TopNav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Languages from './components/Languages';
import { motion } from 'framer-motion';
import data from './data.json';

const App = () => {
  const projects = data.projects;
  const skills = data.skills;
  const languages = data.languages;
  const education = data.education;
  const certifications = data.certifications;
  const personal = data.personal;

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="app-container">
      <CustomCursor />
      <TopNav />
      <Hero personal={personal} />
      <div className="app-content">
        <div className="container">
            <About />
            <Experience />

            <motion.div
              id="projects"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <Projects projects={projects} />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <Skills skills={skills} />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <Languages languages={languages} />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <Education education={education} />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <Certifications certifications={certifications} />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
            >
              <Contact personal={personal} />
            </motion.div>

            <Footer personal={personal} />
        </div>
      </div>
    </div>
  );
};

export default App;
