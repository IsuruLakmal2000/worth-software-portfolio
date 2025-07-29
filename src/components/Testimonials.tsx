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
      quote: 'WorthSoftware delivered an exceptional mobile app that transformed our customer engagement. Their attention to detail and innovative approach exceeded our expectations.',
      image: placeholderImg
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO',
      company: 'DataFlow Systems',
      quote: 'The AI automation solutions provided by WorthSoftware streamlined our operations significantly. Professional team with outstanding technical expertise.',
      image: placeholderImg
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Logistics Inc',
      quote: 'Their POS system revolutionized our retail operations. Excellent support and maintenance services keep everything running smoothly.',
      image: placeholderImg
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Founder',
      company: 'StartupHub',
      quote: 'Outstanding web development services. They created a beautiful, responsive website that perfectly represents our brand and drives conversions.',
      image: placeholderImg
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'Digital Solutions Co',
      quote: 'The web application they built for us is fast, intuitive, and exactly what we needed. Great communication throughout the project.',
      image: placeholderImg
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Store Manager',
      company: 'Retail Plus',
      quote: 'Their POS system made our daily operations so much easier. The training and ongoing support have been exceptional.',
      image: placeholderImg
    }
  ]

  return (
    <section id="testimonials" className="section section-alt">
      <div className="container">
        <div className="testimonials-header fade-in text-center">
          <p className="testimonials-subtitle-small">Rating & Reviews</p>
          <h2 className="heading-primary">Trusted by people</h2>
        </div>
        
        <div className="testimonials-cards-container fade-in">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className={`testimonial-card testimonial-card-${index + 1}`}>
              <div className="testimonial-stars">
                {'★★★★★'}
              </div>
              <div className="testimonial-quote">
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <p className="author-name">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
