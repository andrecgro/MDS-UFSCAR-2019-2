import React, { useEffect } from 'react'

import { connect } from 'react-redux'

import { SnackbarProvider } from 'notistack'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

import { theme } from './theme'
import Routes from './routes'

import FirebaseService from '../Services/Firebase'
import { login, logout } from '../action/actionCreator'

import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'

function Root ({ login, logout }) {
  useEffect(() => {
    FirebaseService.onAuthChange(
      (authUser) => login(authUser),
      () => { logout() }
    )
  })
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>

      <SnackbarProvider maxSnack={5} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </SnackbarProvider>

    </MuiPickersUtilsProvider>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    login: authUser => dispatch(login(authUser)),
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(Root)
