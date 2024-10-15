import clsx from 'clsx'
import style from './Text.module.scss'
import { ReactNode } from 'react'
import getClassString from '../../utils/getClassString'

interface TextProps {
	className?: string
	children: ReactNode
}

export default function Text({ className = '', children }: TextProps) {
	return <p className={clsx(style.text, getClassString(className, style))}>{children}</p>
}
