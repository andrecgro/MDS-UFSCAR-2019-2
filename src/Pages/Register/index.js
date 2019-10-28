import React, { useState } from 'react'
import { Button, TextField, Box, Container } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import { withSnackbar } from 'notistack'
import FirebaseService from '../../Services/Firebase'

function Register ({ history, enqueueSnackbar }) {
  const classes = useStyles()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (password !== confirmation) {
      enqueueSnackbar('As senhas não combinam, tente digitar novamente', { variant: 'warning' })
      return
    }

    FirebaseService.createUserWithEmailAndPassword(email, password, { name: name })
      .then(() => enqueueSnackbar('Usuário criado com sucesso', { variant: 'success' }))
      .catch(err => enqueueSnackbar(err.message, { variant: 'error' }))
  }

  return (
    <Box
      height='100vh'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
    >
      <img src='logo192.png' alt='Logo' width='192' />
      <Container>
        <form onSubmit={handleSubmit}>
          <TextField
            margin='normal'
            required
            fullWidth
            label='Nome'
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            type='email'
            label='E-mail'
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Senha'
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Confirmar senha'
            type='password'
            value={confirmation}
            onChange={event => setConfirmation(event.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            className={classes.submit}
            color='primary'
          >
            Cadastrar
          </Button>
        </form>
      </Container>
    </Box>
  )
}

export default withSnackbar(Register)

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(4, 0, 2)
  }
}))
