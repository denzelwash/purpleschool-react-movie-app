import CardItem from '../../components/CardItem/CardItem'
import CardsGrid from '../../components/CardsGrid/CardsGrid'
import PageTitle from '../../components/PageTitle/PageTitle'
import favoritesSlice, { toggleFilm } from '../../store/slices/favorites'
import { useAppDispatch, useAppSelector } from '../../store/store'
import { Film } from '../../types/film'

export default function Favorites() {
	const favoriteFilms = useAppSelector(favoritesSlice.selectors.films)
	const dispatch = useAppDispatch()

	const handleToggleFavorite = (film: Film) => {
		dispatch(toggleFilm(film))
	}

	return (
		<>
			<div className="page-default">
				<div className="container">
					<PageTitle>Страница избранного</PageTitle>
					<CardsGrid>
						{favoriteFilms.map((film) => (
							<CardItem
								{...film}
								key={film['#IMDB_ID']}
								isFavorite={favoriteFilms.some((f) => f['#IMDB_ID'] === film['#IMDB_ID'])}
								toggleFavorite={() => handleToggleFavorite(film)}
							></CardItem>
						))}
					</CardsGrid>
				</div>
			</div>
		</>
	)
}
