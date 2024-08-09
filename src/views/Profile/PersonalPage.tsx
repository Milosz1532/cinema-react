import React, { useEffect, useState } from 'react'
import { getUserDetails, updateUserDetails } from '../../services/cinemaAPI'
import { IUserDetails } from '../../types/types'
import { useAuth } from '../../hooks/useAuth'
import toast from 'react-hot-toast'
import { format } from 'date-fns'

const PersonalPage: React.FC = () => {
	const { email } = useAuth()

	console.log(email)

	const [firstName, setFirstName] = useState<string>('')
	const [lastName, setLastName] = useState<string>('')
	const [emailInput, setEmailInput] = useState<string>(email)
	const [phoneNumber, setPhoneNumber] = useState<string>('')
	const [birthDate, setBirthDate] = useState<string>('')
	const [city, setCity] = useState<string>('')

	useEffect(() => {
		const fetchUserData = async () => {
			try {
				const userDetails = await getUserDetails()
				setFirstName(userDetails.firstName)
				setLastName(userDetails.lastName)
				setPhoneNumber(userDetails.phoneNumber)
				setBirthDate(format(userDetails.birthDate, 'dd.MM.yyyy'))
				setCity(userDetails.city)
			} catch (error) {
				console.log('Error fetching user details:', error)
			}
		}

		fetchUserData()
	}, [])

	const updateDetails = async () => {
		const payload: IUserDetails = {
			firstName: firstName,
			lastName: lastName,
			phoneNumber: phoneNumber,
			birthDate: birthDate,
			city: city,
		}
		try {
			const response = await updateUserDetails(payload)
			return response
		} catch {
			throw false
		}
	}

	const handleSubmitChanges = async () => {
		const updatePromise = updateDetails()

		toast.promise(updatePromise, {
			loading: 'Saving...',
			success: <b>Settings saved!</b>,
			error: <b>Could not save.</b>,
		})
	}

	return (
		<div className='c_profile_personal_container'>
			<div className='c_profile_personal_row'>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>First name</p>
					<input
						type='text'
						autoComplete='given-name'
						placeholder='Enter your first name'
						value={firstName}
						onChange={e => setFirstName(e.target.value)}
					/>
				</div>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>Last name</p>
					<input
						type='text'
						autoComplete='family-name'
						placeholder='Enter your last name'
						value={lastName}
						onChange={e => setLastName(e.target.value)}
					/>
				</div>
			</div>

			<div className='c_profile_personal_row mt-4'>
				<div className='c_profile_personal_input_group disabled'>
					<p className='c_profile_personal_input_title'>Email</p>
					<input
						type='email'
						placeholder='Enter your email address'
						value={emailInput}
						onChange={e => setEmailInput(e.target.value)}
					/>
				</div>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>Phone number</p>
					<input
						type='phone'
						placeholder='Enter your phone number'
						value={phoneNumber}
						onChange={e => setPhoneNumber(e.target.value)}
					/>
				</div>
			</div>

			<div className='c_profile_personal_row mt-4'>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>Birthday</p>
					<input
						type='text'
						placeholder='Enter your birthday'
						value={birthDate}
						onChange={e => setBirthDate(e.target.value)}
					/>
				</div>
				<div className='c_profile_personal_input_group'>
					<p className='c_profile_personal_input_title'>City</p>
					<input
						type='text'
						placeholder='Enter your city'
						value={city}
						onChange={e => setCity(e.target.value)}
					/>
				</div>
			</div>

			<div className='c_profile_personal_btn_container'>
				<button className='c_main_btn gradient mt-5 w-100' onClick={handleSubmitChanges}>
					Save Changes
				</button>
			</div>
		</div>
	)
}

export default PersonalPage
