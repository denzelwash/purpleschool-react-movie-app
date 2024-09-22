import './Button.css'

export default function Button({ className, children, onClick }) {
	return (
		<button className={'btn' + (className ? ` ${className}` : '')} onClick={onClick}>
			{children}
		</button>
	)
}
