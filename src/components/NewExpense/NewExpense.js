import React from 'react'
import NewExpenseForm from './NewExpenseForm'

const NewExpense = ({ onNewExpanseSubmit }) => {
	const onDataSubmit = (data) => {
		const expenseData = {
			...data,
			id: Math.random().toString(),
			amount: +data.amount,
			date: new Date(data.date),
		}
		onNewExpanseSubmit(expenseData)
	}
	return <NewExpenseForm onExpenseFormSubmit={onDataSubmit} />
}

export default NewExpense
