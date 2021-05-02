import React from 'react'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = ({ onNewExpanseSubmit }) => {
	const onDataSubmit = (data) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
		}
		onNewExpanseSubmit(expenseData)
		console.log('my expense data', expenseData)
	}
	return (
		<div>
			<NewExpenseForm onExpenseFormSubmit={onDataSubmit} />
		</div>
	)
}

export default NewExpense
