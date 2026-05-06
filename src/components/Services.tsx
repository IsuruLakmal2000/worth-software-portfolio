import React from 'react'
import './Services.css'
import internetIcon from '../assets/icons/internet.png'
import mobileIcon from '../assets/icons/cell-phone.png'
import automationIcon from '../assets/icons/automation.png'
import erpIcon from '../assets/icons/computer-settings.png'
import desktopIcon from '../assets/icons/laptop.png'

interface ServiceItem {
  title: string
  icon: {
    src: string
    alt: string
  }
  description: string
  featured: boolean
}

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: 'Web Design and Development',
      icon: {
        src: internetIcon,
        alt: 'Globe icon'
      },
      description: 'Custom web solutions including responsive websites, web applications, and e-commerce platforms built with modern technologies.',
      featured: true
    },
    {
      title: 'Mobile Application Development',
      icon: {
        src: mobileIcon,
        alt: 'Mobile phone icon'
      },
      description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences and functionality.',
      featured: false
    },
    {
      title: 'AI Automations',
      icon: {
        src: automationIcon,
        alt: 'Automation icon'
      },
      description: 'Intelligent automation solutions using artificial intelligence to streamline business processes and increase efficiency.',
      featured: false
    },
    {
      title: 'POS/ERP Systems',
      icon: {
        src: erpIcon,
        alt: 'Settings icon'
      },
      description: 'Comprehensive point-of-sale and enterprise resource planning systems to manage your business operations effectively.',
      featured: false
    },
    {
      title: 'Desktop Application Development',
      icon: {
        src: desktopIcon,
        alt: 'Laptop icon'
      },
      description: 'Custom desktop applications tailored to your business needs, delivering high performance, security, and seamless user experiences across platforms.',
      featured: false
    }
  ]

  return (
    <section id="services" className="section section-alt section-shell">
      <div className="container">
        <div className="services-grid">
          <div className="services-header fade-rise">
            <h2 className="heading-secondary">Our Services</h2>
            <p className="services-subtitle">
              We offer comprehensive technology solutions to help your business grow and succeed in the digital world.
            </p>
            <button className="cta-button">Let's talk</button>
          </div>
          
          {services.map((service, index) => (
            <div key={index} className={`service-card ${service.featured ? 'featured' : ''} ${index % 3 === 0 ? 'fade-rise' : index % 3 === 1 ? 'fade-rise-delay' : 'fade-rise-delay-2'}`}>
              <div className="service-icon">
                <img src={service.icon.src} alt={service.icon.alt} />
              </div>
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
