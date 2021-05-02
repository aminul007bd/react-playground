import React from 'react'

const NewExpenseForm = () => {
	return (
		<form className="mt-4">
			<div className="form-group mr-2">
				<input type="text" className="form-control" placeholder="Title" />
			</div>
			<div className="form-group mr-2">
				<input
					type="number"
					min="0.1"
					step="0.1"
					className="form-control"
					placeholder="Amount"
				/>
			</div>
			<div className="form-group mr-2">
				<input
					type="date"
					min="2019-01-01"
					max="2022-01-01"
					className="form-control"
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Add Expense
			</button>
		</form>
	)
}

export default NewExpenseForm
