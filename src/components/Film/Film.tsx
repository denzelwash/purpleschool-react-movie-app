import clsx from 'clsx'
import { FilmFull } from '../../types/film'
import style from './Film.module.scss'
import { useAppSelector } from '../../store/store'
import favoritesSlice from '../../store/slices/favorites'
import parse from 'html-react-parser'

export function Film(props: FilmFull) {
	const favorites = useAppSelector(favoritesSlice.selectors.films)

	const isFavorite = favorites.some((f) => f['#IMDB_ID'] === props.imdbId)
	const genres = props.top.genres.genres.map((g) => g.text).join(', ')

	const duration = (str: string) => {
		const [hours, minutes] = str.split('H')
		return +hours.replace(/\D/g, '') * 60 + +minutes.replace(/\D/g, '') + ' мин'
	}

	return (
		<div className={style['film']}>
			<div className={style['film__header']}>
				<p>Поиск фильмов</p>
				<h1>{props.short.name}</h1>
			</div>
			<div className={style['film__grid']}>
				<div className={style['film__image']}>
					<img src={props.short.image} alt="" />
				</div>
				<div className={style['film__info']}>
					<div>
						<p>{props.short.description}</p>
					</div>
					<div className={style['film__info-rating-grid']}>
						{props.short.aggregateRating?.ratingValue && (
							<div className={style['film__rating']}>
								<img src="/img/icons/star.svg" width={16} height={16} alt="" />
								<span>{String(props.short.aggregateRating.ratingValue)}</span>
							</div>
						)}
						<button className={clsx(style['film__favorite-btn'], isFavorite && style['active'])}>
							<img src={`/img/icons/${isFavorite ? 'bookmark' : 'like'}.svg`} alt="" width={24} height={24} />
							<span>В {isFavorite ? 'избранном' : 'избранное'}</span>
						</button>
					</div>
					<div>
						<strong>Тип</strong>
						<p>{props.short['@type']}</p>
					</div>
					<div>
						<strong>Дата выхода</strong>
						<p>{props.short.datePublished}</p>
					</div>
					{props.short.duration && (
						<div>
							<strong>Длительность</strong>
							<p>{duration(props.short.duration)}</p>
						</div>
					)}
					<div>
						<strong>Жанр</strong>
						<p>{genres}</p>
					</div>
				</div>
			</div>
			{props.short.review ? (
				<div className={style['film__reviews']}>
					<p>Отзывы</p>
					<div className={style['film__reviews-grid']}>
						<div className={style['reviews-item']}>
							<div className={style['reviews-item__header']}>
								<h6>{parse(props.short.review.name)}</h6>
								<span>{props.short.review.dateCreated}</span>
							</div>
							<div className={style['reviews-item__body']}>{parse(props.short.review.reviewBody)}</div>
						</div>
					</div>
				</div>
			) : (
				<p>Отзывов нет</p>
			)}
		</div>
	)
}
