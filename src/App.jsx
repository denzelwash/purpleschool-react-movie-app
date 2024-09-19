import PageTitle from './components/PageTitle/PageTitle'
import Text from './components/Text/Text'
import Button from './components/Button/Button'

function App() {
	return (
		<>
			<PageTitle>Поиск</PageTitle>
			<Text>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Text>
			<Button className="primary">Искать</Button>
		</>
	)
}

export default App
