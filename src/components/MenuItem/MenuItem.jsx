import clsx from 'clsx'
import style from './MenuItem.module.scss'

export default function MenuItem({ text, to, children }) {
	return (
		<a href={to} className={clsx(style['menu-item'])}>
			<span>{text}</span>
			{children}
		</a>
	)
}
