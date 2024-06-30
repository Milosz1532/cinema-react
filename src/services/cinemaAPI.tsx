import axios, { AxiosError } from 'axios'

const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
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
