import { useRef } from "react"
import './stylesheets/App.scss'
import Projects from './components/projects/Projects'
import Services from './components/offeredServices/Services'
import Background from './components/background/Background'
import Reveal from './components/ui/Reveal'
import SkyBackground from "./components/ui/SkyBackground";

function App() {
	const projectsRef = useRef<HTMLDivElement | null>(null)

	function scrollToProjects() {
		projectsRef.current?.scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	}

	return (
		<div className="app-root">
			<SkyBackground />
			
			{/* HERO */}
			<section className="hero">
				<div className="container text-center">
					<h1>Allan Perez Castaneda</h1>
					<p className="hero-sub">
						Software Developer • IT Specialist • Cybersecurity Enthusiast
					</p>

					<button
					 className="btn btn-primary btn-lg mt-3"
					 onClick={scrollToProjects}
					>
					 View My Work
					</button>
				</div>
			</section>

			{/* SERVICES */}
			<section id="services-section" className="section-dark">
				<div className="container">
					<Reveal>
						<Services />
					</Reveal>
				</div>
			</section>

			{/* PROJECTS */}
			<section
				id="projects-section"
				ref={projectsRef}
				className="section-dark"
			>
			 <div className="container">
				 <Reveal>
					 <Projects />
				 </Reveal>
			 </div>
			</section>

			{/* BACKGROUND */}
			<section id="background-section" className="section-dark">
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
					<p>d4nixvz@email.com</p>

					<button className="btn btn-outline-light">
						Download Resume
					</button>
				</div>
			</section>

		</div>
	)
}

export default App