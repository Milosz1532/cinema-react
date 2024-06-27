import React from 'react'

import bannerImage from '../../assets/images/Banners/73174a43-b93f-4ec6-ab2b-039402fdfb96-width936-quality90.jpeg'
import movieLogo from '../../assets/images/Banners/wonka.png'

export default function Banner() {
	return (
		<div className='c_home_banner_container' style={{ backgroundImage: `url(${bannerImage})` }}>
			<div className='c_container'>
				<div className='c_home_baner_content'>
					<div className='c_home_banner_movie_logo'>
						<img src={movieLogo} />
					</div>
					<p className='c_home_banner_movie_data c_home_banner_movie_date'>15 Dec 2023 | 1h 57 m</p>
					<p className='c_home_banner_movie_data c_home_banner_movie_genre'>
						Genre: <span>Adventure, Fantastic</span>
					</p>
					<p className='c_home_banner_movie_data c_home_banner_movie_cast'>
						Cast: <span>Timothée Chalamet</span>
					</p>

					<p className='c_home_banner_movie_desc'>
						Mr Willy Wonka , who is one of the main characters in the story , is an extraordinary
						man. He is described by many as a chocolate making genius who relishes nonsense. He is
						an incredibly intelligent man and is very sharp and full of life.
					</p>
					<button className='c_main_btn gradient mt-3'>Buy a ticket</button>
				</div>
			</div>
		</div>
	)
}
