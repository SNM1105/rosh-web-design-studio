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
      icon: '🌐'
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
      icon: '🛍️'
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
      icon: '📅'
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
      icon: '⚙️'
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
      icon: '🔒'
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
      icon: '🛡️'
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
