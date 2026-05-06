import React from 'react'
import { Link } from 'react-router-dom'
import './Portfolio.css'
import { projects } from '../data/projects'

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="section section-shell">
      <div className="container">
        <div className="portfolio-header fade-rise text-center">
          <h2 className="heading-secondary">Our Work</h2>
          <p className="portfolio-subtitle">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((item, index) => (
            <div key={item.id} className={`portfolio-item ${index % 3 === 0 ? 'fade-rise' : index % 3 === 1 ? 'fade-rise-delay' : 'fade-rise-delay-2'}`}>
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
