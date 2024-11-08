import { Film } from './film'

export interface User {
	name: string
	isLogined: boolean
	favorites?: Film[]
}
