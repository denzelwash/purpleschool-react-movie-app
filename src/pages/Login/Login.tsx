import { useContext, useState, useRef, useEffect } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import PageTitle from '../../components/PageTitle/PageTitle'
import { UserContext } from '../../context/user'
import style from './Login.module.scss'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '../../const'

export default function Login() {
	const { activeUser, login } = useContext(UserContext)
	const [loginInput, setLoginInput] = useState('')
	const loginInputRef = useRef<HTMLInputElement>(null)
	const navigate = useNavigate()

	useEffect(() => {
		if (activeUser) {
			navigate(ROUTE_PATH.Main)
		}
	}, [activeUser, navigate])

	const handleLogin = () => {
		if (!loginInput && loginInputRef.current) {
			loginInputRef.current.focus()
			return
		}
		login(loginInput)
		setLoginInput('')
	}

	return (
		<>
			<div className="page-default">
				<div className="container">
					<PageTitle>Вход</PageTitle>
					<div className={style['login-form']}>
						<Input ref={loginInputRef} value={loginInput} onChange={(e) => setLoginInput(e.target.value)} placeholder="Ваше имя" />
						<Button className="primary" onClick={handleLogin}>
							Войти в профиль
						</Button>
					</div>
				</div>
			</div>
		</>
	)
}
