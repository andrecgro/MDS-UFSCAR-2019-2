import React, { useState, useEffect } from 'react'
import { Button, TextField, Box, Container, Grid, Link } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import { withSnackbar } from 'notistack'

import FirebaseService from '../../Services/Firebase'

import { compose } from 'recompose'
import { connect } from 'react-redux'
import { isAuthenticated } from '../../utils/selectors'

function Login ({ history, enqueueSnackbar, isAuthenticated }) {
  useEffect(() => {
    if (isAuthenticated) {
      history.push('/home')
    }
  })

  const classes = useStyles()

  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    FirebaseService.signInWithEmailAndPassword(email, senha).then(() => {
      history.push('/home')
    }).catch(err => enqueueSnackbar(err.message, { variant: 'error' }))
  }

  return (
    <Box height='100vh' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
      <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-between'>
        <img src='logo192.png' alt='logo' width='192' />
        <Container>
          <form onSubmit={handleSubmit}>
            <TextField margin='normal' required fullWidth type='email' label='E-mail' onChange={event => setEmail(event.target.value)} />
            <TextField margin='normal' required fullWidth label='Senha' type='password' onChange={event => setSenha(event.target.value)} />
            <Button type='submit' fullWidth variant='contained' className={classes.submit} color='primary'>Acessar</Button>
          </form>
          <Grid container>
            <Grid item>
              <Link href='/register' variant='body2'>
                {'Não tem uma conta? Crie uma agora'}
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state)
  }
}

export default compose(
  withSnackbar,
  connect(mapStateToProps, null)
)(Login)

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))
