import React from "react";
import "./ProductLifecycle.css";

export interface ProductLifecycleProps {}

const ProductLifecycle: React.FC<ProductLifecycleProps> = () => {
  const stages = [
    {
      number: "01",
      title: "Strategy",
      description: "Market Research & Planning",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c.73 0 1.44.09 2.12.26" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 4h5v5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 4l-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "02", 
      title: "Design",
      description: "UX/UI & System Architecture",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "03",
      title: "Development",
      description: "Code Implementation & Testing",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <polyline points="16,18 22,12 16,6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <polyline points="8,6 2,12 8,18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Testing & Bug Resolution",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "05",
      title: "Launch",
      description: "Deployment & Market Entry",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 15l8.5-8.5a2.83 2.83 0 0 0-4-4L8 11l4 4z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 17l-5 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12l4 4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      number: "06",
      title: "Optimize",
      description: "Analytics & Continuous Improvement",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="20" x2="12" y2="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="6" y1="20" x2="6" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  const stats = [
    { number: "99%", label: "Project Success Rate" },
    { number: "24/7", label: "Support Available" },
    { number: "10+", label: "Products Launched" },
    { number: "10+", label: "Happy Clients" }
  ];

  return (
    <section className="section product-lifecycle" id="product-lifecycle">
      <div className="container">
        <div className="lifecycle-header">
          <h2 className="section-title">Crafted by Talent, Perfected in Services</h2>
          <p className="section-subtitle">
            Guiding Your Product from Vision to Victory. At WorthSoftware, every product's journey is shaped by expertise, innovation, and a deep understanding of your goals.
          </p>
        </div>
        
        <div className="lifecycle-infographic">
          <div className="lifecycle-timeline">
            {stages.map((stage, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <span className="marker-number">{stage.number}</span>
                </div>
                <div className="timeline-content">
                  <div className="stage-icon-wrapper">
                    <div className="stage-icon">{stage.icon}</div>
                  </div>
                  <div className="stage-details">
                    <h3 className="stage-title">{stage.title}</h3>
                    <p className="stage-description">{stage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lifecycle-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductLifecycle;
