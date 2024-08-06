import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { checkAuth } from '../services/cinemaAPI'

export interface AuthContextType {
	isLoggedIn: boolean
	logoutUser: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

	useEffect(() => {
		const checkUserAuth = async () => {
			try {
				const isAuthenticated = await checkAuth()
				setIsLoggedIn(isAuthenticated)
			} catch (error) {
				setIsLoggedIn(false)
			}
		}

		checkUserAuth()
	}, [])

	const logoutUser = async () => {
		try {
			setIsLoggedIn(false)
		} catch (error) {
			console.error('Logout failed', error)
		}
	}

	return <AuthContext.Provider value={{ isLoggedIn, logoutUser }}>{children}</AuthContext.Provider>
}
