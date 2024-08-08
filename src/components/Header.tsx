import appLogo from '../assets/images/logos/logo_light.png'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoSearchOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FaUserCircle } from 'react-icons/fa'

import '../styles/header.scss'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Header: React.FC = () => {
	const { isLoggedIn } = useAuth()

	return (
		<nav className='c_navbar'>
			<div className='c_container'>
				<nav className='c_main_header'>
					<div className='c_main_header_right_section'>
						<Link to='/'>
							<div className='c_nav_logo_container'>
								<img src={appLogo} alt='logo' draggable='false' />
							</div>
						</Link>
					</div>
					<div className='c_main_header_content'>
						<div className='c_main_header_center_section'>
							<ul className='c_main_header_nav_list'>
								<NavLink to={'/'}>
									<li>Repertoire</li>
								</NavLink>
								<li>Events</li>
								<li>Sale</li>
								<li>News</li>
								<li>About us</li>
							</ul>
						</div>
						<div className='c_main_header_left_section'>
							<div className='c_main_header_search_icon'>
								<IoSearchOutline size={20} />
							</div>

							<div className='c_main_header_lang_select mx-4'>
								<span>EN</span>
								<MdOutlineKeyboardArrowDown size={25} />
							</div>

							{!isLoggedIn ? (
								<>
									<NavLink to={'/sign-in'}>
										<button className='c_main_btn bordered'>Log in</button>
									</NavLink>

									<NavLink to={'/sign-up'}>
										<button className='c_main_btn gradient ms-4'>Sign up</button>
									</NavLink>
								</>
							) : (
								<NavLink to={'/profile/personalData'}>
									<div className='c_main_header_profile'>
										<i>
											<FaUserCircle size={20} />
										</i>
										<span>Profil</span>
									</div>
								</NavLink>
							)}
						</div>
					</div>

					<div className='c_main_header_mobile_menu'>
						<RxHamburgerMenu size={25} />
					</div>
				</nav>
			</div>
		</nav>
	)
}

export default Header
