import React from 'react'
import classes from './AvailableMeals.module.css'
import DUMMY_MEALS from '../../../data/dummy-meals.js'
import Card from '../../UI/Card/Card'
import MealItem from '../MealItem/MealItem'

const AvailableMeals = () => {
	const mealList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	))
	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealList}</ul>
			</Card>
		</section>
	)
}

export default AvailableMeals