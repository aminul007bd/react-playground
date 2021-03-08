import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import HomePage from './components/pages/HomePage'
import FrameworksPage from './components/pages/FrameworksPage'
import ModelerPage from './components/pages/ModelerPage'
import 'bpmn-js-properties-panel/dist/assets/bpmn-js-properties-panel.css'

function App() {
	return (
		<Router>
			<AppNavbar />
			<div className="app-container">
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
		</Router>
	)
}

export default App
