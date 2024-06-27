import React, { useRef, useState, useEffect } from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'
import Movie from './Home/Movie'

interface Movie {
	id: number
	title: string
	img: string
	year: number
	time: string
	genre: string
}

interface SliderProps {
	items: Movie[]
}

const Slider: React.FC<SliderProps> = ({ items }) => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [isAtStart, setIsAtStart] = useState(true)
	const [isAtEnd, setIsAtEnd] = useState(false)

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: -320,
				behavior: 'smooth',
			})
		}
	}

	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: 320,
				behavior: 'smooth',
			})
		}
	}

	const handleScroll = () => {
		if (sliderRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
			setIsAtStart(scrollLeft === 0)
			setIsAtEnd(scrollLeft + clientWidth >= scrollWidth)
		}
	}

	useEffect(() => {
		if (sliderRef.current) {
			sliderRef.current.addEventListener('scroll', handleScroll)
			handleScroll()

			return () => {
				if (sliderRef.current) {
					sliderRef.current.removeEventListener('scroll', handleScroll)
				}
			}
		}
	}, [])

	return (
		<div className='c_container c_slider_container'>
			<div className='c_slider' ref={sliderRef}>
				<div className={`slider-btn ${isAtStart ? 'hidden' : ''}`} onClick={scrollLeft}>
					<i>
						<TfiAngleLeft size={20} />
					</i>
				</div>

				<div className='c_slider_list'>
					{items.map(movie => (
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

				<div className={`slider-btn arrow-right ${isAtEnd ? 'hidden' : ''}`} onClick={scrollRight}>
					<i>
						<TfiAngleRight size={20} />
					</i>
				</div>
			</div>
		</div>
	)
}

export default Slider
