import clsx from 'clsx'
import style from './Text.module.scss'

export default function Text({ className, children }) {
	return <p className={clsx(style.text, className)}>{children}</p>
}
