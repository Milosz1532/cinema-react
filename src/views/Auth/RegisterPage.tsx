import React, { useState } from 'react'

import '../../styles/auth.scss'
import { NavLink } from 'react-router-dom'

import PasswordInput from '../../components/PasswordInput'

export default function RegisterPage() {
	const [email, setEmail] = useState('')
	const [createPassword, setCreatePassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')

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

				<div className='b_auth_form_content'>
					<input
						className='b_auth_input'
						value={email}
						onChange={e => setEmail(e.target.value)}
						type='email'
						placeholder='Enter your e-mail'
					/>

					<PasswordInput
						placeholder='Create password'
						value={createPassword}
						onChange={e => setCreatePassword(e.target.value)}
					/>
					<PasswordInput
						placeholder='Confirm password'
						value={confirmPassword}
						onChange={e => setConfirmPassword(e.target.value)}
					/>

					<div className={`c_checkbox_group mt-3`}>
						<input type='checkbox' id='acceptTerms' name='acceptTerms' />
						<label className='b_auth_checkbox_label' htmlFor='acceptTerms'>
							Accept <span>Terms & Conditions</span>
						</label>
					</div>

					<button className='c_main_btn gradient mt-3 w-100'>Sign Up</button>
					<div className='b_auth_bottom_btn'>
						<p>
							Already have an account? <NavLink to={'/sign-in'}>Sign in</NavLink>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
