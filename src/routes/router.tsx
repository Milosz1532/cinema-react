import { createBrowserRouter } from 'react-router-dom'

import DefaultLayout from '../layouts/DefaultLayout'

// import NotFound from '../views/NotFound'
import HomePage from '../views/HomePage'
import MovieDetailsPage from '../views/MovieDetailsPage'
import BookingTicketPage from '../views/BookingTicketPage'
import LoginPage from '../views/Auth/LoginPage'
import RegisterPage from '../views/Auth/RegisterPage'

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
				path: '/sign-in',
				element: <LoginPage />,
			},
			{
				path: '/sign-up',
				element: <RegisterPage />,
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
