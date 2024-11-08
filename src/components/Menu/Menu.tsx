import style from './Menu.module.scss'
import styleMenuItem from '../MenuItem/MenuItem.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import { ROUTE_PATH } from '../../const'
import { useAppDispatch, useAppSelector } from '../../store/store'
import favoritesSlice, { clearFavorites } from '../../store/slices/favorites'
import userSlice, { setUser } from '../../store/slices/user'

export default function Menu() {
	const favoriteFilms = useAppSelector(favoritesSlice.selectors.films)
	const dispatch = useAppDispatch()
	const userName = useAppSelector(userSlice.selectors.userName)

	const handleLogout = () => {
		dispatch(setUser(null))
		dispatch(clearFavorites())
	}

	return (
		<nav className={style.menu}>
			<MenuItem to={ROUTE_PATH.Main}>Поиск фильмов</MenuItem>
			<MenuItem to={ROUTE_PATH.Favorites}>
				<span>Мои фильмы</span>
				<div className={styleMenuItem['menu-item__count']}>{favoriteFilms.length}</div>
			</MenuItem>
			{userName ? (
				<>
					<MenuItem>{userName}</MenuItem>
					<MenuItem onClick={handleLogout}>Выйти</MenuItem>
				</>
			) : (
				<MenuItem to={ROUTE_PATH.Login}>
					<span>Войти</span>
					<img src="/img/icons/login.svg" alt="Войти" />
				</MenuItem>
			)}
		</nav>
	)
}
