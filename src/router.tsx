import { createBrowserRouter } from 'react-router-dom'
import { ROUTE_PATH } from './const'
import Default from './layouts/Default/Default'
import Main from './pages/Main/Main'
import Login from './pages/Login/Login'
import Favorites from './pages/Favorites/Favorites'
import Film, { filmLoader } from './pages/Film/Film'
import Error from './pages/Error/Error'
import Private from './layouts/Private/Private'

const router = createBrowserRouter([
	{
		path: ROUTE_PATH.Main,
		element: <Default />,
		children: [
			{
				index: true,
				element: (
					<Private>
						<Main />
					</Private>
				)
			},
			{
				path: ROUTE_PATH.Login,
				element: <Login />
			},
			{
				path: ROUTE_PATH.Favorites,
				element: (
					<Private>
						<Favorites />
					</Private>
				)
			},
			{
				path: ROUTE_PATH.Film,
				element: (
					<Private>
						<Film />
					</Private>
				),
				errorElement: <Error />,
				loader: filmLoader
			},
			{
				path: ROUTE_PATH.Error,
				element: <Error />
			}
		]
	}
])

export default router
