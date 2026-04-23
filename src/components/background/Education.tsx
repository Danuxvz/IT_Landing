import "../../stylesheets/Background.scss"

export default function Education() {
	return (
		<div className="education-wrapper shadow-sm">
			<h2 className="section-title">Education</h2>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<strong>B.S. Information Technology (3.69 GPA)</strong><br/>
					University of South Florida — May 2025
				</li>
				<li className="list-group-item">CompTIA A+ — November 2025</li>
				<li className="list-group-item">
					MIT OpenCourseWare — Program Analysis, AI, Networks
				</li>
				<li className="list-group-item">
					Associate in Arts — Hillsborough Community College
				</li>
				<li className="list-group-item">Certified Notary Public</li>
			</ul>
		</div>
	)
}