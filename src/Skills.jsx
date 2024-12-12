import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import './Skills.css';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <motion.h2
        className="skills-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-container">
        <motion.div
          className="skill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" />
          <h3>HTML</h3>
          <p>I am an expert in HTML and I know how to create web pages using HTML. I enjoy creating pages with HTML, and it is very easy for beginners.</p>
        </motion.div>

        <motion.div
          className="skill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" />
          <h3>CSS</h3>
          <p>With CSS, I know how to create many responsive web designs. CSS allows me to create beautiful and responsive pages, which is both fun and challenging.</p>
        </motion.div>

        <motion.div
          className="skill"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" />
          <h3>JavaScript</h3>
          <p>JavaScript is my go-to language for making websites interactive. I know how to manipulate the DOM, create functions, and work with asynchronous operations using promises, async/await, and more.</p>
        </motion.div>

        <div className="skills-row">
          <motion.div
            className="skill"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
          >
            <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" />
            <h3>React.js</h3>
            <p>I am basic in React, and I know Bootstrap and Material UI for adding designs. I am familiar with React components, state, and props, and I am constantly improving my skills in React.</p>
          </motion.div>

          <motion.div
            className="skill"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <img src="https://img.icons8.com/color/48/000000/mysql.png" alt="SQL" />
            <h3>SQL</h3>
            <p>I am good at table creation, joins, and everything related to SQL. I know how to structure databases efficiently, write complex queries, and work with relational data.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
