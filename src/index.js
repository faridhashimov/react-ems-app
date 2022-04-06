import React from 'react'
// import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/authProvider'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <React.StrictMode>
        <AuthProvider>
            <App />
        </AuthProvider>
    </React.StrictMode>
)
