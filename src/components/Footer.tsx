import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">WorthSoftware</h3>
            <p className="footer-description">
              Building innovative software solutions that drive business growth and success.
            </p>
          </div>
          
          <div className="footer-social">
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <span className="social-icon">💼</span>
                LinkedIn
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <span className="social-icon">🐦</span>
                Twitter
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} WorthSoftware. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
