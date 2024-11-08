import { useState, useRef, useEffect } from 'react'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import PageTitle from '../../components/PageTitle/PageTitle'
import style from './Login.module.scss'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '../../const'
import { useAppDispatch, useAppSelector } from '../../store/store'
import userSlice, { setUser } from '../../store/slices/user'

export default function Login() {
	const [loginInput, setLoginInput] = useState('')
	const loginInputRef = useRef<HTMLInputElement>(null)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()
	const userName = useAppSelector(userSlice.selectors.userName)

	useEffect(() => {
		if (userName) {
			navigate(ROUTE_PATH.Main)
		}
	}, [userName, navigate])

	const handleLogin = () => {
		if (!loginInput && loginInputRef.current) {
			loginInputRef.current.focus()
			return
		}
		dispatch(setUser(loginInput))
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
