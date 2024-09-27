import clsx from 'clsx'
import style from './Button.module.scss'

export default function Button({ className, children, onClick }) {
	return (
		<button className={clsx(style.btn, style[className])} onClick={onClick}>
			{children}
		</button>
	)
}
