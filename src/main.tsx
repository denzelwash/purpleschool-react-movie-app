import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App/App.tsx'
import UserContextProvider from './context/user.tsx'
import './assets/scss/main.scss'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<UserContextProvider>
				<App />
			</UserContextProvider>
		</Provider>
	</StrictMode>
)
