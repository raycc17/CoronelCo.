import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

const initialLoader = document.getElementById('initial-loader')
if (initialLoader) {
  initialLoader.remove()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Coronelco />
  </React.StrictMode>
)
