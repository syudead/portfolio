import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

// material ui
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import amber from '@material-ui/core/colors/amber'
import lightBlue from '@material-ui/core/colors/lightBlue'

import App from './App'

// material ui
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#bbdefb',
    },
    secondary: amber,
  },
})

// Google Analytics
ReactGA.initialize('UA-21801943-2')

// render
const body = document.querySelector('body')

render(
  <MuiThemeProvider theme={theme}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  body.insertBefore(document.createElement('div'), body.firstChild)
)
