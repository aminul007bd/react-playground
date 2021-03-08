import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AppNavbar from './components/AppNavbar'
import AppStreamList from './components/AppStreamList'
import AiData from './data/intents.json'

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
	const [aiData, setAiData] = useState(AiData)
	console.log(aiData)
	return (
		<Router>
			<div>
				<AppNavbar />
				<div className="container-fluid">
					<Switch>
						<Route path="/streams">
							<AppStreamList />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App

// TODO : Next steps for the app
// Registration, Login, add Stream, stream detail page
