import React from 'react'

const TicketsPage: React.FC = () => {
	return (
		<>
			<h4>Your tickets</h4>

			<div className='c_profile_ticket_list'>
				<div className='c_profile_ticket_box'>
					<div className='c_profile_ticket_box_img'>
						<img
							src='https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF1000,1000_QL80_.jpg'
							draggable={false}
						/>
					</div>
					<div className='c_profile_ticket_box_details'>
						<p className='c_profile_ticket_movie'>Interstellar</p>
						<p className='c_profile_ticket_desc'>
							"Wonka" (2023) is a whimsical and enchanting prequel that delves into the early life
							of Willy Wonka, the eccentric chocolatier beloved by generations. Directed by Paul
							King, known for his work on "Paddington," the film promises a magical journey into
							Wonka's past, exploring the inspirations and adventures that shaped his extraordinary
							career. From the creation of his iconic chocolate factory to encounters with peculiar
							characters and the discovery of his passion for confectionery, "Wonka" promises to
							captivate audiences with its imaginative storytelling and visual spectacle.
						</p>
						<p className='c_profile_ticket_time'>Date: 20.06.2024 8:00</p>
						<button className='c_main_btn gradient px-5 py-2'>Ticket</button>
					</div>
				</div>

				<div className='c_profile_ticket_box'>
					<div className='c_profile_ticket_box_img'>
						<img
							src='https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF1000,1000_QL80_.jpg'
							draggable={false}
						/>
					</div>
					<div className='c_profile_ticket_box_details'>
						<p className='c_profile_ticket_movie'>Interstellar</p>
						<p className='c_profile_ticket_desc'>
							"Wonka" (2023) is a whimsical and enchanting prequel that delves into the early life
							of Willy Wonka, the eccentric chocolatier beloved by generations. Directed by Paul
							King, known for his work on "Paddington," the film promises a magical journey into
							Wonka's past, exploring the inspirations and adventures that shaped his extraordinary
							career. From the creation of his iconic chocolate factory to encounters with peculiar
							characters and the discovery of his passion for confectionery, "Wonka" promises to
							captivate audiences with its imaginative storytelling and visual spectacle.
						</p>
						<p className='c_profile_ticket_time'>Date: 20.06.2024 8:00</p>
						<button className='c_main_btn gradient px-5 py-2'>Ticket</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default TicketsPage
