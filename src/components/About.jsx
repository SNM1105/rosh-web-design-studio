import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <p className="section-subtitle">Full-stack expertise for complete solutions</p>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Hi! I'm Simon. A Montreal-based web designer focused on Small and Medium sized businesses. 
            I'm a Vanier Micromedia graduate and Concordia Computation Arts student, 
            specializing in full-stack web development.
          </p>
          <p>
            From concept to deployment, I handle every aspect of web development—front-end 
            design, back-end logic, and everything in between. Clean code, modern design, 
            real results.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={5} suffix="+" duration={1500} />
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={3} suffix="" duration={1500} />
            </div>
            <div className="stat-label">Current Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={100} suffix="%" duration={1500} />
            </div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
        
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="8" width="40" height="32" rx="2" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
                <path d="M14 18L18 22L14 26M22 26H28" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="38" cy="12" r="2" fill="#D4A574"/>
              </svg>
            </div>
            <h3>Front-End</h3>
            <p>React, HTML5, CSS3, JavaScript, Responsive Designs, Mobile First</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="10" width="36" height="8" rx="1" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
                <rect x="6" y="22" width="36" height="8" rx="1" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
                <rect x="6" y="34" width="36" height="8" rx="1" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
                <circle cx="10" cy="14" r="1.5" fill="#D4A574"/>
                <circle cx="10" cy="26" r="1.5" fill="#D4A574"/>
                <circle cx="10" cy="38" r="1.5" fill="#D4A574"/>
                <path d="M35 14L38 14M35 26L38 26M35 38L38 38" stroke="#D4A574" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>Back-End</h3>
            <p>Node.js, API Integration, Databases</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 8C14 8 8 14 8 24C8 34 14 40 24 40C26.5 40 28 38.5 28 36C28 34.8 27.5 33.8 26.8 33C26.2 32.3 26 31.5 26 30.5C26 28.6 27.6 27 29.5 27H34C38.4 27 42 23.4 42 19C42 12.9 33.9 8 24 8Z" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
                <circle cx="15" cy="20" r="2.5" fill="#D4A574"/>
                <circle cx="22" cy="15" r="2.5" fill="#B8956A"/>
                <circle cx="30" cy="17" r="2.5" fill="#D4A574"/>
                <circle cx="18" cy="28" r="2.5" fill="#B8956A"/>
              </svg>
            </div>
            <h3>Design</h3>
            <p>UI & UX, Prototyping, Brand Identity</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 36V38C8 39.1 8.9 40 10 40H38C39.1 40 40 39.1 40 38V36" stroke="#D4A574" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 28V36M20 20V36M28 16V36M36 10V36" stroke="#D4A574" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M10 14L18 20L26 12L40 6" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="14" r="2" fill="#D4A574"/>
                <circle cx="18" cy="20" r="2" fill="#D4A574"/>
                <circle cx="26" cy="12" r="2" fill="#D4A574"/>
                <circle cx="40" cy="6" r="2" fill="#D4A574"/>
              </svg>
            </div>
            <h3>Performance</h3>
            <p>SEO, Speed Optimization, Security, Updates on Demand</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
