import React from 'react'
import './index.scss'
import App from './components/App/App'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/authProvider'
import { BrowserRouter as Router } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <App />
            </Router>
        </AuthProvider>
    </React.StrictMode>
)
