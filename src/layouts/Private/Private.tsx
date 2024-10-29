import { ReactNode, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTE_PATH } from '../../const'
import { UserContext } from '../../context/user'

interface PrivateProps {
	children: ReactNode
}

export default function Private({ children }: PrivateProps) {
	const { activeUser } = useContext(UserContext)

	if (!activeUser) {
		return <Navigate to={`/${ROUTE_PATH.Login}`} replace />
	}

	return children
}
