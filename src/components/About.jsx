import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>I am a web developer with experience in building responsive and user-friendly websites.</p>
        </div>
        <div className="container">
          <h2>My Skills</h2>
          <ul class="skills">
            <div class="card slideLeft">
              <li><strong>Frontend:</strong></li>
              <li><i class="fab fa-html5"></i> HTML</li>
              <li><i class="fab fa-css3-alt"></i> CSS</li>
              <li><i class="fab fa-js"></i> JavaScript</li>
              <li><i class="fab fa-react"></i> React</li>
              <li><i class="fas fa-paint-brush"></i> Tailwind CSS</li>
              <li><i class="fab fa-bootstrap"></i> Bootstrap</li>
            </div>
            <div class="card slideRight">
              <li><strong>Backend:</strong></li>
              <ul class="two-column-list">
                <li><i class="fab fa-node"></i> Node.js</li>
                <li><i class="fas fa-server"></i> Express</li>
                <li><i class="fas fa-random"></i> REST APIs</li>
                <li><i class="fas fa-lock"></i> JWT</li>
                <li><i class="fas fa-shield-alt"></i> OAuth</li>
                <li><i class="fas fa-network-wired"></i> WebSockets</li>
                <li><i class="fas fa-bolt"></i> Socket.io</li>
                <li><i class="fas fa-database"></i> MongoDB</li>
              </ul>
            </div>

            <div class="card slideUp">
              <li><strong>Misc:</strong></li>
              <li><i class="fab fa-git-alt"></i> Git</li>
              <li><i class="fab fa-python"></i> Python</li>
              <li><i class="fab fa-java"></i> Java</li>
              <li><i class="fas fa-code"></i> Visual Basic</li>
            </div>
          </ul>

        </div>
      </section>
  )
}

export default About
