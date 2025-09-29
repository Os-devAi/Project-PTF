import React from 'react'
import './ProjectComponent.css'

const ProjectComponent = ({ proyectos }) => {
    return (
        <>
            <div className="proyect-content">
                <div className="proyect-img">
                    <img src={proyectos.imagen} alt={proyectos.nombre} />
                </div>
                <div className="proyect-info">
                    <h3>{proyectos.nombre}</h3>
                    <p style={{ whiteSpace: 'pre-line' }}>{proyectos.descripcion}</p>
                    <p>{proyectos.tech}</p>
                    {proyectos.link ? (
                        <a href={proyectos.link} target="_blank" rel="noreferrer">
                            <b>Ver proyecto</b>
                        </a>
                    ) : (
                        <span><b>Demo no disponible de momento</b></span>
                    )}
                </div>
            </div>
        </>
    )
}

export default ProjectComponent
