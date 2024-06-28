import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function DefaultLayout() {
	return (
		<div id='defaultLayout'>
			<Header />
			<div className='content'>
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}
