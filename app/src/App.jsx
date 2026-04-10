import './App.css'
import React, { useEffect, useState } from 'react'
import { db } from "./config/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import ProjectComponent from './components/ProjectComponent';

function App() {
  const [proyectos, setProyects] = useState([]);
  const emailAddress = "osbaldoez@hotmail.com";

  useEffect(() => {
    const getProyects = async () => {
      try {
        const q = query(collection(db, "proyectos"), orderBy("nombre", "asc"));
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

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app-wrapper">
      {/* Floating Navbar */}
      <nav className="navbar">
        <div className="nav-content">
          <span className="nav-logo">OM</span>
          <div className="nav-links">
            <button onClick={() => scrollTo('hero')}>Inicio</button>
            <button onClick={() => scrollTo('skills')}>Habilidades</button>
            <button onClick={() => scrollTo('projects')}>Proyectos</button>
          </div>
        </div>
      </nav>

      <main className="main-container">
        {/* Hero Section */}
        <section id="hero" className="hero-section animate-up">
          <div className="hero-content">
            <div className="badge">Dinamismo & Precisión</div>
            <h1 className="hero-title">
              Osbaldo <span className="text-gradient">Martínez</span>
            </h1>
            <p className="hero-subtitle">
              Desarrollador móvil especializado en <strong>Android (Jetpack Compose)</strong> y <strong>iOS (SwiftUI)</strong>. 
              Apasionado por crear interfaces que enamoran y código que escala.
            </p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollTo('projects')}>Ver Proyectos</button>
              <a href={`mailto:${emailAddress}`} className="btn-secondary">Contacto</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="profile-container">
              <img
                className="profile-img"
                src="https://ik.imagekit.io/nhu6ngxhk/PortafolioImagenes/WhatsApp%20Image%202025-10-01%20at%2008.26.25.jpeg?updatedAt=1759328849905"
                alt="Osbaldo Martínez"
              />
              <div className="profile-blur"></div>
            </div>
          </div>
        </section>

        {/* Bento Grid Section */}
        <section id="skills" className="bento-section animate-up" style={{ animationDelay: '0.2s' }}>
          <div className="bento-grid">
            {/* About Card */}
            <div className="bento-card card-large">
              <div className="card-header">
                <span className="card-icon">👋</span>
                <h3>Sobre mí</h3>
              </div>
              <p>Desarrollador con experiencia en el ecosistema <strong>Full Stack</strong>, con un enfoque principal en arquitecturas móviles nativas. Actualmente impulsando la digitalización en el RMVM.</p>
              <div className="social-pills">
                <a href="https://linkedin.com/in/osbaldo-martinez-44b1b3165" target="_blank" className="social-pill">
                  <img src="https://img.icons8.com/?size=100&id=ZO0pAGpcWYrB&format=png&color=FFFFFF" alt="LinkedIn" />
                  LinkedIn
                </a>
                <a href="https://github.com/Os-devAi" target="_blank" className="social-pill">
                  <img src="https://img.icons8.com/?size=100&id=12599&format=png&color=FFFFFF" alt="GitHub" />
                  GitHub
                </a>
                <a href="https://play.google.com/store/apps/developer?id=Nexus.Dev" target="_blank" className="social-pill">
                  <img src="https://img.icons8.com/?size=100&id=sDtU582wAEWd&format=png&color=FFFFFF" alt="Play Store" />
                  Play Store
                </a>
              </div>
            </div>

            {/* Mobile Skills Card */}
            <div className="bento-card">
              <div className="card-header">
                <span className="card-icon">📱</span>
                <h3>Móvil</h3>
              </div>
              <ul className="skill-tags">
                <li>Kotlin</li>
                <li>Jetpack Compose</li>
                <li>Swift</li>
                <li>SwiftUI</li>
              </ul>
            </div>

            {/* Web Skills Card */}
            <div className="bento-card">
              <div className="card-header">
                <span className="card-icon">💻</span>
                <h3>Web</h3>
              </div>
              <ul className="skill-tags">
                <li>React</li>
                <li>Node.js</li>
                <li>Full Stack</li>
              </ul>
            </div>

            {/* Database Card */}
            <div className="bento-card">
              <div className="card-header">
                <span className="card-icon">🗄️</span>
                <h3>Bases de Datos</h3>
              </div>
              <ul className="skill-tags">
                <li>PostgreSQL</li>
                <li>Firebase</li>
                <li>SQLServer</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section animate-up" style={{ animationDelay: '0.4s' }}>
          <div className="section-header">
            <h2 className="section-title">Proyectos <span className="text-gradient">Destacados</span></h2>
            <p>Una selección de trabajos que reflejan mi capacidad técnica.</p>
          </div>
          <div className="projects-grid">
            {proyectos.map((proy) => (
              <ProjectComponent key={proy.id} proyectos={proy} />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Osbaldo Martínez. Construido con React & Firebase.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
