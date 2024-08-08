import React, { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

interface AuthRouteProps {
	children: ReactNode
	mustByLogin?: boolean
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children, mustByLogin }) => {
	const { isLoggedIn, isCheckingAuth } = useAuth()

	if (isCheckingAuth) {
		return <div></div>
	}

	if (isLoggedIn && mustByLogin) {
		return <>{children}</>
	} else if (isLoggedIn && !mustByLogin) {
		return <Navigate to='/' />
	} else if (!isLoggedIn && mustByLogin) {
		return <Navigate to='/sign-in' />
	} else if (!isLoggedIn && !mustByLogin) {
		return <>{children}</>
	}

	return
}

export default AuthRoute
