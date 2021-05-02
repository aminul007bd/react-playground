import React from 'react'
import './App.css'
import Expenses from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense'
import { expenses } from './data/AppData'

function App() {
	return (
		<div className="App">
			<div className="container">
				<div className="col-sm-12">
					<NewExpense />
				</div>
				<Expenses items={expenses} />
			</div>
		</div>
	)
}

export default App
