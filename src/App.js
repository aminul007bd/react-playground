import React from 'react'
import './App.css'
import Accordion from './components/Accordion'
import AppHeader from './components/AppHeader'

const accordionItems = [
	{
		id: 1,
		title: 'React',
		description: 'froentend library',
	},
	{
		id: 2,
		title: 'Vue Js',
		description: 'light weight froentend library',
	},
	{
		id: 3,
		title: 'Angular ',
		description: 'Google froentend library',
	},
]

function App() {
	return (
		<div className="App">
			<div className="container">
				<h2>React Playground</h2>
				<AppHeader />
				<Accordion items={accordionItems} />
			</div>
		</div>
	)
}

export default App
