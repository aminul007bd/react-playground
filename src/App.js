import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Accordion from './components/Accordion'
import AppHeader from './components/AppHeader'
import SearchBar from './components/search/Search'
import AppNavbar from './components/AppNavbar'
import SearchList from './components/search/SearchList'
import DropDownList from './components/DropDownList'
import AppStreamList from './components/AppStreamList'
import AppRegistration from './components/AppRegistration'

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
						<Route path="/registration">
							<AppRegistration />
						</Route>
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
