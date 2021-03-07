import React from 'react'
import { Link } from 'react-router-dom'

export default function AppNavbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">
						Pantheon
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<Link className="nav-link" to="/registration">
									Registration
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/streams">
									Streams
								</Link>
							</li>
							{/* <li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Video Types
								</Link>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									<li>
										<Link className="dropdown-item" href="#">
											Action
										</Link>
									</li>
								</ul>
							</li> */}
						</ul>
						<form className="d-flex">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							{/* <button className="btn btn-outline-success" type="submit">
								Search
							</button> */}
						</form>
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" href="#">
									Login | Logout
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}