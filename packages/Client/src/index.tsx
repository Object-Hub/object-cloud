import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { AuthProvider } from './contexts/Auth/AuthProvider'
 
import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
        <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
