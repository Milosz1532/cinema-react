import { Link, Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import { FaUserCircle } from 'react-icons/fa'
import '../styles/profile.scss'
import { useAuth } from '../hooks/useAuth'

interface NavItem {
	path: string
	label: string
}

interface ProfileNavigationProps {
	logoutUser: () => void
}

const ProfileNavigation: React.FC<ProfileNavigationProps> = ({ logoutUser }) => {
	const location = useLocation()

	const navItems: NavItem[] = [
		{ path: '/profile/personalData', label: 'Personal Data' },
		{ path: '/profile/orderHistory', label: 'Order History' },
		{ path: '/profile/tickets', label: 'Tickets' },
		{ path: '/profile/changePassword', label: 'Change Password' },
	]

	return (
		<div className='c_profile_navigation'>
			<ul>
				{navItems.map(item => (
					<Link key={item.path} to={item.path}>
						<li className={location.pathname === item.path ? 'active' : ''}>{item.label}</li>
					</Link>
				))}
				<li onClick={logoutUser}>Log out</li>
			</ul>
		</div>
	)
}

const ProfileLayout: React.FC = () => {
	const { logoutUser } = useAuth()

	return (
		<div id='defaultLayout'>
			<ScrollToTop />
			<Header />
			<div className='c_profile_container'>
				<div className='c_profile_top_section'>
					<div className='c_profile_icon_container'>
						<i>
							<FaUserCircle />
						</i>
					</div>
				</div>
				<div className='c_profile_bottom_section'>
					<ProfileNavigation logoutUser={logoutUser} />
					<div className='c_profile_content'>
						<Outlet />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ProfileLayout
