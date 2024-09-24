import './Menu.css'
import MenuItem from '../MenuItem/MenuItem'

export default function Menu() {
	return (
		<nav className="menu">
			<MenuItem text="Поиск фильмов" to="#" />
			<MenuItem text="Мои фильмы" to="#">
				<div className="menu-item__count">2</div>
			</MenuItem>
			<MenuItem text="Войти" to="#">
				<img src="/img/icons/login.svg" alt="Войти" />
			</MenuItem>
		</nav>
	)
}
