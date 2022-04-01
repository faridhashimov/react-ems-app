import React from 'react'
// import ReactDOM from 'react-dom'
import './index.scss'
import App from './components/App/App'
import { createRoot } from 'react-dom/client'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
