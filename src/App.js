import React, { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense'
import { expenses } from './data/AppData'

function App() {
	const [expenseItems, setExpenseItems] = useState(expenses)
	console.log('expense items', expenseItems.length)
	return (
		<div className="App">
			<div className="container">
				<div className="col-sm-12">
					<NewExpense
						onExpenseFormSubmit={(formData) =>
							setExpenseItems((prevState) => {
								return { ...prevState, formData }
							})
						}
					/>
				</div>
				<Expenses items={expenseItems} />
			</div>
		</div>
	)
}

export default App
