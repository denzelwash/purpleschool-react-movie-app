import './Menu.css'
import MenuItem from '../MenuItem/MenuItem'

export default function Menu() {
	return (
		<nav className="menu">
			<MenuItem text="Поиск фильмов" to="search" />
			<MenuItem text="Мои фильмы" to="search">
				<div className="menu-item__count">2</div>
			</MenuItem>
			<MenuItem text="Войти" to="search">
				<img src="/icons/login.svg" alt="" />
			</MenuItem>
		</nav>
	)
}
