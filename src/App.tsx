import { RouterProvider } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'

import router from './routes/router'
import { Toaster } from 'react-hot-toast'

function App() {
	return (
		<AuthProvider>
			<RouterProvider router={router} />
			<Toaster
				toastOptions={{
					style: {
						borderRadius: '10px',
						background: '#333',
						color: '#fff',
						fontWeight: 300,
					},
				}}
			/>
		</AuthProvider>
	)
}

export default App
