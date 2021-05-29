import React from 'react'

import classes from './Header.module.css'
import mealsImage from '../../assets/img/meals.jpg'

const Header = () => {
	return (
		<>
			<header className={classes.header}>
				<h1> React Meals</h1>
				<button>Cart</button>
			</header>
			<div className={classes.mainImage}>
				<img src={mealsImage} alt="meals image" />
			</div>
		</>
	)
}

export default Header
