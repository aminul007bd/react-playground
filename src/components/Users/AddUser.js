import React, { useState } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'

import classes from './AddUser.module.css'

const AddUser = () => {
	const [enteredUsername, setEnteredUsername] = useState('')
	const [enteredAge, setEnteredAge] = useState('')

	const addUserHandler = () => {}

	const usernameChangeHandler = () => {}

	const ageChangeHandler = () => {}

	return (
		<Card className={classes.input}>
			<form onSubmit={addUserHandler}>
				<label htmlFor="username">Username</label>
				<input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
				<label htmlFor="age">Age (Years)</label>
				<input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
