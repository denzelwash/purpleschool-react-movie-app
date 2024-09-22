import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import './Header.css'

export default function Header() {
	return (
		<div className="header">
			<div className="container">
				<div className="header__wr">
					<Logo />
					<Menu />
				</div>
			</div>
		</div>
	)
}
