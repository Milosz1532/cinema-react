import React from 'react'
import { IMovie } from '../../types/types'

const Movie: React.FC<IMovie> = ({ title, imgUrl, productionYear, genre, duration }) => {
	return (
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
	)
}

export default Movie
