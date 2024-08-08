import { createBrowserRouter } from 'react-router-dom'

import DefaultLayout from '../layouts/DefaultLayout'

// import NotFound from '../views/NotFound'
import HomePage from '../views/HomePage'
import MovieDetailsPage from '../views/MovieDetailsPage'
import BookingTicketPage from '../views/BookingTicketPage'
import LoginPage from '../views/Auth/LoginPage'
import RegisterPage from '../views/Auth/RegisterPage'
import AuthRoute from './AuthRoute'
import ProfileLayout from '../layouts/ProfileLayout'
import PersonalPage from '../views/Profile/PersonalPage'
import OrderHistoryPage from '../views/Profile/OrderHistoryPage'
import TicketsPage from '../views/Profile/TicketsPage'
import ChangePasswordPage from '../views/Profile/ChangePasswordPage'

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
				element: (
					<AuthRoute mustByLogin={false}>
						<LoginPage />
					</AuthRoute>
				),
			},
			{
				path: '/sign-up',
				element: (
					<AuthRoute mustByLogin={false}>
						<RegisterPage />
					</AuthRoute>
				),
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
	{
		element: (
			<AuthRoute mustByLogin={true}>
				<ProfileLayout />
			</AuthRoute>
		),
		children: [
			{
				path: '/profile/personalData',
				element: <PersonalPage />,
			},
			{
				path: '/profile/orderHistory',
				element: <OrderHistoryPage />,
			},
			{
				path: '/profile/tickets',
				element: <TicketsPage />,
			},
			{
				path: '/profile/changePassword',
				element: <ChangePasswordPage />,
			},
		],
	},

	// {
	// 	path: '*',
	// 	element: <NotFound />,
	// },
])

export default router
