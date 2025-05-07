import React from 'react'

const Projects = () => {
  return (
    <section className="projects" id="projects">
    <div className="container">
      <div className="project-list">
        <h2>Other Projects</h2>
        <div className="projectItem slideLeft">
          <img src="https://via.placeholder.com/150" alt="Budget Tracker Image" />
          <div>
            <h3>Budget Tracker</h3>
            <p>Description of project 1.</p>
          </div>
        </div>
        <div className="projectItem slideRight">
          <img src="https://via.placeholder.com/150" alt="Weather App Image" />
          <div>
            <h3>Weather</h3>
            <p>Description of project 1.</p>
          </div>
        </div>
        <div className="projectItem slideLeft">
          <img src="https://via.placeholder.com/150" alt="Todo List Image" />
          <div>
            <h3>Todo List</h3>
            <p>Description of project 1.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Projects
