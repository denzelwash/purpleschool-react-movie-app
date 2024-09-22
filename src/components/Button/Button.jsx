import clsx from 'clsx'
import './Button.css'

export default function Button({ className, children, onClick }) {
	return (
		<button className={clsx('btn', className)} onClick={onClick}>
			{children}
		</button>
	)
}
