import React from 'react'
import './App.css'
import Expenses from './components/Expenses/Expense'
import { expenses } from './data/AppData'

function App() {
	return (
		<div className="App">
			<div className="container">
				<Expenses items={expenses} />
			</div>
		</div>
	)
}

export default App
