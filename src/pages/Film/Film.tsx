import { Await, defer, LoaderFunctionArgs, useLoaderData } from 'react-router-dom'
import { FilmFull } from '../../types/film'
import api from '../../services/api'
import { Suspense } from 'react'
import { Film as FilmItem } from '../../components/Film/Film'

export default function Film() {
	const { film } = useLoaderData() as { film: FilmFull }

	return (
		<>
			<div className="page-default">
				<div className="container">
					<Suspense fallback={<>Skeleton...</>}>
						<Await resolve={film}>{(film: FilmFull) => <FilmItem {...film}></FilmItem>}</Await>
					</Suspense>
				</div>
			</div>
		</>
	)
}

const getFilm = async (id: string) => {
	const { data } = await api.get<FilmFull>(`/?tt=${id}`)
	return data
}

const filmLoader = async ({ params }: LoaderFunctionArgs) => {
	return defer({
		film: getFilm(params.id!)
	})
}

// eslint-disable-next-line react-refresh/only-export-components
export { getFilm, filmLoader }
