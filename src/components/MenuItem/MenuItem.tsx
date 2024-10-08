import clsx from 'clsx'
import style from './MenuItem.module.scss'
import { ReactNode } from 'react'

interface MenuItemProps {
	text: string
	to: string
	children?: ReactNode
	onClick?: () => void
}

export default function MenuItem({ text, to, children, onClick }: MenuItemProps) {
	return (
		<a href={to} className={clsx(style['menu-item'])} onClick={onClick}>
			<span>{text}</span>
			{children}
		</a>
	)
}
