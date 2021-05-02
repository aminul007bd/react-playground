import React from 'react'
import './App.css'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'

function App() {
	return (
		<div className="App">
			<div className="container">
				<h2>React Playground</h2>
				<AppHeader />
				<AppFooter />
			</div>
		</div>
	)
}

export default App
