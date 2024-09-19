import './Text.css'

export default function Text({ className, children }) {
	return <p className={className ? `text ${className}` : 'text'}>{children}</p>
}
