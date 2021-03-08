import React from 'react'
import { Link } from 'react-router-dom'

export default function AppNavbar() {
	return (
		<header>
			<nav className="nav">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/frameworks">Frameworks</Link>
					</li>
					<li>
						<Link to="/modeler">Modeler</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}
