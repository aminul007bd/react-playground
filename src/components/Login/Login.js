import React, {
	useState,
	useEffect,
	useReducer,
	useContext,
	useRef
} from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'
import AuthContext from '../../store/auth-context'
import Input from '../UI/Input/Input'

const initialState = {
	value: '',
	isValid: undefined
}

const emailReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.includes('@') }
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.includes('@') }
	}
	return initialState
}

const passwordReducer = (state, action) => {
	if (action.type === 'USER_INPUT') {
		return { value: action.val, isValid: action.val.trim().length > 6 }
	}
	if (action.type === 'INPUT_BLUR') {
		return { value: state.value, isValid: state.value.trim().length > 6 }
	}
	return initialState
}

const Login = (props) => {
	const [formIsValid, setFormIsValid] = useState(false)
	const ctx = useContext(AuthContext)

	const [emailState, dispatchEmail] = useReducer(emailReducer, initialState)

	const [passwordState, dispatchPassword] = useReducer(
		passwordReducer,
		initialState
	)

	const { isValid: emailIsValid } = emailState
	const { isValid: passwordIsValid } = passwordState

	const emailInputRef = useRef()
	const passwordInputRef = useRef()

	useEffect(() => {
		// console.log('Check the validity')
		const identifier = setTimeout(() => {
			setFormIsValid(emailIsValid && passwordIsValid)
		}, 500)

		// Clean up function
		return () => {
			// console.log('Clean Up!')
			clearTimeout(identifier)
		}
	}, [emailIsValid, passwordIsValid])

	const emailChangeHandler = (event) => {
		dispatchEmail({ type: 'USER_INPUT', val: event.target.value })
	}

	const passwordChangeHandler = (event) => {
		dispatchPassword({ type: 'USER_INPUT', val: event.target.value })
	}

	const validateEmailHandler = () => {
		dispatchEmail({ type: 'INPUT_BLUR' })
	}

	const validatePasswordHandler = () => {
		dispatchPassword({ type: 'INPUT_BLUR' })
	}

	const submitHandler = (event) => {
		event.preventDefault()
		if (formIsValid) {
			ctx.onLogin(emailState.value, passwordState.value)
		} else if (!emailIsValid) {
			emailInputRef.current.inputFocus()
		} else {
			passwordInputRef.current.inputFocus()
		}
	}

	return (
		<Card className={classes.login}>
			<form onSubmit={submitHandler}>
				<Input
					ref={emailInputRef}
					id="email"
					type="email"
					label="E-mail"
					isValid={emailState.isValid}
					value={emailState.value}
					onChange={emailChangeHandler}
					onBlur={validateEmailHandler}
				/>
				<Input
					ref={passwordInputRef}
					id="password"
					type="password"
					label="Password"
					isValid={passwordState.isValid}
					value={passwordState.value}
					onChange={passwordChangeHandler}
					onBlur={validatePasswordHandler}
				/>
				<div className={classes.actions}>
					<Button type="submit" className={classes.btn}>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default Login
