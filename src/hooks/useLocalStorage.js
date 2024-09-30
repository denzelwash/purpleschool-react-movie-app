import { useEffect, useState } from 'react'

export default function useLocalStorage(key) {
	const [data, setData] = useState(null)

	useEffect(() => {
		const res = JSON.parse(localStorage.getItem(key))
		if (res) {
			setData(res)
		}
	}, [key])

	const updateData = (value) => {
		localStorage.setItem(key, JSON.stringify(value))
		setData(value)
	}

	return [data, updateData]
}
