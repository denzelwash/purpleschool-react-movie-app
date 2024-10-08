import clsx from 'clsx'
import style from './MenuItem.module.scss'
import { ReactNode } from 'react'

interface MenuItemProps {
	to: string
	children: ReactNode
	onClick?: () => void
}

export default function MenuItem({ to, children, onClick }: MenuItemProps) {
	return (
		<a href={to} className={clsx(style['menu-item'])} onClick={onClick}>
			{children}
		</a>
	)
}
