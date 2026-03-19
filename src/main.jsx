import React from 'react'
import ReactDOM from 'react-dom/client'
import Coronelco from './Coronelco.jsx'

const initialLoader = document.getElementById('initial-loader')
if (initialLoader) {
  initialLoader.remove()
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Coronelco />
  </React.StrictMode>
)
