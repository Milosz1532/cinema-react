import { createBrowserRouter } from 'react-router-dom'

import DefaultLayout from '../layouts/DefaultLayout'

// import NotFound from '../views/NotFound'
import HomePage from '../views/HomePage'
import MovieDetailsPage from '../views/MovieDetailsPage'
import BookingTicketPage from '../views/BookingTicketPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},

			{
				path: '/movie/:id',
				element: <MovieDetailsPage />,
			},
			{
				path: '/bookingTicket/:id',
				element: <BookingTicketPage />,
			},
		],
	},

	// {
	// 	path: '*',
	// 	element: <NotFound />,
	// },
])

export default router
