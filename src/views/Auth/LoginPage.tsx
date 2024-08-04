import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import '../../styles/auth.scss'
import PasswordInput from '../../components/PasswordInput'

export default function LoginPage() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

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

				<div className='b_auth_form_content'>
					<input
						className='b_auth_input'
						value={email}
						onChange={e => setEmail(e.target.value)}
						type='email'
						placeholder='Enter your e-mail'
					/>
					<PasswordInput
						placeholder='Password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<div className='c_auth_forgot_btn'>
						<span>Forgot Password?</span>
					</div>
					<button className='c_main_btn gradient mt-3 w-100'>Log In</button>
					<div className='b_auth_bottom_btn'>
						<p>
							New to Cinema? <NavLink to={'/sign-up'}>Join now</NavLink>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}
