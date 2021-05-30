import React from 'react'
import classes from './AvailableMeals.module.css'
import DUMMY_MEALS from '../../../data/dummy-meals.js'

const AvailableMeals = () => {
	const mealList = DUMMY_MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>)
	return (
		<section className={classes.meals}>
			<ul>{mealList}</ul>
		</section>
	)
}

export default AvailableMeals
