import React, { useState, useEffect } from 'react'
import './Header.css'
import placeholderImg from '../assets/placeholder.png'

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation items
  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  // Professional avatar data with dynamic positioning
  const avatars = [
    { id: 1, name: 'CEO', image: placeholderImg, size: 'large', position: 'top-left' },
    { id: 2, name: 'CTO', image: placeholderImg, size: 'medium', position: 'top-center' },
    { id: 3, name: 'Designer', image: placeholderImg, size: 'small', position: 'top-right' },
    { id: 4, name: 'Developer', image: placeholderImg, size: 'medium', position: 'middle-left' },
    { id: 5, name: 'Manager', image: placeholderImg, size: 'small', position: 'middle-center' },
    { id: 6, name: 'Analyst', image: placeholderImg, size: 'large', position: 'middle-right' },
    { id: 7, name: 'Consultant', image: placeholderImg, size: 'medium', position: 'bottom-left' },
    { id: 8, name: 'Director', image: placeholderImg, size: 'small', position: 'bottom-center' },
    { id: 9, name: 'Lead', image: placeholderImg, size: 'medium', position: 'bottom-right' },
    { id: 10, name: 'Specialist', image: placeholderImg, size: 'small', position: 'floating-1' },
    { id: 11, name: 'Expert', image: placeholderImg, size: 'small', position: 'floating-2' },
    { id: 12, name: 'Advisor', image: placeholderImg, size: 'medium', position: 'floating-3' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header id="home" className="header-section">
      {/* Navigation Bar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-brand">
            <h2 className="brand-logo">
              <span className="brand-worth">Worth</span>
              <span className="brand-software">Software</span>
            </h2>
          </div>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <a 
                  href={item.href} 
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary nav-cta">
              Get Started
            </a>
          </div>

          <div 
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="container">
          <div className="hero-inner fade-in">
            <div className="avatars-container">
              {avatars.map((avatar) => (
                <div 
                  key={avatar.id} 
                  className={`avatar-card ${avatar.size} ${avatar.position}`}
                >
                  <img src={avatar.image} alt={avatar.name} />
                </div>
              ))}
            </div>
            
            <div className="hero-text-content">
              <p className="hero-subtitle">Testimonials</p>
              <h1 className="hero-main-title">
                We Elevate Your Business to <span className="highlight">Extraordinary Heights</span>
              </h1>
              <p className="hero-description">
                Discover how industry leaders trust WorthSoftware to transform their vision into powerful digital solutions that drive unprecedented growth.
              </p>
              <div className="hero-actions">
                <a href="#testimonials" className="btn btn-primary hero-cta">
                  Read Success Stories →
                </a>
                <a href="#portfolio" className="btn btn-secondary hero-cta-secondary">
                  View Our Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  )
}

export default Header
