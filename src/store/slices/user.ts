import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
	userName: string | null
}

const initialState: UserState = {
	userName: null
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<UserState['userName']>) => {
			state.userName = action.payload
		}
	},
	selectors: {
		userName: (state) => state.userName
	}
})

export const { setUser } = userSlice.actions
export default userSlice
