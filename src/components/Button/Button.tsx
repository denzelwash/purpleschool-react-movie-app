import clsx from 'clsx'
import style from './Button.module.scss'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import getClassString from '../../utils/getClassString'

const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(function Button(
	{ className = '', children, onClick },
	ref
) {
	return (
		<button ref={ref} className={clsx(style.btn, getClassString(className, style))} onClick={onClick}>
			{children}
		</button>
	)
})

export default Button
