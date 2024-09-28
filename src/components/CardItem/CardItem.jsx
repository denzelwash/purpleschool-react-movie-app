import clsx from 'clsx'
import './CardItem.css'

export default function CardItem({ title, poster, count, isFavorite, toggleFavorite }) {
	return (
		<div className="card-item">
			<div className="card-item__count">
				<img src="/img/icons/star.svg" alt="" width={16} height={16} />
				<span>{count}</span>
			</div>
			<img className="card-item__poster" src={poster} alt={title} />
			<div className="card-item__text">
				<a href="#" className="card-item__title">
					{title}
				</a>
				<button className={clsx('card-item__favorites', isFavorite && 'active')} onClick={toggleFavorite}>
					<img src={`/img/icons/${isFavorite ? 'bookmark' : 'like'}.svg`} alt="" width={24} height={24} />
					<span>В {isFavorite ? 'избранном' : 'избранное'}</span>
				</button>
			</div>
		</div>
	)
}
