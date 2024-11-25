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
import { REQUEST_STATUS } from '../../const'
import { useAppDispatch, useAppSelector } from '../../store/store'
import favoritesSlice, { toggleFilm } from '../../store/slices/favorites'

export default function Main() {
	const dispatch = useAppDispatch()
	const favoriteFilms = useAppSelector(favoritesSlice.selectors.films)
	const [films, setFilms] = useState<Film[]>([])
	const [status, setStatus] = useState<REQUEST_STATUS>(REQUEST_STATUS.Idle)

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
			setStatus(REQUEST_STATUS.Loading)
			const { data } = await api.get<FilmsResponse>(`/?q=${searchInput}`)
			setFilms(data.description)
			setStatus(REQUEST_STATUS.Success)
		} catch (e) {
			console.log(e)
			setStatus(REQUEST_STATUS.Failed)
		}
	}

	const handleToggleFavorite = (film: Film) => {
		dispatch(toggleFilm(film))
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
					{status === REQUEST_STATUS.Success && films.length > 0 && (
						<CardsGrid>
							{films.map((film) => (
								<CardItem
									{...film}
									key={film['#IMDB_ID']}
									isFavorite={favoriteFilms.some((f) => f['#IMDB_ID'] === film['#IMDB_ID'])}
									toggleFavorite={() => handleToggleFavorite(film)}
								></CardItem>
							))}
						</CardsGrid>
					)}
					{status === REQUEST_STATUS.Success && films.length === 0 && <>Ничего не найдено!</>}
				</div>
				{status === REQUEST_STATUS.Loading && <Loader />}
			</div>
		</>
	)
}
