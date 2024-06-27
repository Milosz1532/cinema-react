import Header from '../components/Header'

import Banner from '../components/Home/Banner'

import '../styles/home.scss'
import Select from '../components/Select'
import Movie from '../components/Home/Movie'

import KidsMovieSlider from '../components/Home/KidsMovieSlider'
import Slider from '../components/Slider'
import SaleSlider from '../components/Home/SaleSlider'
import Footer from '../components/Footer'

export default function HomePage() {
	const movieTypes = [
		{ id: 1, name: 'All', value: 'all' },
		{ id: 2, name: '3D', value: '3d' },
		{ id: 3, name: '2D', value: '2d' },
	]

	const movieArray = [
		{
			id: 1,
			title: 'Wonka',
			img: 'https://fwcdn.pl/fpo/87/83/868783/8102088_1.3.jpg',
			year: 2023,
			time: '2h 28m',
			genre: 'Fantasy',
		},
		{
			id: 2,
			title: 'Interstellar',
			img: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg',
			year: 2014,
			time: '2h 49m',
			genre: 'Sci-Fi',
		},
		{
			id: 3,
			title: 'The Dark Knight',
			img: 'https://m.media-amazon.com/images/I/91KkWf50SoL._AC_UF1000,1000_QL80_.jpg',
			year: 2008,
			time: '2h 32m',
			genre: 'Action, Crime, Drama',
		},
		{
			id: 4,
			title: 'Pulp Fiction',
			img: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg',
			year: 1994,
			time: '2h 58m',
			genre: 'Crime, Drama',
		},
		{
			id: 5,
			title: 'The Shawshank Redemption',
			img: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
			year: 1994,
			time: '2h 22m',
			genre: 'Drama',
		},
	]

	const kidsMovieArray = [
		{
			id: 1,
			title: 'Frozen',
			img: 'https://upload.wikimedia.org/wikipedia/en/0/05/Frozen_%282013_film%29_poster.jpg',
			year: 2013,
			time: '1h 42m',
			genre: 'Animation, Adventure, Comedy',
		},
		{
			id: 2,
			title: 'Toy Story',
			img: 'https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg',
			year: 1995,
			time: '1h 21m',
			genre: 'Animation, Adventure, Comedy',
		},
		{
			id: 3,
			title: 'The Lion King',
			img: 'https://upload.wikimedia.org/wikipedia/en/3/3d/The_Lion_King_poster.jpg',
			year: 1994,
			time: '1h 28m',
			genre: 'Animation, Adventure, Drama',
		},
		{
			id: 4,
			title: 'Finding Nemo',
			img: 'https://upload.wikimedia.org/wikipedia/en/2/29/Finding_Nemo.jpg',
			year: 2003,
			time: '1h 40m',
			genre: 'Animation, Adventure, Comedy',
		},
		{
			id: 5,
			title: 'Moana',
			img: 'https://upload.wikimedia.org/wikipedia/en/2/26/Moana_Teaser_Poster.jpg',
			year: 2016,
			time: '1h 47m',
			genre: 'Animation, Adventure, Comedy',
		},
		{
			id: 6,
			title: 'Zootopia',
			img: 'https://m.media-amazon.com/images/S/pv-target-images/0ecb745d03d6656e19c12acc7fe9f7a7ba6336a0f2d2c202aff94a8335f00aae.jpg',
			year: 2016,
			time: '1h 48m',
			genre: 'Animation, Adventure, Comedy',
		},
		{
			id: 7,
			title: 'Despicable Me',
			img: 'https://m.media-amazon.com/images/I/61782AdwEFL._AC_UF894,1000_QL80_.jpg',
			year: 2010,
			time: '1h 35m',
			genre: 'Animation, Comedy, Family',
		},
		{
			id: 8,
			title: 'Coco',
			img: 'https://upload.wikimedia.org/wikipedia/en/9/98/Coco_%282017_film%29_poster.jpg',
			year: 2017,
			time: '1h 45m',
			genre: 'Animation, Adventure, Family',
		},
		{
			id: 9,
			title: 'Inside Out',
			img: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Inside_Out_%282015_film%29_poster.jpg',
			year: 2015,
			time: '1h 35m',
			genre: 'Animation, Adventure, Comedy',
		},
		{
			id: 10,
			title: 'Ratatouille',
			img: 'https://upload.wikimedia.org/wikipedia/en/5/50/RatatouillePoster.jpg',
			year: 2007,
			time: '1h 51m',
			genre: 'Animation, Adventure, Comedy',
		},
	]

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

	return (
		<>
			<Header />
			<Banner />

			<div className='c_container'>
				<div className='c_home_movies_container_filters'>
					<div className='c_home_movies_container_filters_left'>
						<p className='active'>Today</p>
						<p>Tomorrow</p>
						<p>Coming Soon</p>
					</div>
					<div className='c_home_movies_container_filters_right'>
						<Select options={movieTypes} />
					</div>
				</div>
			</div>

			<div className='c_container'>
				<div className='c_grid_4_container'>
					{movieArray.map(movie => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							img={movie.img}
							year={movie.year}
							genre={movie.genre}
							time={movie.time}
						/>
					))}
				</div>
			</div>

			<KidsMovieSlider kidsMovieArray={kidsMovieArray} />

			<div className='c_container mt-5'>
				<h4 className='c_section_title'>Top 5 to this week</h4>
				<Slider items={kidsMovieArray} />
			</div>

			<div className='c_container mt-5'>
				<h4 className='c_section_title'>Sales</h4>
				<SaleSlider items={salesArray} />
			</div>

			<Footer />
		</>
	)
}
