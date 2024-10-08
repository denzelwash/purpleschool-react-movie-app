import style from './Menu.module.scss'
import styleMenuItem from '../MenuItem/MenuItem.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import { useContext } from 'react'
import { UserContext } from '../../context/user'

export default function Menu() {
	const { activeUser, logout } = useContext(UserContext)

	return (
		<nav className={style.menu}>
			<MenuItem to="#">Поиск фильмов</MenuItem>
			<MenuItem to="#">
				<span>Мои фильмы</span>
				<div className={styleMenuItem['menu-item__count']}>2</div>
			</MenuItem>
			{activeUser ? (
				<>
					<MenuItem to="#">{activeUser}</MenuItem>
					<MenuItem to="#" onClick={logout}>
						Выйти
					</MenuItem>
				</>
			) : (
				<MenuItem to="#">
					<span>Войти</span>
					<img src="/img/icons/login.svg" alt="Войти" />
				</MenuItem>
			)}
		</nav>
	)
}
