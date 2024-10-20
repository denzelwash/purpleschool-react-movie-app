import axios, { AxiosError, AxiosInstance } from 'axios'
import { toast } from 'sonner'

const API_URL = 'https://search.imdbot.workers.dev'
const REQUEST_TIMEOUT = 5000

const api = ((): AxiosInstance => {
	const instance = axios.create({
		baseURL: API_URL,
		timeout: REQUEST_TIMEOUT
	})

	instance.interceptors.response.use(null, (error) => {
		if (error instanceof AxiosError) {
			toast.error(error.message, {
				position: 'top-right'
			})
		}
	})

	return instance
})()

export default api
