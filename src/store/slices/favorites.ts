import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Film } from '../../types/film'

interface FavoritesState {
	films: Film[]
}

const initialState: FavoritesState = {
	films: []
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFilm: (state, action: PayloadAction<Film>) => {
			const id = action.payload['#IMDB_ID']
			if (state.films.find((f) => f['#IMDB_ID'] === id)) {
				state.films = state.films.filter((f) => f['#IMDB_ID'] !== id)
			} else {
				state.films.push(action.payload)
			}
		},
		clearFavorites: (state) => {
			state.films = []
		}
	},
	selectors: {
		films: (state) => state.films
	}
})

export const { toggleFilm, clearFavorites } = favoritesSlice.actions
export default favoritesSlice
