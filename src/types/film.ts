export interface FilmsResponse {
	ok: boolean
	description: Film[]
	error_code: number
}

export interface Film {
	'#TITLE': string
	'#YEAR': number
	'#IMDB_ID': string
	'#RANK': number
	'#ACTORS': string
	'#AKA': string
	'#IMDB_URL': string
	'#IMDB_IV': string
	'#IMG_POSTER'?: string
	photo_width?: number
	photo_height?: number
}

export interface FilmFull {
	short: {
		name: string
		image: string
		description: string
		'@type': string
		aggregateRating: {
			ratingValue: number
		}
		datePublished: string
		duration?: string
		review: {
			name: string
			reviewBody: string
			dateCreated: string
		}
	}
	imdbId: string
	top: {
		genres: {
			genres: [
				{
					text: string
					id: number
				}
			]
		}
	}
}
