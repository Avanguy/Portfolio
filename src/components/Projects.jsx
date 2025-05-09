import React from 'react'
import TodoGif from '../assets/TodoGif.gif'
const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="project-list">
        <h2>Other Projects</h2>
        <div className="projectItem slideLeft">
          <img src="https://via.placeholder.com/150" alt="Budget Tracker Image" />
          <div>
            <h3>Budget Tracker</h3>
            <p>A full-stack MERN project that allows users to manage their personal finances by tracking income and expenses. 
            <br/><br/>The app provides real-time data updates, user authentication, and a dynamic UI with graphs to visualize spending patterns.</p>
            <div>
              <button>Live Demo</button>
              <button>Code View</button>
              <ul className="tech-stack">
                <li><i className="fab fa-html5"></i> HTML</li>
                <li><i className="fab fa-js"></i> JavaScript</li>
                <li><i className="fab fa-react"></i> React</li>
                <li><i className="fas fa-paint-brush"></i> Tailwind CSS</li>
              </ul>
            </div>
            <div>
              <ul className="tech-stack">
                <li><i className="fab fa-node"></i> Node.js</li>
                <li><i className="fas fa-server"></i> Express</li>
                <li><i className="fas fa-random"></i> REST APIs</li>
                <li><i className="fas fa-lock"></i> JWT</li>
                <li><i className="fas fa-database"></i> MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="projectItem slideLeft">
          <img src={TodoGif} alt="Todo List Image" />
          <div>
            <h3>Todo List</h3>
            <p>A To-Do List built with React to learn and practice core React concepts.</p>
            <a href="https://live-demo-url.com" target="_blank" rel="noopener noreferrer">
              <button>Live Demo</button>
            </a>
            <a href="https://github.com/Avanguy/todo" target="_blank" rel="noopener noreferrer">
              <button>Code View</button>
            </a>
            <ul className="tech-stack">
              <li><i className="fab fa-html5"></i> HTML</li>
              <li><i className="fab fa-css3-alt"></i> CSS</li>
              <li><i className="fab fa-js"></i> JavaScript</li>
              <li><i className="fab fa-react"></i> React</li>
            </ul>
          </div>
        </div>
        <div className="projectItem slideRight">
          <img src="https://via.placeholder.com/150" alt="Weather App Image" />
          <div>
            <h3>Weather App</h3>
            <p>A weather app built with vanilla JavaScript to strengthen fundamentals and work without React.</p>
            <p>Using the OpenWeather API</p>
            <div>
              <button>Live Demo</button>
              <button>Code View</button>
              <ul className="tech-stack">
                <li><i class="fab fa-html5"></i> HTML</li>
                <li><i class="fab fa-css3-alt"></i> CSS</li>
                <li><i class="fab fa-js"></i> JavaScript</li>
                <li><i className="fas fa-random"></i> REST API</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </section>
  )
}

export default Projects
