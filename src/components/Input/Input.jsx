import clsx from 'clsx'
import './Input.css'

export default function Input({ type = 'text', className, placeholder = '', icon }) {
	return (
		<div className={clsx('input', className, icon && 'input--with-icon')}>
			<input className="input__input" type={type} placeholder={placeholder} />
			{icon && <img className="input__icon" src={icon} alt="" />}
		</div>
	)
}
