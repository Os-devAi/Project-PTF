import './App.css'
import React, { useEffect, useState } from 'react'
import { db } from "./config/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import ProjectComponent from './components/ProjectComponent';

function App() {
  const [proyectos, setProyects] = useState([]);

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
      <div className='main-container'>
        <div className='profile-container'>
          <img className='profile-picture' src="https://ik.imagekit.io/nhu6ngxhk/PortafolioImagenes/WhatsApp%20Image%202025-10-01%20at%2008.26.25.jpeg?updatedAt=1759328849905" alt="fotoxdxd" height={48} width={48} />
          <h1 className='dev-title'>Osbaldo Martínez</h1>
          <span className='dev-title'>Registro del Mercado de Valores y Mercancías.</span>
          <br />
          <span class="led led-green">
          </span>
          <span>Interesado en colaborar en proyectos freelance de forma remota.</span>
          <h2>Información de contacto</h2>
          <div className="contact-info">
            <span>Ciudad de Guatemala, Guatemala</span>
            <br />
            <span>Email: osbaldoez@hotmail.com</span>
            <br />
            <span>Tel: +502 3659-8473</span>
          </div>
          <p>Muy emocionado por poder trabajar en nuevos proyectos y colaborar con otros profesionales.</p>
          <h2>Redes Sociales</h2>
          <div className="social-container">
            <a href="https://github.com/Os-devAi">
              <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF" alt="github-icon" height={48} width={48} />
            </a>
            <a href="https://play.google.com/store/apps/developer?id=Nexus.Dev">
              <img src="https://img.icons8.com/?size=100&id=sDtU582wAEWd&format=png&color=FFFFFF" alt="playstore-icon" height={48} width={48} />
            </a>
            <a href="https://www.facebook.com/def.alt.00101/">
              <img src="https://img.icons8.com/?size=100&id=118467&format=png&color=FFFFFF" alt="facebook-icon" height={48} width={48} />
            </a>
            <a href="https://www.instagram.com/osvaldo_ez/">
              <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF" alt="instagram-icon" height={48} width={48} />
            </a>
            <a href="https://x.com/os_devAi">
              <img src="https://img.icons8.com/?size=100&id=01GWmP9aUoPj&format=png&color=FFFFFF" alt="x-icon" height={48} width={48} />
            </a>
            <a href="https">
              <img src="https://img.icons8.com/?size=100&id=8808&format=png&color=FFFFFF" alt="linkedin-icon" height={48} width={48} />
            </a>
          </div>
          <button className='contact-me' href="#projects" onClick={() => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            ver proyectos
          </button>
        </div>
        <div className='skills-container'>
          <div className="about-container">
            <h2>Acerca de mi ________________//</h2>
            <h1>Hola, </h1>
            <p>
              Soy un desarrollador móvil nativo especializado en la creación de apps modernas y eficientes para Android y iOS, utilizando las últimas tecnologías como Jetpack Compose y SwiftUI. Además, tengo experiencia en desarrollo web con React.js, backend con Node.js, web services PHP, manejo de servicios como Firebase y bases de datos con MySQL entre otras.</p>
          </div>
          <div className="title-skills-container">
            <h2>Habilidades</h2>
            <h2>____________________</h2>
          </div>
          <div className='skills-list'>
            <div className='skill'>
              <h2 className='sub-title'>Móvil</h2>
              <h3>Kotlin</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>Jetpack Compose</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>Swift</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>SwiftUI</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
            </div>
            {/* segunda columna */}
            <div className='skill'>
              <h2 className='sub-title'>Web</h2>
              <h3>HTML</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>CSS</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>JavaScript</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>React</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>Node Js</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>PHP</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
            </div>
            {/* tercera columna */}
            <div className='skill'>
              <h2 className='sub-title'>Bases de Datos</h2>
              <h3>MySQL</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>PostgreSQL</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>SQLServer</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>Firebase</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
            </div>
            {/* tercera columna */}
            <div className='skill'>
              <h2 className='sub-title'>Otras</h2>
              <h3>Integraciones</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>Git/GitHub</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>Manejo de Google Play Console y App Store Connect</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>Despliegue en Vercel</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
              <h3>Inglés Básico / lectura y escritura documentación.</h3>
              <div className='skill-bar'>
                <div className='skill-bar-fill' style={{ width: '80%' }}></div>
              </div>
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
    </>
  )
}

export default App
