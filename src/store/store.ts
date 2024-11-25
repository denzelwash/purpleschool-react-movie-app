import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { favoritesSlice } from './slices/favorites'
import userSlice from './slices/user'
import { User } from '../types/user'
import loadState from '../utils/loadState'
import saveState from '../utils/saveState'

export const store = configureStore({
	reducer: {
		[favoritesSlice.name]: favoritesSlice.reducer,
		[userSlice.name]: userSlice.reducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

store.subscribe(() => {
	const userName = store.getState()[userSlice.name].userName
	const favorites = store.getState()[favoritesSlice.name].films
	let users = loadState<User[]>('users')
	if (userName) {
		if (users) {
			const user = users.find((u) => u.name === userName)
			if (user) {
				users = users.map((u) => (u.name === userName ? { ...u, isLogined: true, favorites: favorites } : u))
			} else {
				users.push({ name: userName, isLogined: true })
			}
			saveState(users, 'users')
		} else {
			saveState([{ name: userName, isLogined: true }], 'users')
		}
	}
	if (!userName) {
		if (users) {
			users = users.map((u) => ({ ...u, isLogined: false }))
			saveState(users, 'users')
		} else {
			saveState([{ name: userName, isLogined: false }], 'users')
		}
	}
})
