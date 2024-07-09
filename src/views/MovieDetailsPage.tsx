import { useState, useEffect } from 'react'

import VideoPlayer from '../components/VideoPlayer'

import '../styles/movieDetails.scss'

import { getMovieDetails } from '../services/cinemaAPI'

import * as types from '../types/types'

import Actor from '../components/Actor'
import Select from '../components/Select'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import LoadingScreen from '../components/LoadingScreen'
import Movie from '../components/Home/Movie'

import { addDays, format } from 'date-fns'
import Showtime from '../components/MovieDetails/Showtime'
import EmptyShowtimes from '../components/MovieDetails/EmptyShowtimes'

const formatDuration = (minutes: number): string => {
	const hours = Math.floor(minutes / 60)
	const remainingMinutes = minutes % 60
	return `${hours}h ${remainingMinutes}m`
}

export default function MovieDetailsPage() {
	const { id } = useParams<{ id: string }>()
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [data, setData] = useState<types.IMovieDetails | null>(null)

	const showtimesDays = [
		{ id: 1, name: 'Any day', value: 'any-day' },
		{ id: 2, name: `Today, ${new Date().toLocaleDateString()}`, value: new Date() },
		{
			id: 3,
			name: `Tomorrow, ${new Date(Date.now() + 86400000).toLocaleDateString()}`,
			value: new Date(Date.now() + 86400000),
		},
		{
			id: 4,
			name: `In 2 days, ${new Date(Date.now() + 2 * 86400000).toLocaleDateString()}`,
			value: new Date(Date.now() + 2 * 86400000),
		},
	]

	useEffect(() => {
		const fetchData = async () => {
			if (!id) return
			setIsLoading(true)
			try {
				const data = await getMovieDetails(id)
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

	const [selectedShowtime, setSelectedShowtime] = useState<string | null>(null)

	const handleClickBuyTicket = () => {
		if (selectedShowtime) {
			navigate(`/bookingTicket/${selectedShowtime}`)
		}
	}

	return (
		<>
			<LoadingScreen isLoading={isLoading} />

			{!isLoading && (
				<>
					{data?.trailerUrl && (
						<div className='c_videoplayer_container'>
							<VideoPlayer url={data?.trailerUrl ?? ''} />
						</div>
					)}

					<div className='c_container'>
						<div className='c_movie_details_container'>
							<div className='c_movie_details_img_container'>
								<img src={data?.imgUrl} alt='' />
							</div>

							<div className='c_movie_details_content_container'>
								<div className='c_movie_details_content_movie_title'>
									<span>{data?.title}</span>
									<span className='separator'>|</span>
									<span>{data?.ageRating}</span>
								</div>
								<p className='c_movie_details_content_title'>About</p>
								<p className='c_movie_details_content_about'>{data?.description}</p>

								<div className='c_movie_details_content'>
									<p className='movie_details'>
										Production:{' '}
										<span>
											{data?.productionCountry}, {data?.productionYear}
										</span>
									</p>
									<p className='movie_details'>
										Duration: <span>{formatDuration(data?.duration ?? 0)}</span>
									</p>
									<p className='movie_details'>
										Direction: <span>{data?.director}</span>
									</p>
									<p className='movie_details'>
										Genre: <span>{data?.genre}</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='c_container'>
						<h4 className='c_section_title mt-5 mb-3'>Cast</h4>
						<div className='c_movie_details_cast_list'>
							{data?.cast.map(actor => (
								<Actor
									key={actor.id}
									name={actor.name}
									imgUrl={actor.imgUrl}
									characterName={actor.characterName}
								/>
							))}
						</div>
						<div className='d-flex justify-content-between align-items-center mt-3'>
							<h4 className='c_section_title mb-0'>Showtimes</h4>

							<Select options={showtimesDays} icon={<FaRegCalendarAlt />} />
						</div>

						<div className='c_movie_details_showtimes_container'>
							{data && data?.showtimes.today.length > 0 && (
								<Showtime
									date={`Today ${format(new Date(), 'dd.MM.yyyy')}`}
									items={data.showtimes.today}
									selectedShowtime={selectedShowtime}
									setSelectedShowtime={setSelectedShowtime}
								/>
							)}
							{data && data?.showtimes.tomorrow.length > 0 && (
								<Showtime
									date={`Tomorrow ${format(addDays(new Date(), 1), 'dd.MM.yyyy')}`}
									items={data.showtimes.tomorrow}
									selectedShowtime={selectedShowtime}
									setSelectedShowtime={setSelectedShowtime}
								/>
							)}
							{data && data?.showtimes.dayAfterTomorrow.length > 0 && (
								<Showtime
									date={`Day after tomorrow ${format(addDays(new Date(), 1), 'dd.MM.yyyy')}`}
									items={data.showtimes.dayAfterTomorrow}
									selectedShowtime={selectedShowtime}
									setSelectedShowtime={setSelectedShowtime}
								/>
							)}

							{data &&
							!data.showtimes.today.length &&
							!data.showtimes.tomorrow.length &&
							!data.showtimes.dayAfterTomorrow.length ? (
								<EmptyShowtimes />
							) : (
								<div className='c_showtimes_buy_ticket_container mt-5 text-center'>
									<button
										className={`c_main_btn gradient px-5 ${
											selectedShowtime ? 'active' : 'disable'
										}`}
										onClick={handleClickBuyTicket}>
										Buy ticket
									</button>
								</div>
							)}
						</div>

						<h4 className='c_section_title mt-5 mb-3'>You might also like</h4>

						<div className='c_grid_4_container'>
							{data?.otherMovies.map(movie => (
								<Movie
									key={movie.id}
									id={movie.id}
									title={movie.title}
									imgUrl={movie.imgUrl}
									productionYear={movie.productionYear}
									genre={movie.genre}
									duration={movie.duration}
								/>
							))}
						</div>
					</div>
				</>
			)}
		</>
	)
}
