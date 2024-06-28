import React from 'react'
import { IHomeShowtime, IMovie } from '../../types/types'
import { Link } from 'react-router-dom'

const Movie: React.FC<IMovie | IHomeShowtime> = ({
	id,
	title,
	imgUrl,
	productionYear,
	genre,
	duration,
}) => {
	return (
		<Link to={`movie/${id}`}>
			<div className='c_movie_container'>
				<div className='c_movie_img_container'>
					<img src={imgUrl} draggable={false} />
				</div>
				<div className='c_movie_desc'>
					<p className='c_movie_desc_details'>
						{productionYear}/{genre}/{duration}
					</p>
					<p className='c_movie_desc_title'>{title}</p>
				</div>
			</div>
		</Link>
	)
}

export default Movie
