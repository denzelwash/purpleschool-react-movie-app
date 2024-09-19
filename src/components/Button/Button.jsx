import './Button.css'

export default function Button({ className, children }) {
	return <button className={className ? `btn ${className}` : 'btn'}>{children}</button>
}
