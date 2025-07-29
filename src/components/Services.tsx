import React from 'react'
import './Services.css'

const Services: React.FC = () => {
  const services = [
    {
      title: 'Web Design and Development',
      icon: '🌐',
      description: 'Custom web solutions including responsive websites, web applications, and e-commerce platforms built with modern technologies.',
      featured: true
    },
    {
      title: 'Mobile Application Development',
      icon: '📱',
      description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and functionality.',
      featured: false
    },
    {
      title: 'AI Automations',
      icon: '🤖',
      description: 'Intelligent automation solutions using artificial intelligence to streamline business processes and increase efficiency.',
      featured: false
    },
    {
      title: 'POS/ERP Systems',
      icon: '💼',
      description: 'Comprehensive point-of-sale and enterprise resource planning systems to manage your business operations effectively.',
      featured: false
    },
    {
      title: 'Maintenance & Support',
      icon: '🔧',
      description: 'Ongoing technical support, system maintenance, and updates to keep your applications running smoothly and efficiently.',
      featured: false
    }
  ]

  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="services-grid fade-in">
          <div className="services-header">
            <h2 className="heading-secondary">Our Services</h2>
            <p className="services-subtitle">
              We offer comprehensive technology solutions to help your business grow and succeed in the digital world.
            </p>
            <button className="cta-button">Let's talk</button>
          </div>
          
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.featured ? 'featured' : ''}`}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <button className="read-more-btn">Read more</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
