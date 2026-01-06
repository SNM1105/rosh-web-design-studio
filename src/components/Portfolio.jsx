import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const projects = [
    {
      id: 1,
      title: 'Amsellem Butcher',
      description: 'E-commerce platform for ordering meats and prepared foods with delivery',
      image: '/amsellem-butcher.png',
      url: 'https://amsellem-butcher.vercel.app/',
      tags: ['React', 'HTML', 'CSS', 'Database']
    },
    {
      id: 2,
      title: 'SimpleTable RPG',
      description: 'A web-based tabletop RPG game with React, CSS, and AI integration.',
      image: '/Simpletable-RPG-Cover.png',
      url: 'https://simpletable-rpg.vercel.app/',
      tags: ['React', 'CSS', 'AI Integration', 'Web Game']
    },
    {
      id: 3,
      title: 'Your Project Here',
      description: 'Let\'s build something amazing together. Your site could be next!',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      url: '#contact',
      tags: ['Coming Soon'],
      isPlaceholder: true
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>My Work</h2>
      <p className="section-subtitle">Recent projects and case studies</p>
      
      <div className="portfolio-grid">
        {projects.map((project) => (
          <a 
            key={project.id}
            href={project.url}
            target={project.isPlaceholder ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className={`portfolio-card ${project.isPlaceholder ? 'placeholder-card' : ''}`}
            onClick={(e) => {
              if (project.isPlaceholder) {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  const headerOffset = 80;
                  const elementPosition = contactSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }
            }}
          >
            <div className="portfolio-image">
              <img src={project.image} alt={project.title} />
              <div className="portfolio-overlay">
                <span className="view-project">
                  {project.isPlaceholder ? 'Get Started →' : 'View Project →'}
                </span>
              </div>
            </div>
            <div className="portfolio-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="portfolio-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
