import Header from '../Header/Header'
import PageTitle from '../PageTitle/PageTitle'
import Text from '../Text/Text'
import Button from '../Button/Button'
import Input from '../Input/Input'
import CardsGrid from '../CardsGrid/CardsGrid'
import CardItem from '../CardItem/CardItem'
import { useState } from 'react'
import '../../assets/css/main.css'
import './App.css'

const MOCK_CARDS = [
	{
		id: 1,
		title: 'Black Widow',
		poster: '/img/mocks/1.jpg',
		count: 324,
		isFavorite: false
	},
	{
		id: 2,
		title: 'Shang Chi',
		poster: '/img/mocks/2.jpg',
		count: 123,
		isFavorite: false
	},
	{
		id: 3,
		title: 'Loki',
		poster: '/img/mocks/3.jpg',
		count: 321,
		isFavorite: false
	},
	{
		id: 4,
		title: 'How I Met Your Mother',
		poster: '/img/mocks/4.jpg',
		count: 333,
		isFavorite: false
	},
	{
		id: 5,
		title: 'Money Heist',
		poster: '/img/mocks/5.jpg',
		count: 654,
		isFavorite: true
	},
	{
		id: 6,
		title: 'Friends',
		poster: '/img/mocks/6.jpg',
		count: 44,
		isFavorite: false
	},
	{
		id: 7,
		title: 'The Big Bang Theory',
		poster: '/img/mocks/7.jpg',
		count: 2,
		isFavorite: false
	},
	{
		id: 8,
		title: 'Two And a Half Men',
		poster: '/img/mocks/8.jpg',
		count: 100500,
		isFavorite: false
	}
]

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
					<div className="search">
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
