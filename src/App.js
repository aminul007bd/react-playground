import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CamundaNavbar from './components/CamundaNavbar'
import HomePage from './components/pages/HomePage'
import FrameworksPage from './components/pages/FrameworksPage'
import ModelerPage from './components/pages/ModelerPage'

const accordionItems = [
	{
		id: 1,
		title: 'React',
		description: 'froentend library'
	},
	{
		id: 2,
		title: 'Vue Js',
		description: 'light weight froentend library'
	},
	{
		id: 3,
		title: 'Angular ',
		description: 'Google froentend library'
	}
]

const options = [
	{ label: 'the color green', value: 'green' },
	{ label: 'the color red', value: 'red' },
	{ label: 'the color yellow', value: 'yellow' }
]

function App() {
	const [onSearchText, setOnSearchText] = useState('')
	return (
		<Router>
			<div>
				<CamundaNavbar />
				<div className="container-fluid">
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/modeler">
							<ModelerPage />
						</Route>
						<Route path="/frameworks">
							<FrameworksPage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App
