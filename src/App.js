import React, { useState } from 'react'
import './App.css'
import Expenses from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense'
import { expenses } from './data/AppData'

function App() {
	const [expenseItems, setExpenseItems] = useState(expenses)
	return (
		<div className="App">
			<div className="container">
				<div className="col-sm-12">
					<NewExpense
						onNewExpanseSubmit={(data) =>
							setExpenseItems((prevState) => {
								return [...prevState, data]
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
