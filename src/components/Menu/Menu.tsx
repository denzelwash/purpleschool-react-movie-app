import style from './Menu.module.scss'
import styleMenuItem from '../MenuItem/MenuItem.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import { useContext } from 'react'
import { UserContext } from '../../context/user'
import { ROUTE_PATH } from '../../const'

export default function Menu() {
	const { activeUser, logout } = useContext(UserContext)

	return (
		<nav className={style.menu}>
			<MenuItem to={ROUTE_PATH.Main}>Поиск фильмов</MenuItem>
			<MenuItem to={ROUTE_PATH.Favorites}>
				<span>Мои фильмы</span>
				<div className={styleMenuItem['menu-item__count']}>2</div>
			</MenuItem>
			{activeUser ? (
				<>
					<MenuItem>{activeUser}</MenuItem>
					<MenuItem onClick={logout}>Выйти</MenuItem>
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
