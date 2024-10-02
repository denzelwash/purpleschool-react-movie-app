import { createContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const UserContext = createContext()

export default function UserContextProvider({ children }) {
	const [activeUser, setActiveUser] = useState(null)
	const [localStorage, updateLocalStorage] = useLocalStorage('users')

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

	const login = (userName) => {
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
		updateLocalStorage([...localStorage.map((user) => (user.name === activeUser ? { ...user, isLogined: false } : user))])
	}

	return <UserContext.Provider value={{ activeUser, login, logout }}>{children}</UserContext.Provider>
}
