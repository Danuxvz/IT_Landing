import { useRef } from "react"
import type { Project } from "./ProjectsData"

interface Props {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  const cardRef = useRef<HTMLAnchorElement>(null)

  function handleMove(e: React.MouseEvent) {
    const el = cardRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const rotateY = ((x / rect.width) - 0.5) * 8
    const rotateX = ((y / rect.height) - 0.5) * -4

    el.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }

  function handleLeave() {
    const el = cardRef.current
    if (!el) return

    el.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)"
  }

  return (
    <a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </a>
  )
}