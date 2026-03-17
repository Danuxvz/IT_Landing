import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard"
import { projects } from "./ProjectsData"
import "../../stylesheets/Projects.scss"

export default function Projects() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = () =>
    setIndex(i => (i + 1) % projects.length)

  const prev = () =>
    setIndex(i => (i - 1 + projects.length) % projects.length)

  // Auto scroll
  useEffect(() => {
    if (paused) return

    const timer = setInterval(next, 8000)
    return () => clearInterval(timer)
  }, [paused])

  return (
    <section className="projects-section">
      <h2>Projects & Freelance Work</h2>

      <div
        className="carousel-container"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button onClick={prev} className="nav left">
            <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
        </button>

        <div
          className="carousel-track"
          style={{
            transform: `translateX(calc(-${index * 82.5}% + 8.5%))`,
          }}
        >
          {projects.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <button onClick={next} className="nav right">
            <svg style={{ transform: "scaleX(-1)" }} width="20" height="20" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" fill="none"/>
            </svg>
        </button>
      </div>
    </section>
  )
}