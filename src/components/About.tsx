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
        <div className="about-content fade-in">
          <div className="about-text">
            <div className="about-header">
              <p className="about-subtitle-small">ABOUT WORTHSOFTWARE</p>
              <h2 className="about-title">About WorthSoftware</h2>
              <p className="about-description">
                WorthSoftware is a leading technology company dedicated to creating innovative 
                software solutions that drive business growth. With years of experience and a 
                passionate team of experts, we transform ideas into powerful digital experiences 
                that make a difference.
              </p>
            </div>
          </div>
          
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
