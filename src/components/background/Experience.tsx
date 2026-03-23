import "../../stylesheets/Background.scss"

export default function Experience() {
  return (
    <div className="experience-section card shadow-lg">
      <h2 className="section-title">Experience</h2>

      <div className="experience-item">
        <h5>Freelance Developer</h5>
        <h6 className="text-muted">Aug 2025 - Present</h6>
        <ul>
          <li>Designed web applications and management bots</li>
          <li>Focus on modular architecture and scalability</li>
        </ul>
      </div>

      <div className="experience-item">
        <h5>South Tampa Logistics [Store Associate]</h5>
        <h6 className="text-muted">Aug 2021 - May 2023</h6>
        <ul>
          <li>Provided certified notary services</li>
          <li>Handled technology hardware logistics</li>
          <li>Led installations across locations</li>
        </ul>
      </div>
    </div>
  )
}