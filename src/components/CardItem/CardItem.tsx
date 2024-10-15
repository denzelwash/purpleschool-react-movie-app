import clsx from 'clsx'
import style from './CardItem.module.scss'
import { Link } from 'react-router-dom'
import { ROUTE_PATH } from '../../const'

interface CardItemProps {
	id: number
	title: string
	poster: string
	count: number
	isFavorite: boolean
	toggleFavorite: () => void
}

export default function CardItem({ id, title, poster, count, isFavorite, toggleFavorite }: CardItemProps) {
	return (
		<div className={style['card-item']}>
			<div className={style['card-item__count']}>
				<img src="/img/icons/star.svg" alt="" width={16} height={16} />
				<span>{count}</span>
			</div>
			<img className={style['card-item__poster']} src={poster} alt={title} />
			<div className={style['card-item__text']}>
				<Link to={ROUTE_PATH.Film.replace(':id', String(id))} className={style['card-item__title']}>
					{title}
				</Link>
				<button className={clsx(style['card-item__favorites'], isFavorite && style['active'])} onClick={toggleFavorite}>
					<img src={`/img/icons/${isFavorite ? 'bookmark' : 'like'}.svg`} alt="" width={24} height={24} />
					<span>В {isFavorite ? 'избранном' : 'избранное'}</span>
				</button>
			</div>
		</div>
	)
}
