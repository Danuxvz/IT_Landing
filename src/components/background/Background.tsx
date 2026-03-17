import Skills from "./Skills"
import Experience from "./Experience"
import Education from "./Education"
import "../../stylesheets/Background.scss"

export default function Background() {
  return (
    <section className="background-section">

      <div className="bg-stage">

        {/* LEFT — Tall */}
        <div className="panel panel-experience">
          <Experience />
        </div>

        {/* TOP RIGHT */}
        <div className="panel panel-skills">
          <Skills />
        </div>

        {/* BOTTOM RIGHT */}
        <div className="panel panel-education">
          <Education />
        </div>

      </div>

    </section>
  )
}