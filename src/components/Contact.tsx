import React, { useState } from 'react'
import './Contact.css'

interface FormData {
  name: string
  email: string
  message: string
}

const ISURU_EMAIL = 'isurulakmal200013@gmail.com'
const KAVINDU_EMAIL = 'kavinduavishka0118@gmail.com'
const WHATSAPP_NUMBER = '94785522049' // International format without +

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

    const subject = encodeURIComponent(`Message from ${formData.name} via WorthSoftware Portfolio`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )

    // Open default mail client with both recipients and pre-filled content
    window.location.href = `mailto:${ISURU_EMAIL},${KAVINDU_EMAIL}?subject=${subject}&body=${body}`

    setFormData({ name: '', email: '', message: '' })
  }

  const whatsappMessage = encodeURIComponent('Hello! I found you via WorthSoftware Portfolio and would like to discuss a project.')

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
                {/* Email – Isuru */}
                <div className="contact-item">
                  <div className="contact-icon">✉</div>
                  <div className="contact-text">
                    <p className="contact-label">E-mail (Isuru)</p>
                    <a
                      className="contact-value contact-link"
                      href={`mailto:${ISURU_EMAIL}`}
                    >
                      {ISURU_EMAIL}
                    </a>
                  </div>
                </div>

                {/* Email – Kavindu */}
                <div className="contact-item">
                  <div className="contact-icon">✉</div>
                  <div className="contact-text">
                    <p className="contact-label">E-mail (Kavindu)</p>
                    <a
                      className="contact-value contact-link"
                      href={`mailto:${KAVINDU_EMAIL}`}
                    >
                      {KAVINDU_EMAIL}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="contact-item">
                  <div className="contact-icon contact-icon-whatsapp">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="2rem" height="2rem">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="contact-text">
                    <p className="contact-label">WhatsApp</p>
                    <a
                      className="contact-value contact-link contact-whatsapp-link contact-number"
                      href={`https://wa.me/94760479413?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +94 76 047 9413
                    </a>
                    <a
                      className="contact-value contact-link contact-whatsapp-link contact-number"
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +94 78 552 2049
                    </a>
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
