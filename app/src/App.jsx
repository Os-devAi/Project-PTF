import './App.css'
import React, { useEffect, useState } from 'react'
import { db } from "./config/firebase";
import { collection, getDocs } from "firebase/firestore";
import ProjectComponent from './components/ProjectComponent';

function App() {
  const [proyectos, setProyects] = useState([]);

  // mostrar los productos
  useEffect(() => {
    const getProyects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "proyectos"));
        const proyectosArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProyects(proyectosArray);
      } catch (error) {
        console.error(error);
      }
    };
    getProyects();
  }, []);

  return (
    <>
      <div className='main-container'>
        <div className='profile-container'>
          <img className='profile-picture' src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D" alt="fotoxdxd" height={48} width={48} />
          <h1 className='dev-title'>Mobile Developer</h1>
          <h2>Contact Info</h2>
          <div className="contact-info">
            <span>Guatemala, Guatemala</span>
            <br />
            <span>Email: osbaldoez@hotmail.com</span>
            <br />
            <span>Tel: +502 3659-8473</span>
          </div>
          <h2>Redes Sociales</h2>
          <div className="social-container">
            <a href="">
              <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" alt="facebook-icon" height={48} width={48} />
            </a>
            <a href="">
              <img src="https://cdn-icons-png.flaticon.com/512/87/87390.png" alt="instagram-icon" height={48} width={48} />
            </a>
            <a href="">
              <img src="https://cdn-icons-png.flaticon.com/512/6372/6372150.png" alt="x-icon" height={48} width={48} />
            </a>
            <a href="">
              <img src="https://cdn-icons-png.freepik.com/256/254/254394.png?semt=ais_hybrid" alt="linkedin-icon" height={48} width={48} />
            </a>
            <a href="https://github.com/Os-devAi">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github-icon" height={48} width={48} />
            </a>
            <a href="https://play.google.com/store/apps/developer?id=Nexus.Dev">
              <img src="https://cdn-icons-png.flaticon.com/512/732/732065.png" alt="playstore-icon" height={48} width={48} />
            </a>
          </div>
          <button className='contact-me'>
            Contact Me
          </button>
        </div>
        <div className='skills-container'>
          <div className="about-container">
            <h2>About me ________________//</h2>
            <h1>Hi, i'm Just a Dev!</h1>
            <p>
              Passionate about developing native mobile apps with Kotlin and Swift.</p>
          </div>
          <div className="title-skills-container">
            <h2>Skills</h2>
            <h2>____________________</h2>
          </div>
          <div className='skills-list'>
            <div className='skill'>
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
          </div>
        </div>
      </div>
      <div className='project-container'>
        {proyectos.map((proyectos) => (
          <ProjectComponent key={proyectos.id} proyectos={proyectos} />
        ))}
      </div>
    </>
  )
}

export default App
