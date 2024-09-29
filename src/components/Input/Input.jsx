import clsx from 'clsx'
import style from './Input.module.scss'

export default function Input({ type = 'text', className, placeholder = '', icon }) {
	return (
		<div className={clsx(style.input, className, icon && style['input--with-icon'])}>
			<input className={style['input__input']} type={type} placeholder={placeholder} />
			{icon && <img className={style['input__icon']} src={icon} alt="" />}
		</div>
	)
}
