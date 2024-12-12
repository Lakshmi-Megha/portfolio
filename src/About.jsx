import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Hello! I'm Lakshmi, a frontend developer with a passion for creating visually appealing, responsive, and user-friendly web pages. I’m particularly drawn to building dynamic and interactive user interfaces that provide seamless experiences across devices.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I am also proficient in SQL and have experience working with databases to manage and query data efficiently. Over the years, I've built several web applications, including some that integrate backend functionality and utilize full-stack technologies.
        </motion.p>

        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          While I’m still improving my skills, I am confident in my ability to build modern, responsive websites using popular frameworks and libraries such as Bootstrap, Material UI, and Redux. I believe in continuous learning, and I enjoy keeping up-to-date with new trends and technologies in web development.
        </motion.p>

                <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          I am always eager to improve and expand my knowledge. I want to deepen my expertise in frontend development, including exploring advanced React concepts, as well as gaining more experience with state management and optimization techniques.
        </motion.p>

        
      </div>
    </section>
  );
};

export default About;
