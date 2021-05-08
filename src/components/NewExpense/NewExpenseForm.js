import React, { useState } from 'react'

const NewExpenseForm = ({ onExpenseFormSubmit }) => {
	const [expenseForm, setExpenseForm] = useState({
		id: '',
		title: '',
		amount: '',
		date: '',
	})

	const submitHandler = (event) => {
		event.preventDefault()
		onExpenseFormSubmit(expenseForm)
		setExpenseForm({
			title: '',
			amount: '',
			date: '',
		})
		onCancelHandler()
	}

	const onCancelHandler = () => {
		document.getElementById('addExpenseForm').classList.add('d-none')
		document.getElementById('AddNewExpenseBtn').classList.remove('d-none')
	}

	const onAddNewExpenseHandler = () => {
		document.getElementById('addExpenseForm').classList.remove('d-none')
		document.getElementById('AddNewExpenseBtn').classList.add('d-none')
	}

	return (
		<>
			<div className="col-xs-12">
				<form
					className="col-xs-12 d-none mt-4"
					onSubmit={submitHandler}
					id="addExpenseForm"
				>
					<div className="form-group mr-2">
						<input
							type="text"
							className="form-control"
							value={expenseForm.title}
							required
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
							value={expenseForm.amount}
							className="form-control"
							placeholder="Amount"
							required
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
							value={expenseForm.date}
							className="form-control"
							onChange={(e) =>
								setExpenseForm((prevState) => {
									return { ...prevState, date: e.target.value }
								})
							}
						/>
					</div>
					<button className="btn btn-primary mr-2" onClick={onCancelHandler}>
						Cancel
					</button>
					<button type="submit" className="btn btn-primary">
						Add Expense
					</button>
				</form>
			</div>
			<div className="col-xs-12 mt-2">
				<button
					type="button"
					className="btn btn-primary"
					onClick={onAddNewExpenseHandler}
					id="AddNewExpenseBtn"
				>
					Add New Expense
				</button>
			</div>
		</>
	)
}

export default NewExpenseForm
