import React, { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import './Expense.css'
import ExpensesChart from './ExpenseChart'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<div className="card mt-4">
			<ExpensesFilter
				selected={filteredYear}
				onChangeFilter={filterChangeHandler}
			/>
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</div>
	)
}

export default Expenses
