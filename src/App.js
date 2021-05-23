import React, { useState } from 'react'

import './App.css'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

const App = () => {
	const [usersList, setUsersList] = useState([
		{ name: 'Max', age: '31' },
		{ name: 'Mad Max', age: '35' },
	])

	const addUserHandler = (uName, uAge) => {
		setUsersList((prevUser) => {
			return [...prevUser, { name: uName, age: uAge }]
		})
	}

	return (
		<div>
			<section id="add-user-form">
				<AddUser onUserAdd={addUserHandler} />
			</section>
			<section id="users">
				<UsersList users={usersList} />
			</section>
		</div>
	)
}

export default App
