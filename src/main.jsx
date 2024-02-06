import React from 'react'
import ReactDOM from 'react-dom/client'

import { register } from "swiper/element/bundle"

register();

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'

import GlobalStyle from './styles/global'

import { Portfolio } from './pages/Portfolio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Portfolio />
    </ThemeProvider>
  </React.StrictMode>,
)
