import React, { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

interface PasswordInputProps {
	value: string
	placeholder?: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const PasswordInput: React.FC<PasswordInputProps> = ({ value, placeholder, onChange }) => {
	const [showPassword, setShowPassword] = useState(false)

	const togglePasswordVisibility = () => {
		setShowPassword(!showPassword)
	}

	return (
		<div className='c_input_password mt-2'>
			<input
				type={showPassword ? 'text' : 'password'}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
			/>
			<i onClick={togglePasswordVisibility}>
				{showPassword ? <FaRegEyeSlash size={18} /> : <FaRegEye size={18} />}
			</i>
		</div>
	)
}

export default PasswordInput
