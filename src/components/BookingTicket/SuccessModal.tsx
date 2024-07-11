import React from 'react'

import '../../styles/Modal.scss'

import image from '../../assets/images/ticket_img.png'

interface ISuccessModal {
	handleClick: () => void
}

const SuccessModal: React.FC<ISuccessModal> = ({ handleClick }) => {
	return (
		<div className='c_booking_ticket_success_modal_container'>
			<div className='c_booking_ticket_success_modal_content'>
				<div className='c_booking_ticket_success_modal_img_container'>
					<img src={image} alt='' />
				</div>
				<div className='c_booking_ticket_success_modal_desc'>
					<h3>Your purchase completed successfully!</h3>
					<p>Tickets have been sent to your email address</p>
					<button onClick={handleClick} className='c_main_btn gradient px-5'>
						Done
					</button>
				</div>
			</div>
		</div>
	)
}

export default SuccessModal
