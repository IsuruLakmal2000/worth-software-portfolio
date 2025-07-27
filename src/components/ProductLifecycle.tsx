import React from 'react';
import './ProductLifecycle.css';

interface LifecycleStage {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const ProductLifecycle: React.FC = () => {
  const lifecycleStages: LifecycleStage[] = [
    {
      id: 1,
      title: "Discovery & Planning",
      description: "Understanding requirements, market research, and strategic planning",
      icon: "🖥️"
    },
    {
      id: 2,
      title: "Design & Architecture",
      description: "UI/UX design, system architecture, and technical specifications",
      icon: "🚀"
    },
    {
      id: 3,
      title: "Development",
      description: "Agile development with continuous integration and code reviews",
      icon: "📈"
    },
    {
      id: 4,
      title: "Testing & QA",
      description: "Comprehensive testing, bug fixes, and quality assurance",
      icon: "🔍"
    },
    {
      id: 5,
      title: "Deployment",
      description: "Production deployment, monitoring setup, and go-live support",
      icon: "🌐"
    },
    {
      id: 6,
      title: "Maintenance & Support",
      description: "Ongoing support, updates, and feature enhancements",
      icon: "🔄"
    }
  ];

  return (
    <section className="product-lifecycle fade-in">
      <div className="container">
        <div className="lifecycle-header">
          <h2 className="section-title">Crafted by Talent, Perfected in Services</h2>
          <p className="section-subtitle">
            Our proven software development lifecycle ensures quality, efficiency, and success at every stage
          </p>
        </div>

        <div className="lifecycle-infographic">
          <div className="lifecycle-timeline">
            {lifecycleStages.map((stage, index) => (
              <div key={stage.id} className="timeline-item">
                <div className="timeline-marker">
                  <div className="marker-number">{stage.id.toString().padStart(2, '0')}</div>
                </div>
                <div className="timeline-content">
                  <div className="stage-icon-wrapper">
                    <span className="stage-icon">{stage.icon}</span>
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
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Project Success Rate</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Projects Delivered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductLifecycle;