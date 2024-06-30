import React from 'react'
import { IHomeShowtime, IMovie } from '../../types/types'
import { NavLink } from 'react-router-dom'

const formatDuration = (minutes: number): string => {
	const hours = Math.floor(minutes / 60)
	const remainingMinutes = minutes % 60
	return `${hours}h ${remainingMinutes}m`
}

const Movie: React.FC<IMovie | IHomeShowtime> = ({
	id,
	title,
	imgUrl,
	productionYear,
	genre,
	duration,
}) => {
	return (
		<NavLink to={`/movie/${id}`}>
			<div className='c_movie_container'>
				<div className='c_movie_img_container'>
					<img src={imgUrl} draggable={false} />
				</div>
				<div className='c_movie_desc'>
					<p className='c_movie_desc_details'>
						{productionYear}/{genre}/{formatDuration(duration)}
					</p>
					<p className='c_movie_desc_title'>{title}</p>
				</div>
			</div>
		</NavLink>
	)
}

export default Movie
