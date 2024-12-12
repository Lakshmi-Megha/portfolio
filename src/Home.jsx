import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';
import profileImage from './image 5.jpg'; // Import your image

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        {/* Profile Image with Animation */}
        <motion.div
          className="home-image-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={profileImage} alt="Lakshmi HS" className="profile-image" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="home-name">Hi, I'm <span>Lakshmi HS</span></h1>
          <p className="home-title">Frontend Developer</p>
        </motion.div>

        <motion.div
          className="home-thought"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <p>
            "A Frontend Developer is a bridge between design and functionality, making ideas interactive and user-friendly."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
