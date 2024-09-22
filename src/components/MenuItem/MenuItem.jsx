import clsx from 'clsx'
import './MenuItem.css'

export default function MenuItem({ text, className, to, children }) {
	return (
		<a href={to} className={clsx('menu-item', className)}>
			<span>{text}</span>
			{children}
		</a>
	)
}
