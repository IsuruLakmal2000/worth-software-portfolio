import React from 'react'
import './Services.css'

const Services: React.FC = () => {
  const services = [
    {
      title: 'Software Development',
      icon: '💻',
      description: 'Custom software solutions tailored to your business needs, from web applications to enterprise systems.'
    },
    {
      title: 'UI/UX Design',
      icon: '🎨',
      description: 'Beautiful, intuitive user interfaces and experiences that engage your customers and drive conversions.'
    },
    {
      title: 'Outsourced HR',
      icon: '👥',
      description: 'Comprehensive HR solutions including recruitment, onboarding, and employee management services.'
    },
    {
      title: 'Tech Consulting',
      icon: '🚀',
      description: 'Strategic technology consulting to help you make informed decisions and accelerate digital transformation.'
    }
  ]

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="services-header fade-in text-center">
          <h2 className="heading-secondary">What We Do</h2>
          <p className="services-subtitle">
            We provide comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </div>
        
        <div className="services-grid fade-in">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
