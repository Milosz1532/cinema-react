import axios, { AxiosError } from 'axios'
import { IUser, IUserDetails } from '../types/types'

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	withCredentials: true,
})

axiosClient.interceptors.response.use(
	response => {
		return response
	},
	error => {
		if (!error.response || !error.response.status) {
			const customError = {
				success: false,
				message: 'There was a problem connecting to the server.',
				isConnectionError: true,
			}
			throw customError
		}
		if (error.response.status === 401) {
			//not authorized
		}
		throw error
	}
)

axiosClient.interceptors.request.use(config => {
	const preferredLanguage = 'pl'
	if (preferredLanguage) {
		config.headers['X-localization'] = preferredLanguage
	}

	return config
})

export const login = async (email: string, password: string) => {
	try {
		const response = await axiosClient.post('auth/login', { email, password })
		return response
	} catch (error) {
		if (error instanceof AxiosError && error.response) {
			throw error.response.data.message
		} else {
			throw error
		}
	}
}

export const register = async (email: string, password: string) => {
	try {
		const response = await axiosClient.post('auth/register', { email, password })
		return response.data
	} catch (error) {
		if (error instanceof AxiosError && error.response) {
			throw error.response.data
		} else {
			throw error
		}
	}
}

export const checkAuth = async (): Promise<IUser | null> => {
	try {
		const response = await axiosClient.get('auth/check')
		if (response) {
			return response.data
		} else {
			return null
		}
	} catch {
		return null
	}
}

export const getHomePageData = async () => {
	try {
		const response = await axiosClient.get(`home/`)
		return response.data
	} catch (error) {
		if (error instanceof AxiosError && error.response) {
			throw error.response.data
		} else {
			throw error
		}
	}
}

export const getMovieDetails = async (id: string) => {
	try {
		const response = await axiosClient.get(`/movies/${id}`)
		return response.data
	} catch (error) {
		if (error instanceof AxiosError && error.response) {
			throw error.response.data
		} else {
			throw error
		}
	}
}

export const getShowtimeDetails = async (id: string) => {
	try {
		const response = await axiosClient.get(`/showtime/${id}`)
		return response.data
	} catch (error) {
		if (error instanceof AxiosError && error.response) {
			throw error.response.data
		} else {
			throw error
		}
	}
}

export const getUserDetails = async (): Promise<IUserDetails> => {
	try {
		const response = await axiosClient.get('/user/details')
		return response.data
	} catch (error) {
		if (error instanceof AxiosError && error.response) {
			throw new Error(error.response.data.message)
		} else {
			throw new Error('Unexpected error')
		}
	}
}

export const updateUserDetails = async (payload: IUserDetails): Promise<boolean> => {
	try {
		await axiosClient.put('/user/details', payload)
		return true
	} catch (error) {
		if (error instanceof AxiosError && error.response) {
			throw new Error(error.response.data.message)
		} else {
			throw new Error('Unexpected error')
		}
	}
}
