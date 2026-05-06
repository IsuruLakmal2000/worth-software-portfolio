import React from 'react'
import './About.css'
import trustImg from '../assets/trust.jpg'
import innovationImg from '../assets/innovation1.jpg'
import clientsImg from '../assets/clients-first.jpg'

const About: React.FC = () => {
  const values = [
    {
      title: 'Reliability',
      description: 'We deliver consistent, dependable solutions that our clients can count on.',
      backgroundImage: trustImg
    },
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology to bring cutting-edge solutions.',
      backgroundImage: innovationImg
    },
    {
      title: 'Client-First',
      description: 'Every decision we make is focused on delivering value to our clients .',
      backgroundImage: clientsImg
    }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content fade-rise">
          <div className="about-text">
            <div className="about-header">
             
              <p className="about-subtitle-small">ABOUT WORTHSOFTWARE</p>
              <h2 className="about-title">Built for outcomes, not just features</h2>
              <p className="about-description">
                WorthSoftware partners with teams to design, build, and refine digital products.
                We combine strategy, design, and engineering to ship reliable software that
                supports measurable business outcomes.
              </p>
             
              <div className="about-divider"></div>
              <div className="about-points">
                <p className="about-point">
                  <span>Outcome-led planning</span>
                  We align scope, timelines, and success metrics before execution.
                </p>
                <p className="about-point">
                  <span>Quality-first delivery</span>
                  Clean architecture, secure practices, and performance built in from day one.
                </p>
                <p className="about-point">
                  <span>Long-term partnership</span>
                  We support iteration, scaling, and optimization after launch.
                </p>
              </div>
            </div>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => {
              const delayClass = index === 0 ? 'fade-rise-delay' : index === 1 ? 'fade-rise-delay-2' : 'fade-rise'
              const layoutClass = index === 0 ? 'value-card--tall' : ''

              return (
                <div key={index} className={`value-card ${layoutClass} ${delayClass}`.trim()}>
                  <div 
                    className="card-background"
                    style={{ backgroundImage: `url(${value.backgroundImage})` }}
                  ></div>
                  <div className="card-overlay"></div>
                  <div className="card-content">
                    <h3 className="value-title">{value.title}</h3>
                    <p className="value-description">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
