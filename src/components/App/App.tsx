import { RouterProvider } from 'react-router-dom'
import router from '../../router'
import { Toaster } from 'sonner'
import { User } from '../../types/user'
import loadState from '../../utils/loadState'
import { useAppDispatch } from '../../store/store'
import { setUser } from '../../store/slices/user'
import { setFavorites } from '../../store/slices/favorites'

function App() {
	const dispath = useAppDispatch()
	const localStorageUsers = loadState<User[]>('users')
	if (localStorageUsers) {
		const activeUser = localStorageUsers.find((u) => u.isLogined)
		if (activeUser) {
			dispath(setUser(activeUser.name))
			if (activeUser.favorites) {
				dispath(setFavorites(activeUser.favorites))
			}
		}
	}

	return (
		<>
			<RouterProvider router={router} />
			<Toaster />
		</>
	)
}

export default App
