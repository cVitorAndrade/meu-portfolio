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

import { I18nextProvider } from 'react-i18next';
import i18next from "./translations";

import { Portfolio } from './pages/Portfolio'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <I18nextProvider i18n={i18next}>
        <Portfolio />
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
