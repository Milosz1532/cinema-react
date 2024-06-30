import React, { useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import Lottie from 'lottie-react'
import loadingAnimation from '../assets/animations/loading-animation.json'
import '../styles/loading.scss'

interface Props {
	isLoading: boolean
}

const LoadingScreen: React.FC<Props> = ({ isLoading }) => {
	const nodeRef = useRef(null)

	useEffect(() => {
		if (isLoading) {
			document.body.classList.add('no-scroll')
		} else {
			document.body.classList.remove('no-scroll')
		}

		return () => {
			document.body.classList.remove('no-scroll')
		}
	}, [isLoading])

	return (
		<CSSTransition
			in={isLoading}
			timeout={300}
			classNames='c_loading_anim'
			unmountOnExit
			nodeRef={nodeRef}>
			<div className='c_loading_container' ref={nodeRef}>
				<Lottie animationData={loadingAnimation} loop={true} />
				<h4>Loading Movies</h4>
			</div>
		</CSSTransition>
	)
}

export default LoadingScreen
