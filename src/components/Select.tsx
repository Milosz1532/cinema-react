import React, { useState } from 'react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

interface Option {
	id: number
	name: string
	value: string | Date
}

interface OptionsListProps {
	options: Option[]
	icon?: React.ReactNode
}

const Select: React.FC<OptionsListProps> = ({ options, icon }) => {
	const [selectedIndex, setSelectedIndex] = useState<number>(1)
	const [isActive, setIsActive] = useState<boolean>(false)

	const handleOptionClick = (id: number) => {
		setSelectedIndex(id)
	}

	return (
		<div className='c_select_container'>
			<div
				className={`c_select purple ${isActive ? 'active' : 'hidden'}`}
				onClick={() => setIsActive(!isActive)}>
				<div className='c_select_selected_container'>
					{icon && <i className='me-2'>{icon}</i>}
					<div className='c_celect_selected_option'>
						<span>{options.find(el => el.id == selectedIndex)?.name}</span>
					</div>
					<i className='c_select_drop_icon'>
						<MdOutlineKeyboardArrowDown size={25} />
					</i>
				</div>
				<div className='c_select_options_container'>
					{options.map(el => (
						<div className='c_select_option' key={el.id} onClick={() => handleOptionClick(el.id)}>
							<p>{el.name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Select
