import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { checkAuth } from '../services/cinemaAPI'

export interface AuthContextType {
	isLoggedIn: boolean
	isCheckingAuth: boolean
	loginUser: () => void
	logoutUser: () => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
	const [isCheckingAuth, setIsCheckingAuth] = useState<boolean>(true)

	useEffect(() => {
		const checkUserAuth = async () => {
			try {
				const isAuthenticated = await checkAuth()
				setIsLoggedIn(isAuthenticated)
			} catch (error) {
				setIsLoggedIn(false)
			} finally {
				setIsCheckingAuth(false)
			}
		}

		checkUserAuth()
	}, [])

	const loginUser = () => {
		setIsLoggedIn(true)
	}

	const logoutUser = async () => {
		try {
			setIsLoggedIn(false)
		} catch (error) {
			console.error('Logout failed', error)
		}
	}

	return (
		<AuthContext.Provider value={{ isLoggedIn, isCheckingAuth, loginUser, logoutUser }}>
			{children}
		</AuthContext.Provider>
	)
}
