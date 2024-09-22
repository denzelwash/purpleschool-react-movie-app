import './MenuItem.css'

export default function MenuItem({ text, className, to, children }) {
	return (
		<a href={to} className={'menu-item' + (className ? ` ${className}` : '')}>
			<span>{text}</span>
			{children}
		</a>
	)
}
