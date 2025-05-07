import './App.css'
import Gachess from './components/Gachess';
import Header from './components/Header'
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formStatus = document.querySelector('.form-status');
    formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
    formStatus.classList.add('success');
    setTimeout(() => {
      formStatus.textContent = '';
      formStatus.classList.remove('success');
    }, 3000);
  }
  return (
    <>
      <Header />
      <Hero />
      <Gachess />
      <About />
      <Projects />
      <Contact handleSubmit={handleSubmit} />
    </>
  )
}

export default App
