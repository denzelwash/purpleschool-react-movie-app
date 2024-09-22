import Header from './components/Header/Header'
import PageTitle from './components/PageTitle/PageTitle'
import Text from './components/Text/Text'
import Button from './components/Button/Button'
import Input from './components/Input/Input'

function App() {
	return (
		<>
			<Header />
			<div className="container">
				<PageTitle>Поиск</PageTitle>
				<Text>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Text>
				<Input placeholder="Введите название" icon="/icons/search.svg" />
				<Button className="primary" onClick={() => console.log('click')}>
					Искать
				</Button>
			</div>
		</>
	)
}

export default App
