import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h1>Hey there! I'm Albert.</h1>
        <p>I build fast, functional, and user-focused web apps. <br/> Full stack and always learning.</p>
        <div className="hero-buttons">
          <button className="btn" onClick={() => window.location.href="#gachess"}>See My Work</button>
          <button className="btn" onClick={() => window.location.href="#about"}>About Me</button>
          <button className="btn" onClick={() => window.location.href="#contact"}>Contact Me</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
