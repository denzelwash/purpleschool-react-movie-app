import style from './Menu.module.scss'
import styleMenuItem from '../MenuItem/MenuItem.module.scss'
import MenuItem from '../MenuItem/MenuItem'
import { useContext } from 'react'
import { UserContext } from '../../context/user'

export default function Menu() {
	const { activeUser, logout } = useContext(UserContext)

	return (
		<nav className={style.menu}>
			<MenuItem text="Поиск фильмов" to="#" />
			<MenuItem text="Мои фильмы" to="#">
				<div className={styleMenuItem['menu-item__count']}>2</div>
			</MenuItem>
			{activeUser ? (
				<>
					<MenuItem text={activeUser} to="#"></MenuItem>
					<MenuItem text="Выйти" to="#" onClick={logout}></MenuItem>
				</>
			) : (
				<MenuItem text="Войти" to="#">
					<img src="/img/icons/login.svg" alt="Войти" />
				</MenuItem>
			)}
		</nav>
	)
}
