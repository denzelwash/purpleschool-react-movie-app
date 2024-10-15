import style from './Logo.module.scss'

export default function Logo() {
	return <img className={style.logo} src="/img/logo.svg" alt="logo" width={40} height={40} />
}
