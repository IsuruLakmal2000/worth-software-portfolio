import React from 'react'
import './Testimonials.css'
import placeholderImg from '../assets/placeholder.png'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  quote: string
  image: string
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'TechCorp Solutions',
      quote: 'WorthSoftware transformed our business with their innovative approach. Their team delivered beyond our expectations and helped us achieve remarkable growth.',
      image: placeholderImg
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Systems',
      quote: 'The technical expertise and professionalism of WorthSoftware is unmatched. They delivered a complex project on time and within budget.',
      image: placeholderImg
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Logistics Inc',
      quote: 'Working with WorthSoftware was a game-changer for our operations. Their solutions streamlined our processes and improved efficiency dramatically.',
      image: placeholderImg
    }
  ]

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <div className="testimonials-header fade-in text-center">
          <h2 className="heading-secondary">What Our Clients Say</h2>
          <p className="testimonials-subtitle">
            Don't just take our word for it - hear from the businesses we've helped succeed
          </p>
        </div>
        
        <div className="testimonials-grid fade-in">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote">
                <span className="quote-mark">"</span>
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
