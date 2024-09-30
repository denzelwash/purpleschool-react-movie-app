import style from './Menu.module.scss'
import styleMenuItem from '../MenuItem/MenuItem.module.scss'
import MenuItem from '../MenuItem/MenuItem'

export default function Menu({ user, logout }) {
	return (
		<nav className={style.menu}>
			<MenuItem text="Поиск фильмов" to="#" />
			<MenuItem text="Мои фильмы" to="#">
				<div className={styleMenuItem['menu-item__count']}>2</div>
			</MenuItem>
			{user ? (
				<>
					<MenuItem text={user} to="#"></MenuItem>
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
