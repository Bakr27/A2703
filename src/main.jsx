import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import favicon from './favicon.svg'

// Set favicon dynamically
const link = document.createElement('link')
link.rel = 'icon'
link.type = 'image/svg+xml'
link.href = favicon
document.head.appendChild(link)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
