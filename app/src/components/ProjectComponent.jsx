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
                    <p>{proyectos.descripcion}</p>
                    <p>{proyectos.tech}</p>
                    <a href={proyectos.link} target="_blank" rel="noreferrer">Ver proyecto</a>
                </div>
            </div>
        </>
    )
}

export default ProjectComponent
