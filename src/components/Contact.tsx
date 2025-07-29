import React, { useState } from 'react'
import './Contact.css'

interface FormData {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder for form submission
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-content fade-in">
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-header">
                <p className="contact-subtitle-small">WE'RE HERE TO HELP YOU</p>
                <h2 className="contact-title">Discuss Your Software Solution Needs</h2>
                <p className="contact-description">
                  Are you looking for top-quality software solutions tailored to your needs? Reach out to us.
                </p>
              </div>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">✉</div>
                  <div className="contact-text">
                    <p className="contact-label">E-mail</p>
                    <p className="contact-value">worthsoftware@gmail.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">☎</div>
                  <div className="contact-text">
                    <p className="contact-label">Phone number</p>
                    <p className="contact-value">+94 - 123 - 456789</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-form-container">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="John Smith"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="john@email.com"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    placeholder="Type your message..."
                    rows={6}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn contact-submit">
                  <span>Get a Solution</span>
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
