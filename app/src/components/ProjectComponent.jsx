import React from 'react'

const ProjectComponent = ({ proyectos }) => {
    return (
        <>
            <span className="titulodeproyecto">
                {proyectos.nombre}
            </span>
            <div className="contenedorproyecto">
                <div className="contenedorimagen">
                    <img src={proyectos.imagen} alt={proyectos.nombre} />
                </div>
                <div className="contenedorinformacion">
                    <span className="tituloinformacion">
                        Descripción
                    </span>
                    <br />
                    <span className="descripcion">
                        {proyectos.descripcion}
                    </span>
                    <br />
                    <span className="descripcion">
                        {proyectos.descripcion}
                    </span>
                    <br />
                    <span className="tituloinformacion">
                        Tecnologías
                    </span>
                    <br />
                    <span className="descripcion">
                        {proyectos.tech}
                    </span>
                </div>
            </div>
        </>
    )
}

export default ProjectComponent
