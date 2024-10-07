import clsx from 'clsx'
import style from './Button.module.scss'
import { forwardRef } from 'react'

function Button({ className, children, onClick }, ref) {
	return (
		<button ref={ref} className={clsx(style.btn, style[className])} onClick={onClick}>
			{children}
		</button>
	)
}

export default forwardRef(Button)
