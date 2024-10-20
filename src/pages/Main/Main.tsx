import { useState, useRef } from 'react'
import Button from '../../components/Button/Button'
import CardItem from '../../components/CardItem/CardItem'
import CardsGrid from '../../components/CardsGrid/CardsGrid'
import Input from '../../components/Input/Input'
import Text from '../../components/Text/Text'
import PageTitle from '../../components/PageTitle/PageTitle'
import style from './Main.module.scss'
import { Film, FilmsResponse } from '../../types/film'
import api from '../../services/api'
import Loader from '../../components/Loader/Loader'
import { RequestStatus } from '../../const'

export default function Main() {
	const [films, setFilms] = useState<Film[]>([])
	const [status, setStatus] = useState<RequestStatus>(RequestStatus.Idle)

	const [searchInput, setSearchInput] = useState('')
	const searchInputRef = useRef<HTMLInputElement>(null)

	const handleSearch = () => {
		if (!searchInput && searchInputRef.current) {
			searchInputRef.current.focus()
		}
		if (searchInput.length) {
			getFilms()
		}
	}

	async function getFilms() {
		try {
			setStatus(RequestStatus.Loading)
			const { data } = await api.get<FilmsResponse>(`/?q=${searchInput}`)
			setFilms(data.description)
			setStatus(RequestStatus.Success)
		} catch (e) {
			console.log(e)
			setStatus(RequestStatus.Failed)
		}
	}

	const handleToggleFavorite = (id: string) => {
		setFilms([
			...films.map((film) => {
				if (film['#IMDB_ID'] === id) {
					film.isFavorite = !film.isFavorite
				}
				return film
			})
		])
	}

	return (
		<>
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
					{status === RequestStatus.Success && films.length > 0 && (
						<CardsGrid>
							{films.map((film) => (
								<CardItem {...film} key={film['#IMDB_ID']} toggleFavorite={() => handleToggleFavorite(film['#IMDB_ID'])}></CardItem>
							))}
						</CardsGrid>
					)}
					{status === RequestStatus.Success && films.length === 0 && <>Ничего не найдено!</>}
				</div>
				{status === RequestStatus.Loading && <Loader />}
			</div>
		</>
	)
}
