import React, { useState } from 'react'
import './App.css'
import Accordion from './components/Accordion'
import AppHeader from './components/AppHeader'
import SearchBar from './components/search/Search'
import AppNavbar from './components/AppNavbar'
import SearchList from './components/search/SearchList'
import DropDownList from './components/DropDownList'

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

const options = [
	{ label: 'the color green', value: 'green' },
	{ label: 'the color red', value: 'red' },
	{ label: 'the color yellow', value: 'yellow' },
]

function App() {
	const [onSearchText, setOnSearchText] = useState('')
	return (
		<div className="App">
			<div className="">
				<AppNavbar />
				{/* <AppHeader /> */}
				{/* <Accordion items={accordionItems} /> */}
				{/* <SearchBar searchText={(val) => setOnSearchText(val)} />
				<SearchList searchQuery={onSearchText} /> */}
				<DropDownList optionList={options} />
			</div>
		</div>
	)
}

export default App
