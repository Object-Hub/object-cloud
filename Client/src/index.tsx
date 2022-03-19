import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from './contexts/Auth/AuthProvider'
import GlobalStyle from './styles/global';
import Header from './components/Header';
import light from './styles/themes/light';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Header />
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
    </React.StrictMode>,
  document.getElementById('root')
)
