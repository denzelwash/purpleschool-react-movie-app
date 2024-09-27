import clsx from 'clsx'
import style from './Input.module.scss'

export default function Input({ type = 'text', placeholder = '', icon }) {
	const styleObj = icon
		? {
				backgroundImage: `url(${icon})`,
				paddingLeft: '56px'
		  }
		: {}

	return <input type={type} className={clsx(style.input)} placeholder={placeholder} style={styleObj} />
}
