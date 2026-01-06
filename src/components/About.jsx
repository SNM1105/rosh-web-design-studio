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
            Montreal-based web designer focused on Small and Medium sized businesses. 
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
              <AnimatedCounter end={3} suffix="" duration={1500} />
            </div>
            <div className="stat-label">Current Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={2} suffix="" duration={1500} />
            </div>
            <div className="stat-label">Project Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={2} suffix="" duration={1500} />
            </div>
            <div className="stat-label">Happy Client</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">
              <AnimatedCounter end={5} suffix="+" duration={1500} />
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>
        
        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-icon">💻</div>
            <h3>Front-End</h3>
            <p>React, HTML5, CSS3, JavaScript, Responsive Design</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">⚡</div>
            <h3>Back-End</h3>
            <p>Node.js, APIs, Databases, Server Management</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">✨</div>
            <h3>Design</h3>
            <p>UI/UX, Prototyping, Brand Identity, User Experience</p>
          </div>
          
          <div className="skill-card">
            <div className="skill-icon">📈</div>
            <h3>Performance</h3>
            <p>SEO, Speed Optimization, Security, Testing</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
