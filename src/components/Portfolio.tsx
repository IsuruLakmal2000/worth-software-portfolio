import React from 'react'
import './Portfolio.css'
import restauranatImg from '../assets/portfolio/hungrypuppet.PNG'
import outsourceImg from '../assets/portfolio/talentphere.PNG'
import vehicleRentingImg from '../assets/portfolio/southroadtrips.PNG'
import organicquestImg from '../assets/portfolio/organic-quest.PNG'
import dishupImg from '../assets/portfolio/dishup.PNG'
import focusfarmImg from '../assets/portfolio/focusfarm.PNG'

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Restaurant Management System',
      description: 'Restaurant Management System with advanced features',
      image: restauranatImg
    },
    {
      id: 2,
      title: 'Talents Outsource Platform',
      description: 'Comprehensive talent and client management solution',
      image: outsourceImg
    },
    {
      id: 3,
      title: 'Vehicle Renting Website',
      description: 'System with features to manage rentings and tours',
      image: vehicleRentingImg
    },
    {
      id: 4,
      title: '  Organic Quest – Online Education Platform',
      description: 'A comprehensive and engaging online education solution designed to make learning interactive, structured, and effective',
      image: organicquestImg
    },
    {
      id: 5,
      title: 'Dishup – Smart Restaurant Menu Scan App',
      description: 'Comprehensive digital menu scanning and contactless ordering solution',
      image: dishupImg
    },
    {
      id: 6,
      title: 'Focusfarm – Personal Goal Focusing App',
      description: 'A smart and motivating solution to set goals, stay focused, and track personal progress efficiently',
      image: focusfarmImg
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
