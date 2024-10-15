import { ReactNode } from 'react'
import style from './CardsGrid.module.scss'

interface CardsGridProps {
	children: ReactNode
}

export default function CardsGrid({ children }: CardsGridProps) {
	return <div className={style['cards-grid']}>{children}</div>
}
