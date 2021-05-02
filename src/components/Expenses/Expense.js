import ExpenseItem from './ExpenseItem'
import './Expense.css'

function Expenses({ items }) {
	return (
		<div className="card expenses">
			{items.map((expenses) => (
				<ExpenseItem
					title={expenses.title}
					amount={expenses.amount}
					date={expenses.date}
				/>
			))}
		</div>
	)
}

export default Expenses
