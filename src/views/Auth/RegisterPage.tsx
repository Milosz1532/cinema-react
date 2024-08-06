import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import Spinner from '../../assets/images/spinner-icon.svg'

import '../../styles/auth.scss'
import PasswordInput from '../../components/PasswordInput'

interface Errors {
	email?: boolean
	createPassword?: boolean
	confirmPassword?: boolean
	message?: string
}

export default function RegisterPage() {
	const [email, setEmail] = useState<string>('')
	const [createPassword, setCreatePassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('')
	const [errors, setErrors] = useState<Errors>({})
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const [acceptTerms, setAcceptTerms] = useState<boolean>(false)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const validationErrors: Errors = {}

		if (email.trim().length === 0) {
			validationErrors.email = true
		}

		if (createPassword.trim().length === 0) {
			validationErrors.createPassword = true
		}

		if (confirmPassword.trim().length === 0) {
			validationErrors.confirmPassword = true
		}

		if (
			email.trim().length === 0 ||
			createPassword.trim().length === 0 ||
			confirmPassword.trim().length === 0
		) {
			validationErrors.message = 'Fill in the required fields'
		} else if (createPassword !== confirmPassword) {
			validationErrors.confirmPassword = true
			validationErrors.message = 'Passwords do not match'
		} else if (!acceptTerms) {
			validationErrors.message = 'You must accept the terms and conditions'
		}

		if (Object.keys(validationErrors).length > 0) {
			setErrors({
				...validationErrors,
			})
			return
		}

		setIsLoading(true)

		try {
			await new Promise(resolve => setTimeout(resolve, 2000))
			console.log('Registered successfully')
		} catch (error) {
			setErrors({ message: 'Registration failed' })
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

	const handleCreatePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCreatePassword(e.target.value)
		if (errors.createPassword) {
			setErrors(prevErrors => ({ ...prevErrors, createPassword: undefined }))
		}
	}

	const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setConfirmPassword(e.target.value)
		if (errors.confirmPassword) {
			setErrors(prevErrors => ({ ...prevErrors, confirmPassword: undefined }))
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
				<h4 className='b_auth_title'>Sign up to Cinema</h4>
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
					<span>or sign up with email</span>
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
						placeholder='Create password'
						className={`${errors.createPassword && 'b_input_error'}`}
						value={createPassword}
						onChange={handleCreatePasswordChange}
					/>
					<PasswordInput
						placeholder='Confirm password'
						className={`${errors.confirmPassword && 'b_input_error'}`}
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
					/>

					<div className='c_checkbox_group mt-3'>
						<input
							type='checkbox'
							id='acceptTerms'
							name='acceptTerms'
							checked={acceptTerms}
							onChange={() => setAcceptTerms(!acceptTerms)}
						/>
						<label className='b_auth_checkbox_label' htmlFor='acceptTerms'>
							Accept <span>Terms & Conditions</span>
						</label>
					</div>

					{errors.message && (
						<div className='c_auth_error_container'>
							<p>{errors.message}</p>
						</div>
					)}

					<button className='c_main_btn gradient mt-3 w-100' type='submit'>
						{isLoading && <img className='c_loading_spinner' src={Spinner} />}
						Sign Up
					</button>
					<div className='b_auth_bottom_btn'>
						<p>
							Already have an account? <NavLink to={'/sign-in'}>Sign in</NavLink>
						</p>
					</div>
				</form>
			</div>
		</div>
	)
}
