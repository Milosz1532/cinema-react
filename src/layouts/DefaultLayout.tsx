import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

export default function DefaultLayout() {
	return (
		<div id='defaultLayout'>
			<ScrollToTop />
			<Header />
			<div className='content'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}
