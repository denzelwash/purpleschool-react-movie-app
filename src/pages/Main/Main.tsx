import { useState, useRef } from 'react'
import Button from '../../components/Button/Button'
import CardItem from '../../components/CardItem/CardItem'
import CardsGrid from '../../components/CardsGrid/CardsGrid'
import Input from '../../components/Input/Input'
import Text from '../../components/Text/Text'
import PageTitle from '../../components/PageTitle/PageTitle'
import { MOCK_CARDS } from '../../mocks/cards'
import style from './Main.module.scss'

export default function Main() {
	const [cards, setCards] = useState(MOCK_CARDS)
	const [searchInput, setSearchInput] = useState('')
	const searchInputRef = useRef<HTMLInputElement>(null)

	const handleSearch = () => {
		if (!searchInput && searchInputRef.current) {
			searchInputRef.current.focus()
		}
	}

	const handleToggleFavorite = (id: number) => {
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
							<CardItem {...card} key={card.id} toggleFavorite={() => handleToggleFavorite(card.id)}></CardItem>
						))}
					</CardsGrid>
				</div>
			</div>
		</>
	)
}
