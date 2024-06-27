import React from 'react'

interface MovieInterface {
	id: number
	title: string
	img: string
	genre: string
	year: number
	time: string
}

const Movie: React.FC<MovieInterface> = ({ title, img, year, genre, time }) => {
	return (
		<div className='c_movie_container'>
			<div className='c_movie_img_container'>
				<img src={img} draggable={false} />
			</div>
			<div className='c_movie_desc'>
				<p className='c_movie_desc_details'>
					{year}/{genre}/{time}
				</p>
				<p className='c_movie_desc_title'>{title}</p>
			</div>
		</div>
	)
}

export default Movie
