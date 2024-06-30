import VideoPlayer from '../components/VideoPlayer'

import '../styles/movieDetails.scss'

import Icon2D from '../assets/images/MovieDetails/2d-icon.png'
import Actor from '../components/Actor'
import Select from '../components/Select'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { useState } from 'react'

export default function MovieDetailsPage() {
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

	const [selectedShowtime, setSelectedShowtime] = useState<string | null>(null)

	const showtimeArray = [
		{ id: '1', time: '10:00', movieType: '2D', lang: 'Dubbing pl' },
		{ id: '2', time: '12:00', movieType: '2D', lang: 'Dubbing pl' },
		{ id: '3', time: '14:00', movieType: '2D', lang: 'Dubbing pl' },
		{ id: '4', time: '17:00', movieType: '2D', lang: 'Dubbing pl' },
	]

	return (
		<>
			<div className='c_videoplayer_container'>
				<VideoPlayer url={'https://www.youtube.com/watch?v=otNh9bTjXWg'} />
			</div>

			<div className='c_container'>
				<div className='c_movie_details_container'>
					<div className='c_movie_details_img_container'>
						<img src='https://fwcdn.pl/fpo/87/83/868783/8102088_1.3.jpg' alt='' />
					</div>

					<div className='c_movie_details_content_container'>
						<div className='c_movie_details_content_movie_title'>
							<span>Wonka</span>
							<span className='separator'>|</span>
							<span>12 +</span>
							<span className='separator'>|</span>
							<img src={Icon2D} draggable={false} />
						</div>
						<p className='c_movie_details_content_title'>About</p>
						<p className='c_movie_details_content_about'>
							"Wonka" (2023) is a whimsical and enchanting prequel that delves into the early life
							of Willy Wonka, the eccentric chocolatier beloved by generations. Directed by Paul
							King, known for his work on "Paddington," the film promises a magical journey into
							Wonka's past, exploring the inspirations and adventures that shaped his extraordinary
							career. From the creation of his iconic chocolate factory to encounters with peculiar
							characters and the discovery of his passion for confectionery, "Wonka" promises to
							captivate audiences with its imaginative storytelling and visual spectacle.
						</p>

						<div className='c_movie_details_content'>
							<p className='movie_details'>
								Production: <span>USA, 2023</span>
							</p>
							<p className='movie_details'>
								Duration: <span>1h 57m</span>
							</p>
							<p className='movie_details'>
								Direction: <span>Jan Kowalski</span>
							</p>
							<p className='movie_details'>
								Genre: <span>Adventure, Fastastic</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='c_container'>
				<h4 className='c_section_title mt-5 mb-3'>Cast</h4>
				<div className='c_movie_details_cast_list'>
					<Actor
						id={1}
						name='Timothée Chalamet'
						imgUrl='https://cdn.britannica.com/36/231936-050-63D849FB/Timothee-Chalamet-2021.jpg'
						characterName='Willy Wonka'
					/>
					<Actor
						id={1}
						name='Timothée Chalamet'
						imgUrl='https://cdn.britannica.com/36/231936-050-63D849FB/Timothee-Chalamet-2021.jpg'
						characterName='Willy Wonka'
					/>
					<Actor
						id={1}
						name='Timothée Chalamet'
						imgUrl='https://cdn.britannica.com/36/231936-050-63D849FB/Timothee-Chalamet-2021.jpg'
						characterName='Willy Wonka'
					/>
				</div>
				<div className='d-flex justify-content-between align-items-center mt-3'>
					<h4 className='c_section_title'>Showtimes</h4>

					<Select options={showtimesDays} icon={<FaRegCalendarAlt />} />
				</div>
				<div className='c_movie_details_showtimes_container'>
					<div className='c_showtimes_container_date'>
						<i className='me-3'>
							<FaRegCalendarAlt size={20} />
						</i>
						<h5>Today, 30.06.2024</h5>
					</div>

					<div className='c_showtimes_container_times'>
						{showtimeArray.map(el => (
							<button
								key={el.id}
								className={`c_showtime_btn ${selectedShowtime == el.id ? 'active' : ''}`}
								onClick={() => setSelectedShowtime(el.id)}>
								<div className='c_showtime_btn_time'>
									<span>{el.time}</span>
								</div>
								<div className='c_showtime_btn_desc'>
									{el.movieType}, {el.lang}
								</div>
							</button>
						))}
					</div>
				</div>
				<div className='c_showtimes_buy_ticket_container mt-5 text-center'>
					<button className={`c_main_btn gradient px-5 ${selectedShowtime ? 'active' : 'disable'}`}>
						Buy ticket
					</button>
				</div>

				<h4 className='c_section_title mt-5 mb-3'>You might also like</h4>

				<div className='c_grid_4_container'>
					{/* {otherMoviesList.map(movie => (
						<Movie
							key={movie.id}
							id={movie.movieId}
							title={movie.title}
							imgUrl={movie.imgUrl}
							productionYear={movie.productionYear}
							genre={movie.genre}
							duration={movie.duration}
						/>
					))} */}
				</div>
			</div>
		</>
	)
}
