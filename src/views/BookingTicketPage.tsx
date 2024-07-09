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

export default function BookingTicketPage() {
	const { id } = useParams<{ id: string }>()
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [data, setData] = useState<types.IShowTimeDetails | null>(null)

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

	const seatsArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']

	interface Seat {
		id: string
		label: string
	}

	const [selectedSeats, setSelectedSeats] = useState<Seat[]>([])

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

						<div className='c_booking_ticket_row'>
							<div className='c_booking_ticket_col_seat'>
								<div className='c_booking_ticket_legend'>
									<ul>
										<li className='c_booking_ticket_legend_el selected'>
											<i>
												<PiArmchairFill size={35} />
											</i>
											<span>Selected seats</span>
										</li>
										<li className='c_booking_ticket_legend_el available'>
											<i>
												<PiArmchairFill size={35} />
											</i>
											<span>Available seats</span>
										</li>

										<li className='c_booking_ticket_legend_el busy'>
											<i>
												<PiArmchairFill size={35} />
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
																<PiArmchairFill size={35} />
															</div>
														)
													} else {
														return (
															<div key={seat._id} className='c_booking_ticket_screen_empty_seat' />
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
									<h5>Places:</h5>
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
									<input
										className='c_booking_ticket_summary_input'
										type='text'
										placeholder='Enter promocode'
									/>
									<div className='text-center'>
										<button className='c_main_btn gradient mt-5 w-100'>Go to checkout</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}
