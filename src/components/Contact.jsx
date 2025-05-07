import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import DescriptionIcon from '@mui/icons-material/Description';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Contact = ({handleSubmit}) => {
  return (
    <section className="contact" id="contact">
        <div className="contact-container">
          <h2>Contact Me</h2>
          
          <form
            action="https://formspree.io/f/your-form-id"
            method="POST"
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea name="message" id="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>

          <p className="email-fallback">
            Prefer your email app? <a href="mailto:nguyenvalbert@gmail.com">Nguyenvalbert@gmail.com</a>
          </p>
        </div>
        <nav className="nav together">
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title='LinkedIn'>
            <LinkedInIcon style={{ fontSize: 24 }} />
            </a>
            <a href="#projects" aria-label="GitHub" target="_blank" rel="noopener noreferrer" title='GitHub'>
            <GitHubIcon style={{ fontSize: 24 }} />
            </a>
            <a href="#contact" aria-label="Resume" target="_blank" rel="noopener noreferrer"  title='Resume'>
            <DescriptionIcon style={{ fontSize: 24 }} />
            </a>
        </nav>
      </section>
  )
}

export default Contact
