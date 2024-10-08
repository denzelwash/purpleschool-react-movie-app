import { createContext, ReactNode, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { User } from '../types/user'

interface UserContextProviderProps {
	children: ReactNode
}

interface IUserContext {
	activeUser: string | null
	// Линтер ругается на неиспользуемые переменные в интерфейсе (userName)
	// 'no-unused-vars': 'off',
	// '@typescript-eslint/no-unused-vars': ['error']
	// с этими строками в eslint.config.js ошибка пропадает, но я не уверен что это правильно. Перенести это в конфиг или оставить коммент только для следующей строки?
	// eslint-disable-next-line no-unused-vars
	login: (userName: string) => void
	logout: () => void
}

export const UserContext = createContext<IUserContext>({} as IUserContext)

export default function UserContextProvider({ children }: UserContextProviderProps) {
	const [activeUser, setActiveUser] = useState<string | null>(null)
	const [localStorage, updateLocalStorage] = useLocalStorage<User[]>('users')

	useEffect(() => {
		if (Array.isArray(localStorage)) {
			const activeUser = localStorage.find((user) => user.isLogined)
			if (activeUser) {
				setActiveUser(activeUser.name)
			} else {
				setActiveUser(null)
			}
		}
	}, [localStorage])

	const login = (userName: string) => {
		if (Array.isArray(localStorage)) {
			const existingUser = localStorage.find((user) => user.name === userName)
			if (existingUser) {
				updateLocalStorage([...localStorage.map((user) => (user.name === userName ? { ...user, isLogined: true } : user))])
			} else {
				updateLocalStorage([...localStorage, { name: userName, isLogined: true }])
			}
		} else {
			updateLocalStorage([{ name: userName, isLogined: true }])
		}
	}

	const logout = () => {
		if (Array.isArray(localStorage)) {
			updateLocalStorage([...localStorage.map((user) => (user.name === activeUser ? { ...user, isLogined: false } : user))])
		}
	}

	return <UserContext.Provider value={{ activeUser, login, logout }}>{children}</UserContext.Provider>
}
