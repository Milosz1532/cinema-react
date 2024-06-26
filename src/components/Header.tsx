import appLogo from '../assets/images/logos/logo-no-background.png'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { IoSearchOutline } from 'react-icons/io5'
import { RxHamburgerMenu } from 'react-icons/rx'

import '../styles/header.scss'

const Header = () => {
	return (
		<nav className='c_main_header'>
			<div className='c_main_header_right_section'>
				<div className='c_nav_logo_container'>
					<img src={appLogo} alt='logo' draggable='false' />
					<h2 className='c_nav_logo_title'>Cienma</h2>
				</div>
			</div>
			<div className='c_main_header_content'>
				<div className='c_main_header_center_section'>
					<ul className='c_main_header_nav_list'>
						<li>Repertoire</li>
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
					<button className='c_main_btn bordered'>Log in</button>
					<button className='c_main_btn gradient ms-4'>Sign up</button>
				</div>
			</div>

			<div className='c_main_header_mobile_menu'>
				<RxHamburgerMenu size={25} />
			</div>
		</nav>
	)
}

export default Header
