import clsx from 'clsx'
import style from './CardItem.module.scss'
import { Link } from 'react-router-dom'
import { ROUTE_PATH } from '../../const'
import { Film } from '../../types/film'

interface CardItemProps extends Film {
	toggleFavorite: () => void
	isFavorite: boolean
}

export default function CardItem(props: CardItemProps) {
	return (
		<div className={style['card-item']}>
			<div className={style['card-item__count']}>
				<img src="/img/icons/star.svg" alt="" width={16} height={16} />
				<span>{props['#RANK']}</span>
			</div>
			<img className={style['card-item__poster']} src={props['#IMG_POSTER']} alt={props['#TITLE']} />
			<div className={style['card-item__text']}>
				<Link to={ROUTE_PATH.Film.replace(':id', String(props['#IMDB_ID']))} className={style['card-item__title']}>
					{props['#TITLE']}
				</Link>
				<button className={clsx(style['card-item__favorites'], props.isFavorite && style['active'])} onClick={props.toggleFavorite}>
					<img src={`/img/icons/${props.isFavorite ? 'bookmark' : 'like'}.svg`} alt="" width={24} height={24} />
					<span>В {props.isFavorite ? 'избранном' : 'избранное'}</span>
				</button>
			</div>
		</div>
	)
}
