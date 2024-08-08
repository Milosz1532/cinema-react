import React from 'react'

const PersonalPage: React.FC = () => {
	return (
		<div className='c_profile_personal_container'>
			<div className='c_profile_personal_row'>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>First name</p>
					<input type='text' autoComplete='given-name' placeholder='Enter your first name' />
				</div>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>Last name</p>
					<input type='text' autoComplete='family-name' placeholder='Enter your last name' />
				</div>
			</div>

			<div className='c_profile_personal_row mt-4'>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>Email</p>
					<input type='email' placeholder='Enter your email address' />
				</div>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>Phone number</p>
					<input type='phone' placeholder='Enter your phone number' />
				</div>
			</div>

			<div className='c_profile_personal_row mt-4'>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>Birthday</p>
					<input type='text' placeholder='Enter your birthday' />
				</div>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>City</p>
					<input type='text' placeholder='Enter your city' />
				</div>
			</div>

			<div className='c_profile_personal_btn_container'>
				<button className='c_main_btn gradient mt-5 w-100'>Save Changes</button>
			</div>
		</div>
	)
}

export default PersonalPage
