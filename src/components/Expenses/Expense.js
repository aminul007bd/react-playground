import React, { useState } from 'react'

import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import './Expense.css'

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}

	const filteredExpenses = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	return (
		<div>
			<div className="card mt-4">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				<ExpensesList items={filteredExpenses} />
			</div>
		</div>
	)
}

export default Expenses
