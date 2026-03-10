import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectDetails.css'

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const project = projects.find(p => p.id === Number(id))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    if (!project) {
        return (
            <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Project not found</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Home</Link>
            </div>
        )
    }

    return (
        <div className="project-details">
            {/* Hero Section */}
            <div className="project-hero">
                <img src={project.image} alt={project.title} className="project-hero-bg" />
                <div className="project-hero-content">
                    <h1 className="project-hero-title">{project.title}</h1>
                    <p className="project-hero-subtitle">{project.description}</p>
                </div>
            </div>

            {/* Meta Info Section */}
            <section className="project-meta-section">
                <div className="container">
                    <div className="project-meta-grid">
                        <div className="meta-item">
                            <h4>Client</h4>
                            <p>{project.client}</p>
                        </div>
                        <div className="meta-item">
                            <h4>Year</h4>
                            <p>{project.year}</p>
                        </div>
                        <div className="meta-item">
                            <h4>Services</h4>
                            <p>{project.services.join(', ')}</p>
                        </div>
                        <div className="meta-item">
                            <h4>Share</h4>
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <span className="contact-icon" style={{ fontSize: '1.2rem', cursor: 'pointer' }}>🔗</span>
                                <span className="contact-icon" style={{ fontSize: '1.2rem', cursor: 'pointer' }}>✉️</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content - Narrative Description */}
            <section className="project-content-section">
                <div className="container">
                    <div className="project-content-block fade-in visible">
                        <p className="project-narrative">{project.detailedDescription}</p>
                    </div>
                </div>
            </section>

            {/* Navigation */}
            <div className="project-navigation">
                <Link to="/" className="btn btn-secondary">
                    Back to All Projects
                </Link>
            </div>
        </div>
    )
}

export default ProjectDetails
