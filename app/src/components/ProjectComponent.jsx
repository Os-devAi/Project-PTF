import React from 'react'
import './ProjectComponent.css'

const ProjectComponent = ({ proyectos }) => {
    return (
        <article className="project-card">
            <div className="project-image-wrapper">
                <img src={proyectos.imagen} alt={proyectos.nombre} className="project-image" />
                <div className="project-overlay">
                    {proyectos.link ? (
                        <a href={proyectos.link} target="_blank" rel="noreferrer" className="project-link-overlay">
                            Explorar Proyecto
                        </a>
                    ) : (
                        <span className="project-no-link">Próximamente</span>
                    )}
                </div>
            </div>
            
            <div className="project-details">
                <h3 className="project-name">{proyectos.nombre}</h3>
                <p className="project-description">{proyectos.descripcion}</p>
                
                <div className="project-footer">
                    <div className="project-tags">
                        {proyectos.tech && proyectos.tech.split(',').map((tech, index) => (
                            <span key={index} className="tech-tag">{tech.trim()}</span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProjectComponent
