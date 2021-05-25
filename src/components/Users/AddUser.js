import React, { useState, useRef } from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import ErrorModal from '../UI/ErrorModal'

import classes from './AddUser.module.css'

const AddUser = (props) => {
	const nameInputRef = useRef()
	const ageInputRef = useRef()

	const [enteredUsername, setEnteredUsername] = useState('')
	const [enteredAge, setEnteredAge] = useState('')
	const [error, setError] = useState()

	const addUserHandler = (event) => {
		event.preventDefault()
		console.log(nameInputRef.current.value, ageInputRef.current)
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: 'Invalid input',
				message: 'Please enter a valid name and age (non empty values)',
			})
			return
		}
		if (+enteredAge < 1) {
			setError({
				title: 'Invalid age',
				message: 'Please enter age (> 0)',
			})
			return
		}
		props.onUserAdd(enteredUsername, enteredAge)
		setEnteredUsername('')
		setEnteredAge('')
	}

	const errorHandler = () => {
		setError()
	}

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUsername}
						onChange={(e) => setEnteredUsername(e.target.value)}
						ref={nameInputRef}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={(e) => setEnteredAge(e.target.value)}
						ref={ageInputRef}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	)
}

export default AddUser
