import style from './CardsGrid.module.scss'

export default function CardsGrid({ children }) {
	return <div className={style['cards-grid']}>{children}</div>
}
