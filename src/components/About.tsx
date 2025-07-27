import React from 'react'
import './About.css'
import placeholderImg from '../assets/placeholder.png'

const About: React.FC = () => {
  const values = [
    {
      title: 'Reliability',
      description: 'We deliver consistent, dependable solutions that our clients can count on.'
    },
    {
      title: 'Innovation',
      description: 'We stay at the forefront of technology to bring cutting-edge solutions.'
    },
    {
      title: 'Client-First',
      description: 'Every decision we make is focused on delivering value to our clients.'
    }
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content fade-in">
          <div className="about-text">
            <h2 className="heading-secondary">About WorthSoftware</h2>
            <p className="about-description">
              WorthSoftware is a leading technology company dedicated to creating innovative 
              software solutions that drive business growth. With years of experience and a 
              passionate team of experts, we transform ideas into powerful digital experiences 
              that make a difference.
            </p>
            
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-image">
            <img src={placeholderImg} alt="WorthSoftware Team" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
