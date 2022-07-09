import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@fontsource/inter"
import './index.css'

const documentRoot = document.getElementById('root') as Element

ReactDOM.createRoot(documentRoot).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
