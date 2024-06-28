import Header from '../components/Header'

import Banner from '../components/Home/Banner'

import '../styles/home.scss'
import Select from '../components/Select'
import Movie from '../components/Home/Movie'

import KidsMovieSlider from '../components/Home/KidsMovieSlider'
import Slider from '../components/Slider'
import SaleSlider from '../components/Home/SaleSlider'
import Footer from '../components/Footer'

import LoadingScreen from '../components/LoadingScreen'

import { getHomePageData } from '../services/cinemaAPI'
import { useEffect, useState } from 'react'

import emptyMoviesIcon from '../assets/images/Home/empty-movie-array.svg'

import * as types from '../types/types'

export default function HomePage() {
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [homeData, setHomeData] = useState<types.IHomeData | null>(null)

	const [showtimeSelectedValue, setShowtimeSelectedValue] = useState<number>(1)
	const [showtimeArray, setShowtimeArray] = useState<types.IMovie[] | null>(null)

	const movieTypes = [
		{ id: 1, name: 'All', value: 'all' },
		{ id: 2, name: '3D', value: '3d' },
		{ id: 3, name: '2D', value: '2d' },
	]

	useEffect(() => {
		const fetchHomePageData = async () => {
			try {
				const data = await getHomePageData()
				console.log(data)
				if (data) {
					setHomeData(data)
					setTimeout(() => {
						setIsLoading(false)
						setShowtimeArray(data.showtime.today)
					}, 1000)
				}
			} catch {
				// ERROR
			}
		}
		fetchHomePageData()
	}, [])

	const salesArray = [
		{
			id: 1,
			img: 'https://multikino.pl/-/media/images/news/grudzien21_zmiana_cen/plac_taniej_online/taniej_online_k.jpg?w=640&h=360',
			url: '',
		},
		{
			id: 2,
			img: 'https://multikino.pl/-/media/images/news/karta-podarunkowa/news_giftcard_l.jpg?w=640&h=360',
			url: '',
		},
		{
			id: 3,
			img: 'https://multikino.pl/-/media/images/news/karta-podarunkowa/news_giftcard_l.jpg?w=640&h=360',
			url: '',
		},
		{
			id: 4,
			img: 'https://multikino.pl/-/media/images/news/karta-podarunkowa/news_giftcard_l.jpg?w=640&h=360',
			url: '',
		},
		{
			id: 5,
			img: 'https://multikino.pl/-/media/images/news/karta-podarunkowa/news_giftcard_l.jpg?w=640&h=360',
			url: '',
		},
		{
			id: 6,
			img: 'https://multikino.pl/-/media/images/news/karta-podarunkowa/news_giftcard_l.jpg?w=640&h=360',
			url: '',
		},
		{
			id: 7,
			img: 'https://multikino.pl/-/media/images/news/karta-podarunkowa/news_giftcard_l.jpg?w=640&h=360',
			url: '',
		},
	]

	useEffect(() => {
		if (!homeData) return
		if (showtimeSelectedValue == 1) {
			setShowtimeArray(homeData.showtime.today)
		} else if (showtimeSelectedValue == 2) {
			setShowtimeArray(homeData.showtime.tomorrow)
		} else {
			setShowtimeArray([])
		}
		console.log(showtimeArray)
	}, [showtimeSelectedValue])

	const handleChangeShowtimeValue = (state: number) => {
		setShowtimeSelectedValue(state)
	}

	return (
		<>
			<LoadingScreen isLoading={isLoading} />

			{!isLoading && (
				<>
					<Header />
					<Banner />

					<div className='c_container'>
						<div className='c_home_movies_container_filters'>
							<div className='c_home_movies_container_filters_left'>
								<p
									onClick={() => handleChangeShowtimeValue(1)}
									className={showtimeSelectedValue === 1 ? 'active' : ''}>
									Today
								</p>
								<p
									onClick={() => handleChangeShowtimeValue(2)}
									className={showtimeSelectedValue === 2 ? 'active' : ''}>
									Tomorrow
								</p>
								<p
									onClick={() => handleChangeShowtimeValue(3)}
									className={showtimeSelectedValue === 3 ? 'active' : ''}>
									Coming Soon
								</p>
							</div>
							<div className='c_home_movies_container_filters_right'>
								<Select options={movieTypes} />
							</div>
						</div>
					</div>

					<div className='c_container'>
						{showtimeArray && showtimeArray.length > 0 ? (
							<div className='c_grid_4_container'>
								{showtimeArray.map(movie => (
									<Movie
										key={movie._id}
										_id={movie._id}
										title={movie.title}
										imgUrl={movie.imgUrl}
										productionYear={movie.productionYear}
										genre={movie.genre}
										duration={movie.duration}
									/>
								))}
							</div>
						) : (
							<div className='c_home_empty_container'>
								<h4>We didn't find any movies</h4>
								<div className='c_home_empty_img_container'>
									<img src={emptyMoviesIcon} draggable={false} />
								</div>
							</div>
						)}
					</div>

					<KidsMovieSlider kidsMovieArray={homeData && homeData.kidsRepertoire} />

					<div className='c_container mt-5'>
						<h4 className='c_section_title'>Top 5 to this week</h4>
						<Slider items={homeData && homeData.kidsRepertoire} />
					</div>

					<div className='c_container mt-5'>
						<h4 className='c_section_title'>Sales</h4>
						<SaleSlider items={salesArray} />
					</div>

					<Footer />
				</>
			)}
		</>
	)
}
