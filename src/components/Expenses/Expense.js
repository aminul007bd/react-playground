import ExpenseItem from './ExpenseItem'
import './Expense.css'

function Expenses(props) {
	return (
		<div className="card expenses">
			{props.items.map((expenses) => (
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
