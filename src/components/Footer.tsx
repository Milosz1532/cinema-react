import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import appLogo from '../assets/images/logos/logo_light.png'

import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md'

export default function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<footer>
			<div className='c_container'>
				<div className='footer_content'>
					<div className='footer_col'>
						<div className='footer_logo'>
							<img src={appLogo} alt='logo' draggable='false' width={90} />
						</div>
						<p className='footer_desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, perspiciatis. Fuga
							voluptatibus saepe perspiciatis aliquam voluptatum. Aliquam, unde. Incidunt iusto
							magnam dolore optio maxime voluptatem! Doloribus facere amet qui magnam.
						</p>
					</div>
					<div className='footer_col'>
						<p className='footer_t_title'>Meet at Cinema</p>
						<ul>
							<li>About us</li>
							<li>Career</li>
							<li>Concession</li>
							<li>Privacy Policy</li>
							<li>Terns & Condition</li>
						</ul>
					</div>
					<div className='footer_col'>
						<p className='footer_t_title'>Contact Us</p>
						<ul>
							<li className='footer_col_li_icon'>
								<i>
									<MdLocalPhone />
								</i>
								+48 123 456 789
							</li>
							<li className='footer_col_li_icon'>
								<i>
									<MdEmail />
								</i>
								contact@cinema.com
							</li>
							<li className='footer_col_li_icon'>
								<i>
									<MdLocationOn />
								</i>
								ul. Warszawska 48, 87-800 Włocławek
							</li>
						</ul>
					</div>
					<div className='footer_col'>
						<p className='footer_t_title'>Follow us</p>
						<div className='footer_socials'>
							<i className='footer_social_icon'>
								<FaFacebook />
							</i>
							<i className='footer_social_icon'>
								<FaInstagram />
							</i>
							<i className='footer_social_icon'>
								<FaYoutube />
							</i>
						</div>
					</div>
				</div>

				<div className='footer_bottom'>
					<p>© {currentYear} Cinema. All rights reserved.</p>
					<p>Security</p>
					<p>Sitemap</p>
				</div>
			</div>
		</footer>
	)
}
