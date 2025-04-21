import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="contact-text">Feel free to reach out for collaborations or just a chat!</p>
      <div className="contact-details">
        <a href="rknalan2004@gmail.com" className="contact-link">Email Me</a>
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="www.linkedin.com/in/nalan-r-k-10112b303" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
