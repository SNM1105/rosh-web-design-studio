import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // EmailJS configuration
    const serviceID = 'service_q8fsa0w';
    const templateID = 'template_y0awxqa';
    const publicKey = 'NOkC1kKWznlpqzAT8';

    // Template parameters - these must match your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      reply_to: formData.email,
      message: formData.message
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      })
      .catch((error) => {
        console.error('EmailJS error:', error);
        console.error('Error details:', error.text);
        setStatus('error');
        setTimeout(() => setStatus(''), 5000);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <p className="section-subtitle">Let's work together on your next project</p>
      
      {status === 'success' && (
        <div className="popup-overlay" onClick={() => setStatus('')}>
          <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
            <div className="popup-icon">
              <svg width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="rgba(212, 165, 116, 0.2)" stroke="#D4A574" strokeWidth="2"/>
                <path d="M14 24L20 30L34 16" stroke="#D4A574" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully.</p>
            <p className="popup-subtitle">I'll get back to you as soon as possible, usually within 24 hours.</p>
            <button className="btn btn-primary" onClick={() => setStatus('')}>
              Close
            </button>
          </div>
        </div>
      )}
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="info-icon">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="12" width="36" height="24" rx="2" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
                <path d="M6 14L24 26L42 14" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Email</h3>
            <p>simonmedalssy@gmail.com</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="18" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
                <path d="M24 12V24L32 28" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="24" cy="6" r="1.5" fill="#D4A574"/>
                <circle cx="24" cy="42" r="1.5" fill="#D4A574"/>
                <circle cx="6" cy="24" r="1.5" fill="#D4A574"/>
                <circle cx="42" cy="24" r="1.5" fill="#D4A574"/>
              </svg>
            </div>
            <h3>Response Time</h3>
            <p>Within 24 hours</p>
          </div>
          
          <div className="info-card">
            <div className="info-icon">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 6C16 6 10 12 10 20C10 30 24 42 24 42C24 42 38 30 38 20C38 12 32 6 24 6Z" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)" strokeLinejoin="round"/>
                <circle cx="24" cy="20" r="5" stroke="#D4A574" strokeWidth="2" fill="#D4A574"/>
              </svg>
            </div>
            <h3>Available</h3>
            <p>Mon - Fri, 9AM - 6PM</p>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Tell me about your project..."
            />
          </div>
          
          {status === 'sending' && <p className="status-message sending">Sending message...</p>}
          {status === 'error' && <p className="status-message error">Failed to send message. Please email me directly at simonmedalssy@gmail.com</p>}
          
          <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
