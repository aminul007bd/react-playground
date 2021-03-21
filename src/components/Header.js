import React from "react"

const Header = (props) => {
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container">
				<div className="navbar-header">
					<a className="navbar-brand text-white text-lg" href="/">
						{props.text}
					</a>
				</div>
				<ul className="navbar-nav ml-auto text-light d-inline-block">
					<li className="nav-item d-inline-block mr-4">{props.description}</li>
				</ul>
			</div>
		</nav>
	)
}
export default Header
