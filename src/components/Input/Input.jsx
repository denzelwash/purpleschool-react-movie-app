import clsx from 'clsx'
import './Input.css'

export default function Input({ type = 'text', className, placeholder = '', icon }) {
	const style = icon
		? {
				backgroundImage: `url(${icon})`,
				paddingLeft: '56px'
		  }
		: {}

	return <input type={type} className={clsx('input', className)} placeholder={placeholder} style={style} />
}
