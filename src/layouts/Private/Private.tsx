import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTE_PATH } from '../../const'
import { useAppSelector } from '../../store/store'
import userSlice from '../../store/slices/user'

interface PrivateProps {
	children: ReactNode
}

export default function Private({ children }: PrivateProps) {
	const userName = useAppSelector(userSlice.selectors.userName)

	if (!userName) {
		return <Navigate to={`/${ROUTE_PATH.Login}`} replace />
	}

	return children
}
