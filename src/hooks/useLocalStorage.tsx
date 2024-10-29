import { useEffect, useState } from 'react'

export default function useLocalStorage<T>(key: string) {
	const [data, setData] = useState<T | null>(null)

	useEffect(() => {
		const localStorageString = localStorage.getItem(key)
		if (localStorageString) {
			const res = JSON.parse(localStorageString)
			if (res) {
				setData(res)
			}
		}
	}, [key])

	const updateData = (value: T) => {
		localStorage.setItem(key, JSON.stringify(value))
		setData(value)
	}

	return [data, updateData] as const
}
