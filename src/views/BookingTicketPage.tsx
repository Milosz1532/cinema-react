import React, { useEffect, useState } from 'react'
import * as types from '../types/types'
import '../styles/BookingTicket.scss'

import { FaCalendarDay, FaLocationDot } from 'react-icons/fa6'
import { FaClock } from 'react-icons/fa'

import { PiArmchairFill } from 'react-icons/pi'

import Config from '../config/config'

import Icon2D from '../assets/images/MovieDetails/2d-icon.png'
import Icon3D from '../assets/images/MovieDetails/3d-icon.png'
import { useNavigate, useParams } from 'react-router-dom'

import { getShowtimeDetails } from '../services/cinemaAPI'
import LoadingScreen from '../components/LoadingScreen'
import { format } from 'date-fns'

import screenImage from '../assets/images/screen.png'
import { LiaAngleLeftSolid } from 'react-icons/lia'
import SuccessModal from '../components/BookingTicket/SuccessModal'
import { ClipLoader } from 'react-spinners'

interface IFormState {
	email: string
	phoneNumber: string
	fullName: string
	acceptTerms: boolean
}

type FormErrors = {
	[K in keyof IFormState]?: string
}

interface Seat {
	id: string
	label: string
}

export default function BookingTicketPage() {
	const { id } = useParams<{ id: string }>()
	const navigate = useNavigate()

	const seatsArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [data, setData] = useState<types.IShowTimeDetails | null>(null)
	const [isSubmitButtonLoading, setIsSubmitButtonLoading] = useState<boolean>(false)
	const [isSuccessModalVisible, setIsSuccessModalVisible] = useState<boolean>(false)
	const [bookingStep, setBookingStep] = useState<number>(1)
	const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])
	const [formState, setFormState] = useState<IFormState>({
		email: '',
		phoneNumber: '',
		fullName: '',
		acceptTerms: false,
	})
	const [formErrors, setFormErrors] = useState<FormErrors>({})

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			setIsLoading(true)
			try {
				const data = await getShowtimeDetails(id)
				if (data) {
					setData(data)
					setIsLoading(false)
				}
			} catch {
				navigate('/404')
			}
		}
		fetchData()
	}, [id])

	const handleSelectSeat = (rowIndex: number, seatIndex: number, seatId: string): void => {
		const seatLabel = `${seatsArray[rowIndex]}${seatIndex + 1}`
		const seat = { id: seatId, label: seatLabel }

		setSelectedSeats(prevSelectedSeats => {
			const isSelected = prevSelectedSeats.some(selectedSeat => selectedSeat.id === seatId)
			if (isSelected) {
				return prevSelectedSeats.filter(selectedSeat => selectedSeat.id !== seatId)
			} else {
				return [...prevSelectedSeats, seat]
			}
		})
	}

	const handleGoToCheckout = () => {
		if (selectedSeats.length > 0) {
			setBookingStep(2)
		}
	}

	type FormErrorName = keyof FormErrors

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value, type, checked } = e.target
		setFormState(prevState => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value,
		}))

		setFormErrors(prevErrors => {
			const newErrors = { ...prevErrors }
			const errorName = name as FormErrorName
			delete newErrors[errorName]
			return newErrors
		})
	}

	const validateForm = (formState: IFormState): FormErrors => {
		const errors: FormErrors = {}
		if (!formState.email) {
			errors.email = 'Email is required'
		}
		if (!formState.phoneNumber) {
			errors.phoneNumber = 'Phone number is required'
		}
		if (!formState.fullName) {
			errors.fullName = 'Full name is required'
		}
		if (!formState.acceptTerms) {
			errors.acceptTerms = 'You must accept the terms and conditions'
		}

		return errors
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		const errors = validateForm(formState)
		setFormErrors(errors)
		if (Object.keys(errors).length === 0) {
			setIsSubmitButtonLoading(true)
			setTimeout(() => {
				setIsSuccessModalVisible(true)
			}, 1000)
		}
	}

	const handleModalConfirm = () => {
		setIsSuccessModalVisible(false)
		navigate('/')
	}

	return (
		<>
			<LoadingScreen isLoading={isLoading} />

			{!isLoading && data && (
				<>
					<div className='c_container mt-5'>
						<div className='c_booking_ticket_movie_container'>
							<div className='c_booking_ticket_img_container'>
								<img src={data.movie.imgUrl} alt='Movie image' draggable={false} />
							</div>
							<div className='c_booking_ticket_details_container'>
								<div className='c_movie_details_content_movie_title'>
									<span>{data.movie.title}</span>
									<span className='separator'>|</span>
									<span>{data.movie.ageRating}</span>
								</div>

								<div className='c_booking_ticket_showtime_details mt-3'>
									<div className='c_booking_details'>
										<i>
											<FaLocationDot size={18} />
										</i>
										<span>{Config.location}</span>
									</div>
									<div className='c_booking_details'>
										<i>
											<FaCalendarDay size={18} />
										</i>
										<span>{format(data.date, 'dd.MM.yyyy')}</span>
									</div>
									<div className='c_booking_details'>
										<i>
											<FaClock size={18} />
										</i>
										<span>{data.time}</span>
									</div>
								</div>
								<div className='c_booking_ticket_showtime_icon mt-4'>
									{data.movieType === '2D' && <img src={Icon2D} width={40} />}
									{data.movieType === '3D' && <img src={Icon3D} width={40} />}
								</div>
							</div>
						</div>

						{bookingStep == 1 && (
							<>
								<div className='c_booking_ticket_row'>
									<div className='c_booking_ticket_col_seat'>
										<div className='c_booking_ticket_legend'>
											<ul>
												<li className='c_booking_ticket_legend_el selected'>
													<i>
														<PiArmchairFill />
													</i>
													<span>Selected seats</span>
												</li>
												<li className='c_booking_ticket_legend_el available'>
													<i>
														<PiArmchairFill />
													</i>
													<span>Available seats</span>
												</li>

												<li className='c_booking_ticket_legend_el busy'>
													<i>
														<PiArmchairFill />
													</i>
													<span>Busy seats</span>
												</li>
											</ul>
										</div>
										<div className='c_booking_ticket_screen_container mt-3'>
											<div className='c_booking_ticket_screen_image_container'>
												<img src={screenImage} alt='Screen' draggable={false} />
											</div>
											{data.screen.rows.map((row, rowIndex) => (
												<div className='c_booking_ticket_screen_row' key={rowIndex}>
													<div className='c_booking_ticket_screen_row_number'>
														<span>{seatsArray[rowIndex]}</span>
													</div>
													<div className='c_booking_ticket_screen_row_content'>
														{row.map((seat, seatIndex) => {
															const isSelected = selectedSeats.some(
																selectedSeat => selectedSeat.id === seat._id
															)
															if (seat.type !== 'empty') {
																return (
																	<div
																		key={seat._id}
																		className={`c_booking_ticket_screen_seat ${
																			isSelected ? 'selected' : ''
																		}`}
																		onClick={() => handleSelectSeat(rowIndex, seatIndex, seat._id)}>
																		<i>
																			<PiArmchairFill />
																		</i>
																	</div>
																)
															} else {
																return (
																	<div
																		key={seat._id}
																		className='c_booking_ticket_screen_empty_seat'
																	/>
																)
															}
														})}
													</div>
													<div className='c_booking_ticket_screen_row_number'>
														<span>{seatsArray[rowIndex]}</span>
													</div>
												</div>
											))}
										</div>
									</div>

									<div className='c_booking_ticket_col'>
										<div className='c_booking_ticket_summary_container'>
											<h5>Selected places:</h5>
											{selectedSeats.length > 0 && (
												<ul>
													{selectedSeats.map(seat => (
														<li key={seat.id}>
															<span className='seat_number'>{seat.label}</span>
															<span className='seat_number_price'>$10</span>
														</li>
													))}
													{selectedSeats.length > 0 && (
														<li>
															<span className='seat_number'>Total:</span>
															<span className='seat_number_price_total'>
																${selectedSeats.length * 10}
															</span>
														</li>
													)}
												</ul>
											)}
											<input
												className='c_booking_ticket_summary_input'
												type='text'
												placeholder='Enter promocode'
											/>
											<div className='text-center'>
												<button
													onClick={handleGoToCheckout}
													className={`c_main_btn gradient mt-5 w-100 ${
														selectedSeats.length > 0 ? 'active' : 'disable'
													}`}>
													Go to checkout
												</button>
											</div>
										</div>
									</div>
								</div>
							</>
						)}

						{bookingStep == 2 && (
							<>
								<div className='c_booking_summary_title'>
									<i onClick={() => setBookingStep(1)}>
										<LiaAngleLeftSolid />
									</i>
									<h4>Order</h4>
								</div>
								<div className='c_booking_summary_row'>
									<div className='c_booking_summary_container'>
										<div className='c_booking_summary_form'>
											<form onSubmit={handleSubmit}>
												<div className={`c_form_group ${formErrors.email ? 'error' : ''}`}>
													<input
														className='c_booking_summary_input'
														type='email'
														name='email'
														placeholder='Email address'
														value={formState.email}
														onChange={handleChange}
													/>
												</div>

												<div className={`c_form_group ${formErrors.phoneNumber ? 'error' : ''}`}>
													<input
														className='c_booking_summary_input'
														type='text'
														name='phoneNumber'
														placeholder='Phone number'
														value={formState.phoneNumber}
														onChange={handleChange}
													/>
												</div>

												<div className={`c_form_group ${formErrors.fullName ? 'error' : ''}`}>
													<input
														className='c_booking_summary_input'
														type='text'
														name='fullName'
														placeholder='First name and last name'
														value={formState.fullName}
														onChange={handleChange}
													/>
												</div>

												<div
													className={`c_checkbox_group mt-3 ${
														formErrors.acceptTerms ? 'error' : ''
													}`}>
													<input
														type='checkbox'
														id='acceptTerms'
														name='acceptTerms'
														checked={formState.acceptTerms}
														onChange={handleChange}
													/>
													<label className='c_booking_summary_cb_label' htmlFor='acceptTerms'>
														Accept <span>Terms & Conditions</span>
													</label>
												</div>

												<button className='c_main_btn gradient mt-3 w-100' type='submit'>
													<p>
														{isSubmitButtonLoading && <ClipLoader size={17} color='#fff' />}
														Pay
													</p>
												</button>
											</form>
										</div>
									</div>

									<div className='c_booking_summary_total_container'>
										<div className='c_booking_ticket_summary_container'>
											<h5>Selected places:</h5>
											{selectedSeats.length > 0 && (
												<ul>
													{selectedSeats.map(seat => (
														<li key={seat.id}>
															<span className='seat_number'>{seat.label}</span>
															<span className='seat_number_price'>$10</span>
														</li>
													))}
													{selectedSeats.length > 0 && (
														<li>
															<span className='seat_number'>Total:</span>
															<span className='seat_number_price_total'>
																${selectedSeats.length * 10}
															</span>
														</li>
													)}
												</ul>
											)}
										</div>
									</div>
								</div>
							</>
						)}
					</div>
				</>
			)}
			{isSuccessModalVisible && <SuccessModal handleClick={handleModalConfirm} />}
		</>
	)
}
