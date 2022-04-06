import React from 'react'
// import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/authProvider'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <React.StrictMode>
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/*" element={<App />} />
                </Routes>
            </AuthProvider>
        </Router>
    </React.StrictMode>
)
