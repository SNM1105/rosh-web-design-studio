import React from 'react';
import './Services.css';

function Services() {
  const pricingPlans = [
    {
      name: 'Business Website',
      price: '$1,800 – $3,000',
      description: 'Clinics, jewelers, service businesses',
      features: [
        '5–7 pages',
        'Mobile-first design',
        'CMS included',
        '2–3 week timeline'
      ],
      highlighted: false,
      icon: <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
        <path d="M24 6V42M6 24H42" stroke="#D4A574" strokeWidth="2"/>
        <ellipse cx="24" cy="24" rx="8" ry="18" stroke="#D4A574" strokeWidth="2" fill="none"/>
        <path d="M10 14C14 16 20 17 24 17C28 17 34 16 38 14M10 34C14 32 20 31 24 31C28 31 34 32 38 34" stroke="#D4A574" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      name: 'E-Commerce',
      price: '$4,000 – $6,000',
      description: 'Online stores, local retail',
      features: [
        'Online ordering',
        'Payment processing',
        'Product management',
        'Admin dashboard'
      ],
      highlighted: true,
      icon: <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 14L14 38H34L38 14H10Z" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)" strokeLinejoin="round"/>
        <path d="M14 14V10C14 8 16 6 18 6H30C32 6 34 8 34 10V14" stroke="#D4A574" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="42" r="2" fill="#D4A574"/>
        <circle cx="30" cy="42" r="2" fill="#D4A574"/>
        <path d="M18 22L22 26L30 18" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      name: 'Booking Platform',
      price: '$3,500 – $5,500',
      description: 'Mechanics, clinics, salons',
      features: [
        'Appointment booking',
        'Email confirmations',
        'Admin scheduling',
        'Payment optional'
      ],
      highlighted: false,
      icon: <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="10" width="32" height="32" rx="2" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
        <path d="M8 18H40" stroke="#D4A574" strokeWidth="2"/>
        <circle cx="18" cy="26" r="1.5" fill="#D4A574"/>
        <circle cx="24" cy="26" r="1.5" fill="#D4A574"/>
        <circle cx="30" cy="26" r="1.5" fill="#D4A574"/>
        <circle cx="18" cy="32" r="1.5" fill="#D4A574"/>
        <circle cx="24" cy="32" r="1.5" fill="#D4A574"/>
        <circle cx="30" cy="32" r="1.5" fill="#D4A574"/>
        <rect x="22" y="24" width="4" height="6" rx="1" fill="#D4A574"/>
      </svg>
    },
    {
      name: 'Custom Backend',
      price: '$7,500+',
      description: 'Complex business logic',
      features: [
        'Full custom development',
        'API integration',
        'Milestone-based',
        'Ongoing maintenance'
      ],
      highlighted: false,
      icon: <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="6" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
        <path d="M24 8V12M24 36V40M40 24H36M12 24H8M35.3 35.3L32.5 32.5M15.5 15.5L12.7 12.7M35.3 12.7L32.5 15.5M15.5 32.5L12.7 35.3" stroke="#D4A574" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="3" fill="#D4A574"/>
      </svg>
    }
  ];

  const hostingPlans = [
    {
      name: 'Basic Hosting',
      price: '$45/mo',
      features: [
        'Hosting included',
        'Backups',
        'Security updates',
        'Uptime monitoring'
      ],
      icon: <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="20" width="24" height="20" rx="2" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)"/>
        <path d="M16 20V14C16 9.6 19.6 6 24 6C28.4 6 32 9.6 32 14V20" stroke="#D4A574" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="24" cy="30" r="3" fill="#D4A574"/>
        <path d="M24 33V36" stroke="#D4A574" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      name: 'Commerce Hosting',
      price: '$80–150/mo',
      features: [
        'Everything in Basic',
        'Plugin updates',
        'Content changes',
        'Priority support'
      ],
      icon: <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 6L10 12V22C10 31 16 39 24 42C32 39 38 31 38 22V12L24 6Z" stroke="#D4A574" strokeWidth="2" fill="rgba(212, 165, 116, 0.1)" strokeLinejoin="round"/>
        <path d="M18 24L22 28L30 20" stroke="#D4A574" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];

  return (
    <section id="services" className="services">
      <h2>Services & Pricing</h2>
      <p className="section-subtitle">Transparent pricing for quality work</p>
      
      <div className="pricing-grid">
        {pricingPlans.map((plan, index) => (
          <div 
            key={index} 
            className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}
          >
            {plan.highlighted && <div className="popular-badge">Most Popular</div>}
            {plan.icon && <div className="plan-icon">{plan.icon}</div>}
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-price">{plan.price}<span className="cad-label"> CAD</span></div>
            <p className="plan-description">{plan.description}</p>
            <ul className="features-list">
              {plan.features.map((feature, i) => (
                <li key={i}>
                  <span className="checkmark">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              className={`btn ${plan.highlighted ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>

      <div className="hosting-section">
        <h3>Hosting & Maintenance</h3>
        <div className="hosting-grid">
          {hostingPlans.map((plan, index) => (
            <div key={index} className="hosting-card">
              <div className="plan-icon">{plan.icon}</div>
              <h4 className="plan-name">{plan.name}</h4>
              <div className="plan-price">{plan.price}</div>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
