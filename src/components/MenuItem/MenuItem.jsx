import clsx from 'clsx'
import style from './MenuItem.module.scss'

export default function MenuItem({ text, to, children, onClick }) {
	return (
		<a href={to} className={clsx(style['menu-item'])} onClick={onClick}>
			<span>{text}</span>
			{children}
		</a>
	)
}
