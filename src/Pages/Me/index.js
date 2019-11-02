import React from 'react'
import { Box, AppBar, Toolbar, IconButton, Typography, Container, Grid, Avatar } from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'

export default function Me ({ history }) {
  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' color='inherit' onClick={() => history.push('/home')}>
            <ArrowBack />
          </IconButton>
          <Typography variant='h6'>
                      Minha Conta
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container justify='center' alignItems='center'>
          <Avatar alt='My name' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTK1J-i3ZrWnicHdauDJ1ZUN9laTSlb1xG0bhlf9a484BGIL2JL' style={{ width: '300px', height: '300px' }} />
        </Grid>
      </Container>
    </Box>
  )
}
