import React, { useRef, useState, useEffect } from 'react'
import { TfiAngleLeft, TfiAngleRight } from 'react-icons/tfi'

interface Sale {
	id: number
	img: string
	url: string
}

interface SaleSliderProps {
	items: Sale[]
}

const SaleSlider: React.FC<SaleSliderProps> = ({ items }) => {
	const sliderRef = useRef<HTMLDivElement>(null)
	const [isAtStart, setIsAtStart] = useState(true)
	const [isAtEnd, setIsAtEnd] = useState(false)

	const scrollLeft = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: -sliderRef.current.clientWidth,
				behavior: 'smooth',
			})
		}
	}

	const scrollRight = () => {
		if (sliderRef.current) {
			sliderRef.current.scrollBy({
				left: sliderRef.current.clientWidth,
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
					{items.map(sale => (
						<div key={sale.id} className='c_slider_sale_el'>
							<img src={sale.img} alt='' />

							<div className='c_slider_sale_el_hover'>
								<p>See more</p>
							</div>
						</div>
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

export default SaleSlider
