import React from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'
import { projects } from '../data/projects'

const Portfolio: React.FC = () => {
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
          {projects.map((item) => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  {/* Updated button to white text and Link component */}
                  <Link to={`/project/${item.id}`} className="btn btn-secondary btn-view-case">
                    View Case Study
                  </Link>
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
