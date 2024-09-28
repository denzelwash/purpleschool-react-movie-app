import clsx from 'clsx'
import './Text.css'

export default function Text({ className, children }) {
	return <p className={clsx('text', className)}>{children}</p>
}
