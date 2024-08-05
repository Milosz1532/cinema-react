import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import Spinner from '../../assets/images/spinner-icon.svg'

import '../../styles/auth.scss'
import PasswordInput from '../../components/PasswordInput'

interface Errors {
	email?: boolean
	password?: boolean
	message?: string
}

export default function LoginPage() {
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [errors, setErrors] = useState<Errors>({})

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const validationErrors: Errors = {}

		if (email.trim().length === 0) {
			validationErrors.email = true
		}

		if (password.trim().length === 0) {
			validationErrors.password = true
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors({
				...validationErrors,
				message: 'Fill in the required fields',
			})
			return
		}

		setIsLoading(true)

		try {
			await new Promise(resolve => setTimeout(resolve, 2000))
			console.log('Logged in')
		} catch (error) {
			setErrors({ message: 'Invalid login credentials' })
		} finally {
			setIsLoading(false)
		}
	}

	const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value)
		if (errors.email) {
			setErrors(prevErrors => ({ ...prevErrors, email: undefined }))
		}
	}

	const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setPassword(e.target.value)
		if (errors.password) {
			setErrors(prevErrors => ({ ...prevErrors, password: undefined }))
		}
	}

	useEffect(() => {
		if (errors.message) {
			const timer = setTimeout(() => {
				setErrors(prevErrors => ({ ...prevErrors, message: '' }))
			}, 3000)
			return () => clearTimeout(timer)
		}
	}, [errors.message])

	return (
		<div className='b_auth_container'>
			<div className='b_auth_content_box'>
				<h4 className='b_auth_title'>Log In to Cinema</h4>
				<div className='b_auth_method_list'>
					<div className='b_auth_method'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png'
							alt='Google'
						/>
					</div>
					<div className='b_auth_method'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
							alt='Facebook'
						/>
					</div>
					<div className='b_auth_method'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/625px-Apple_logo_black.svg.png'
							alt='Apple'
						/>
					</div>
				</div>

				<div className='b_auth_desc'>
					<span>or sign in with email</span>
				</div>

				<form className='b_auth_form_content' onSubmit={handleSubmit}>
					<input
						className={`b_auth_input ${errors.email && 'b_input_error'}`}
						value={email}
						onChange={handleEmailChange}
						type='email'
						placeholder='Enter your e-mail'
					/>
					<PasswordInput
						placeholder='Password'
						className={`${errors.password && 'b_input_error'}`}
						value={password}
						onChange={handlePasswordChange}
					/>
					<div className='c_auth_forgot_btn'>
						<span>Forgot Password?</span>
					</div>
					{errors.message && (
						<div className='c_auth_error_container'>
							<p>{errors.message}</p>
						</div>
					)}
					<button className='c_main_btn gradient mt-3 w-100' type='submit'>
						{isLoading && <img className='c_loading_spinner' src={Spinner} />}
						Log In
					</button>
					<div className='b_auth_bottom_btn'>
						<p>
							New to Cinema? <NavLink to={'/sign-up'}>Join now</NavLink>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}
