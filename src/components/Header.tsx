import React, { useState, useEffect } from 'react'
import './Header.css'
import worldImg from '../assets/world.png'

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
      <div
        className="header-world"
        style={{ backgroundImage: `url(${worldImg})` }}
        aria-hidden="true"
      ></div>
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
              Contact
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
          <div className="hero-inner fade-rise visible">
            <div className="hero-text-content">
              <p className="hero-subtitle fade-rise-delay visible">Welcome to WorthSoftware</p>
              <h1 className="hero-main-title">
                Building <span className="highlight">innovative solutions</span> for your business
              </h1>
              <p className="hero-description fade-rise-delay-2 visible">
                We create cutting-edge software solutions that drive growth and transform your digital presence.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary hero-cta">
                  Contact →
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
