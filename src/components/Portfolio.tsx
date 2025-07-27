import React from 'react'
import './Portfolio.css'
import placeholderImg from '../assets/placeholder.png'

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern shopping platform with advanced features',
      image: placeholderImg
    },
    {
      id: 2,
      title: 'Healthcare Management System',
      description: 'Comprehensive patient and clinic management solution',
      image: placeholderImg
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description: 'Real-time analytics and reporting dashboard',
      image: placeholderImg
    },
    {
      id: 4,
      title: 'Learning Management System',
      description: 'Interactive online education platform',
      image: placeholderImg
    },
    {
      id: 5,
      title: 'Project Management Tool',
      description: 'Collaborative workspace for team productivity',
      image: placeholderImg
    },
    {
      id: 6,
      title: 'Restaurant POS System',
      description: 'Complete point-of-sale solution for restaurants',
      image: placeholderImg
    },
    {
      id: 7,
      title: 'Real Estate Portal',
      description: 'Property listing and management platform',
      image: placeholderImg
    },
    {
      id: 8,
      title: 'Inventory Management',
      description: 'Smart warehouse and inventory tracking system',
      image: placeholderImg
    }
  ]

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="portfolio-header fade-in text-center">
          <h2 className="heading-secondary">Our Work</h2>
          <p className="portfolio-subtitle">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals
          </p>
        </div>
        
        <div className="portfolio-grid fade-in">
          {portfolioItems.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <a href="#" className="btn btn-secondary">View Case Study</a>
                </div>
              </div>
              <div className="portfolio-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
