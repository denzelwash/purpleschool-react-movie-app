import { createBrowserRouter } from 'react-router-dom'
import { ROUTE_PATH } from './const'
import Default from './layouts/Default/Default'
import Main from './pages/Main/Main'
import Login from './pages/Login/Login'
import Favorites from './pages/Favorites/Favorites'
import Film from './pages/Film/Film'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
	{
		path: ROUTE_PATH.Main,
		element: <Default />,
		children: [
			{
				index: true,
				element: <Main />
			},
			{
				path: ROUTE_PATH.Login,
				element: <Login />
			},
			{
				path: ROUTE_PATH.Favorites,
				element: <Favorites />
			},
			{
				path: ROUTE_PATH.Film,
				element: <Film />
			},
			{
				path: ROUTE_PATH.Error,
				element: <Error />
			}
		]
	}
])

export default router
