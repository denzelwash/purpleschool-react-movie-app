import { useParams } from 'react-router-dom'
import PageTitle from '../../components/PageTitle/PageTitle'

export default function Film() {
	const { id } = useParams()

	return (
		<>
			<div className="page-default">
				<div className="container">
					<PageTitle>Страница фильма c id {id}</PageTitle>
				</div>
			</div>
		</>
	)
}
