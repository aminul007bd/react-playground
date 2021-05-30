import './App.css'

import React, { useState } from 'react'

import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'

function App() {
	const [cartIsShow, setCartIsShow] = useState(false)

	const showCartHandler = () => {
		setCartIsShow(true)
	}

	const hideCartHandler = () => {
		setCartIsShow(false)
	}

	return (
		<CartProvider>
			<Header onShowCart={showCartHandler} />
			{cartIsShow && <Cart onClose={hideCartHandler} />}
			<main>
				<Meals />
			</main>
		</CartProvider>
	)
}

export default App
