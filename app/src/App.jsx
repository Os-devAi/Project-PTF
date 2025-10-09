import './App.css'
import React, { useEffect, useState } from 'react'
import { db } from "./config/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import ProjectComponent from './components/ProjectComponent';

function App() {
  const [proyectos, setProyects] = useState([]);

  const emailAddress = "osbaldoez@hotmail.com";

  // mostrar los proyectos
  useEffect(() => {
    const getProyects = async () => {
      try {
        const q = query(collection(db, "proyectos"), orderBy("nombre", "asc")); // 👈 aquí se ordena
        const querySnapshot = await getDocs(q);
        const proyectosArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProyects(proyectosArray);
      } catch (error) {
        console.error("Error al obtener proyectos:", error);
      }
    };
    getProyects();
  }, []);

  return (
    <>
      <div className="main-container">
        <div className="profile-header">
          <div className="profile-picture-section">
            <img
              className="profile-picture"
              src="https://ik.imagekit.io/nhu6ngxhk/PortafolioImagenes/WhatsApp%20Image%202025-10-01%20at%2008.26.25.jpeg?updatedAt=1759328849905"
              alt="perfil"
            />
          </div>

          <div className="profile-info-section">
            <div className="profile-header-top">
              <h1 className="profile-name">Osbaldo Martínez</h1>
              <button
                className="show-projects"
                onClick={() => {
                  const projectsSection = document.getElementById("projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Ver proyectos
              </button>
            </div>

            <div className="profile-stats">
              {/* <span><b>15</b> proyectos</span>
              <span><b>+20</b> tecnologías</span>
              <span><b>+5</b> años de experiencia</span> */}
            </div>

            <div className="profile-job">
              {/* <img
                className="work-icon"
                src="https://img.icons8.com/?size=100&id=61522&format=png&color=FFFFFF"
                alt="work"
              /> */}
              <span>Trabajando en: Registro del Mercado de Valores y Mercancías</span>
            </div>
            <p className="profile-bio">
              Desarrollador móvil nativo enfocado en crear experiencias modernas con Android (Jetpack Compose), iOS (SwiftUI) además cuento con experiencia en desarrollo web con React.js y Node.js.
            </p>
            <br />
            <span>Contacto: 🔗 <a
              href={`mailto:${emailAddress}`}
              className='email'
              title={`Enviar correo a ${emailAddress}`}
            ><span className='email'><b>osbaldoez@hotmail.com</b></span></a></span>
          </div>
        </div>

        <div className="highlights-container">
          <a href="https://www.linkedin.com/in/osbaldo-martinez-44b1b3165?">
            <div className="highlight">
              <img className='social-icon' src="https://img.icons8.com/?size=100&id=ZO0pAGpcWYrB&format=png&color=FFFFFF" alt="LinkedIn" />
            </div>
          </a>
          <a href="https://github.com/Os-devAi">
            <div className="highlight">
              <img className='social-icon' src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF" alt="GitHub" />
            </div>
          </a>
          <a href="https://play.google.com/store/apps/developer?id=Nexus.Dev">
            <div className="highlight">
              <img className='social-icon' src="https://img.icons8.com/?size=100&id=sDtU582wAEWd&format=png&color=FFFFFF" alt="Play Store" />
            </div>
          </a>
        </div>

        <div className="profile-content">
          <h2>Habilidades destacadas</h2>
          <div className="skills-list">
            <div className="skill">
              <h3>Móvil</h3>
              <p>Kotlin, Jetpack Compose, Swift, SwiftUI</p>
            </div>
            <div className="skill">
              <h3>Web</h3>
              <p>React, Node.js, PHP, HTML, CSS, JS</p>
            </div>
            <div className="skill">
              <h3>Bases de datos</h3>
              <p>MySQL, PostgreSQL, Firebase, SQLServer</p>
            </div>
          </div>
        </div>
      </div>

      <div className='project-container' id='projects'>
        <h2>Proyectos</h2>
        {proyectos.map((proyectos) => (
          <ProjectComponent key={proyectos.id} proyectos={proyectos} />
        ))}
      </div>
      <div className="footer">
        <p>Portafolio desarrollado con React y proyectos cargados a Cloude Firebase Firestore</p>
      </div>
    </>
  )
}

export default App
