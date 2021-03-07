import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CamundaNavbar from './components/CamundaNavbar'
import HomePage from './components/pages/HomePage'
import FrameworksPage from './components/pages/FrameworksPage'
import ModelerPage from './components/pages/ModelerPage'
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css'

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
	return (
		<Router>
			<CamundaNavbar />
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
		</Router>
	)
}

export default App
