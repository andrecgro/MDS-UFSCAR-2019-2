import React from 'react'

import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { theme } from './theme'
import Routes from './routes'
import Firebase, { FirebaseContext } from './Firebase'

export default function Root () {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </FirebaseContext.Provider>
  )
}
