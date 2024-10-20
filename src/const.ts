/* eslint-disable no-unused-vars */
export const ROUTE_PATH = {
	Main: '/',
	Login: 'login',
	Favorites: 'favorites',
	Film: 'film/:id',
	Error: '*'
} as const

export enum RequestStatus {
	Idle = 'Idle',
	Loading = 'Loading',
	Success = 'Success',
	Failed = 'Failed'
}
