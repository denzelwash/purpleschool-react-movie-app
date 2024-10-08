import { ReactNode } from 'react'
import style from './PageTitle.module.scss'
import clsx from 'clsx'
import getClassString from '../../utils/getClassString'

interface PageTitleProps {
	children: ReactNode
	className?: string
}

export default function PageTitle({ children, className = '' }: PageTitleProps) {
	return <h1 className={clsx(style['page-title'], getClassString(className, style))}>{children}</h1>
}
