import React, { useState } from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
	const [title, setTitle] = useState(props.title)
	return (
		<div className="expense-item">
			<ExpenseDate date={props.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
				<button
					className="btn btn-secondary"
					onClick={() => setTitle('Updated')}
				>
					Click Me
				</button>
			</div>
		</div>
	)
}

export default ExpenseItem
