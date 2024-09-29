import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import Text from '../Text/Text'
import Button from '../Button/Button'
import Input from '../Input/Input'
import CardsGrid from '../CardsGrid/CardsGrid'
import CardItem from '../CardItem/CardItem'
import { useState } from 'react'
import '../../assets/scss/main.scss'
import style from './App.module.scss'
import { MOCK_CARDS } from '../../mocks/cards'

function App() {
	const [cards, setCards] = useState(MOCK_CARDS)

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
			<Header />
			<div className="page-default">
				<div className="container">
					<PageTitle>Поиск</PageTitle>
					<Text>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Text>
					<div className={style.search}>
						<Input placeholder="Введите название" icon="/img/icons/search.svg" />
						<Button className="primary" onClick={() => console.log('search')}>
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
		</>
	)
}

export default App
