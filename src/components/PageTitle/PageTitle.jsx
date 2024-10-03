import style from './PageTitle.module.scss'

export default function PageTitle({ children }) {
	return <h1 className={style['page-title']}>{children}</h1>
}
