import clsx from 'clsx'
import style from './Input.module.scss'
import { forwardRef } from 'react'

function Input({ type = 'text', className, placeholder = '', icon, value, onChange }, ref) {
	return (
		<div className={clsx(style.input, className, icon && style['input--with-icon'])}>
			<input value={value} onChange={onChange} ref={ref} className={style['input__input']} type={type} placeholder={placeholder} />
			{icon && <img className={style['input__icon']} src={icon} alt="" />}
		</div>
	)
}
export default forwardRef(Input)
