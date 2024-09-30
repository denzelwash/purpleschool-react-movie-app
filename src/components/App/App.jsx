import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import Text from '../Text/Text'
import Button from '../Button/Button'
import Input from '../Input/Input'
import CardsGrid from '../CardsGrid/CardsGrid'
import CardItem from '../CardItem/CardItem'
import { useRef, useState } from 'react'
import '../../assets/scss/main.scss'
import style from './App.module.scss'
import { MOCK_CARDS } from '../../mocks/cards'
import useLocalStorage from '../../hooks/useLocalStorage'

function App() {
	const [localStorage, updateLocalStorage] = useLocalStorage('users')
	const [cards, setCards] = useState(MOCK_CARDS)
	const [searchInput, setSearchInput] = useState('')
	const searchInputRef = useRef(null)
	const [loginInput, setLoginInput] = useState('')
	const loginInputRef = useRef(null)
	const [activeUser, setActiveUser] = useState(null)

	const handleSearch = () => {
		if (!searchInput) {
			searchInputRef.current.focus()
		}
	}

	const handleLogin = () => {
		if (!loginInput) {
			loginInputRef.current.focus()
			return
		}
		if (Array.isArray(localStorage)) {
			const existingUser = localStorage.find((user) => user.name === loginInput)
			if (existingUser) {
				updateLocalStorage([...localStorage.map((user) => (user.name === loginInput ? { ...user, isLogined: true } : user))])
			} else {
				updateLocalStorage([...localStorage, { name: loginInput, isLogined: true }])
			}
		} else {
			updateLocalStorage([{ name: loginInput, isLogined: true }])
		}
		setActiveUser(loginInput)
		setLoginInput('')
	}

	const handleLogout = () => {
		updateLocalStorage([...localStorage.map((user) => (user.name === activeUser ? { ...user, isLogined: false } : user))])
		setActiveUser(null)
	}

	const handleToggleFavorite = (id) => {
		setCards([
			...cards.map((card) => {
				if (card.id === id) {
					card.isFavorite = !card.isFavorite
				}
				return card
			})
		])
	}

	return (
		<>
			<Header user={activeUser} logout={handleLogout} />
			<div className="page-default">
				<div className="container">
					<PageTitle>Поиск</PageTitle>
					<Text>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Text>
					<div className={style.search}>
						<Input
							ref={searchInputRef}
							value={searchInput}
							onChange={(e) => setSearchInput(e.target.value)}
							placeholder="Введите название"
							icon="/img/icons/search.svg"
						/>
						<Button className="primary" onClick={handleSearch}>
							Искать
						</Button>
					</div>
					<CardsGrid>
						{cards.map((card) => (
							<CardItem
								key={card.id}
								title={card.title}
								poster={card.poster}
								count={card.count}
								isFavorite={card.isFavorite}
								toggleFavorite={() => handleToggleFavorite(card.id)}
							></CardItem>
						))}
					</CardsGrid>
				</div>
			</div>
			{!activeUser && (
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
			)}
		</>
	)
}

export default App
