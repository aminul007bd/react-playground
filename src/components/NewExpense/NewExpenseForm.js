import React, { useState } from 'react'

const NewExpenseForm = ({ onExpenseFormSubmit }) => {
	const [expenseForm, setExpenseForm] = useState({
		title: '',
		amount: '',
		date: '',
	})

	const submitHandler = (event) => {
		event.preventDefault()
		onExpenseFormSubmit = expenseForm
	}
	console.log('this is the form value', expenseForm)
	return (
		<form className="mt-4" onSubmit={submitHandler}>
			<div className="form-group mr-2">
				<input
					type="text"
					className="form-control"
					placeholder="Title"
					onChange={(e) =>
						setExpenseForm((prevState) => {
							return { ...prevState, title: e.target.value }
						})
					}
				/>
			</div>
			<div className="form-group mr-2">
				<input
					type="number"
					min="0.1"
					step="0.1"
					className="form-control"
					placeholder="Amount"
					onChange={(e) =>
						setExpenseForm((prevState) => {
							return { ...prevState, amount: e.target.value }
						})
					}
				/>
			</div>
			<div className="form-group mr-2">
				<input
					type="date"
					min="2019-01-01"
					max="2022-01-01"
					className="form-control"
					onChange={(e) =>
						setExpenseForm((prevState) => {
							return { ...prevState, date: e.target.value }
						})
					}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Add Expense
			</button>
		</form>
	)
}

export default NewExpenseForm
