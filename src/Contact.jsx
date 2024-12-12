import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false); // Reset the form after displaying the message
      e.target.reset(); // Clear the form fields
    }, 2000); // Delay for 2 seconds
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact
      </motion.h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="form-input"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="form-input"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="form-textarea"
          ></textarea>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
        {submitted && (
          <motion.p
            className="success-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Submitted Successfully!
          </motion.p>
        )}
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/lakshmi-h-s-6739412a4" target="_blank" rel="noopener noreferrer">
          <img src="https://static-00.iconduck.com/assets.00/linkedin-option-icon-256x256-ans0y71t.png" alt="LinkedIn" className="social-icon" />
        </a>
        <a href="mailto:lakshmimegha43@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src="https://icones.pro/wp-content/uploads/2021/02/icone-de-courrier-electronique-vert.png" alt="Email" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/lakshmi.megha4" target="_blank" rel="noopener noreferrer">
          <img src="https://dreamfoundry.org/wp-content/uploads/2018/12/instagram-logo-png-transparent-background-300x300.png" alt="Instagram" className="social-icon" />
        </a>
      </div>
    </section>
  );
};

export default ContactForm;
