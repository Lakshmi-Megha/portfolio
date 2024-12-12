import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       Projects
      </motion.h2>
      <div className="project-box">
        <div className="project-image">
          <img
            src="https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg"
            alt="Health Centre Management System"
          />
        </div>
        <div className="project-description">
          <h3>Health Centre Management System</h3>
          <p>
            A web application developed to computerize the front office
            management of hospitals. This project focuses on user-friendliness,
            speed, simplicity, and cost-effectiveness. It efficiently manages
            patient and doctor details, allowing easy storage and retrieval.
          </p>
          <ul>
            <li><strong>Operating System:</strong> Windows 11</li>
            <li><strong>Language:</strong> HTML, PHP, JavaScript</li>
            <li><strong>Database:</strong> MySQL</li>
            <li><strong>Server:</strong> Apache Tomcat</li>
          </ul>
        </div>
      </div>

      <div className="project-box">
        <div className="project-image">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4kQ4v3jkng-n-CpT6k6g-w_Q9fA9VtcoRMA&s" alt="Lenskart Project" />
        </div>
        <div className="project-description">
          <h3>Lenskart</h3>
          <p>
            A web application developed to computerize the front office
            management of the Lenskart app. The main function of this app is to
            allow users to select lenses and glasses according to their
            preferences.
          </p>
          <ul>
            <li><strong>Language:</strong> HTML, CSS</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
