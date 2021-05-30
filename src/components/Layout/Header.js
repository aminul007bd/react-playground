import React from 'react'

import classes from './Header.module.css'
import mealsImage from '../../assets/img/meals.jpg'
import HeaderCartButton from './HeaderCartButton/HeaderCartButton'

const Header = () => {
	return (
		<>
			<header className={classes.header}>
				<h1> React Meals</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={mealsImage} alt="meals image" />
			</div>
		</>
	)
}

export default Header
