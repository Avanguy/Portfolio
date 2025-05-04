import './App.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <section className="hero">
        <div className="container">
          <h1>Hey there! I'm Albert.</h1>
          <p>I create fast, functional, and user-focused web apps — full-stack and always learning.</p>

          <a href="#projects" className="btn">View Projects</a>
        </div>
      </section>
      <section className="gachess" id="projects">
        <div className="container">
          <h2>Gachess</h2> 
          <p style={{fontSize: 'medium'}}><i>Full-Stack project combining the classic game of chess with flavourful cosmetics</i></p>
        </div>  
      </section>
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
      <section className="about" id="about">
        <div className="container">
          <h2>About Me</h2>
          <p>I am a web developer with experience in building responsive and user-friendly websites.</p>
        </div>
        <div className="container">
          <h2>My Skills</h2>
          <ul class="skills">
            <div class="card">
              <li><strong>Frontend:</strong></li>
              <li><i class="fab fa-html5"></i> HTML</li>
              <li><i class="fab fa-css3-alt"></i> CSS</li>
              <li><i class="fab fa-js"></i> JavaScript</li>
              <li><i class="fab fa-react"></i> React</li>
              <li><i class="fas fa-paint-brush"></i> Tailwind CSS</li>
              <li><i class="fab fa-bootstrap"></i> Bootstrap</li>
            </div>
            <div class="card">
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

            <div class="card">
              <li><strong>Misc:</strong></li>
              <li><i class="fab fa-git-alt"></i> Git</li>
              <li><i class="fab fa-python"></i> Python</li>
              <li><i class="fab fa-java"></i> Java</li>
              <li><i class="fas fa-code"></i> Visual Basic</li>
            </div>
          </ul>

        </div>
      </section>
      <section className="contact" id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default App
