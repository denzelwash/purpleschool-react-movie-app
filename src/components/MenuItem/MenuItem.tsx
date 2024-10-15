import clsx from 'clsx'
import style from './MenuItem.module.scss'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

interface MenuItemProps {
	to?: string
	children: ReactNode
	onClick?: () => void
}

export default function MenuItem({ to, children, onClick }: MenuItemProps) {
	return (
		<>
			{to ? (
				<NavLink to={to} className={({ isActive }) => clsx(style['menu-item'], style[isActive ? 'active' : ''])} onClick={onClick}>
					{children}
				</NavLink>
			) : (
				<div className={clsx(style['menu-item'])} onClick={onClick}>
					{children}
				</div>
			)}
		</>
	)
}
