import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { IShowtime } from '../../types/types'

interface IShowtimeComponent {
	date: string
	items: IShowtime[]
	selectedShowtime: string | null
	setSelectedShowtime: (id: string) => void
}

const Showtime: React.FC<IShowtimeComponent> = ({
	date,
	items,
	selectedShowtime,
	setSelectedShowtime,
}) => {
	return (
		<>
			<div className='c_showtimes_container_date mt-4'>
				<i className='me-3'>
					<FaRegCalendarAlt size={20} />
				</i>
				<h5>{date}</h5>
			</div>

			<div className='c_showtimes_container_times'>
				{items.map(el => (
					<button
						key={el.id}
						className={`c_showtime_btn ${selectedShowtime == el.id ? 'active' : ''}`}
						onClick={() => setSelectedShowtime(el.id)}>
						<div className='c_showtime_btn_time'>
							<span>{el.time}</span>
						</div>
						<div className='c_showtime_btn_desc'>
							{el.movieType}, {el.language.toLocaleUpperCase()}
						</div>
					</button>
				))}
			</div>
		</>
	)
}

export default Showtime
