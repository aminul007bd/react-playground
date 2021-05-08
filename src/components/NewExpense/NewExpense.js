import React from 'react'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = ({ onNewExpanseSubmit }) => {
	const onDataSubmit = (data) => {
		const expenseData = {
			...data,
			date: new Date(data.date),
			id: Math.random().toString(),
		}
		onNewExpanseSubmit(expenseData)
		console.log('my expense data', expenseData)
	}
	return <NewExpenseForm onExpenseFormSubmit={onDataSubmit} />
}

export default NewExpense
