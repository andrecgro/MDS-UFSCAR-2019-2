import React, { useState } from 'react'
import { Button, TextField, Box, Container, Snackbar } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

export default function Register ({ history }) {
  const classes = useStyles()

  const [nome, setNome] = useState(null)
  const [email, setEmail] = useState(null)
  const [senha, setSenha] = useState(null)
  const [confirmacao, setConfirmacao] = useState(null)

  const [message, setMessage] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [okay, setOkay] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (senha !== confirmacao) {
      setMessage('As senhas não combinam, tente digitar novamente')
      setOpen(true)
      return
    }

    const user = { nome, email, senha }
    console.log(user)
    setOkay(true)
    setOpen(true)
    /* registerUser(user).then(response => {
      if (response.status === 201) {
        setMessage('Usuário criado!')
      }
    }) */
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
            onChange={event => setNome(event.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            type='email'
            label='E-mail'
            onChange={event => setEmail(event.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Senha'
            type='password'
            onChange={event => setSenha(event.target.value)}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            label='Confirmar senha'
            type='password'
            onChange={event => setConfirmacao(event.target.value)}
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
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        className={classes.snackbar}
        open={open}
        autoHideDuration={2000}
        onClose={() => {
          setOpen(false)
          if (okay) { history.push('/') }
        }}
        ContentProps={{ 'aria-describedby': { message } }}
        message={message}
      />
    </Box>
  )
}

const useStyles = makeStyles(theme => ({
  submit: {
    margin: theme.spacing(4, 0, 2)
  },
  snackbar: {
    bottom: theme.spacing(9)
  }
}))
