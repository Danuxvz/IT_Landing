import "../../stylesheets/Skills.scss"
import { skillCategories } from "./SkillsData"

export default function Skills() {
  return (
    <section className="skills-section">

      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => (
          <div key={i} className="skills-category">

            <h5>{cat.title}</h5>

            <div className="skills-viewport">
              {cat.belts.map((belt, j) => (
                <div key={j} className="skills-belt">
                  <div className="skills-belt-inner">
                    {belt.concat(belt).map((skill, k) => (
                      <a
                        key={k}
                        href={skill.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skill-item"
                        title={skill.name}
                      >
                        <img src={skill.logo} alt={skill.name} />
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}