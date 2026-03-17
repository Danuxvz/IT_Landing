import './stylesheets/App.scss'
import Projects from './components/projects/Projects'
import Services from './components/offeredServices/Services'
import Background from './components/background/Background'
import Reveal from './components/ui/Reveal'

function App() {
  return (
    <div className="app-root">

      {/* HERO */}
      <section className="hero">
        <div className="container text-center">
          <h1>Danux P</h1>
          <p className="hero-sub">
            Software Developer • IT Specialist • Cybersecurity Enthusiast
          </p>

          <button className="btn btn-primary btn-lg mt-3">
            View My Work
          </button>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-dark">
        <div className="container">
          <Reveal>
            <Services />
          </Reveal>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-dark">
        <div className="container">
          <Reveal>
            <Projects />
          </Reveal>
        </div>
      </section>


      {/* BACKGROUND */}
      <section className="section-dark">
        <div className="container">
          <Reveal>
            <Background />
          </Reveal>
        </div>
      </section>


      {/* CONTACT */}
      <section className="section-contact">
        <div className="container text-center">
          <h2>Contact</h2>
          <p>danux@email.com</p>

          <button className="btn btn-outline-light">
            Download Resume
          </button>
        </div>
      </section>

    </div>
  )
}

export default App