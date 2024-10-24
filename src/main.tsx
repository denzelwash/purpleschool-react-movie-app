import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.tsx'
import UserContextProvider from './context/user.tsx'
import './assets/scss/main.scss'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UserContextProvider>
			<App />
		</UserContextProvider>
	</StrictMode>
)
