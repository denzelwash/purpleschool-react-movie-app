import Logo from '../Logo/Logo'
import Menu from '../Menu/Menu'
import style from './Header.module.scss'

export default function Header(props) {
	return (
		<div className={style.header}>
			<div className="container">
				<div className={style['header__wr']}>
					<Logo />
					<Menu {...props} />
				</div>
			</div>
		</div>
	)
}
